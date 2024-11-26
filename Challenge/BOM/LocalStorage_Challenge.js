// Challenge Link ==> https://www.youtube.com/watch?v=LzKt8GaoFMs

const stickyNotes = () => {
	const form = document.forms[0];
	const inputField = document.getElementById("input-field");
	const tasksWrapper = document.querySelector(".tasks");
	let randomIdNumber;

    // IF There Are Item In Local Storage  ->  Do Div For Them
	if (localStorage.Tasks) renderElements(false, JSON.parse(localStorage.Tasks));

	form.onsubmit = (e) => {
		e.preventDefault();
		if (inputField.value.trim() === "") return;
		randomIdNumber = Date.now();
		renderElements(true);  // Add Div For Them
		addToLocalStorage();   // Add To Local Storage
	};

	
	// Update DOM and Locale Storage
	document.addEventListener("click", (e) => {
		if (!e.target.matches("#delete, .task")) return;
		if (e.target.matches("#delete")) {
			e.target.parentElement.remove();
		} 
        else {
            e.target.classList.toggle("done");
        }
		updateLocalStorage();
	});

	function renderElements(newElement, elements) {
		// Add a new element to the DOM.
		if (newElement) {
			let task = document.createElement("div");
			task.className = "task";
			task.setAttribute("data-id", randomIdNumber);
			task.textContent = inputField.value;

			let del = document.createElement("button");
			del.id = "delete";
			del.textContent = "Delete";

			task.append(del);
			tasksWrapper.append(task);
			return;
		}
		// Render elements which are stored in the localStorage.
		elements.forEach((el) => {
			let task = document.createElement("div");
			task.classList.add("task");
			task.setAttribute("data-id", el.id);
			if (el.done) {
                task.classList.add("done");
            }
			task.textContent = el.title;
			let del = document.createElement("button");
			del.id = "delete";
			del.textContent = "Delete";
			task.append(del);
			tasksWrapper.append(task);
		});
	}

	function addToLocalStorage() {
		let currentTask = {
			id: randomIdNumber,
			title: inputField.value,
			done: false
		};
		inputField.value = "";
		if (localStorage.Tasks) {
			localStorage.setItem(
				"Tasks",
				JSON.stringify([...JSON.parse(localStorage.Tasks), currentTask])
			);
		} 
        else {
			localStorage.setItem("Tasks", JSON.stringify([currentTask]));
		}
	}

	function updateLocalStorage() {
		let updatedTasks = [...tasksWrapper.children].map((task) => {
			return {
				id: +task.getAttribute("data-id"),
				title: task.firstChild.textContent,
				done: task.classList.contains("done")
			};
		});
		if (updatedTasks.length !== 0) {
			localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
		} else localStorage.removeItem("Tasks");
	}
};

stickyNotes();
