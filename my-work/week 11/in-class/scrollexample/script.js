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
  .style("background-color", "black")
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


//FILTER: REGION

let southAsia = year2018.filter(function(d){
  if (d.region == 'South Asia'){
    return true;
  }else{
    return false;
  }
})

let europe = year2018.filter(function(d){
  if (d.region == 'Europe & Central Asia'){
    return true;
  }else{
    return false;
  }
})

let mena = year2018.filter(function(d){
  if (d.region == 'Middle East & North Africa'){
    return true;
  }else{
    return false;
  }
})

let africa = year2018.filter(function(d){
  if (d.region == 'Sub-Saharan Africa'){
    return true;
  }else{
    return false;
  }
})

let caribbean = year2018.filter(function(d){
  if (d.region == 'Latin America & Caribbean'){
    return true;
  }else{
    return false;
  }
})

let oecd = year2018.filter(function(d){
  if (d.region == 'High income: OECD'){
    return true;
  }else{
    return false;
  }
})

let eastAsia = year2018.filter(function(d){
  if (d.region == 'East Asia & Pacific'){
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



//VISUALIZING THE  AVERAGE INDEX SCORES FOR EVERY COUNTRY BY YEAR


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

// VISUALIZE BY REGIONS

function visualizeSouthAsia (data){

  theSituation = graphGroup.selectAll(".datapoint").data(southAsia);
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

function visualizeEurope (data){

  theSituation = graphGroup.selectAll(".datapoint").data(europe);
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

function visualizeMiddleEastNorthAfrica (data){

  theSituation = graphGroup.selectAll(".datapoint").data(mena);
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



function visualizeAfrica (data){

  theSituation = graphGroup.selectAll(".datapoint").data(africa);
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

function visualizeCaribbean (data){

  theSituation = graphGroup.selectAll(".datapoint").data(caribbean);
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

function visualizeOECD (data){

  theSituation = graphGroup.selectAll(".datapoint").data(oecd);
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

function visualizeeastAsia (data){

  theSituation = graphGroup.selectAll(".datapoint").data(eastAsia);
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



document.getElementById('buttonK').addEventListener("click", visualizeSouthAsia);
document.getElementById('buttonL').addEventListener("click", visualizeEurope);
document.getElementById('buttonM').addEventListener("click", visualizeMiddleEastNorthAfrica);
document.getElementById('buttonN').addEventListener("click", visualizeAfrica);
document.getElementById('buttonO').addEventListener("click", visualizeCaribbean);
document.getElementById('buttonP').addEventListener("click", visualizeOECD);
document.getElementById('buttonQ').addEventListener("click", visualizeeastAsia);




// scrolling event listener
// you might move this block into the part of your code
// in which your data is loaded/available
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  // the currentBox function is imported on the
  // very fist line of this script
  currentBox(function(box){
    console.log(box.id);

    if(box.id=="six" && box.id!=previousSection){
      console.log("changing viz");

    visualize2009 ();


      previousSection = box.id;
    }else if (box.id=="seven" && box.id!=previousSection){
      console.log("changing viz");


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
