// Write your solution here!


let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    let newCatList = [...cats, "Broom"]
    return newCatList
}

function prependCat() {
    let newCatList2 = ["Arnold", ...cats,]
    return newCatList2
}

function removeLastCat() {
    let newCatList3 = cats.slice(0,-1)
    return newCatList3
}

function removeFirstCat() {
    let newCatList4 = cats.slice(1)
    return newCatList4
}

