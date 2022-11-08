class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        console.log(this.todo_data);
        this.todo_data.todo.push(todo);
        console.log(this.todo_data);
        const ele = this.todos.todo[3];
        return ele ;
    }

    delete_todo(){
        // Your code here
        
    }

    update_todo(id, todo){
        // Your code here
    
    }
}


module.exports= todoservice;
