fetch('../../backend/projects.json')
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			console.error(`Error cuando se fetcheo`);
		}
	})
	.then((data) => {
		console.log(data);
	})
	.catch((e) => {
		console.log(e);
	});
