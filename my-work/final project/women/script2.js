let w, h;
let heightRatio = 1;
let padding = 90;
let xPadding = 30;

let viz = d3.select("#visualization")
    .append("svg")
;
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

    // //preliminary functions

    function getIndex(d,i){
      return xScale(d.wblindex);
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

    function filterAssets(data){
        return (data.d)
    }


    let tuesdayArray = data.filter(filterAssets)
    console.log(tuesdayArray);



















  }
d3.json("data.json").then(gotData);
