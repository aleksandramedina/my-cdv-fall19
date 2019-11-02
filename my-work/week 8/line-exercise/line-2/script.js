d3.json("births.json").then(gotData);


let w = 900;
let h = 500;
let xpadding = 100;
let ypadding = 50;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;


function gotData(incomingData){
  // the following function is defined below
  // it allows for us to NOT WORRY about parsing
  // time strings and creating JS date objects
  // in the following script
  incomingData = fixJSDateObjects(incomingData);
  console.log(incomingData);

  // initital data - USA or CHN
  let dataCHN = incomingData[0];
  let dataUSA = incomingData[1];

  // we can use a  time scale because our data expresses
  // years in the form of JS date objects
  let chnxDomain = d3.extent(dataCHN, function(d){ return d.year });
  let usaxDomain = d3.extent(dataUSA, function(d){return d.year});
  let chnxScale = d3.scaleTime().domain(chnxDomain).range([xpadding, w-xpadding]);
  let usaxScale = d3.scaleTime().domain(usaxDomain).range([xpadding, w-xpadding]);
  let xAxis = d3.axisBottom(chnxScale);
  let xAxisGroup = viz.append("g")
      .attr("class", "xaxisgroup")
      .attr("transform", "translate(0,"+(h-ypadding)+")")
  ;
  xAxisGroup.call(xAxis);

  let chnyMax = d3.max(dataCHN, function(d){
    return d.birthsPerThousand;
  })
  let usayMax = d3.max(dataUSA, function(d){
    return d.birthsPerThousand;
  })

  let chnyDomain = [0, chnyMax];
  let usayDomain = [0, usayMax];
  let chnyScale = d3.scaleLinear().domain(chnyDomain).range([h-ypadding, ypadding]);
  let usayScale = d3.scaleLinear().domain(usayDomain).range([h-ypadding, ypadding]);
  let yAxis = d3.axisLeft(chnyScale);
  let yAxisGroup = viz.append("g")
      .attr("class", "yaxisgroup")
      .attr("transform", "translate("+(xpadding/2)+",0)")
  ;
  yAxisGroup.call(yAxis);


function usagetX (d){
  return usaxScale(d.year);
}

function usagetY (d){
  return usayScale(d.birthsPerThousand);
}


function chngetX(d){
  return chnxScale(d.year);
}

function chngetY (d){
  return chnyScale(d.birthsPerThousand);
}


let lineMakerUSA = d3.line()
                  .x(usagetX)
                  .y(usagetY)
      ;

let lineMakerCHN = d3.line()
                  .x(chngetX)
                  .y(chngetY)
      ;

let theSituationUSA = viz.datum(dataUSA)
let theSituationCHN = viz.datum(dataCHN)

function usa(d) {
theSituationUSA.append("path")
            .attr("d", lineMakerUSA)
            .attr("fill", "none")
            .attr("stroke", "blue")
            ;

        console.log ("This is USA data");
          }

function chn(d){
theSituationCHN.append("path")
            .attr("d", lineMakerCHN)
            .attr("fill", "none")
            .attr("stroke", "gold")
            ;

        console.log ("This is China data")
          }

document.getElementById("buttonA").addEventListener("click", usa);
document.getElementById("buttonB").addEventListener("click", chn);
// function that turns all datapoints year values
// into JS date objects in the very beginning
// so that WE DON'T HAVE TO DEAL WITH IT LATER
function fixJSDateObjects(dataToFix){
  // timeParser
  let timeParse = d3.timeParse("%Y");
  return dataToFix.map(function(data){
    return data.map(function(d){
      return {
        "country": d.country,
        "year": timeParse(d.year),
        "birthsPerThousand": d.birthsPerThousand
      }
    })
  });
}
}
