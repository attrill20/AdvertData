// INSTRUCTIONS
// Run program with 'node solutionQ7.js' in the terminal
// Result will print to the terminal

// Parse the data.json file so it can be accessed here
const fs = require("fs");
const jsonData = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(jsonData);

// 7. Sum the lengthMM of every advert in metres?

function sumLengthAdverts() {
	// create counter for the variable sumLength
	let sumLength = 0;

	// loop through the data array
	for (const advert of data) {
		// create a new variable for the length of each vehicle
		const lengthMM = advert.data.vehicle.lengthMM;

		// add the length to the sumLength counter
		sumLength += lengthMM;
	}

	// Convert the sum to metres (divide by 1000) and limit to 2 decimal places (to represent the cm)
	const sumInMetres = (sumLength / 1000).toFixed(2);

	// Print the result to the console (adding m to show that it is in metres)
	console.log(`Sum of all vehicle lengths: ${sumInMetres}m`);
}

// Call the function to get the result
sumLengthAdverts();
