//All of the below to be used with Perseids-style alignment data in JSON--see Kohelet-1.align.json for example

/*e.g. var alignmentData = {"alignment":[....]}
    
    getLNumWordDataBySentenceNumber(alignmentData,1,1)

*/

//For converting alignment XML to JSON--need to change xml:Lang to xmlLang and aligned-text to alignment--see Kohelet-1.align.json for an example


function getJson(filePath){
  var obj = $.getJSON(filePath)

  return obj.responseJSON
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}



function getLangList(alignmentData) {
    var langData = alignmentData.alignment.language;
    var langList = [];

    for (i = 0; i < langData.length; i++) {
        langList.push(langData[i].xmlLang);
    }
    return langList;
}

function getDirList(alignmentData) {
    var langData = alignmentData.alignment.language;
    var dirList = [];

    for (i = 0; i < langData.length; i++) {
        dirList.push(langData[i].dir);
    }
    return dirList;
}

function getSentenceList(alignmentData) {
    return alignmentData.alignment.sentence;
}

//this should be replaced by URI functionality

function getWordsBySentenceNumber(alignmentData, sentenceNumber) {
    var num = sentenceNumber - 1;

    return alignmentData.alignment.sentence[num].wds;

}

function getLNumWordDataBySentenceNumber(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    return alignmentData.alignment.sentence[num].wds[lN].w;

}

function getLNumWordNumsBySentenceNumber(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
    var numList = [];

    for (i = 0; i < wordList.length; i++) {
        numList.push(wordList[i].n);
    }
    return numList;
}

function getLNumWordRefListsBySentenceNumber(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
    var refList = [];

    for (i = 0; i < wordList.length; i++) {
        refList.push(wordList[i].refs.nrefs.split(" "));
    }
    return refList;
}

function getLNumWordTextBySentenceNumber(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;

    var textList = [];

    for (i = 0; i < wordList.length; i++) {
        textList.push(wordList[i].text);
    }
    return textList;
}

function getLNumSentenceBySentenceNumber(alignmentData, sentenceNumber, lNum){
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;

    var textList = [];

    for (i = 0; i < wordList.length; i++) {
        textList.push(wordList[i].text);
    }
    return textList.join(" ");

}

function getFullTextbyLNum(alignmentData, lNum) {
    var lN = lNum - 1;
    var textList = [];
    var sentenceList = alignmentData.alignment.sentence;

    for (i = 0; i < sentenceList.length; i++) {
        var wordList = alignmentData.alignment.sentence[i].wds[lN].w;
        var wordTextList = [];

        for (x = 0; x < wordList.length; x++) {

            wordTextList.push(wordList[x].text);

        }

        textList.push(wordTextList.join(" "));

    }
    return textList.join(" ");
}

// Make this so it automatically retrieves sources, author, title, and marks that information somehow

//Make author, sources, title a standard part of JSON schema

//Make it show correspondences on hover?

function sideBySideSentencesReadable(alignmentData){
    var sentenceList = alignmentData.alignment.sentence;


    var langData = alignmentData.alignment.language;
    var dirList = [];
    var lnumList =[];

    for (i = 0; i < langData.length; i++) {
        dirList.push(langData[i].dir);
        lnumList.push(langData[i].lnum);
    }

    var htmlArray =[];

    for (s=0; s < sentenceList.length; s++){

        var rowArray = [];
        var num = s+1

        for (d=0; d<dirList.length; d++){

             var num = s;
             var lN = d;
             var width = 12/(dirList.length);
             var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
             var textList = [];

            for (i = 0; i < wordList.length; i++) {

                //make this more L# friendly (multiple alignment refs allowed, etc, try with new Alpheios schema)

                    if (wordList[i].hasOwnProperty("refs")) {
                        var nrefs = wordList[i].refs.nrefs;
                        
                    }  else{

                        var nrefs = "";
                        
                    }

                    textList.push("<span data-n='" + wordList[i].n + "' data-refs='" + nrefs +"' id='"+ lnumList[d] + "-"+wordList[i].n +"' onmouseover='showCorrs(this)' onmouseout='hideCorrs(this)' class='word'>" + wordList[i].text + "</span>");
            }
            rowArray.push("<div class='col-md-" + width +"' data-lnum='" +lnumList[d] +"' dir='" + dirList[d] + "'>" + textList.join(" ") + "</div>");

        }
        

        htmlArray.push("<div class='row' id='"+ num +"'>" + rowArray + "</div>");
    }

    return "<div class='container' data-type='alignment-data'>" + htmlArray.join("\n") + "</div>";

}

