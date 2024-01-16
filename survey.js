

let form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	document.querySelector("#submit").value="Submitting...";
	let data = new FormData(form);
	fetch('https://script.google.com/macros/s/AKfycbyfWhEuYPJOQ1t10GWeTHTnq9G8NobsVXzGuJIKyVtoVXyq5nI6qAS454JJgnqe2-MZ/exec', {
		method:"POST",
		body:data
	})
	.then(res => res.text())
	.then(data => {
		window.location.href = "result.html";
		document.querySelector("#submit").value="Submit";
	});
})
