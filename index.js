
function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec= dateTime.getSeconds();


    if(hr>12){
        hr = hr - 12
        document.getElementById("ampm").innerHTML= "PM"
    }

    function padZero(num){
        // return num<10? "0"+num:num
        if (num<10){
            return "0"+num
        }
        else{
            return num
        }
    }

    document.getElementById("hour").innerHTML = padZero(hr);
    document.getElementById("minutes").innerHTML = padZero(min);
    document.getElementById("seconds").innerHTML = padZero(sec);

}

setInterval(displayTime,1000)
