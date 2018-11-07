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
       // creates p element and adds x to it 
       var newElement = document.createElement("p");
       var newText = document.createTextNode(`${x}`);
       newElement.appendChild(newText);
       // adds p element to ans div
       var destination = document.getElementById("ans");
       destination.appendChild(newElement); 
    })
    // adds ten after the ones at the end
    var newElement = document.createElement("p");
    var newText = document.createTextNode(`ten`);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById("ans");
    destination.appendChild(newElement); 
    // adds values of teens array to ans div
    teens.forEach (x => {
        // creates p element and adds x to it 
        var newElement = document.createElement("p");
        var newText = document.createTextNode(`${x}`);
        newElement.appendChild(newText);
        // adds p element to ans div
        var destination = document.getElementById("ans");
        destination.appendChild(newElement); 
    })
    // adds twenty at the end
    var newElement = document.createElement("p");
    var newText = document.createTextNode(`${tens[0]}`);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById("ans");
    destination.appendChild(newElement); 
}

function oneToHundred () {
    // calls oneToTwenty which displays one through twenty
    oneToTwenty()
    // removes twenty so that it does not duplicate
    document.getElementById('ans').removeChild(document.getElementById('ans').lastChild)
    // adds 21 through 1000
    tens.forEach (x => {
       // This simply adds the multiples of tens up to 90 
        // creates p element and adds x to it 
        var newElement = document.createElement("p");
        var newText = document.createTextNode(`${x}`);
        newElement.appendChild(newText);
        // adds p element to ans div
        var destination = document.getElementById("ans");
        destination.appendChild(newElement);
       // This adds 1 through 9 for each tens.
        ones.forEach (i => {
            // creates p element and adds x to it 
            var newElement = document.createElement("p");
            var newText = document.createTextNode(`${x}-`);
            newElement.appendChild(newText);
            // adds p element to ans div
            var destination = document.getElementById("ans");
            destination.appendChild(newElement);
            // creates p element and adds x to it 
            var newText = document.createTextNode(`${i}`);
            newElement.appendChild(newText);
            // adds p element to ans div
            var destination = document.getElementById("ans");
            destination.appendChild(newElement); 
        })
    })
    // adds twenty at the end
    var newElement = document.createElement("p");
    var newText = document.createTextNode(`one hundred`);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById("ans");
    destination.appendChild(newElement); 
}

function oneToThousand () {
    // calls oneToTwenty which displays one through twenty
    oneToHundred()
    // removes twenty so that it does not duplicate
    document.getElementById('ans').removeChild(document.getElementById('ans').lastChild)
    // loops through ones array for each hundred
    ones.forEach (x => {
        // creates p element and adds x to it 
        var newElement = document.createElement("p");
        var newText = document.createTextNode(`${x} hundred`);
        newElement.appendChild(newText);
        // adds p element to ans div
        var destination = document.getElementById("ans");
        destination.appendChild(newElement);
        // adds values of ones array to ans div
        ones.forEach (y => {
            // creates p element and adds x to it 
            var newElement = document.createElement("p");
            var newText = document.createTextNode(`${x} hundred and ${y}`);
            newElement.appendChild(newText);
            // adds p element to ans div
            var destination = document.getElementById("ans");
            destination.appendChild(newElement); 
        })
        // adds ten after the ones at the end
        var newElement = document.createElement("p");
        var newText = document.createTextNode(`${x} hundred and ten`);
        newElement.appendChild(newText);
        // adds p element to ans div
        var destination = document.getElementById("ans");
        destination.appendChild(newElement); 
        // adds values of teens array to ans div
        teens.forEach (y => {
            // creates p element and adds x to it 
            var newElement = document.createElement("p");
            var newText = document.createTextNode(`${x} hundred and ${y}`);
            newElement.appendChild(newText);
            // adds p element to ans div
            var destination = document.getElementById("ans");
            destination.appendChild(newElement); 
        })
        // displays 21-99 for each hundred
        tens.forEach (i => {
            // This simply adds the multiples of tens up to 90 
            // creates p element and adds x to it 
            var newElement = document.createElement("p");
            var newText = document.createTextNode(`${x} hundred and ${i}`);
            newElement.appendChild(newText);
            // adds p element to ans div
            var destination = document.getElementById("ans");
            destination.appendChild(newElement);
            // This adds 1 through 9 for each tens.
            ones.forEach (p => {
                // creates p element and adds x to it 
                var newElement = document.createElement("p");
                var newText = document.createTextNode(`${x} hundred and ${i}-`);
                newElement.appendChild(newText);
                // adds p element to ans div
                var destination = document.getElementById("ans");
                destination.appendChild(newElement);
                // creates p element and adds x to it 
                var newText = document.createTextNode(`${p}`);
                newElement.appendChild(newText);
                // adds p element to ans div
                var destination = document.getElementById("ans");
                destination.appendChild(newElement); 
            })
        })
    })
    // creates p element and adds x to it 
    var newElement = document.createElement("p");
    var newText = document.createTextNode(`one thousand`);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById("ans");
    destination.appendChild(newElement);
}

// adds click event listeners that calls each function to buttons
document.getElementById("twenty").addEventListener("click", oneToTwenty);
document.getElementById("hundred").addEventListener("click", oneToHundred);
document.getElementById("thousand").addEventListener("click", oneToThousand);