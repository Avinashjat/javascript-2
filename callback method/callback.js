// callbacks

function loadscript(src,callback){
let script = document.createElement("script")
script.src = src;
script.onload = function(){
    console.log("src :"+ src)
    callback(null,src);
}
script.onerror = function(){
    console.log("error is loading :"+ src)
    callback( new Error ("src got some error"))
}

document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return;
    }
    alert("hello world"+src)
}

function goodmorning(error,src){
    if(error){
        console.log(error)
        return;
    }
    alert("goodmorning"+src)
}


loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", hello);