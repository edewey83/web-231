/*
============================================
; Title:  header.js
; Author: Professor Krasso 
; Date:   02 June 2020
; Modified By: Elizabeth Dewey
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + 
	new Date().toLocaleDateString('en-US')

	return output  
}
// used variable to store the needed function output. 
var output= exports.display('Elizabeth', 'Dewey', 'Assignment 2.1');
console.log (output); //used console.log to display stored output.