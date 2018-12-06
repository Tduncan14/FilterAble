

// get Input Element
let filterInputs = document.getElementById("filterInput");

// addEventlistener



filterInputs.addEventListener('keyup' , filterNames);

function filterNames(){
    // Get the value of the input

    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    console.log(filterValue);
}

