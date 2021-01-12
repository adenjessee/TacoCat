// Custom JS
document.getElementById("btnDemo").addEventListener("click", function(){

    // start with true and set false later if its not a palindrome
    let isPalindrome = true;
    let isWord = true; // we want the user to type something
    let inputWordOriginal = document.getElementById("input1").value;

    // change the input to ingnore caps and other characters
    let inputWord = inputWordOriginal.toLowerCase(); // make all characters lowercase
    inputWord = inputWord.replace(/[^a-z0-9]/g, ""); // ignore the characters that are not letters
    inputWord = inputWord.replace(/ /g,'') // ignore white spaces

    // loop through half the size of the input word
    for(let i=0; i < inputWord.length/2; i++){
        // lets shorten the variable name
        let length = inputWord.length;

        // lets look at the exact opposite side to see if its the same character
        if(inputWord.charAt(i) != inputWord.charAt(length-1-i)){
            // if the characters are not the same then it cant be a palindrome
            isPalindrome = false;
        }
    }

    // if there is no text
    if(isPalindrome && inputWord.length <= 0){
        document.getElementById("output").innerText=`Sorry, please enter some text.`; 
    }
    // if we do not have a palindrome
    else if(!isPalindrome){
        // lets output that the phrase is not a palindrome
        document.getElementById("output").innerText=`Sorry, ${inputWordOriginal} is not a palindrome.`; 
    }
    //otherwise it must be a palindrome
    else{
        // lets output that the phrase is a palindrome
        document.getElementById("output").innerText=`Congratulations! ${inputWordOriginal} is a palindrome`; 
    }
});