/**
 * Возвращает максимальное количество единиц в последовательности,
 * если убрать один символ (0)
 *
 * @param sequence -- входной массив последовательности 0 и 1
 * @return {number|*} -- максимальное количество 1
 */
function maxOnesAfterRemoveItem(sequence) {
    let onesLengthArr = [0, 0], // length < 3, массив для двух значений ones (например, предыдущее и текущее)
        maxOnesLength = 0, // длина максимальной последовательности
        ones = 0; // текущая длина подпоследовательности 1

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == 1 && i != sequence.length - 1) {
            ones++;
        }
        else {
            if (sequence[i] == 1 && i == sequence.length - 1 && sequence.length - 1 != ones) {
                ones++;
            }
            onesLengthArr[0] = onesLengthArr[1];
            onesLengthArr[1] = ones;
            maxOnesLength = maxOnesLength < onesLengthArr[0] + onesLengthArr[1] ? onesLengthArr[0] + onesLengthArr[1] : maxOnesLength;
            ones = 0;
        }
    }

    return maxOnesLength;
}

console.assert(maxOnesAfterRemoveItem([0, 0]) == 0);
console.assert(maxOnesAfterRemoveItem([0, 1]) == 1);
console.assert(maxOnesAfterRemoveItem([1, 0]) == 1);
console.assert(maxOnesAfterRemoveItem([1, 1]) == 1);
console.assert(maxOnesAfterRemoveItem([1, 1, 0, 1, 1]) == 4);
console.assert(maxOnesAfterRemoveItem([1, 1, 0, 1, 1, 0, 1, 1, 1]) == 5);
console.assert(maxOnesAfterRemoveItem([1, 1, 0, 1, 1, 0, 1, 1, 1, 0]) == 5);

console.assert(maxOnesAfterRemoveItem([0]) == 0);
console.assert(maxOnesAfterRemoveItem([1]) == 0);
console.assert(maxOnesAfterRemoveItem([0, 1, 1, 1, 0, 0, 1, 1]) == 3);