// ! CHAP # 12 - 13 

// ? Q 1
// let userInput = prompt('Enter a character (number or string):');
// document.write(`You entered: ${userInput}<br>`);

// if (!isNaN(userInput)) {
//   document.write('Input is a number.');
// } else if (userInput.length === 1) {
//   const charCode = userInput.charCodeAt(0);
//   if (charCode >= 65 && charCode <= 90) {
//     document.write('Input is an uppercase letter.');
//   } else if (charCode >= 97 && charCode <= 122) {
//     document.write('Input is a lowercase letter.');
//   } else {
//     document.write('Input is neither a letter nor a number.');
//   }
// } else {
//   document.write('Input is neither a letter nor a number.');
// }


// ? Q 2
// let num1 = parseInt(prompt('Enter the first integer:'));
// let num2 = parseInt(prompt('Enter the second integer:'));
// document.write(`You entered: ${num1} and ${num2}<br>`);

// if (num1 > num2) {
//   document.write(`${num1} is larger than ${num2}.`);
// } else if (num2 > num1) {
//   document.write(`${num2} is larger than ${num1}.`);
// } else {
//   document.write('Both numbers are equal.');
// }


// ? Q 3
// let userNumber = parseFloat(prompt('Enter a number:'));
// document.write(`You entered: ${userNumber}<br>`);

// if (userNumber > 0) {
//   document.write('The number is positive.');
// } else if (userNumber < 0) {
//   document.write('The number is negative.');
// } else {
//   document.write('The number is zero.');
// }



// ? Q 4
// let userChar = prompt('Enter a character (one character only):');
// document.write(`You entered: ${userChar}<br>`);

// function isVowel(char) {
//   const vowels = 'AEIOUaeiou';
//   return vowels.includes(char);
// }

// if (userChar.length === 1 && isVowel(userChar)) {
//   document.write(`'${userChar}' is a vowel.`);
// } else {
//   document.write(`'${userChar}' is not a vowel.`);
// }


// ? Q 5
// // Step a: Store correct password in a JS variable
// const correctPassword = 'mySecretPassword';

// // Step b: Ask user to enter his/her password
// const userEnteredPassword = prompt('Please enter your password:');

// // Step c: Validate the two passwords
// if (!userEnteredPassword) {
//   // i. Check if user has entered a password
//   alert('Please enter your password.');
// } else if (userEnteredPassword === correctPassword) {
//   // ii. Check if both passwords are the same
//   alert('Correct! The password you entered matches the original password.');
// } else {
//   alert('Incorrect password.');
// }


// ? Q 6
// var hour = prompt("Enter the current hour (0-23):");
// var greeting;

// if (hour >= 0 && hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.write(`It's ${hour} o'clock. ${greeting}`);


// ? Q 7
// var timeInput = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7:00 PM):");
// var time = parseInt(timeInput);

// if (time >= 0 && time <= 2359) {
//   var hour = Math.floor(time / 100);
//   var minute = time % 100; 
//   var period;

//   if (hour >= 0 && hour < 12) {
//     period = "AM";
//     if (hour === 0) {
//       hour = 12; 
//     }
//   } else {
//     period = "PM";
//     if (hour > 12) {
//       hour -= 12; 
//     }
//   }
//   var formattedTime = hour + ":" + (minute < 10 ? "0" : "") + minute + " " + period;
//   document.write("The time in 12-hour clock format is: " + formattedTime);
// } else {
//   document.write("Invalid input. Please enter a valid time between 0 and 2359.");
// }

// todo                                             X-X-X-X-X-X-X


// ! CHAP # 14 - 16
// ? Q 1
// var studentNames = []; // Empty array for student names


// ? Q 2
// var studentNames = new Array(); // Empty array for student names


// ? Q 3
// var fruits = ["apple", "banana", "cherry", "date"]; // An array of strings


// ? Q 4
// var ages = [25, 30, 22, 18, 40]; // An array of numbers


// ? Q 5
// var flags = [true, false, true, true, false]; // An array of booleans


// ? Q 6
// var mixed = [1, "apple", true, 3.14, "banana"]; // An array with mixed data types


// ? Q 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Display the qualifications in the browser
// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ul>");


// ? Q 8
// // Array to store student names
// var studentNames = ["Alice", "Bob", "Charlie"];

// // Array to store scores of the three students
// var scores = [420, 350, 460];

