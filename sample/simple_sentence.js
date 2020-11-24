const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

kuroshiro.init(new KuromojiAnalyzer())
.then(function () {
    return kuroshiro.convert("シンゲキ ノ キョジン", { to: "romaji", mode: "spaced", romajiSystem: "passport" });
})
.then(function(result){
    console.log(result);
})
