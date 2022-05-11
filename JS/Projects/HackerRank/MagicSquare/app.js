//input array s
s = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

/************SOLUTION LOGIC******************* 
Actually, there is 8 magic squares which are different transformations.
The other magic squares are different circular transformation of unique magic square.

MS1:
      [2, 7, 6]
      [9, 5, 1]
      [4, 3, 8]

MS2: The symmetry of MS1 according to x-axis  
      [6, 7, 2]
      [1, 5, 9]
      [8, 3, 4]

MS3: The symmetry of MS1 according to y-axis
      [4, 3, 8]
      [9, 5, 1]
      [2, 7, 6]



2.1. The element at the center must be 5. So exclude it.
2.2. The numbers on the corner must be even; number 4 and 6 on opposite corners, number 2 and 8 on the other two opposite corners.
2.3. Once the position of evens are set, the odd numbers are fully dependent to the position of evens.
     
           
     2  7  6
     9     1
     4  3  8
        
3. To find minimum cost we should try 8 transformation

*************/

/********* Pseudo-Code
1. Transform the array to base array
    1.1. Use Map to transform 2D input array into 1D base array with length=8 
2. Find the permutations of base array
    2.1 Find 2D permutation arrays of 1D base array
        2.1.1. push the index0 element to back of the array iteratively, 8 times 
        2.1.2. reverse the base array and repeat 2.1.1.
3. Substract each permutation from target array
    3.1. Find 16 results put them into a result array
4. find smallest element of the results array

*/
/* input in general form

let twoDG = [
    [a, b, c],
    [d, e, f],
    [g, h, i]
]
*/

/*input general form in map form

let mapOfS = new Map();
mapOfS.set(0, [a, b, c])
mapOfS.set(1, [d, e, f])
mapOfS.set(2, [g, h, i])
*/

let mapOfS = new Map();
mapOfS.set(0, s[0]);
mapOfS.set(1, s[1]);
mapOfS.set(2, s[2]);


//initilize the minimum cost with the cost of number in the center. 
//And excluded from other calculations for the sake of simplicity
let minCost = Math.abs(Map.get(1)[1] - 5)
let permutationArr = [mapOfS.get(0)[0], mapOfS.get(0)[1], mapOfS.get(0)[2], mapOfS.get(1)[2], mapOfS.get(2)[2], mapOfS.get(2)[1], mapOfS.get(2)[0], mapOfS.get(1)[0]]

let arrOfPermutations = findPermutations(permutationArr);


[mapOfS.get(0)[0], mapOfS.get(0)[1], mapOfS.get(0)[2], mapOfS.get(1)[2], mapOfS.get(2)[2], mapOfS.get(2)[1], mapOfS.get(2)[0], mapOfS.get(1)[0]]

origin1 = [a, b, c, f, i, h, g, d];
origin2 = [b, c, f, i, h, g, d, a];


origin4 = [d, a, b, c, f, i, h, g, d]

reversed = [d, g, h, i, f, c, b, a]


function findMinCost(s) {
    let result = 0


    for (let i = 0; i < 16; i++) {
        if (result > substrackArrys(arrOfPermutations[i], target)) {
            result = substrackArrys(arrOfPermutations[i], target);
        }
    }

    let arrTarget = [2, 7, 6, 1, 8, 3, 4, 9]

    //array=>smallest element of array
    result = minValueOfArray(arr);
    return result;
}


//findPermutations
//different permutation of general form 
//16 different permutation of 1D arrays
//8 clock-wise. 8 counter clock-wise
// array input==>array of arraysOutput
function findPermutations(arrInput) {

    //return array of permutation of input array
    return arrOfPermutations;
}

let arrTarget = [2, 7, 6, 1, 8, 3, 4, 9]

function substractArrays(arr1, arr2) {

    let result = 0;
    for (let i = 0; i < 8; i++) {
        result += arr1[i] - arr2[i];
    }

    return result
}