


window.addEventListener('load', () => {
    const form = document.querySelector("#gj-task-form");
    const input = document.querySelector("#gj-task-input");
    const list_el = document.querySelector("#goals");

    form.addEventListener('submit', (e) => {
        e.preventDefault();                 //this line prevents the page from refreshing
                                            //when submit button is clicked.


        


        const goal = input.value;
        
        if (!goal) 
        {
          alert("Please enter your Goal");
          return;  
        }

        const goal_el = document.createElement("div");
        goal_el.classList.add("goal");

        const goal_content_el = document.createElement("div");
        goal_content_el.classList.add("content");

        goal_el.appendChild(goal_content_el);

        const goal_input_el = document.createElement("input");
        goal_input_el.classList.add("text");
        goal_input_el.type = "text";
        goal_input_el.value = goal;
        goal_input_el.setAttribute("readonly", "readonly");


        goal_content_el.appendChild(goal_input_el);
        const goal_actions_el = document.createElement("div");
        goal_actions_el.classList.add("actions");
        const goal_edit_el = document.createElement("button");
        goal_edit_el.classList.add("edit");
        goal_edit_el.innerHTML = "Edit";

        const goal_delete_el = document.createElement("button");
        goal_delete_el.classList.add("delete");
        goal_delete_el.innerHTML = "Delete";

        goal_actions_el.appendChild(goal_edit_el);
        goal_actions_el.appendChild(goal_delete_el);

        goal_el.appendChild(goal_actions_el);

        list_el.appendChild(goal_el);

        input.value = "";

        goal_edit_el.addEventListener('click', () => {
            if (goal_edit_el.innerText.toLowerCase() == 
            "edit") {
                goal_input_el.removeAttribute("readonly");
                goal_input_el.focus();
                goal_edit_el.innerText = "Save";
            }
            else 
            {
                goal_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        })

        goal_delete_el.addEventListener('click', () => {
            list_el.removeChild(goal_el);
        })
        
    })
})

