let myString1 = "Ey edip AdaNada pide Ye";
let myString2 = "   143**-- gfg ok   FK"

console.log(palindrome(myString1));
console.log(palindrome(myString2));


function palindrome(str) {

    let strLower = str.toLowerCase()

    let strSpaceless = strLower.replace(/\s|[^a-z0-9]/g, "");
    let charArray = strSpaceless.split('')

    for (let i = 0; i <= charArray.length / 2; i++) {
        if (charArray[i] != charArray[charArray.length - i - 1]) {
            return false;
        }

    }

    return true;
}