// from data.js
var tableData = data;

//Use D3 to select the table body
var tbody = d3.select("tbody");

// Using the forEach to iterate through my array of data
// At each iteration Im creating a tr, d is going to take the form of the objects
data.forEach(d=>{
    let row = tbody.append("tr")

    Object.values(d).forEach(w=>{
        row.append("td").text(w) 
    });

});

// Select the button and store its selection
let button = d3.select("#filter-btn");

// Add a listener
button.on("click",function(){
    // Remve existing table
    tbody.html("");

    //  Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);


    var filteredData = data.filter(m=> m.datetime === inputValue);

    console.log(filteredData);

    // Display filteres data
    filteredData.forEach((z) =>{
        var row = tbody.append("tr");

        Object.values(z).forEach(y=>{
            row.append("td").text(y)
    });
});

}); // ??