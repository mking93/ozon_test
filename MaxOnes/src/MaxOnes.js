/**
 * Возвращает максимальное количество единиц в последовательности,
 * если убрать один символ (0)
 * @param sequence -- входной массив последовательности 0 и 1
 * @return {number|*} -- максимальное количество 1
 */
function maxOnesAfterRemoveItem(sequence) {
    let onesLengthArr = [], // length < 3, массив для двух значений ones (например, предыдущее и текущее)
        ones = 0; // текущая длина подпоследовательности 1
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] == 1 && i != sequence.length - 1) { // если 1 не последний элемент
            ones++;
        }
        else if (sequence[i] == 1 && i == sequence.length - 1) { // если 1 последний элемент
            ones++;
            if (onesLengthArr.length == 2) {
                if (ones + onesLengthArr[1] > onesLengthArr[0] + onesLengthArr[1]) { // если true, то проверяем какая из сумм подмножеств 1 больше
                    onesLengthArr[0] = onesLengthArr[1];
                    onesLengthArr[1] = ones;
                    ones = 0;
                }
            }
            else {
                onesLengthArr.push(ones);
                ones = 0;
            }
        }
        else if (sequence[i] == 0) { // если наткнулись на 0
            if (onesLengthArr.length == 2) { // если true, то проверяем какая из сумм подмножеств 1 больше и при необходимости обновляем onesLengthArr на большую пару
                if (ones + onesLengthArr[1] > onesLengthArr[0] + onesLengthArr[1]) {
                    onesLengthArr[0] = onesLengthArr[1];
                    onesLengthArr[1] = ones;
                    ones = 0;
                }
            }
            else { // заполняем onesLengthArr[1] и обнуляем текущий ones
                if (ones == 0) {
                    onesLengthArr = [0];
                }
                else {
                    onesLengthArr.push(ones);
                    ones = 0;
                }
            }
        }
    }
    if (onesLengthArr.length == 1) { // если массив sequence оказался мелкий или содержит только единицы или только нули и заполнился только onesLengthArr[0], пример: [0, 0], [1, 1, 1] и т. д.
        if (onesLengthArr[0] == 1 || onesLengthArr[0] == 0) {
            return onesLengthArr[0];
        }
        else {
            onesLengthArr[0]--;
            return onesLengthArr[0];
        }
    }
    else {
        return onesLengthArr[0] + onesLengthArr[1];
    }
}

console.assert(maxOnesAfterRemoveItem([0, 0]) == 0);
console.assert(maxOnesAfterRemoveItem([0, 1]) == 1);
console.assert(maxOnesAfterRemoveItem([1, 0]) == 1);
console.assert(maxOnesAfterRemoveItem([1, 1]) == 1);
console.assert(maxOnesAfterRemoveItem([1, 1, 0, 1, 1]) == 4);
console.assert(maxOnesAfterRemoveItem([1, 1, 0, 1, 1, 0, 1, 1, 1]) == 5);
console.assert(maxOnesAfterRemoveItem([1, 1, 0, 1, 1, 0, 1, 1, 1, 0]) == 5);
