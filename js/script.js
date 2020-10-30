// IPO Input -> Process -> Output

// Constants and State Variables (Data)

// Constant Data
const BASE_URL = "https://thesimpsonsquoteapi.glitch.me/quotes?count=num"


// State Data
let quoteData;

// Cached Element References
const $collection = $("#collection");


// Attached Event Listeners
$collection.on("click", handleClick);

// Functions

// called immediately
init();

function init() {
    getData();
}


function getData(detailURL) {
    console.log("detailURL", detailURL)
    
    // declare a local variable to take whichever url we need
    let url;

    if(detailURL === undefined) {
        // we want all the pokemon
        url = BASE_URL;
    } else {
        // we want a single pokemon
        url = detailURL;
    }

    // fetch data using AJAX
    $.ajax(url).then(function(data) {
        // take the returned data and assign it to a global state variable
        // call render to visualize it to the DOM
        console.log(data)
        // we are getting all the pokemon
        if(detailURL === undefined) {
            quoteData = data;
            $(".quote h1").text(data[0].quote)
        } else {
            // we are getting a single pokemon object
            quoteDetail = data;
            // call render and tell the function that it needs to display a modal
            render(true);
        }

    }, function(error) {
        console.log("Error: ", error);
    });
    
}

function handleClick() {
    getData();
}