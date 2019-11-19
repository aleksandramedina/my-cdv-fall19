d3.json("data.json").then(gotData);

let w = 1200;
let h = 700;

let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

function gotData(incomingData){
console.log(incomingData);

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




// // turn yes to true and no to false
// incomingData = incomingData.map(function(d, i){
//   let keys = Object.keys(d);
//   // console.log(keys);
//   keys.forEach(function(key){
//     if(d[key] == "Yes"){
//       d[key] = true;
//     }else if(d[key] == "No"){
//       d[key] = false;
//     }
//   })
//   return d;
// })


/////////////////////////////////////////////////////////
//filtering out separate years
/////////////////////////////////////////////////////////

let year2009 = incomingData.filter(function(d){
  if (d.year == 2009){
    return true;
  }else{
    return false;
  }
})


let year2010 = incomingData.filter(function(d){
  if (d.year == 2010){
    return true;
  }else{
    return false;
  }
})


let year2011 = incomingData.filter(function(d){
  if (d.year == 2011){
    return true;
  }else{
    return false;
  }
})


let year2012 = incomingData.filter(function(d){
  if (d.year == 2012){
    return true;
  }else{
    return false;
  }
})


let year2013 = incomingData.filter(function(d){
  if (d.year == 2013){
    return true;
  }else{
    return false;
  }
})


let year2014 = incomingData.filter(function(d){
  if (d.year == 2014){
    return true;
  }else{
    return false;
  }
})


let year2015 = incomingData.filter(function(d){
  if (d.year == 2015){
    return true;
  }else{
    return false;
  }
})



let year2016 = incomingData.filter(function(d){
  if (d.year == 2016){
    return true;
  }else{
    return false;
  }
})


let year2017 = incomingData.filter(function(d){
  if (d.year == 2017){
    return true;
  }else{
    return false;
  }
})



let year2018 = incomingData.filter(function(d){
  if (d.year == 2018){
    return true;
  }else{
    return false;
  }
})



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



function getRandomIntInclusive(min, max) {
  min = Math.ceil(200);
  max = Math.floor(650);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}



let datagroup2009 = viz.selectAll(".datagroup2009").data(year2009).enter()
.append("g")
.classed("datagroup2009", true)
;

let datagroup2010 = viz.selectAll(".datagroup2010").data(year2010).enter()
.append("g")
.classed("datagroup2010", true)
;

let datagroup2011 = viz.selectAll(".datagroup2011").data(year2011).enter()
.append("g")
.classed("datagroup2011", true)
;

let datagroup2012 = viz.selectAll(".datagroup2012").data(year2012).enter()
.append("g")
.classed("datagroup2012", true)
;

let datagroup2013 = viz.selectAll(".datagroup2013").data(year2013).enter()
.append("g")
.classed("datagroup2013", true)
;

let datagroup2014 = viz.selectAll(".datagroup2014").data(year2014).enter()
.append("g")
.classed("datagroup2014", true)
;

let datagroup2015 = viz.selectAll(".datagroup2015").data(year2015).enter()
.append("g")
.classed("datagroup2015", true)
;

let datagroup2016 = viz.selectAll(".datagroup2016").data(year2016).enter()
.append("g")
.classed("datagroup2016", true)
;

let datagroup2017 = viz.selectAll(".datagroup2017").data(year2017).enter()
.append("g")
.classed("datagroup2017", true)
;

let datagroup2018 = viz.selectAll(".datagroup2018").data(year2018).enter()
.append("g")
.classed("datagroup2018", true)
;




function visualize2009(){
let indexes = datagroup2009.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

let descriptionCountry = datagroup2009.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2009.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

      datagroup2009.on("mouseover", function(d, i){
        let element = d3.select(this);
        element.select("circle").transition().attr("r", 30);
        descriptionCountry.text(d.name);
        descriptionIndex.text(d.index);



    })
      datagroup2009.on("mouseout", function(d,i){
        let element = d3.select(this);
        element.select("circle").transition().attr("r", 10);
        descriptionCountry.text("");
        descriptionIndex.text("");

    })

}

function visualize2010(){
let indexes = datagroup2010.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;


let descriptionCountry = datagroup2010.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2010.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2010.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2010.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}

function visualize2011(){
let indexes = datagroup2011.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;

let descriptionCountry = datagroup2011.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2011.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2011.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2011.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2012(){
let indexes = datagroup2012.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;

let descriptionCountry = datagroup2012.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2012.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2012.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2012.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2013(){
let indexes = datagroup2013.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;


let descriptionCountry = datagroup2013.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2013.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2013.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2013.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2014(){
let indexes = datagroup2014.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;


let descriptionCountry = datagroup2014.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2014.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2014.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2014.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2015(){
let indexes = datagroup2015.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;

let descriptionCountry = datagroup2015.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2015.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2015.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2015.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2016(){
let indexes = datagroup2016.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;

let descriptionCountry = datagroup2016.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2016.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2016.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2016.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2017(){
let indexes = datagroup2017.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;

let descriptionCountry = datagroup2017.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2017.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2017.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2017.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


function visualize2018(){
let indexes = datagroup2018.append("circle")
      .attr("r", 10)
      .attr("cx", getIndex)
      .attr("cy", getRandomIntInclusive)
      .attr("fill", getColor)

      ;

let descriptionCountry = datagroup2018.append("text")
      .attr("x", w/2)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "30px")
      ;

let descriptionIndex = datagroup2018.append("text")
      .attr("x", w/2)
      .attr("y", 75)
      .attr("text-anchor", "middle")
      .attr("font-family", "helvetica")
      .attr("fill", "black")
      .attr("font-size", "20px")
      ;

datagroup2018.on("mouseover", function(d, i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 30);
  descriptionCountry.text(d.name);
  descriptionIndex.text(d.index);



})
datagroup2018.on("mouseout", function(d,i){
  let element = d3.select(this);
  element.select("circle").transition().attr("r", 10);
  descriptionCountry.text("");
  descriptionIndex.text("");

})
}


document.getElementById('buttonA').addEventListener("click", visualize2009)
document.getElementById('buttonB').addEventListener("click", visualize2010)
document.getElementById('buttonC').addEventListener("click", visualize2011)
document.getElementById('buttonD').addEventListener("click", visualize2012)
document.getElementById('buttonE').addEventListener("click", visualize2013)
document.getElementById('buttonF').addEventListener("click", visualize2014)
document.getElementById('buttonG').addEventListener("click", visualize2015)
document.getElementById('buttonH').addEventListener("click", visualize2016)
document.getElementById('buttonI').addEventListener("click", visualize2017)
document.getElementById('buttonJ').addEventListener("click", visualize2018)

}

d3.json("data.json").then(gotData);
