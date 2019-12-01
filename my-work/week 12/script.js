let w = 1400;
let h = 500;
let padding = 25;

let viz = d3.select("#visualization")
  .append("svg")
  .style("background-color", "lavender")
  .attr("width", w)
  .attr("height", h)
;

let xScale = d3.scaleLinear().range([padding, w-padding]);

d3.json("data.json").then(function(incomingData){
  console.log(incomingData);

  // because the force overries index
  incomingData.forEach(d=>{
    d.wblindex = d.index;
  })

  let extent = d3.extent(incomingData, function(d){
    return d.wblindex
  })
  console.log(extent);
  let domain = [0, 100];
  // console.log(domain);
  xScale.domain(domain);

  let xAxisGroup = viz.append("g").attr("class", "xaxisgroup");
  let xAxis = d3.axisBottom(xScale);
  xAxisGroup.call(xAxis);

// initial location

  incomingData.forEach(d=>{
    d.x = xScale(d.wblindex);
    d.y = h/2
  })

  viz.selectAll(".datapoint").data(incomingData).enter()
      .append("circle")
      .attr("class", "datapoint")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 2)
  ;

// goal location for the circles to move to

  let simulation = d3.forceSimulation(incomingData)
      .force("forceX", d3.forceX(function(d){
        console.log(d.wblindex);
        return xScale(d.wblindex)
      }))
      .force("forceY", d3.forceY(h/2))
      .force("collide", d3.forceCollide(3))
      .on("tick", simulationRan)
  ;



//the function that actually moves the data points
  // console.log(incomingData);
  function simulationRan(){
    // console.log("just ran simulation");
    // console.log("position is:" + incomingData[0].x + " ," + incomingData[0].y);
    viz.selectAll(".datapoint").transition()
        .attr("cx", function(d){
          return d.x;
        })
        .attr("cy", function(d){
          return d.y;
        })
        ;
  }







})
