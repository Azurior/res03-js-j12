let App = {  
    data() {  
        return {  
            tasks : [  
  
            ]  
        }  
    },  
    methods : {  
        addTask (event) {  
            let value = event.target.elements.task.value;  
            this.tasks.push(value);
        },
        removeTask(){
            
        }
    }  
}

export { App };