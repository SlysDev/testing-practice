import mergeSort from "../algorithms/merge-sort.js";

let analyzeArray = function (array) {
    let sortedArray = mergeSort(array);
    let average = function () {
        let arraySum = array.reduce((first, second) => first + second);
        return arraySum / array.length;
    };
    let min = () => sortedArray[0];
    let max = () => sortedArray[sortedArray.length - 1];
    let length = array.length;
    return { average, min, max, length };
};

export default analyzeArray;
