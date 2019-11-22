/*
Button1.onclick=function(){
  var data = "api_secret=zmz2ydw5085poed&api_key=moulxswjj773cif&from=test&to=14026808106&text=Sample%20Message%20Text&type=text";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
   if (this.readyState === 4) {
   console.log(this.responseText);
   }
  });

  xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://www.thetexting.com/rest/sms/json/message/send");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  xhr.send(data); 
}
*/