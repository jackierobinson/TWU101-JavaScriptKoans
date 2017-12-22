"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

function changeElementText(element, answer){
    $(element).text(answer);
}

function displayGivenNotes(notes){
    var givenNotes = "";
    for (var i = 0; i < notes.length; i++) {
             givenNotes += notes[i];
            if(i != notes.length-1)
                givenNotes +=", ";
        }
    changeElementText("#givenNotes", givenNotes);
}

function isValidDenomination(currencyNote, validDenominations){
    for(var i = 0; i < validDenominations.length; i++){
        if(currencyNote == validDenominations[i])
            return true;
    }
    return false;
}

function getValidDenominations(){
    return [5, 10, 20, 50, 100, 500, 1000];
}

function getTotalRs(){
    displayGivenNotes(arguments);
    var validDenominations = getValidDenominations();
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        if(!isValidDenomination(arguments[i], validDenominations)){break;}
        total += arguments[i];
    }
    changeElementText("#total", total)
}