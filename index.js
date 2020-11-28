function changeValues(){
    var slider = document.getElementById("one");

    slider.value = 98;
}

/*var footerQuotes = ["Tabs over spaces.", "Not crazy, opposite.", "Parantheses start in the same line as the function declaration.", "Unix-like operating systems. Period.", "Honestly, either vim or emacs works."];

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
}*/

// window.onload = () => {
// 	document.getElementById('loadingmask').style.display = 'none';
// 		VANTA.NET({
// 		  el: "#container",
// 		  color: 0x8dc9eb,
// 		  backgroundColor: 0xffffff,
// 		  points: 9,
// 		  maxDistance: 15.00,
// 		  spacing: 16.00
// 		});
// 	}

// var media = window.matchMedia("(max-width: 768px)");

// //Make background a little less dense when on mobile
// function backgroundChange(media){
// 	if(media.matches){
// 		VANTA.NET({
// 		  el: "#container",
// 		  color: 0x8dc9eb,
// 		  backgroundColor: 0xffffff,
// 		  points: 9,
// 		  maxDistance: 8.00,
// 		  spacing: 16.00
// 		});
// 	} else{
// 		VANTA.NET({
// 		  el: "#container",
// 		  color: 0x8dc9eb,
// 		  backgroundColor: 0xffffff,
// 		  points: 9,
// 		  maxDistance: 15.00,
// 		  spacing: 16.00
// 		});
// 	}
// }

// backgroundChange(media)
// media.addListener(backgroundChange)