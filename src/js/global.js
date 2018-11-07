// arrays for ones, teens, and tens
const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

// function that displays 1 through 20
function oneToTwenty () {
    // clears ans div
    document.getElementById('ans').innerHTML = ''
    // adds values of ones array to ans div
    ones.forEach (x => {
       display(x)
    })
    // adds ten after the ones at the end
    display('ten')
    //adds teens to page
    teens.forEach (x => {
        display(x)
    })
    // adds twenty at the end
    display(tens[0])
}

function oneToHundred () {
    // calls oneToTwenty which displays one through twenty
    oneToTwenty()
    // removes twenty so that it does not duplicate
    document.getElementById('ans').removeChild(document.getElementById('ans').lastChild)
    // adds 21 through 1000
    tens.forEach (x => {
       // This simply adds the multiples of tens up to 90 
        display(x)
        // This adds 1 through 9 for each tens (21,22,23...31,32,etc).
        ones.forEach (i => {
            display(`${x}-${i}`) 
        })
    })
    // adds one hundred
    display(`one hundred`)
}

function oneToThousand () {
    // calls oneToTwenty which displays one through twenty
    oneToHundred()
    // removes twenty so that it does not duplicate
    document.getElementById('ans').removeChild(document.getElementById('ans').lastChild)
    // loops through ones array for each hundred
    ones.forEach (x => {
        // adds each hundred
        display(`${x} hundred`)
        // ... hundred and one through ... hundred and 9
        ones.forEach (y => {
            display(`${x} hundred and ${y}`) 
        })
        // adds ten after the ones at the end
        display(`${x} hundred and ten`)
        // displays 11-19 for each hundred
        teens.forEach (y => {
            display(`${x} hundred and ${y}`)
        })
        // displays 21-99 for each hundred
        tens.forEach (i => {
            // This simply adds the multiples of tens up to 90 
            display(`${x} hundred and ${i}`)
            // This adds 1 through 9 for each tens.
            ones.forEach (p => {
                display(`${x} hundred and ${i}-${p}`)
            })
        })
    })
    // adds 1000 at the end
    display(`one thousand`)
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