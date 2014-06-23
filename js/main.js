

$(document).ready(function() {
    //Execute some javascript on Webshell
    wsh.exec({
        code: function() {
            
            apis.webknox(extractLocations("Pompeii"));

            apis.webknox(extractEntities("Julius Caesar"));

            apis.webknox(detectLanguage("Julius Caesar"));

            apis.webknox(detectPartofSpeech("Julius Caesar"));

            

            apis.freebase.search("Pompeii");

            apis.freebase.text("Pompeii");

            //take note of the text to speech!
            apis.tts('Hello World!');
        },
        process: function(data, meta) {
            $('body').append(meta.view);
        }
    });
});