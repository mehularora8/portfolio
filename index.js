var footerQuotes = ["Tabs over spaces.", "Not crazy, opposite.", "Parantheses start in the same line as the function declaration.", "Unix-like operating systems. Period.", "Honestly, either vim or emacs works."];

function appendChar(txt){
	if (txt.length > 0) {
	console.log(txt);
    document.getElementById("footer").innerHTML += txt[0];
    txt = txt.substring(1);
    setTimeout(function(){
    	appendChar(txt);
    }, 30);
  }
}

function typewriter(){
	document.getElementById("footer").innerHTML = "";
	let text = footerQuotes[Math.floor(Math.random() * footerQuotes.length)];
	appendChar(text);
}

window.onload = function() {
		VANTA.NET({
		  el: "#container",
		  color: 0xff3f81,
		  backgroundColor: 0x0,
		  maxDistance: 18.00
		});
		typewriter();
		setInterval(typewriter, 5000);
	}

