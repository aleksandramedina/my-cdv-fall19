let w, h;
let heightRatio = 1;
let padding = 90;
let xPadding = 30;

let vizAssets = d3.select("#visualizationAssets")
    .append("svg")
    .style("background-color", "black")
;

adjustVizHeight();
// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
// (function definition at the bottom)


// your script starts here, e.g. load data here.

function gotData(data){
    console.log(data);
    data.forEach(d=>{
      d.wblindex = d.index;
    })

    // Bind data
    function keyFunction(d){
      return d.name;
    }

    //x axis

      let xScale = d3.scaleLinear().domain([0,100]).range([xPadding,w-xPadding]);

      let xAxis = d3.axisBottom(xScale);
      let xAxisGroup = vizAssets.append("g").attr("class", "xaxis");


      let xAxisYPos = h - 30;
      xAxisGroup.attr("transform", "translate(0, "+ xAxisYPos +")");
      xAxisGroup.call(xAxis);


    function getColor(d,i){
      if (d.income == "Low income"){
        return ("#f2e4e0")
      }else if (d.income == "Upper middle income" || d.income == "Lower middle income"){
        return ("#f6b89e")
      }else if (d.income == "High income"){
        return ("#ff5f56")
      }
    }
    // //preliminary functions

    function getAssets(d,i){
      return xScale(d.assets);
    }

    let year2010 = data.filter(function(d){return d.year==2010})

        year2010.forEach(d=>{
          d.x = xScale(d.assets); //initial x
          d.y = h/2; // initial y
          console.log("the initial d3 simulation is working");
        });
        d3.forceSimulation(year2010).force('collide', d3.forceCollide(10)); // simulation changes x and y

        // let simulation = d3.forceSimulation(year2010)
        //     .force("forceX", d3.forceX(function(d){
        //       console.log(d.assets);
        //       return xScale(d.assets)
        //     }))
        //     .force("forceY", d3.forceY(h/2))
        //     .force("collide", d3.forceCollide(3))
        // ;

        let graphGroup = vizAssets.append("g").classed("graphGroup", true);

                  function assets2010 (){

                    let theSituation = graphGroup.selectAll(".datapoint").data(year2010, keyFunction);
                    console.log("visualize 2010 is working");
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
                      ;

                    theSituation.transition()
                      .attr("transform", function(d){
                        return "translate("+d.x+", "+d.y+")"
                      })
                    ;

                    let infoText = vizAssets.append("text")
                    .attr("x", w/2)
                    .attr("y", 150)
                    .attr("text-anchor", "middle")
                    .attr("fill", "white")
                    ;

                    theSituation
                      .on("mouseover", function(d, i){
                        let element = d3.select(this);
                        element.select("circle").attr("stroke", "yellow");
                        infoText.text(d.name + ", " + d.assets);

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
                          infoText.text(d.name + ", " + d.assets);

                      })
                        .on("mouseout", function(){
                          let element = d3.select(this);
                          element.select("circle").attr("stroke", "none");
                          infoText.text("");

                        })


                    let exitingElements = theSituation.exit();
                    exitingElements.remove();
                  }

assets2010();
















  }
d3.json("data.json").then(gotData);

// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
function adjustVizHeight(){
  vizAssets.style("height", function(){
    w = parseInt(vizAssets.style("width"), 10);
    h = w*heightRatio;
    return h;
  })
}
function resized(){
  adjustVizHeight()
}
window.addEventListener("resize", resized);
