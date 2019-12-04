import currentBox from "./leonScroller.js";

let w, h;
let heightRatio = 1;
let padding = 90;
let xPadding = 30;
let currYear = 2009;
let currRegion= "East Asia";

let viz = d3.select("#visualization")
    .append("svg")
  .style("background-color", "black")
;


adjustVizHeight();

function gotData(data){
    console.log(data);
    data.forEach(d=>{
      d.wblindex = d.index;
    })

    let sortedByCountryRaw = d3.nest().key(d=>d.name).entries(data);
    console.log(sortedByCountryRaw);
    let sortedByCountry = sortedByCountryRaw.map(function(d){

      let records = d.values.reduce(function(acc, dd){
        // console.log(dd);
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
    // // data now has this form roughly
    // [
    //   {
    //     name: countryname,
    //     records: {
    //       2009:{
    //         ...
    //       },
    //       2010:{
    //         ...
    //       }
    //     }
    //   }
    // ]



    //x axis

    let xScale = d3.scaleLinear().domain([0,100]).range([xPadding,w-xPadding]);

    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = viz.append("g").attr("class", "xaxis");

    let xAxisYPos = h - 30;
    xAxisGroup.attr("transform", "translate(0, "+ xAxisYPos +")");

// call the axis

function axis (){

  xAxisGroup.call(xAxis);

}

//preliminary functions

function getIndex(d,i){
  return xScale(d.wblindex);
}


function getColor(d){

  if (d.records[2018].income == "Low income"){
    return ("#f2e4e0")
  }else if (d.records[2018].income == "Upper middle income" || d.records[2018].income == "Lower middle income"){
    return ("#f6b89e")
  }else if (d.records[2018].income == "High income"){
    return ("#ff5f56")
}
}

// Bind data
function keyFunction(d){
  return d.name;
}

let graphGroup = viz.append("g").classed("graphGroup", true);

let theSituation = graphGroup.selectAll(".datapoint").data(sortedByCountry, keyFunction);

// theSituation.transition()
//   .attr("transform", function(d){
//     return "translate("+d.x+", "+d.y+")"
//   })
// ;
let infoText = viz.append("text")
.attr("x", w/2)
.attr("y", 150)
.attr("text-anchor", "middle")
.attr("fill", "white")
;

let enteringElements = theSituation.enter();
let enteringGroups = enteringElements.append("g").classed("datapoint", true)
  .attr("transform", function(d){
    return "translate("+d.x+", "+d.y+")"
  })
  .on("mouseover", function(d, i){
    let element = d3.select(this);
    element.select("circle").attr("stroke", "yellow");
    infoText.text(d.name + ", " + d.records[currYear].wblindex);
    //infoText.text(d.name + ", " + d.wblindex);
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

function showyear(year){

  currYear = year;

  d3.forceSimulation(sortedByCountry)
    .force('collide', d3.forceCollide(7))
    .force("forceX", d3.forceX(function(d){
      return xScale(d.records[year].wblindex);
    }))
    .force("forceY", d3.forceY(h/2))
    .on("tick", updatePositionsAndColor)
  ;
  console.log(year + "the button for year has been clicked");
}

function showregion(region){
let currRegion = region;

  d3.forceSimulation(sortedByCountry)
    .force('collide', d3.forceCollide(7))
    .force("forceX", d3.forceX(function(d){
        if (d.records[2018].region == currRegion){return xScale(d.records[2018].wblindex);
        }else {return -300};}
    ))
    .force("forceY", d3.forceY(h/2))
    .on("tick", updatePositionsAndColor)
}


// showyear(2009);
// setTimeout(function(){
//   showyear(2010);
//   setTimeout(function(){
//     showyear(2011);
//     setTimeout(function(){
//       showyear(2012);
//       setTimeout(function(){
//         showyear(2013);
//         setTimeout(function(){
//           showyear(2014);
//           setTimeout(function(){
//             showyear(2015);
//             setTimeout(function(){
//               showyear(2016);
//               setTimeout(function(){
//                 showyear(2017);
//                 setTimeout(function(){
//                   showyear(2018);
//                 }, 1000)
//               }, 1000)
//             }, 1000)
//           }, 1000)
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 10000)


document.getElementById('buttonA').addEventListener("click", function() {showyear(2009)});
document.getElementById('buttonB').addEventListener("click", function() {showyear(2010)});
document.getElementById('buttonC').addEventListener("click", function() {showyear(2011)});
document.getElementById('buttonD').addEventListener("click", function() {showyear(2012)});
document.getElementById('buttonE').addEventListener("click", function() {showyear(2013)});
document.getElementById('buttonF').addEventListener("click", function() {showyear(2014)});
document.getElementById('buttonG').addEventListener("click", function() {showyear(2015)});
document.getElementById('buttonH').addEventListener("click", function() {showyear(2016)});
document.getElementById('buttonI').addEventListener("click", function() {showyear(2017)});
document.getElementById('buttonJ').addEventListener("click", function() {showyear(2018)});



document.getElementById('buttonK').addEventListener("click", function() {showregion("South Asia")});
document.getElementById('buttonL').addEventListener("click", function() {showregion("Europe & Central Asia")});
document.getElementById('buttonM').addEventListener("click", function() {showregion("Middle East & North Africa")});
document.getElementById('buttonN').addEventListener("click", function() {showregion("Sub-Saharan Africa")});
document.getElementById('buttonO').addEventListener("click", function() {showregion("Latin America & Caribbean")});
document.getElementById('buttonP').addEventListener("click", function() {showregion("High income: OECD")});
document.getElementById('buttonQ').addEventListener("click", function() {showregion("East Asia & Pacific")});



// scrolling event listener
// you might move this block into the part of your code
// in which your data is loaded/available
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  // the currentBox function is imported on the
  // very fist line of this script

  currentBox(function(box){
    console.log(box.id);
if (box.id=="zero" && box.id!=previousSection){
  previousSection = box.id;

  }else if (box.id=="two" && box.id!=previousSection){
      previousSection = box.id;


    }else if (box.id=="three" && box.id!=previousSection){
      previousSection = box.id;


          }else if (box.id=="four" && box.id!=previousSection){
              console.log("the 100 countries");
              previousSection = box.id;


                  }else if (box.id=="five" && box.id!=previousSection){
                      previousSection = box.id;


                          }else if(box.id=="six" && box.id!=previousSection){
                              console.log("changing viz");
                              axis();
                              showyear(2009);
                              previousSection = box.id;


                                    }else if (box.id=="seven" && box.id!=previousSection){
                                        console.log("changing viz");
                                        showregion("South Asia");
                                        previousSection = box.id;
                                            }

  })
})













}
d3.json("data.json").then(gotData);

// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
function adjustVizHeight(){
  viz.style("height", function(){
    w = parseInt(viz.style("width"), 10);
    h = w*heightRatio;
    return h;
  })
}
function resized(){
  adjustVizHeight()
}
window.addEventListener("resize", resized);
