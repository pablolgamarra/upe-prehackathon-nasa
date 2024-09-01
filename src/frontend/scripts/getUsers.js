fetch('../../backend/projects.json')
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			console.error(`Error cuando se fetcheo`);
		}
	})
	.then((data) => {
		const contentDiv = document.getElementById('content');
		data.forEach((item) => {
			const div = document.createElement('div');
			div.classList.add('card-container');
			div.innerHTML = `<div class=card>
            <h3 class="card-title">
            ${item.Software}</h3>
            <p class card-description>${item.Description}</p>
            </h3>
            </div>`;
			contentDiv.appendChild(div);
		});
	})
	.catch((e) => {
		console.log(e);
	});
