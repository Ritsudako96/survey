

let form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	document.querySelector("#submit").value="Submitting...";
	let data = new FormData(form);
	fetch('https://script.google.com/macros/s/AKfycbyFHpyGmjChD7z1eE4vnroaeVuqpn6L4WuMt5jszloYCxNPgwXE2G5XGz5KkZexs7o5/exec', {
		method:"POST",
		body:data
	})
	.then(res => res.text())
	.then(data => {
		window.location.href = "result.html";
		document.querySelector("#submit").value="Submit";
	});
})
