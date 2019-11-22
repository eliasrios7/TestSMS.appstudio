arrayMain = []
arrayDescription = []
arrayTemp = []
arrayHumidity = []
arraySpeed = []
arrayDeg = []
                                                                             // 2.5/weather?zip=94040,us&appid
Button2.onclick=function(){
  let myurl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=" + Input1.value + ",us&units=imperial&APPID=4e1fa0f8909e271553bf5314b8071ebb";
  /*
  let myurl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/find?q=" + Input1.value + "&units=imperial&APPID=4e1fa0f8909e271553bf5314b8071ebb"
  */
  $.ajax({
        url: myurl,
        method: 'GET',
        dataType: 'json',
        success: function(data){ 
          console.log(data)
          console.log(data.main)
          console.log(data.weather)
          
          $.each(data.weather, function(i, item) { 
            // now inside the function 
            // Push each piece of the business' information 
            // onto the appropriate array (that you created earlier)
            arrayMain.push(item.main)
            arrayDescription.push(item.description)
          })
          $.each(data.main, function(i, item) { 
            arrayTemp.push(item.temp)
            arrayHumidity.push(item.humidity)
          })
          $.each(data.wind, function(i, item) { 
            arraySpeed.push(item.speed)
            arrayDeg.push(item.deg)
          })
          
          //Textarea1.value = arrayMain[0] + '\n'  + arrayDescription[0] + '\n' + arrayIcon[0]
          Textarea1.value = arrayMain[0] + '\n'  + arrayDescription[0] + '\n' + arrayTemp[0] + '\n' + arrayHumidity[0] + '\n' + arraySpeed[0] + '\n' + arrayDeg[0]
  }
  })
}
