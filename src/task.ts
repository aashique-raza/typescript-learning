// const formEl=document.querySelector('form') as HTMLFormElement
const formEl = document.querySelector<HTMLFormElement>(
  ".form"
) as HTMLFormElement;
const taskListContainerEl = document.querySelector(".task-list-container")!;
// const taskItemEL = document.querySelector(".task-item")!;
const taskInputEl = document.querySelector("#task-input") as HTMLInputElement;

type Task = {
  task: string;
  isCompleted: boolean;
  id: string;
};

function getTAsks(){
    const tasks=localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : []
}

let allTask: Task[] = getTAsks();

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask: Task = {
    task: taskInputEl.value,
    isCompleted: false,
    id: Date.now().toString(),
  };

  addTask(newTask);
  renderTasks()

  taskInputEl.value = "";
});

function addTask(task: Task) {
  allTask.push(task);
  localStorage.setItem('tasks',JSON.stringify(allTask))
}




function handleCompleted(id: string) {
    const taskIndex = allTask.findIndex((task) => task.id === id);
  
    if (taskIndex !== -1) {
      allTask[taskIndex].isCompleted = !allTask[taskIndex].isCompleted;
      localStorage.setItem('tasks',JSON.stringify(allTask))
    //   console.log('Updated task', allTask[taskIndex]);
    } else {
    //   console.error('Task not found');
    }
  }

  function handleDelete(id:string){
   allTask= allTask.filter((task)=>task.id!==id)
   localStorage.setItem('tasks',JSON.stringify(allTask))
    renderTasks()
  }
  
  function handleEdit(id: string) {
    // console.log(`Editing task with ID: ${id}`);
  
    const li = document.querySelector(`li[data-id="${id}"]`) as HTMLElement;
  
    if (li) {
      const taskIndex = allTask.findIndex((task) => task.id === id);
  
      if (taskIndex !== -1) {
        const task = allTask[taskIndex];
        const p = li.querySelector('p');
        const editIcon = li.querySelector('.fa-pencil');
  
        if (p && editIcon) {
          // Create input element with the current task text
          const input = document.createElement('input');
          input.classList.add('edit-input')
          input.type = 'text';
          input.value = task.task;

  
          // Create save button
          const saveButton = document.createElement('button');
          saveButton.classList.add('save-btn')
          saveButton.textContent = 'Save';
  
          // Replace the whole content of li with the new elements
          li.innerHTML = ''; // Clear current content
          li.appendChild(createCheckbox(task.isCompleted));
          li.appendChild(input);
          
          li.appendChild(createIcons(saveButton));
  
          // Handle save button click
          saveButton.addEventListener('click', () => {
            handleSave(id, input.value);
          });
        
        }
      } else {
        console.error('Task not found');
      }
    } else {
      console.error('List item not found');
    }
  }
  
  function createCheckbox(isChecked: boolean): HTMLInputElement {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = isChecked;
    return input;
  }
  
  function createIcons(saveButton: HTMLButtonElement): HTMLElement {
    const h3 = document.createElement('h3');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');
    
    // Append icons and save button
    h3.appendChild(deleteIcon);
    h3.appendChild(saveButton);
    
    return h3;
  }
  
  
  function handleSave(id: string, newTaskText: string) {
    const taskIndex = allTask.findIndex((task) => task.id === id);
  
    if (taskIndex !== -1) {
      allTask[taskIndex].task = newTaskText;
      console.log('Updated task', allTask[taskIndex]);
      localStorage.setItem('tasks',JSON.stringify(allTask))
      // Re-render the tasks to reflect the changes
      renderTasks();
    } else {
      console.error('Task not found');
    }
  }
  
 
  

function renderTasks() {
    taskListContainerEl.innerHTML=''

    allTask.forEach((task) => {
      // Create list item
      const li = document.createElement("li");
      li.classList.add("task-item");
      li.setAttribute("data-id", task.id); // Set data-id attribute
  
      // Create checkbox
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.checked=task.isCompleted

      input.addEventListener('change',()=>{
        handleCompleted(task.id)

      })
  
      // Create task description
      const p = document.createElement("p");
      p.textContent = task.task;
  
      // Create icon container
      const h3 = document.createElement("h3");
  
      // Create delete icon
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid", "fa-trash");
      deleteIcon.addEventListener('click',()=>{
        handleDelete(task.id)
      })
  
      // Create edit icon
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pencil");

      editIcon.addEventListener('click',()=>{
        handleEdit(task.id)
      })
  
      // Append icons to h3
      h3.appendChild(deleteIcon);
      h3.appendChild(editIcon);
  
      // Append input, p, and h3 to li
      li.appendChild(input);
      li.appendChild(p);
      li.appendChild(h3);
  
      // Append li to task list container
      taskListContainerEl.appendChild(li);
    });
  }


  renderTasks()
  
