

function showCorrs(word) {
    word.style.backgroundColor = "silver";
    var id = word.getAttribute("id");

    //make this L# independent

    if (word.hasAttribute("data-refs")) {
        var refList = word.getAttribute("data-refs").split(" ");
        if (id.split("-")[0] === "L1") {
            for (r = 0; r < refList.length; r++) {

                document.getElementById("L2-" + refList[r]).style.backgroundColor = "silver";

            }
        } else {

            for (r = 0; r < refList.length; r++) {

                document.getElementById("L1-" + refList[r]).style.backgroundColor = "silver";

            }


        }
    } else { }

}

function hideCorrs(word) {
    word.style.backgroundColor = "white";


    var id = word.getAttribute("id");

    //make this L# independent

    if (word.hasAttribute("data-refs")) {
        var refList = word.getAttribute("data-refs").split(" ");
        if (id.split("-")[0] === "L1") {
            for (r = 0; r < refList.length; r++) {

                document.getElementById("L2-" + refList[r]).style.backgroundColor = "white";

        }
    }   else {

            for (r = 0; r < refList.length; r++) {


                document.getElementById("L1-" + refList[r]).style.backgroundColor = "white";

        }


    }
} else{}
}

function submitTrans(){
  var elemList = document.getElementsByTagName("textarea");
  var textList = [];

  for (t=0; t<elemList.length; t++){

   textList.push("<div type='textpart' subtype='sentence' n='"+ t + 1 + "'>" + elemList[t].value + "</div>");

   var wordList = elemList[t].value.split(" ");
   var wordHtmlList = []

   for(w=0; w<wordList.length; w++){
      var wNum = w + 1
      wordHtmlList.push("<span data-n='"+ wNum + "' data-refs='' onmouseover='showCorrs(this)' onmouseout='hideCorrs(this)' class='word'>" + wordList[w] + "</span>")

   }

   document.getElementById(t + "-L2").innerHTML = wordHtmlList.join("\n")

  }

 var xmlText = textList.join("\n")
}

 