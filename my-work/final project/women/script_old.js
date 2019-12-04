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

// your script starts here, e.g. load data here.

function gotData(data){
    console.log(data);
    let sortedByYear = d3.nest().key(d=>d.year).entries(data);
    console.log(sortedByYear);




// //preliminary functions

function getIndex(d,i){
  return xScale(d.wblindex);
}

data.forEach(d=>{
  d.wblindex = d.index;
})

function getColor(d,i){
  if(d.name == "China"){
    return "blue"
  }else{
    return "darkgrey";
  }
  // if (d.income == "Low income"){
  //   return ("#f2e4e0")
  // }else if (d.income == "Upper middle income" || d.income == "Lower middle income"){
  //   return ("#f6b89e")
  // }else if (d.income == "High income"){
  //   return ("#ff5f56")
  // }
}

function axis (){

  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);

}

// Bind data
function keyFunction(d){
  // return a feature of the datapoints that makes them
  // uniquely identifiable
  return d.name;
}

//x axis

  xPadding = 30;

  let xScale = d3.scaleLinear().domain([0,100]).range([xPadding,w-xPadding]);

  let xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g").attr("class", "xaxis");


  let xAxisYPos = h - 30;
  xAxisGroup.attr("transform", "translate(0, "+ xAxisYPos +")");

//y axis

  let yScale = d3.scaleLinear().domain([]).range([xPadding, h-xPadding]);

  let yAxis = d3.axisLeft(yScale);
  let yAxisGroup = viz.append("g").attr("class", "yaxis");
  yAxisGroup.attr("transform", "translate(" + xPadding + ", 0)")


  // console.log("year2009", year2009);
  // // let test = sortedByYear[0]
  // let year2009 = sortedByYear[ sortedByYear.findIndex(d=>d.key == "2009") ].values;
  // console.log("2009?", test);


let year2009 = data.filter(function(d){return d.year == 2009})

    year2009.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2009).force('collide', d3.forceCollide(10)); // simulation changes x and y


let year2010 = data.filter(function(d){return d.year==2010})

    year2010.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2010).force('collide', d3.forceCollide(10)); // simulation changes x and y


let year2011 = data.filter(function(d){return d.year==2011})

    year2011.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2011).force('collide', d3.forceCollide(10)); // simulation changes x and y

let year2012 = data.filter(function(d){return d.year==2012})

    year2012.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2012).force('collide', d3.forceCollide(10)); // simulation changes x and y


let year2013 = data.filter(function(d){return d.year==2013})

    year2013.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2013).force('collide', d3.forceCollide(10)); // simulation changes x and y


let year2014 = data.filter(function(d){return d.year==2014})

    year2014.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2014).force('collide', d3.forceCollide(10)); // simulation changes x and y


let year2015 = data.filter(function(d){return d.year==2015})

    year2015.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2015).force('collide', d3.forceCollide(10)); // simulation changes x and y



let year2016 = data.filter(function(d){return d.year==2016})

    year2016.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2016).force('collide', d3.forceCollide(10)); // simulation changes x and y



let year2017 = data.filter(function(d){return d.year==2017})

    year2017.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2017).force('collide', d3.forceCollide(10)); // simulation changes x and y


let year2018 = data.filter(function(d){return d.year==2018})

    year2018.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(year2018).force('collide', d3.forceCollide(10)); // simulation changes x and y


//FILTER: REGION

let southAsia = year2018.filter(function(d){return d.region == 'South Asia'})
    southAsia.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(southAsia).force('collide', d3.forceCollide(10)); // simulation changes x and y

let europe = year2018.filter(function(d){return d.region == 'Europe & Central Asia'})
    europe.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(europe).force('collide', d3.forceCollide(10)); // simulation changes x and y

let mena = year2018.filter(function(d){return d.region == 'Middle East & North Africa'})
    mena.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(mena).force('collide', d3.forceCollide(10)); // simulation changes x and y

let africa = year2018.filter(function(d){return d.region == 'Sub-Saharan Africa'})
    africa.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(africa).force('collide', d3.forceCollide(10)); // simulation changes x and y
    console.log(africa);

let caribbean = year2018.filter(function(d){return d.region == 'Latin America & Caribbean'})
    caribbean.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(caribbean).force('collide', d3.forceCollide(10)); // simulation changes x and y

let oecd = year2018.filter(function(d){return d.region == 'High income: OECD'})
    oecd.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(oecd).force('collide', d3.forceCollide(10)); // simulation changes x and y

let eastAsia = year2018.filter(function(d){return d.region == 'East Asia & Pacific'})
    eastAsia.forEach(d=>{
      d.x = xScale(d.wblindex); //initial x
      d.y = h/2 // initial y
    });
    d3.forceSimulation(eastAsia).force('collide', d3.forceCollide(10)); // simulation changes x and y


