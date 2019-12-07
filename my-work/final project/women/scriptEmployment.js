let w = 1200;
let h = 600;
let heightRatio = 1;
let padding = 90;
let xPadding = 200;
let currYear = 2009;

let vizEmployment = d3.select("#visualizationEmployment")
    .append("svg")
    .style("background-color", "black")
    .attr("width", 1200)
    .attr("height", 600)
;

// your script starts here, e.g. load data here.

function gotData(data){
    console.log(data);
    data.forEach(d=>{
      d.wblindex = d.index;
    })

// Bind data
function keyFunction(d){
    return d.name;
}

//creating the new array

let sortedByCountryRaw = d3.nest().key(d=>d.name).entries(data);
console.log(sortedByCountryRaw);
let sortedByCountry = sortedByCountryRaw.map(function(d){

  let records = d.values.reduce(function(acc, dd){
    acc[String(dd.year)] =
     {
      name: dd.name,
      wblindex: dd.wblindex,
      income: dd.income,
      year: dd.year,
      region: dd.region,
      assets: dd.assets,
      children: dd.children,
      entrepreneurship: dd.entrepreneurship,
      job: dd.job,
      marriage: dd.marriage,
      mobility: dd.mobility,
      pay: dd.pay,
      retirement: dd.retirement,
    }
    return acc
  }, {})

  return {
    name: d.key,
    records: records,
    x: w/2,
    y: h/2
  }

})
console.log(sortedByCountry);




    //x axis

      let xScale = d3.scaleLinear().domain([0,100]).range([xPadding,w-xPadding]);

      let xAxis = d3.axisBottom(xScale);
      let xAxisGroup = vizEmployment.append("g").attr("class", "xaxis");


      let xAxisYPos = h - 30;
      xAxisGroup.attr("transform", "translate(0, "+ xAxisYPos +")");
      xAxisGroup.call(xAxis);


      function getColor(d){

        if (d.records[2018].income == "Low income"){
          return ("#f2e4e0")
        }else if (d.records[2018].income == "Upper middle income" || d.records[2018].income == "Lower middle income"){
          return ("#f6b89e")
        }else if (d.records[2018].income == "High income"){
          return ("#ff5f56")
      }
      }
    // //preliminary functions

    let infoText = vizEmployment.append("text")
    .attr("x", w/2)
    .attr("y", 150)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    ;

let graphGroup = vizEmployment.append("g").classed("graphGroup", true);
let theSituation = graphGroup.selectAll(".datapoint").data(sortedByCountry, keyFunction);
let enteringElements = theSituation.enter();
let enteringGroups = enteringElements.append("g").classed("datapoint", true)
  .attr("transform", function(d){
    return "translate("+d.x+", "+d.y+")"
  })
  .on("mouseover", function(d, i){
    let element = d3.select(this);
    element.select("circle").attr("stroke", "yellow");
    infoText.text(d.name + ", " + d.records[currYear].job);
})
  .on("mouseout", function(){
    let element = d3.select(this);
    element.select("circle").attr("stroke", "none");
    infoText.text("");

})
;
//append a circle to new g
enteringGroups.append("circle")
    .attr("r", 5)
    .attr("fill", getColor)
  ;


function updatePositionsAndColor(){
  graphGroup.selectAll(".datapoint")
    .attr("transform", function(d){
      return "translate("+d.x+", "+d.y+")"
    })
    .attr("fill", getColor)
  ;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

function showjob(year){

  currYear = slider.value;
  output.innerHTML = slider.value;

console.log("this is output value" + output);

  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  console.log("the slider value is" + slider.value);


  d3.forceSimulation(sortedByCountry)
    .force('collide', d3.forceCollide(7))
    .force("forceX", d3.forceX(function(d){
      return xScale(d.records[currYear].job);
        console.log("the current year is" + currYear);
    }))
    .force("forceY", d3.forceY(h/2))
    .on("tick", updatePositionsAndColor)
  ;
}



showjob(2009);

document.getElementById("myRange").addEventListener("change", function(e){
  console.log(e.target.value);
  showjob(e.target.value);
});








  }
d3.json("data.json").then(gotData);
