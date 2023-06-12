function jsSpeechRecognition(){
        var result = document.getElementById("result");
        //getting user action
        var event = document.getElementById("event");
        //speech Recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

        var recognition = new SpeechRecognition();

        //speech Recognition service start
        recognition.onstart = function(){
            event.innerHTML = "Listening...";
        };

        recognition.onspeechend = function(){
            event.innerHTML = "Listening Stopped"
                recognition.stop();
        }
        recognition.onresult = function(event){
            var transcript = event.results[0][0].transcript;

            result.innerHTML = "<strong> Text: </strong>" +" "+transcript;
            result.classList.remove("hide");
        };

        //start speech recognition
        recognition.start();
        }
