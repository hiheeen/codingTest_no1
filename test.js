function solution(arr) {
    const minNumber = Math.min(...arr);
    const newArray = arr.filter(a => a !== minNumber);

    if(newArray.length === 0) return [-1];
    else return newArray;
}

