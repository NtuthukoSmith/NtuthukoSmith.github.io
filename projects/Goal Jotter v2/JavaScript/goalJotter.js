window.addEventListener('load', () => {
	gratus = JSON.parse(localStorage.getItem('gratus')) || [];
	const nameInput = document.querySelector('#name');
	const newGreatForm = document.querySelector('#new-gr8-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

	newGreatForm.addEventListener('submit', e => {
		e.preventDefault();

		const great = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		gratus.push(great);

		localStorage.setItem('gratus', JSON.stringify(gratus));

		// Reset the form
		e.target.reset();

		DisplayGratus()
	})

	DisplayGratus()
})

function DisplayGratus () {
	const appreciationList = document.querySelector('#appreciation-list');
	appreciationList.innerHTML = "";

	gratus.forEach(great => {
		const greatItem = document.createElement('div');
		greatItem.classList.add('great-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = great.done;
		span.classList.add('bubble');
		if (great.category == 'out') {
			span.classList.add('out');
		} else {
			span.classList.add('in');
		}
		content.classList.add('great-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${great.content}" readonly>`;
		edit.innerHTML = 'edit';
		deleteButton.innerHTML = 'delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		greatItem.appendChild(label);
		greatItem.appendChild(content);
		greatItem.appendChild(actions);

		appreciationList.appendChild(greatItem);

		if (great.done) {
			greatItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			great.done = e.target.checked;
			localStorage.setItem('gratus', JSON.stringify(gratus));

			if (great.done) {
				greatItem.classList.add('done');
			} else {
				greatItem.classList.remove('done');
			}

			DisplayGratus()

		})



		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				great.content = e.target.value;
				localStorage.setItem('gratus', JSON.stringify(gratus));
				DisplayGratus()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			gratus = gratus.filter(t => t != great);
			localStorage.setItem('gratus', JSON.stringify(gratus));
			DisplayGratus()
		})

	})
}