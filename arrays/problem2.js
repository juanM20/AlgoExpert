
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let i = 0;
    let j = 0;
    let cont = 0;
    const sequence_length = sequence.length;

    while (i < sequence.length) {
        if (sequence[i] === array[j]) {
            cont++;
            i++;
        }

        j++;
        if (j > array.length) return false;
    }

    return cont === sequence_length ? true : false;
}

//Test 1
//const array = [5, 1, 22, 25, 6, -1, 8, 10];
//const sequence = [1, 6, -1, 10];

//Test 2
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [5, 1, 22, 25, 6, -1, 8, 10];

console.log(isValidSubsequence(array, sequence));