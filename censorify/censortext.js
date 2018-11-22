var censoredWords = ["sad","bad","mad"];
var customCensoredWords = ["faq"];
function censor(inStr){
    for(idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx],"***");
    }
    for(idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx],"***");
    }
    return inStr;
}
//console.log( censor("mad bad lad sad cad rad fad faqqad"));
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;