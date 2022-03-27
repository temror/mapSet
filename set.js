//Механизм, удаляющий одной строчкой все одинаковые элементы массива

const uniqueArr = arr =>{return [...new Set(arr)]}

console.log(uniqueArr([1,1,1,2,3,3,2,4,4,4,4,4]))
