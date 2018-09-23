function showText (el) {
	if(el.previousElementSibling.clientHeight === 80) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Показати менше...";
	} else {
		el.previousElementSibling.style.height = "80px";
		el.innerHTML = "Показати більше...";
	}
}