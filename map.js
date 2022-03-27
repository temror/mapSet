//Конструкция с использованием map, позволяющая создавать объект с динамическим ключом.

//Объект
const obj = {
    name: 'Artem',
    surname: 'Bogdanov',
    age: 25
}

//Ключ
let key = 'key'

//Значение
let value = 'value'

//Создаем функцию
const changeObj = (obj, add, val) =>{
    return Object.fromEntries(new Map(Object.entries(obj)).set(add,val))
}

//Создаем объект с динамическим key
const newObj = changeObj(obj,key,value)

console.log(newObj)
