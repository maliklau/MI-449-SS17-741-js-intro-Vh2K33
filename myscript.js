var kick = document.getElementById("audio");
var tiss = document.getElementById("audio1");
var boom = document.getElementById("audio2");
var chiss = document.getElementById("audio3");

var kickbutt = document.getElementById("buttonkick");
var tissbutt = document.getElementById("buttontiss");
var boombutt = document.getElementById("buttonboom");
var chissbutt = document.getElementById("buttonchiss");

kickbutt.addEventListener('click',function(){kick.play()});
tissbutt.addEventListener('click',function(){tiss.play()});
boombutt.addEventListener('click',function(){boom.play()});
chissbutt.addEventListener('click',function(){chiss.play()});

kickbutt.addEventListener('mouseenter', function(){kick.play()});
chissbutt.addEventListener('mouseenter', function(){chiss.play()});
tissbutt.addEventListener('mouseenter', function(){tiss.play()});
boombutt.addEventListener('mouseenter', function(){boom.play()});
