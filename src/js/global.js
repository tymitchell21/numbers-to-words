// arrays for ones, teens, and tens
const ones = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teens = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const place = ['','hundred','thousand','million','billion','trillion']

// function that displays 1 through 20
function oneToTwenty () {
    // clears ans div
    document.getElementById('ans').innerHTML = ''
    // adds values of ones array to ans div
    ones.forEach (x => {
        display(x);
    })
    //adds teens to page
    teens.forEach (x => {
        display(x);
    })
    // adds twenty at the end
    display(tens[1]);
}

function oneToHundred () {
    // calls oneToTwenty which displays one through twenty
    oneToTwenty();
    // removes twenty so that it does not duplicate
    document.getElementById('ans').removeChild(document.getElementById('ans').lastChild)
    // adds 21 through 1000
    tens.forEach ((x,d) => {
        ones.forEach ((i) => {
            if (d!=0) display(`${x} ${i}`);
        })
    })
    // adds one hundred
    display(ones[1] + ' ' + place[1]);
}

function oneToThousand () {
    // calls oneToTwenty which displays one through twenty
    oneToHundred();
    // removes twenty so that it does not duplicate
    document.getElementById('ans').removeChild(document.getElementById('ans').lastChild);
    // loops through ones array for each hundred
    ones.forEach ((x,d) => {
        // adds each hundred
        // display(`${x} hundred`);
        // ... hundred and one through ... hundred and 9
        if (d!=0) {
            ones.forEach ((y,z) => {
                if (z!=0) display(`${x} hundred and ${y}`);
            })
            // displays 11-19 for each hundred
            teens.forEach (y => {
                display(`${x} hundred and ${y}`);
            })
            // displays 21-99 for each hundred
            tens.forEach ((i,f) => {
                // This adds 1 through 9 for each tens.
                ones.forEach (p => {
                    if (f!=0) display(`${x} ${place[1]} and ${i} ${p}`);
                })
            })
        }
    })
    // adds 1000 at the end
    display(`${ones[1]} ${place[2]}`);
}
// displays a value to the page
function display (value) {
    // creates p element and adds x to it 
    var newElement = document.createElement("p");
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById("ans");
    destination.appendChild(newElement);
}

// adds click event listeners that calls each function to buttons
document.getElementById("twenty").addEventListener("click", oneToTwenty);
document.getElementById("hundred").addEventListener("click", oneToHundred);
document.getElementById("thousand").addEventListener("click", oneToThousand);