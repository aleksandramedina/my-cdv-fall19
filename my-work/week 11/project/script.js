
let w = 1200;
let h = 700;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

function gotData(data){
  console.log(data);

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
let theSituation = graphGroup.selectAll(".datapoint").data(data);
  console.log("the full situation: ", theSituation);


















}
d3.json("data.json").then(gotData);
