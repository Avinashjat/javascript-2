let f = fetch("https://goweather.herokuapp.com/weather/Ny")
f.then((reponse)=>{
    console.log(reponse.status)
    console.log(reponse.ok)

    return reponse.json()

}).then((value1)=>{

    console.log(value1)
})
