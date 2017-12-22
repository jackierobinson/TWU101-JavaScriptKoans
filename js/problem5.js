"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

function changeElementText(element, answer) {
    $(element).text(answer);
}

function reverseArray(array){
    var temp = [];
    for(var i = array.length-1; i >= 0; i--){
        temp.push(array[i]);
    }
    for(var i = 0; i < array.length; i++){
        array[i] = temp[i];
    }
}

function addTextToAd(text, ad){
    for(var i = 0; i < text.length; i++){
        ad.text += text[i] + " ";
    }
}

function getCount(hindiText, urduText, englishText){
    return hindiText.length + urduText.length + englishText.length ;
}

function restructureAd(hindiText, urduText, englishText){
    var ad = {text: ""};
    addTextToAd(hindiText, ad);
    reverseArray(urduText);
    addTextToAd(urduText, ad);
    addTextToAd(englishText, ad);
    changeElementText("#ad", ad.text);
    changeElementText("#count", getCount(hindiText, urduText, englishText));
}