// // Total marks for each student
// var totalMarks = 500;

// // Calculate percentages and display scores & percentages
// for (var i = 0; i < studentNames.length; i++) {
//   var studentName = studentNames[i];
//   var score = scores[i];

//   // Calculate the percentage
//   var percentage = (score / totalMarks) * 100;

//   // Display the scores and percentages with line breaks
//   document.write(studentName + "'s Score: " + score + " out of " + totalMarks + "<br>");
//   document.write(studentName + "'s Percentage: " + percentage.toFixed(2) + "%" + "<br>");
// }


// ? Q 9
// // Initialize an array with color names
// var colors = ["red", "green", "blue"];

// // Display the original array
// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");

// // a. Add a color to the beginning of the array
// var colorToAddStart = prompt("a. Enter a color to add to the beginning:");
// colors.unshift(colorToAddStart);

// // Display the updated array
// document.write("<b>Updated Array after adding to the beginning:</b> " + colors.join(", ") + "<br>");

// // b. Add a color to the end of the array
// var colorToAddEnd = prompt("b. Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// // Display the updated array
// document.write("<b>Updated Array after adding to the end:</b> " + colors.join(", ") + "<br>");

// // c. Add two more colors to the beginning of the array
// colors.unshift("purple", "yellow");

// // Display the updated array
// document.write("<b>Updated Array after adding two colors to the beginning:</b> " + colors.join(", ") + "<br>");

// // d. Delete the first color in the array
// colors.shift();

// // Display the updated array
// document.write("<b>Updated Array after deleting the first color:</b> " + colors.join(", ") + "<br>");

// // e. Delete the last color in the array
// colors.pop();

// // Display the updated array
// document.write("<b>Updated Array after deleting the last color:</b> " + colors.join(", ") + "<br>");

// // f. Add a color at a specific index
// var indexToAdd = parseInt(prompt("f. Enter the index to add a color:"));
// var colorToAddIndex = prompt("Enter a color to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAddIndex);

// // Display the updated array
// document.write("<b>Updated Array after adding a color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");

// // g. Delete colors at a specific index
// var indexToDelete = parseInt(prompt("g. Enter the index from which to delete color(s):"));
// var numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numToDelete);

// // Display the updated array
// document.write("<b>Updated Array after deleting " + numToDelete + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br>");


// ? Q 10
// // Array to store student scores
// var studentScores = [85, 72, 94, 65, 78];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//   return a - b;
// });

// // Display the sorted array
// document.write("Sorted Student Scores (Ascending Order): " + studentScores.join(", "));


// ? Q 11
// // Initialize an array with city names
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

// // Display the original cities array
// document.write("Cities: " + cities.join(", ") + "<br>");

// // Create an empty array for selected cities
// var selectedCities = [];

// // Copy three elements from cities array to selectedCities array
// selectedCities.push(cities[0], cities[1], cities[4]);

// // Display the selectedCities array
// document.write("Selected Cities: " + selectedCities.join(", "));


// ? Q 12
// var arr = ["This", "is", "my", "cat"];
// var commaSeparated = arr.join(", ");
// var concatenatedString = arr.join(" ");

// document.write( "Array:" + " "+ commaSeparated + "<br>");
// document.write("String:" + " "+ concatenatedString);


// ? Q 13
// // Create an array with device names
// var devices = ["mouse", "monitor", "printer", "keyboard"];

// // Display the original array in the browser
// document.write("<b>Original Array:</b> " + devices.join(", ") + "<br>");

// // Access and remove values from the array in FIFO order
// var firstDevice = devices.shift(); // Removes and returns the first device "mouse"
// var secondDevice = devices.shift(); // Removes and returns the second device "monitor"
// var thirdDevice = devices.shift(); // Removes and returns the third device "printer"
// var fourthDevice = devices.shift(); // Removes and returns the fourth device "keyboard"

// // Display the removed devices in FIFO order
// document.write("<b>Devices in FIFO Order:</b> " + firstDevice + ", " + secondDevice + ", " + thirdDevice + ", " + fourthDevice);


// ? Q 15
// // Array of phone manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start creating the HTML select element
// var selectHTML = '<select id="manufacturerSelect">';

// // Loop through the array and create option elements
// for (var i = 0; i < manufacturers.length; i++) {
//   selectHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
// }

// // Close the select element
// selectHTML += '</select>';

// // Display the select menu in the browser
// document.write(selectHTML);


