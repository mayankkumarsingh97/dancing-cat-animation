



setTimeout(() => {
	const mainEnvelop = document.querySelector('.fullenvelop');
	// console.log(mainEnvelop);
	mainEnvelop.style.zIndex = "3";
	const outflap = document.querySelector('.outerflap');
	outflap.style.zIndex = "10";

	// console.log(outflap);

	// mainEnvelop.style.transition="zIndex .2s ease-out";
}, 5000);


setTimeout(function f3() {
	const mainEnvelop = document.querySelector('.fullenvelop');
	mainEnvelop.style.zIndex = "21"

}, 6500);

setTimeout(() => {
	const outflap = document.querySelector('.outerflap');
	const content = document.querySelector('.content');
	// content.style.zIndex="22";
	outflap.style.transform = "rotateX(180deg)";
	content.style.zIndex = "4";
	outflap.style.transition = "all 1.2s linear";


}, 8500);

setTimeout(() => {

	const content = document.querySelector('.content');


	content.style.transition = "all 2.3s ease-out 1s";
	content.style.transform = "translateY(-420px)";
	// content.style.top="1%";
	// content.style.className="dAdd";

	const outer = document.querySelector('.outerflap');
	outer.style.zIndex = "-20";



}, 9500);
setTimeout(() => {
	const background = document.querySelector('.background');
	const content = document.querySelector('.content');
	content.style.transition = "all 2.3s linear";
	document.querySelector('.fullenvelop').style.zIndex = "-20";
	background.style.zIndex = "-22";
	content.style.transform = "translateY(1px)";

}, 12500);