function sideBySideSentencesWriteable(filePath){

    var obj = $.getJSON(filePath);

    var alignmentData = obj.responseJSON;

    if(alignmentData.hasOwnProperty("alignment")){
    var sentenceList = alignmentData.alignment.sentence;

    var langData = alignmentData.alignment.language;
    var dirList = [];
    var lnumList =[];

    for (i = 0; i < langData.length; i++) {
        dirList.push(langData[i].dir);
        lnumList.push(langData[i].lnum);
    }

    var htmlArray =[];

    for (s=0; s < sentenceList.length; s++){

        var rowArray = [];
        var num = s+1

        for (d=0; d<dirList.length; d++){

             var num = s;
             var lN = d;
             var width = 12/(dirList.length);
             var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
             var textList = [];

            for (i = 0; i < wordList.length; i++) {

                //make this more L# friendly (multiple alignment refs allowed, etc, try with new Alpheios schema)

                    if (wordList[i].hasOwnProperty("refs")) {
                        var nrefs = wordList[i].refs.nrefs;
                        
                    }  else{

                        var nrefs = "";
                        
                    }

                    if (!!wordList[i].text) {

                        var word = replaceAll("\"","'", wordList[i].text)
                         textList.push("<span data-n= \"" + wordList[i].n + " \" data-refs= \"" + nrefs +" \" id= \""+ lnumList[d] + "-"+wordList[i].n +" \" onmouseover= \"showCorrs(this) \" onmouseout= \"hideCorrs(this) \" class= \"word \" draggable= \"true \" ondragstart= \"drag(event) \" ondrop= \"drop(event) \" ondragover= \"allowDrop(event) \">" + word + "</span>");
                        
                    }  else{
                        
                    }

            }
           rowArray.push("<div class= \"col-md-" + width +" \" data-lnum= \"" +lnumList[d] +" \" dir= \"" + dirList[d] + " \" id= \""+ s + "-" + lnumList[d]+" \">" + textList.join(" ") + "</div>");

        }
        

        htmlArray.push("<div class= \"row \" id= \""+ num +" \">" + rowArray.join("<div class= \"writeable \" contenteditable= \"true \"> <textarea></textarea> </div>") + "</div>");
    }

   return "<div class= \"container \" data-type= \"alignment-data \"><button id= \"hideL2 \" onclick= \"hideshowL2() \">Hide Translation</button><button onclick= \"writeTrans() \">Write New Translation</button><button onclick= \"submitTrans() \">Submit New Translation</button><button id= \"reload \" onclick= \"location.reload() \">Revert To Original Translation</button>" + htmlArray.join("\n") + "</div>";

} else {console.log("The data is not correctly formatted.") }
}

function sideBySideSentencesWriteableAlignable(f){
    var obj = $.getJSON(f);
    var alignmentData = obj.responseJSON;
    var sentenceList = alignmentData.alignment.sentence;
    var langData = alignmentData.alignment.language;
    var dirList = [];
    var lnumList =[];

    for (i = 0; i < langData.length; i++) {
        dirList.push(langData[i].dir);
        lnumList.push(langData[i].lnum);
    }

    var htmlArray =[];

    for (s=0; s < sentenceList.length; s++){

        var rowArray = [];
        var num = s+1

        for (d=0; d<dirList.length; d++){

             var num = s;
             var lN = d;
             var width = 12/(dirList.length);
             var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
             var textList = [];

            for (i = 0; i < wordList.length; i++) {

                //make this more L# friendly (multiple alignment refs allowed, etc, try with new Alpheios schema)

                    if (wordList[i].hasOwnProperty("refs")) {
                        var nrefs = wordList[i].refs.nrefs;
                        
                    }  else{

                        var nrefs = "";
                        
                    } 

                    if (!!wordList[i].text) {

                        var word = replaceAll("\"","'", wordList[i].text)
                         textList.push("<span data-n= \"" + wordList[i].n + " \" data-refs= \"" + nrefs +" \" id= \""+ lnumList[d] + "-"+wordList[i].n +" \" onmouseover= \"showCorrs(this) \" onmouseout= \"hideCorrs(this) \" class= \"word \" draggable= \"true \" ondragstart= \"drag(event) \" ondrop= \"drop(event) \" ondragover= \"allowDrop(event) \">" + word + "</span>");
                        
                    }  else{
                        
                    }

                    
            }
            rowArray.push("<div class= \"col-md-" + width +" \" data-lnum= \"" +lnumList[d] +" \" dir= \"" + dirList[d] + " \" id= \""+ s + "-" + lnumList[d]+" \">" + textList.join(" ") + "</div>");

        }
        

        htmlArray.push("<div class= \"row \" id= \""+ num +" \">" + rowArray.join("<div class= \"writeable \" contenteditable= \"true \"> <textarea></textarea> </div>") + "</div>");
    }

   return "<div class= \"container \" data-type= \"alignment-data \"><button id= \"hideL2 \" onclick= \"hideshowL2() \">Hide Translation</button><button onclick= \"writeTrans() \">Write New Translation</button><button onclick= \"submitTrans() \">Submit New Translation</button><button id= \"reload \" onclick= \"location.reload() \">Revert To Original Translation</button>" + htmlArray.join("\n") + "</div>";

}

/*function findCorrWords(alignmentData) {

    var sentenceList = alignmentData.alignment.sentence;

    var sCorrList = [];

    for (i = 0; i < sentenceList.length; i++) {

        var sList = getWordsBySentenceNumber(alignmentData, i + 1);

        

        //hack that makes it only viable for 2 langs right now

        var n = 1;

        //the functions are supposed to be human readable (ie subtract 1 from input)

        var wordNums = getLNumWordNumsBySentenceNumber(alignmentData, i + 1, n + 1);
        var wordRefList = getLNumWordRefListsBySentenceNumber(alignmentData, i + 1, n + 1);

        var corrData = getLNumWordDataBySentenceNumber(alignmentData, i + 1, n + 2);

        var wordList = getWordsBySentenceNumber(alignmentData, i + 1);
        var corrList = [];

        for (w = 0; w < wordRefList.length; w++) {

            var refList = wordRefList[w];

            var corrTextList = [];

            for (r = 0; r < refList.length; r++) {

                var corrNum = wordRefList[w][r];

                for (c = 0; c < corrData.length; c++) {

                    if (corrData[c].n == corrNum) {

                        var corrWord = corrData[c].text;
                        corrTextList.push(corrWord);
                        
                    }


                }

            }

            corrList.push(corrTextList.join(" "));

        }

        sCorrList.push(corrList);



    }

} */
