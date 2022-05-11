/*   // 1-10      I    II    III    IV    V    VI    VII    VIII    IX     X
arrayOfDigits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

   // 10-100    X    XX    XXX    XL    L    LX    LXX    LXXX    XC      C 
arrayOfTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']

       //100-1000   C    CC    CCC    CD    D    DC    DCC    DCCC    CM    M
arrayOfHundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']

switchForDigits(num);    
switchForTens(num);
switchForHundres(num);
*/

function convertToRoman(num) {
    let numRoman = "";
    if (num >= 1000) {
        for (let i = 1; i <= num / 1000; i++) {
            numRoman += 'M'
        }
    }

    if (num >= 100) {
        numRoman += switchForHundreds(num);
    }

    if (num >= 10) {
        numRoman += switchForTens(num);
    }

    if (num > 0) {
        numRoman += switchForDigits(num);
    }
    num = numRoman;
    return num;
}

console.log(convertToRoman(400))
console.log(convertToRoman(500))
console.log(convertToRoman(1000))



function switchForDigits(num) {
    let arrayOfDigits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let result = "";
    switch (num % 10) {

        case 0:
            return result;
        case 1:
            return result + arrayOfDigits[0];

        case 2:
            return result + arrayOfDigits[1];

        case 3:
            return result + arrayOfDigits[2];

        case 4:
            return result + arrayOfDigits[3];

        case 5:
            return result + arrayOfDigits[4];

        case 6:
            return result + arrayOfDigits[5];

        case 7:
            return result + arrayOfDigits[6];

        case 8:
            return result + arrayOfDigits[7];

        case 9:
            return result + arrayOfDigits[8];


    }
}

function switchForTens(num) {
    let arrayOfTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    let result = "";
    num = num - num % 10;
    num = num / 10;
    switch (num % 10) {

        case 0:
            return result;
        case 1:
            return result + arrayOfTens[0];

        case 2:
            return result + arrayOfTens[1];

        case 3:
            return result + arrayOfTens[2];

        case 4:
            return result + arrayOfTens[3];

        case 5:
            return result + arrayOfTens[4];

        case 6:
            return result + arrayOfTens[5];

        case 7:
            return result + arrayOfTens[6];

        case 8:
            return result + arrayOfTens[7];

        case 9:
            return result + arrayOfTens[8];

    }
}

function switchForHundreds(num) {
    let arrayOfHundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    let result = "";
    num = num - num % 100;
    num = num / 100;
    switch (num % 10) {

        case 0:
            return result;
        case 1:
            return result + arrayOfHundreds[0]

        case 2:
            return result + arrayOfHundreds[1]

        case 3:
            return result + arrayOfHundreds[2]

        case 4:
            return result + arrayOfHundreds[3]

        case 5:
            return result + arrayOfHundreds[4]

        case 6:
            return result + arrayOfHundreds[5]

        case 7:
            return result + arrayOfHundreds[6]

        case 8:
            return result + arrayOfHundreds[7]

        case 9:
            return result + arrayOfHundreds[8]


    }
}