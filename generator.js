//Позволяет последовательно выводить результат

function* generator(){
    yield 'Настя котенок'
    yield 'Темушка зайчик'
}

const gen = generator()

console.log(gen.next().value)

console.log(gen.next().value)

//Как полностью скопировать объект

const obj1 = {
    name: 'Kotenka',
    surname: 'Bogdanova',
    address: {
        city: 'Moscow',
        country: 'Russia'
    }
}

const obj2 = JSON.parse(JSON.stringify(obj1))

console.log(obj1, obj2)

obj1.address.city = 'Apatity'
obj2.address.country = 'Catville'

console.log(obj1, obj2)
