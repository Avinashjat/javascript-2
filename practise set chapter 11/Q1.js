class complex{

constructor(real , imag){

    this.real = real
    this.imag = imag
}
add (Num){
   this.real = this.real + Num.real
   this.imag = this.imag + Num.imag

}

}
let a = new complex(5 , 7)
let b= new complex(2 , 3)

a.add(b)
console.log(a.real ,a.imag)

