/*	
	AdBlocks
	- https://gist.github.com/6174/6062387
	- https://www.detectadblock.com/
	- https://yuukithemes.com/
*/

var mesg1=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
var mesg2=Math.random().toString(36).substring(2, 7);
var e=document.getElementById("money");e.setAttribute("id", mesg1);
e.classList.add("money_" + mesg2);
if (!window.showAds) {
	document.getElementById('message').style.display = "table";
}