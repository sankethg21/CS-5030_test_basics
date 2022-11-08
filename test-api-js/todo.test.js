

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo", () => {
        expect(todo_service.add_todo({ "title": "ZEN",
            "description": "LION",
            "done": true
    })).toEqual(
        { "title": "ZEN",
        "description": "LION",
        "done": true
    });
    });
     
    

    // const testAddition = [{
    //     "title": "T1",
    //     "description": "D100",
    //     "done": false
    // },
    // {
    //     "title": "T2",
    //     "description": "D100",
    //     "done": false
    // },
    // {
    //     "title": "T3",
    //     "description": "D100",
    //     "done": false
    // }];

    // const testUpdation = [{
    //     "title": "T1",
    //     "description": "D101-Sanketh",
    //     "done": false
    // },{
    //     "title": "T1",
    //     "description": "D102",
    //     "done": false
    // },{
    //     "title": "T1",
    //     "description": "D103",
    //     "done": false
    // }];
    // testAddition.forEach(function(obj)
    // {
    //     todo_service.add_todo(obj);
    // })

    // let cout = 0;
    // testUpdation.forEach(function(obj)
    // {
    //     todo_service.update_todo(cout, obj);
    //     cout += 1;
    // })

    // // todo_service.add_todo(testAddition);
    // // todo_service.update_todo(3, testUpdation);
    // todo_service.delete_todo(3);
    // todo_service.delete_todo(2);
    // todo_service.delete_todo(1);

});
