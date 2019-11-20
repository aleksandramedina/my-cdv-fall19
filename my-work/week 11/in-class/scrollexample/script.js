import currentBox from "./leonScroller.js";
// imports just one function from a different file
// more info, import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// more info, export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

// we don't hardcode w and h this time
// but keep them responsive
// (see adjustVizHeight and resized function
// that are defined at the bottom)
let w, h;
let heightRatio = 1;
let padding = 90;
let xPadding = 30;

let viz = d3.select("#visualization")
    .append("svg")
  .style("background-color", "lavender")
;
// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
// (function definition at the bottom)



adjustVizHeight();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(200);
  max = Math.floor(650);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}



// your script starts here, e.g. load data here.

function gotData(incomingData){

  let xScale = d3.scaleLinear().domain([0,100]).range([xPadding,w-xPadding]);

  let xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g").attr("class", "xaxis");
    xAxisGroup.call(xAxis);

  let xAxisYPos = h - 30;
    xAxisGroup.attr("transform", "translate(0, "+ xAxisYPos +")");

  //y axis

  let yScale = d3.scaleLinear().domain([]).range([xPadding, h-xPadding]);

  let yAxis = d3.axisLeft(yScale);
  let yAxisGroup = viz.append("g").attr("class", "yaxis");
    yAxisGroup.call(yAxis);
    yAxisGroup.attr("transform", "translate(" + xPadding + ", 0)")


  let year2009 = incomingData.filter(function(d){
    if (d.year == 2009){
      return true;
    }else{
      return false;
    }
  })

  function getIndex(d,i){
    return xScale(d.index);
  }


function visualize2009 (){


    let datagroup2009 = viz.selectAll(".datagroup2009").data(year2009).enter()
    .append("g")
    .classed("datagroup2009", true)
    ;

    let indexes = datagroup2009.append("circle")
          .attr("r", 10)
          .attr("cx", getIndex)
          .attr("cy", getRandomIntInclusive)
          .attr("fill", "pink")

          ;
}






// scrolling event listener
// you might move this block into the part of your code
// in which your data is loaded/available
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  // the currentBox function is imported on the
  // very fist line of this script
  currentBox(function(box){
    console.log(box.id);

    if(box.id=="two" && box.id!=previousSection){
      console.log("changing viz");



    visualize2009 ();




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
