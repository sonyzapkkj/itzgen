  (function(){
    var oldLog = console.log;
    console.log = function (message) {
        document.getElementById('a').value += message
        oldLog.apply(arguments);
    };
})();

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
var textarea = document.getElementById('a')
if (navigator.userAgent.indexOf('Mobile') !== -1) { document.getElementById('save').style.display = "none"; textarea.style.height = "100px";
}// mobile (start nao funciona)
function generate() {
var triesPerSecond = document.getElementById('speed').value //explanar tua mae
getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 24; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    console.log('[SZPGen]' + ' https:/' + '/discord.gift/' + code + "\n");
    code += '\n'
    document.getElementById('b').value += code;

} //generates codes


getGiftCode();
document.getElementById('stop').addEventListener("click", stop); //botao do paro
function stop() {
  clearInterval(gInterval);
  clearInterval(interval)
} //fazer paro scroll loop
var gInterval = setInterval(() => {getGiftCode();}, (500/triesPerSecond) * 1);
//repetir codigos 🐊🤙

function scroll() {
  document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight
}; // auto scroll
var interval = setInterval(scroll, 100) //scrool
document.getElementById('clear').addEventListener("click", stop);
}

document.getElementById('generate').addEventListener("click", generate);
