// INSTRUCTIONS
// Run program with 'node solutionQ5.js' in the terminal
// Result will print to the terminal

// Parse the data.json file so it can be accessed here
const fs = require("fs");
const jsonData = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(jsonData);

// 5. Summarise how many adverts are in each lifecycleState?

function checkLifecycleState() {
	// create counters for each lifeycleState
	let deleted = 0;
	let due_in = 0;
	let sale_in_progress = 0;
	let forecourt = 0;
	let wastebin = 0;

	// loop through the data array
	for (const advert of data) {
		// create a new variable for the lifecycleState of each advert
		const lifecycleState = advert.data.metadata.lifecycleState;

		// Increment the corresponding counter based on the lifecycleState value
		switch (lifecycleState) {
			case "DELETED":
				deleted++;
				break;
			case "DUE_IN":
				due_in++;
				break;
			case "SALE_IN_PROGRESS":
				sale_in_progress++;
				break;
			case "FORECOURT":
				forecourt++;
				break;
			case "WASTEBIN":
				wastebin++;
				break;
			default:
				// default case if input doesn't match any of the case statements above
				console.log(`Unknown lifecycleState: ${lifecycleState}`);
				break;
		}
	}

	// Print the results to the console
	console.log("Summary of adverts in each lifecycleState:");
	console.log(`Deleted: ${deleted}`);
	console.log(`Due in: ${due_in}`);
	console.log(`Sale in progress: ${sale_in_progress}`);
	console.log(`Forecourt: ${forecourt}`);
	console.log(`Wastebin: ${wastebin}`);
}

// Call the function to get the summary
checkLifecycleState();
