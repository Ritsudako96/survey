

let form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	document.querySelector("#submit").value="Submitting...";
	let data = new FormData(form);
	fetch('https://script.google.com/macros/s/AKfycbxSmFVOZvHpcNIginVgc6fmum4q2i8fuwZbQPdn0SftfGSPQ3aGEwK5QLAFwfrLnvEt/exec', {
		method:"POST",
		body:data
	})
	.then(res => res.text())
	.then(data => {
		window.location.href = "result.html";
		document.querySelector("#submit").value="Submit";
	});
})