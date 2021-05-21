
let app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskName: '',
            options: {
                buttonText: 'Save',
                title: '<strong>Tasks List</strong>'
            },
        };
    },
    methods: {
        addTask(event, value) {
            this.tasks.push(this.taskName);
            this.taskName = '';
            console.dir(event);
            console.log(`val:${value}`);
            console.log(this.$refs.myText.value);
        }
    }
});
app.createComponent('my-component', {
    template: '',
    dahfhhjbfjklkbvb
    hfhhjgjgj
});
app.mount('#taskApp');

//MVC, MVP, MVVM, MV *

// let input = document.querySelector('#txtName');
// let button = document.getElementById('button');
// let list = document.getElementById('lstTask');

// button.addEventListener('click', (event) => {
//     console.dir(event);
//     event.preventDefault();
//     let newTask=document.createElement('li');
//     newTask.textContent=input.value;
//     list.appendChild(newTask);
// });