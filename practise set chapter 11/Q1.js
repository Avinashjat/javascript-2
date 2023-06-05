class complex{

constructor(real , imag){

    this.real = real
    this.imag = imag
}

add (Num){
   this.real = this.real + Num.real
   this.imag = this.imag + Num.imag

}

get real  (){
    return this._real
}
get imag  (){
    return this._imag
}

set real ( newreal){
    this._real = newreal
}

set imag  (newimag){
     this._imag = newimag
}

}
let a = new complex(5 , 7)
let b= new complex(2 , 3)

a.add(b)
a.real = 10
a.imag = 20
console.log(a.real ,a.imag)

