var textarea = $('.term');
var speed = 150; //Writing speed in milliseconds
var text = 'whois andrewbodzsar.com';

var i = 0;


timeFunction();

function timeFunction() {
  setTimeout(runner, 500);
}

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function () {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function () { feedbacker(); }, 1000);
      }
    }, 70);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append(output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append(output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append(output[i] + "<br>");
    i++;
    textarea.append(output[i] + "<br>");
    i++;
    textarea.append(output[i] + "<br>");
  }
  i++;
  count += time;
  setTimeout(
    function () {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function () { $(".load").fadeOut(1000); }, 2000);
      }
    }, 200);
}


var output = [
  "IANA WHOIS server",
  "This query returned 1 object",
  "Domain name: andrewbodzsar.com",
  "Domain ID: 1934417450_DOMAIN_COM-VRSN",
  "Name Server: ...",
  "Registrant e-mail: abodzsar29@gmail.com",
  "Registrant Mobile: 07951187359",
];