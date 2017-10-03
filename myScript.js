// This is my AJAX Practice ============

var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);

var myManufacturer = 
document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);

function loadMyData() {
    
    var ManufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    //console.log(ManufacturerStored);
    


var myRequest = new XMLHttpRequest();

myRequest.open("GET", 'https://raw.githubusercontent.com/msreeves/json/master/expensiveLuxuryCars.json', true);

myRequest.onload = function() {
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        
        var myData = JSON.parse(myRequest.responseText);
        
        document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[ManufacturerStored].video + '"frameborder="0" allowfullscreen></iframe>';
        
        document.getElementById("imgC").innerHTML = '<img src="' + myData.data[ManufacturerStored].img + '"width="auto" height="auto" alt="Car Image">';
        
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "theme2",//theme1
            backgroundColor: "transparent",
            title:{
                text: "Basic Column Chart - CanvasJS"
        },
        animationEnabled: false, //change to true
        data: [
        {
            //change type to "bar", "area", "spline", "pie", etc.
            type: "column",
            dataPoints: [
                { label: "Column1", y:90 },
                { label: "Column2", y:15 },
                { label: "Column3", y:25 },
                { label: "Column4", y:30 },
                { label: "Column5", y:28 },
            ]
        }
        ]
    });
    chart.render();
        
        console.log(myData);
    }
}

myRequest.send();

console.log(myRequest);


}

