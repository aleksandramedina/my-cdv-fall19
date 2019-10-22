let w = 1200;
let h = 800;

// for convenience
let datafile = "data.json";

// function to retrieve only the data points
// belonging to one step in time:
function getStep(data, step){
  return data.filter(function(datapoint){
    if(datapoint.step == step){
      return true;
    }else{
      return false;
    }
  });
}

// creating the svg that holds everything else
// we do this outside the gotData function to
// keeps things clean
let viz = d3.select("#container")
  .append('svg')
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "darkcyan")
;


function gotData(incomingData){
  // checking out our data
  console.log(incomingData);
  // testing the filter function defined above
  console.log(getStep(incomingData, 0));

  let xDomain = d3.extent(incomingData, function(datapoint){
    return datapoint.x;
  });
  console.log(xDomain);

  let yDomain = d3.extent(incomingData, function(datapoint){
    return datapoint.y;
  })
  console.log(yDomain);

  // general padding of our visualization
  let padding = 40;
  // scale to map from min and max of our x values to the
  // boundaries (minus padding) of our svg:
  let xScale = d3.scaleLinear().domain(xDomain).range([padding, w-padding]);

  // create axis for this scale
  let xAxis = d3.axisBottom(xScale);
  // create a groyp to gold the axis elements
  let xAxisGroup = viz.append("g").attr("class", "xaxis");
  // tell d3 to fill the group with the axis elements
  xAxisGroup.call(xAxis);
  // position the axis at the bottom of the svg
  xAxisGroup.attr("transform", "translate(0, "+ (h-padding) +")");

  // note how we flip the orientation (in the range) of our y scale
  // to make sure that low y values are at the bottom of the graph
  let yScale = d3.scaleLinear().domain(yDomain).range([h-padding, padding]);
  let yAxis = d3.axisLeft(yScale);
  let yAxisGroup = viz.append("g").attr("class", "yaxis");
  yAxisGroup.call(yAxis);
  yAxisGroup.attr("transform", "translate("+padding+",0)");


  // group that contains everything to do with our graph (aka the actual shapes)
  let vizgroup = viz.append("g").attr("class", "vizgroup");

  //data to visualize
  let step = 140;

  let data = getStep(incomingData, step);
  console.log("data", data);



  let selection = vizgroup.selectAll(".datagroup").data(data);
  let enteringElements = selection.enter();
  let exitingElements = selection.exit();

  console.log(enteringElements);
  let enteringDataGroups = enteringElements.append("g").attr("class","datagroup");
  enteringDataGroups.append("circle").attr("r", 5);

  enteringDataGroups.attr("transform", function(d, i){
    return "translate("+ xScale(d.x) +","+ yScale(d.y) +")"
  });


  setInterval(function(){

    step = step + 10;
    console.log("i am back, the data is still:", data);
    data = getStep(incomingData, step);

    drawViz();



  }, 2000);

  function drawViz(){
    selection = vizgroup.selectAll(".datagroup").data(data);
    enteringElements = selection.enter();
    exitingElements = selection.exit();

    xDomain = d3.extent(data, function(datapoint){
      return datapoint.x;
    });
    xScale.domain(xDomain);
    xAxis = d3.axisBottom(xScale);
    xAxisGroup.transition().call(xAxis);

    console.log("fullltable", selection);
    console.log("entering stuff", enteringElements);
    console.log("exiting stuff", exitingElements);

    selection.transition().duration(100).attr("transform", function(d, i){
      return "translate("+ xScale(d.x) +","+ yScale(d.y) +")"
    });

  }





}





d3.json(datafile).then(gotData);