//group to hold the graph
let graphGroup = viz.append("g").classed("graphGroup", true);


                                function visualize2009 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2009, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;


                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let infoText = viz.append("text")
                                  .attr("x", w/2)
                                  .attr("y", 150)
                                  .attr("text-anchor", "middle")
                                  .attr("fill", "white")
                                  ;

                                  theSituation
                                    .on("mouseover", function(d, i){
                                      let element = d3.select(this);
                                      element.select("circle").attr("stroke", "yellow");
                                      infoText.text(d.name + ", " + d.wblindex);

                                  })
                                    .on("mouseout", function(){
                                      let element = d3.select(this);
                                      element.select("circle").attr("stroke", "none");
                                      infoText.text("");

                                    })


                                    enteringGroups
                                      .on("mouseover", function(d, i){
                                        let element = d3.select(this);
                                        element.select("circle").attr("stroke", "yellow");
                                        infoText.text(d.name + ", " + d.wblindex);

                                    })
                                      .on("mouseout", function(){
                                        let element = d3.select(this);
                                        element.select("circle").attr("stroke", "none");
                                        infoText.text("");

                                      })

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2010 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2010, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;



                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2011 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2011, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2012 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2012, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2013 (){
                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2013, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2014 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2014, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2015 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2015, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


                                function visualize2016 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2016, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;

                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }

                                function visualize2017 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2017, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;


                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }

                                function visualize2018 (){

                                  let theSituation = graphGroup.selectAll(".datapoint").data(year2018, keyFunction);

                                  console.log ("the NEW full situation: ", theSituation);

                                  let enteringElements = theSituation.enter();
                                  let enteringGroups = enteringElements.append("g").classed("datapoint", true)
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;
                                  //append a circle to new g
                                  enteringGroups.append("circle")
                                      .attr("r", 5)
                                      .attr("fill", getColor)
                                      .attr("stroke", "whtite")
                                    ;

                                  theSituation.transition()
                                    .attr("transform", function(d){
                                      return "translate("+d.x+", "+d.y+")"
                                    })
                                  ;


                                  let exitingElements = theSituation.exit();
                                  exitingElements.remove();
                                }


// VISUALIZE BY REGIONS

function visualizeSouthAsia (){

        let theSituation = graphGroup.selectAll(".datapoint").data(southAsia, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;

        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        theSituation
          .on("mouseover", function(d, i){
            let element = d3.select(this);
            element.select("circle").attr("stroke", "yellow");
            infoText.text(d.name + ", " + d.wblindex);

        })
          .on("mouseout", function(){
            let element = d3.select(this);
            element.select("circle").attr("stroke", "none");
            infoText.text("");

          })


          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })

        let exitingElements = theSituation.exit();
        exitingElements.remove();

}


function visualizeEurope (){

        let theSituation = graphGroup.selectAll(".datapoint").data(europe, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;

        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;


        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })
        let exitingElements = theSituation.exit();
        exitingElements.remove();

}


function visualizeMiddleEastNorthAfrica (){

        let theSituation = graphGroup.selectAll(".datapoint").data(mena, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;


        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;

        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })

        let exitingElements = theSituation.exit();
        exitingElements.remove();

}



function visualizeAfrica (){

        let theSituation = graphGroup.selectAll(".datapoint").data(africa, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;

        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;


        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })

        let exitingElements = theSituation.exit();
        exitingElements.remove();
}

function visualizeCaribbean (){


        let theSituation = graphGroup.selectAll(".datapoint").data(caribbean, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;

        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;

        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })

        let exitingElements = theSituation.exit();
        exitingElements.remove();

}

function visualizeOECD (){

        let theSituation = graphGroup.selectAll(".datapoint").data(oecd, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;

        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;


        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })

        let exitingElements = theSituation.exit();
        exitingElements.remove();

}

function visualizeeastAsia (){

        let theSituation = graphGroup.selectAll(".datapoint").data(eastAsia, keyFunction);

        console.log ("the NEW full situation: ", theSituation);

        let enteringElements = theSituation.enter();
        let enteringGroups = enteringElements.append("g").classed("datapoint", true)
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;
        //append a circle to new g
        enteringGroups.append("circle")
            .attr("r", 5)
            .attr("fill", getColor)
            .attr("stroke", "whtite")
          ;

        let infoText = viz.append("text")
        .attr("x", w/2)
        .attr("y", 150)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        ;

        theSituation.transition()
          .attr("transform", function(d){
            return "translate("+d.x+", "+d.y+")"
          })
        ;



          enteringGroups
            .on("mouseover", function(d, i){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "yellow");
              infoText.text(d.name + ", " + d.wblindex);

          })
            .on("mouseout", function(){
              let element = d3.select(this);
              element.select("circle").attr("stroke", "none");
              infoText.text("");

            })

        let exitingElements = theSituation.exit();
        exitingElements.remove();

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

    axis();
    visualize2009();


      previousSection = box.id;
    }else if (box.id=="seven" && box.id!=previousSection){
      console.log("changing viz");

    visualizeSouthAsia ();

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
