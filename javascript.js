console.log("Hello world")

document.getElementById("alertme").onclick = function() {
	alert("Spoil your pets!")
}

const link = document.getElementById("hover");

	link.onmouseover = function() {
		link.style.background = 'lightblue'
}

	link.onmouseleave = function() {
		link.style.background = 'transparent'
}

let count = 0;

document.getElementById("counter").onclick = function() {
	count += 1;
  
  const display = document.getElementById("message")
  
  	display.innerHTML = `Clicked: ${count} times!`;
  
		if (count % 2 === 0) {
  		display.style.color = "blue"; //even number
  }
  	else {
    	display.style.color = "red"; //odd number
  }
}

document.getElementById("show").onclick = function () {

const loopDiv = document.getElementById("loop")

let stopValue = 1;

for (let i = 0; i < stopValue; i = i + 1) {
	loopDiv.append("You have joined the people that have already registered and clicked this button!")
  loopDiv.append(document.createElement("br"))
  }
}