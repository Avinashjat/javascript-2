class myrailway {
    submit(){
        alert(this.name +":from is submitted for train no ->" +this.trainnumber)
     }
     cancel(){
        alert(this.name  +": from submitted cancel train no ->" + this.trainnumber)
     }
     fillfrom(username,trainnumber ){ 
      this.name = username
      this.trainnumber = trainnumber 
   }
}

let harry = new  myrailway()
let avi = new  myrailway()

harry.fillfrom("harry",233424)
avi.fillfrom("avi",542524)
harry.submit()
avi.submit()
avi.cancel()