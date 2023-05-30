class aniamls {
constructor (name){
    this._name = name
}

fly(){
    console.log ("i am fly on sky")
}
get name (){
    return this._name
}

set name (newname){
     this._name = newname
}


}

let a = new aniamls("AVI")
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)
let c = 47

console.log(a instanceof aniamls)
console.log(c instanceof aniamls)