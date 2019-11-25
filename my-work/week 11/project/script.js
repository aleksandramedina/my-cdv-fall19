
let w = 1200;
let h = 700;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

function gotData(data){
    console.log(data);



//preliminary functions

function getRandomIntInclusive(min, max) {
  min = Math.ceil(200);
  max = Math.floor(650);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getIndex(d,i){
  return xScale(d.index);
}

function getColor(d,i){
  if (d.income == "Low income"){
    return ("#f2e4e0")
  }else if (d.income == "Upper middle income" || d.income == "Lower middle income"){
    return ("#f6b89e")
  }else if (d.income == "High income"){
    return ("#ff5f56")
  }
}


let year2009 = data.filter(function(d){
  if (d.year == 2009){
    return true;
  }else{
    return false;
  }
})

let year2010 = data.filter(function(d){
  if (d.year == 2010){
    return true;
  }else{
    return false;
  }
})


let year2011 = data.filter(function(d){
  if (d.year == 2011){
    return true;
  }else{
    return false;
  }
})


let year2012 = data.filter(function(d){
  if (d.year == 2012){
    return true;
  }else{
    return false;
  }
})


let year2013 = data.filter(function(d){
  if (d.year == 2013){
    return true;
  }else{
    return false;
  }
})


let year2014 = data.filter(function(d){
  if (d.year == 2014){
    return true;
  }else{
    return false;
  }
})


let year2015 = data.filter(function(d){
  if (d.year == 2015){
    return true;
  }else{
    return false;
  }
})



let year2016 = data.filter(function(d){
  if (d.year == 2016){
    return true;
  }else{
    return false;
  }
})


let year2017 = data.filter(function(d){
  if (d.year == 2017){
    return true;
  }else{
    return false;
  }
})

let year2018 = data.filter(function(d){
  if (d.year == 2018){
    return true;
  }else{
    return false;
  }
})

//x axis

        xPadding = 30;

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


//group to hold the graph
let graphGroup = viz.append("g").classed("graphGroup", true);

//the tricky part of dealing with the data
let theSituation = graphGroup.selectAll(".datapoint").data(year2009);
  console.log("the full situation: ", theSituation);

let enteringElements = theSituation.enter();
let exitingElements = theSituation.enter();

let dataGroups = enteringElements.append("g").classed("datapoint", true);

dataGroups.append("circle")
            .attr("r", 10)
            .attr("cx", getIndex)
            .attr("cy", getRandomIntInclusive)
            .attr("fill", getColor)
            .attr("stroke", "black")






function visualize2009 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2009);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}


function visualize2010 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2010);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}


function visualize2011 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2011);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2012 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2012);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2013 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2013);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2014 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2014);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2015 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2015);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2016 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2016);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2017 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2017);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}

function visualize2018 (data){

  theSituation = graphGroup.selectAll(".datapoint").data(year2018);
  console.log ("the NEW full situation: ", theSituation);

  enteringElements = theSituation.enter();
  exitingElements = theSituation.exit();

  theSituation.select("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)
      .attr("stroke", "black")


  let exitingDataGroups = exitingElements
      .append("g")
        .classed("datapoint", true)
    ;

exitingDataGroups = theSituation.exit();


}














document.getElementById('buttonA').addEventListener("click", visualize2009);
document.getElementById('buttonB').addEventListener("click", visualize2010);
document.getElementById('buttonC').addEventListener("click", visualize2011);
document.getElementById('buttonD').addEventListener("click", visualize2012);
document.getElementById('buttonE').addEventListener("click", visualize2013);
document.getElementById('buttonF').addEventListener("click", visualize2014);
document.getElementById('buttonG').addEventListener("click", visualize2015);
document.getElementById('buttonH').addEventListener("click", visualize2016);
document.getElementById('buttonI').addEventListener("click", visualize2017);
document.getElementById('buttonJ').addEventListener("click", visualize2018);
}
d3.json("data.json").then(gotData);
