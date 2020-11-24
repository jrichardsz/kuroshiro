var fs = require('fs');
var parseSRT = require('parse-srt')

//http://www.romajidesu.com/translator

const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

var subtitleOriginLines = fs.readFileSync('Attack-on-Titan.S01E01.JA.srt', 'utf8').toString();
var jsonSubs = parseSRT(subtitleOriginLines);
var ana = new KuromojiAnalyzer();

kuroshiro.init(ana)
.then(function () {
  var count = 0;
  jsonSubs.forEach(async function(subtitleMetadata){
    var result = await kuroshiro.convert(subtitleMetadata.text, { to: "romaji", mode: "spaced", romajiSystem: "passport" });
    subtitleMetadata.romaji = result;
    if(count == 302){
      console.log(jsonSubs);
    }
    count++;
  });  
})
