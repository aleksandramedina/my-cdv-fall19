d3.json("data.json").then(gotData);

let w = 1200;
let h = 700;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

function gotData(data){

let questionOne = data.e1
let questionTwo = data.e2

console.log ("Can a woman legally sign a contract in the same way as a man?");
console.log (questionOne);

console.log ("Can a woman legally register a business in the same way as a man?");
console.log(questionTwo);

console.log (data);


function filterYes(){
    return (data.e1 == "Yes")
}

function filterNo(){
    return (data.e1 == "No")
}
console.log (filterYes)
}
