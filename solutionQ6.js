// INSTRUCTIONS
// Run program with 'node solutionQ6.js' in the terminal

// Parse the data.json file so it can be accessed here
const fs = require("fs");
const jsonData = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(jsonData);

// 6. Sum the forecourtPrice amountGBP of adverts that were more than 50000 or more?

function sumForecourtPriceOver50000() {
	// create counter for the variable sumOver50000
	let sumOver50000 = 0;

	// loop through the data array
	for (const advert of data) {
		// create a new variable for the foreCourtPrice of each advert
		const forecourtPrice = advert.data.adverts.forecourtPrice.amountGBP;

		// if the forecourtPrice is 50000 or above, then add it to the sumOver50000 counter
		if (forecourtPrice >= 50000) {
			sumOver50000 += forecourtPrice;
		}
	}

	// Print the result to the console (adding £ to show the currency)
	console.log(`Sum of forecourt prices over 50000: £${sumOver50000}`);
}

// Call the function to get the result
sumForecourtPriceOver50000();
