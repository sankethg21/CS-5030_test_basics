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
        this.todo_data.todo.shift();
        // const ele1= this.todos.todo.length();
        return this.todos

    }

    update_todo(id, todo){
        // Your code here
        this.todo_data.todo[id] = todo;
        const ele3 = this.todos.todo[1];
        return ele3;

    }
}


module.exports= todoservice;
