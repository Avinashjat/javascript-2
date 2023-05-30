class animals {

    constructor(name){
  this.name= animals.capitalize(name)
    }

    walk(){
        console.log("animals "+ this.name+" is walk ")

    }

    static capitalize(name){

        return name.charAt(0).toUpperCase()+ name.substr(1, name.legth)
    }
}


let j = new animals("jack")
j.walk()
// j.capitalize() itd does not work