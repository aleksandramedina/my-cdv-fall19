d3.json("data.json").then(gotData);

let w = 1200;
let h = 700;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

function gotData(incomingData){

  let yeses2009 = [];
  let noes2009 = [];

  let yeses2018 = [];
  let noes2018 = [];

  let year2009 = [];
  let year2018 = [];

  console.log(incomingData);

  incomingData.forEach((country) => {
    let year = country.year
    let questionOne = country.e1
    let questionTwo = country.e2

    if (year == '2009'){
      year2009.push(year);
      if (questionOne == 'Yes') {
        yeses2009.push(questionOne);
      } else if (questionOne == 'No') {
        noes2009.push(questionOne);
      }
    } else if (year == '2018'){
      year2018.push(year);
      if (questionOne == 'Yes') {
        yeses2018.push(questionOne);
      } else if (questionOne == 'No') {
        noes2018.push(questionOne);
      }
    }
  })


console.log ('in 2009 countries that scored YES on Q1:')
console.log (yeses2009.length);
console.log ('in 2009 countries that scored NO on Q1:')
console.log (noes2009.length);
console.log ('in 2018 countries that scored YES on Q1:')
console.log (yeses2018.length);
console.log ('in 2018 countries that scored NO on Q1:')
console.log (noes2018.length);


console.log(year2009.length);
console.log(year2018.length);



function visualizeyear2009(){

let datagroups1 = viz.selectAll(".datagroup1").data(yeses2009).enter()
  .append("g")
    .classed("datagroup1", true)

let datagroups2 = viz.selectAll(".datagroup2").data(noes2009).enter()
  .append("g")
    .classed("datagroup2", true)


let scoresYes2009 = datagroups1.append("rect")
    .transition()
    .duration(500)
    .attr("x", 30)
    .attr("y", 200)
    .attr("width", 50)
    .attr("height", yeses2009.length*10)
    .attr("fill", 'green')

let scoresNo2009 = datagroups2.append("rect")
.transition()
.duration(500)
    .attr("x", 100)
    .attr("y", 200)
    .attr("width", 50)
    .attr("height", noes2009.length*10)
    .attr("fill", 'red')

}
document.getElementById("buttonA").addEventListener("click", visualizeyear2009);



function visualizeyear2018(){

let datagroups3 = viz.selectAll(".datagroup3").data(yeses2018).enter()
  .append("g")
    .classed("datagroup3", true)

let datagroups4 = viz.selectAll(".datagroup4").data(noes2018).enter()
  .append("g")
    .classed("datagroup4", true)

let scoresYes2018 = datagroups3.append("rect")
    .transition()
    .duration(500)
    .attr("x", 170)
    .attr("y", 200)
    .attr("width", 50)
    .attr("height", yeses2018.length*10)
    .attr("fill", 'green')


let scoresNo2018 = datagroups4.append("rect")
    .transition()
    .duration(500)
    .attr("x", 240)
    .attr("y", 200)
    .attr("width", 50)
    .attr("height", noes2018.length*10)
    .attr("fill", 'red')

}
document.getElementById("buttonB").addEventListener("click", visualizeyear2018);
}


d3.json("data.json").then(gotData);
