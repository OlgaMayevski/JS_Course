
//ES6
class ToDoList {

//fetchData = получить данные
    fetchData(url = '', method = '', body = {}) {  
        let init = {
            method, // method: "GET"
            mode: "cors",
            headers: {
                "Content-Type": "application/json",

            },
            body // body : { userId: 10, userName: "Ivan" }
        }

        return fetch(url)
            .then(res => res.json())
            .then(data => {
                data.splice(10, data.length - 10, 'I love SAP');
 
                console.log(data);
            })
            .catch(error => alert(`Error: ${error.name} - ${error.message}`));
    }


    
    // get
    fetchUsers() {
        const to_do_uri = 'https://jsonplaceholder.typicode.com/todos/';

        this.fetchData(to_do_uri, "GET");
    }

    // post
    createUser() {

    }

    // put
    updateUser() {

    }

    // delete
    deleteUser() {

    }

    // fillData() {
    //     const data = this.fetchUsers();

    // }
}

const toDoList = new ToDoList();
toDoList.fetchUsers();

// 1. Get data
// 2. Get table and then table body
// 3. Create loop with data for (let i = 0; i < data.length; i++ )
// 4. In loop you create new row with 