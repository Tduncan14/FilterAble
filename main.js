

// get Input Element
let filterInputs = document.getElementById("filterInput");

// addEventlistener



filterInputs.addEventListener('keyup' , filterNames);

function filterNames(){
    // Get the value of the input

    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    console.log(filterValue);

    // Get names by ul

    let ul = document.getElementById('names');

    // get the items li

    let li = ul.querySelectorAll('li.collection-item');


    // Loops through the collection -item lis

    for(var i = 0 ; i < li.length; i++){

        let a = li[i].getElementsByTagName('a')[0];
        // If matches

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            
           li[i].style.display='';
        }
        

        else{
            li[i].style.display = 'none';
        }
    }
}

