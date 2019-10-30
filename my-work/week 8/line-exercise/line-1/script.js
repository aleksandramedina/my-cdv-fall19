// data we work with
let data = [
  {
    "laughs": 0,
    "mood": 0
  },
  {
    "laughs": 3,
    "mood": 6
  },
  {
    "laughs": 4,
    "mood": 3
  },
  {
    "laughs": 8,
    "mood": 9
  }
];

console.log(data);

//the very basics of the setup

let w = 900;
let h = 500;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;

function getX(d){
  console.log(d);
  return d.laughs * 100;
}

function getY(d){
  console.log(d);
  return d.mood * 50;
}

// let theSituation = viz.selectAll("circle").data(data);
// let entering = theSituation.enter();
//
// entering
//     .append("circle")
//     .attr("cx", getX)
//     .attr("cy", getY)
//     .attr("r", 10)



let lineMaker = d3.line()
                  .x(getX)
                  .y(getY)

    ;

let test = lineMaker(data);
console.log(test);

let theSituation = viz.datum(data)
theSituation.append("path")
            .attr("d", lineMaker)
            .attr("stroke", "gold")
            .attr("fill", "none")


// viz.append("path").attr("d", test).attr("fill", "none").attr("stroke", "gold");
