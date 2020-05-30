/*
============================================
; Title: Dewey-types-values-variables.js
; Author: Elizabeth Dewey
; Date:   29 May 2020
; Description: Formatting Employee Records
;===========================================
*/

// First Employee Record
var firstName1 = 'Robert';
var lastName1 = 'Bennett';
var address1 = '123 ABC Street, Alphabet City, Alphabet 12345';
var payRate1 = 9.15;
var hireDate1 = new Date (2020, 5, 10); // June 10 2020

// Second Employee Record
var firstName2 = 'Daniel';
var lastName2 ='Bentley';
var address2 = '345 Zootopia Lane, Zootopia City, Zootopia 34567';
var payRate2 = 20.05;
var hireDate2 = new Date (1995, 4, 12); // May 12 1995

// Third Employee Record
var firstName3 = 'Richard';
var lastName3 = 'Becker';
var address3 = '567 Ranger Avenue, Ranger City, Ranger 89123';
var payRate3 = 13.46;
var hireDate3 = new Date (2017, 0, 21); // January 21 2017


 //print 1st employee record
 console.log ('Employee 1');
 console.log ( 'Name: '+ firstName1 + ' ' + lastName1);
 console.log ( 'Address: ' + address1);
 console.log ( 'Hire Date: ' + hireDate1.toLocaleDateString());
 console.log ( 'Pay Rate: ' + payRate1.toFixed(1));

 //print 2nd employee record
 console.log ('Employee 2');
 console.log ( 'Name: '+ firstName2 + ' ' + lastName2);
 console.log ( 'Address: ' + address2);
 console.log ( 'Hire Date: ' + hireDate2.toLocaleDateString());
 console.log ( 'Pay Rate: ' + payRate2.toFixed(1));

//print 3rd employee record
console.log ('Employee 3');
console.log ( 'Name: '+ firstName3 + ' ' + lastName3);
console.log ( 'Address: ' + address3);
console.log ( 'Hire Date: ' + hireDate3.toLocaleDateString());
console.log ( 'Pay Rate: ' + payRate3.toFixed(1));
