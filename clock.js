function updateTime() 
        {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();

            // Add leading zero if the value is less than 10
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            var timeString = hours + ":" + minutes + ":" + seconds;
            document.getElementById("time").innerHTML = timeString;
        }
      
        // Update the time every second
        setInterval(updateTime, 1000);
        // Initial call to display the time immediately when the page loads
        updateTime();
