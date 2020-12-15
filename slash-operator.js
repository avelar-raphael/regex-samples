//Creates a regex pattern that will look only for the letter i
var regexPattern = /i/;

//The text string
var text = "This is an example";

//When the result is logged, take a look at the index's value
//It represents where the first leter of the regex pattern was found
//As there is only one letter, it'll represent it's location
console.log(text.match(regexPattern));

//Now, let's try searching for xam
regexPattern = /xam/;
console.log(text.match(regexPattern));

//We can also search for a whole word
//Verify the index's - it is 0 as the pattern we are looking for starts at the beginning of the string
regexPattern = /This/;
console.log(text.match(regexPattern));

//If we try to find a value that does not exist, the return will be null
regexPattern = /o/;
console.log(text.match(regexPattern));