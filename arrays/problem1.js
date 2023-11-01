
function twoNumberSum(array, targetSum) {
    // target = x + y
    // despejando
    // y = target - x

    let auxY = new Map();
    for (let i = 0; i < array.length; i++) {
        auxY.set(array[i], [i, targetSum - array[i]]);
    }
    console.log(auxY);

    let resp = []
    for (let i = 0; i < array.length; i++) {
        if (auxY.get(targetSum - array[i]) != undefined) {
            let [index, value] = auxY.get(targetSum - array[i])
            if (index != i) {
                if (resp.indexOf(array[index]) == -1) {
                    resp.push(array[index], array[i]);
                }
            }
        }
    }

    return resp;
}


const array = [3, 5, -4, 8, 11, 1, -1, 6];
                /**auxY */[7, 5, 14, 2, -1, 9, 11, 4]
targetSum = 10;

console.log(twoNumberSum(array, targetSum));