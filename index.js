const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return cats
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield)
    return cats
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo)
    return cats
}

function appendCat(Broom) {
    var newArray = cats.slice()
    newArray.push(Broom)
    return newArray
}

function prependCat(Arnold) {
    var newArray = cats.slice()
    newArray.unshift(Arnold)
    return newArray
}

function removeLastCat(Garfield) {
    var newArray = cats.slice()
    newArray.pop(Garfield)
    return newArray
}

function removeFirstCat(Milo) {
    var newArray = cats.slice()
    newArray.shift(Milo)
    return newArray
}