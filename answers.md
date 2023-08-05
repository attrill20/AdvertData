# 67 Degrees Challenge
## Junior PHP Engineer - PHP/Yii2

#### Task 1: Analyzing Advert Data - Answers in plain English

1. Count the total number of adverts?

> Answer: I would set up a function that parses the JSON data, then initialises a variable called advertCount which would increment as the function iterated through the data every time it identified a new advert listing.

2. Can you identify the field that specifies the ID of each object?

> Answer: The ID field for each object is accessed by 'data[n].id', with n being the index of the object.

3. Count the number of adverts that have a advertiserAdvert status of "PUBLISHED"?

> Answer: Similar to question 1, I would set up a publishedAdvert variable that would only increment using an if statement of 'data.data.advertiserAdvert.status === "PUBLISHED"' and then iterate through the JSON file to count the number of published adverts.

4. How can you access the advertiser's ID for each object?

> Answer: This is accessed by 'data[n].data.advertiser.advertiserID'.

5. Summarise how many adverts are in each lifecycleState?

> Answer: I would set up variables to count each of the lifecycleStates within the metadata such as 'DELETED', 'DUE_IN', 'SALE_IN_PROGRESS', 'FORECOURT' and 'WASTEBIN'. Then similar to question 3, have switch/case statements that increment the count if the advert lifecycleState matches that specific status.

6. Sum the forecourtPrice amountGBP of adverts that were more than 50000 or more?

> Answer: This can be achieved by iterating through the data and creating a variable that sums all of the adverts where 'data[n].data.adverts.forecourtPrice.amountGBP' exceeds 50000 (using an if statement to check that amountGBP >= 50000). 

7. Sum the lengthMM of every advert in metres?

> Answer: LengthMM can be accessed by 'data[n].data.vehicle.lengthMM', so it is a case of iterating through and summing the total length of all cars listed. This will give a final result in mm(millimetres), so to convert to metres apply '/1000' to this total.

8. What is the purpose of the "metadata" field?

> Answer: This field gives contextual information about the data such as 'stockID', 'searchID' and 'lifecycleState'. This can be used to search for and locate specific data quicker.

9. In the "media" field, can you describe how the images are represented?

> Answer: Images are stored as an array of objects, with each one having an 'imageID' and a 'href' link to a URL.

10. Assuming that data.json is the whole dataset, what possible values can advertiserAdvert status be?

> Answer: I can only see either 'PUBLISHED' or 'NOT_PUBLISHED'. You could check for this by creating a new 'Set' which only allows unique values are stored, so the data could be iterated through and return an array of all the possible unique advertiserAdvert status values.

11. One of the description values is encoded. Can you find it and decode the value? 

> Answer: It is the object with id "64ca75cc68ba7a868cd5fc66". I can see that it is decoded as "SGVsbG8hIHlvdSBmb3VuZCB0aGUgYW5zd2VyIDpEIA==", but I'm not sure how you decode values like this! If I was completing this task for real I would read the documentation on how to decode values like this, or perhaps ask a colleague for assistance on this.

12. Convert the advert `time` property to the Timezone of `Pitcairn` with the format `dd/mm/yyyy, hh:mm:ss`

> Answer: I would look up the timezone of Pitcairn (which is UTC -8). I would then use an inbuilt programming library that handles timezone conversion to convert all the 'time' properties within the data to the correct format, rearranging the dd/mm/yyyy as specified and providing the 24 hour clock time for the Pitcairn Islands.
