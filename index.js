const cats=["Milo","Otis","Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
}
cats();
function destructivelyPrependCat(){
    cats.unshift('Bob')
}   
cats();
function destructivelyRemoveLastCat(){
    cats.pop()
}
cats();
function destructivelyRemoveFirstCat(){
    cats.shift()
}
cats()
function appendCat(){
    var newArray = [...cats, "Broom"]
    return newArray
}
function prependCat(){
    var newArray=["Arnold",...cats,]
    return newArray
}
function removeFirstCat(){
    var newArray =cats.slice(1)
    return newArray
}
function removeLastCat(){
    var newCats = cats.slice(0,-1)
    return newCats
}