var url = "https://my-json-server.typicode.com/HannaYurkavets/Web-Technologies-for-SAP-HANA-CloudPlatform-/posts/";

function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {    // =200 - success  ; !=200  - figova
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        var array = JSON.parse(xhr.responseText);
        var table = '<table>';
        table += '<th>- ID -</th><th>- Title -</th><th>- Delete -</th><th>- Edit -</th>';
        for (var i in array) {
            table += '<tr><td>' +
                array[i]['id'] + '</td><td>' +
                array[i]['title'] + '</td><td><button id="' + array[i]['id'] + '" onclick="delRequest(this.id)">- Delete -</button></td>' +
                '</td><td><button id="' + array[i]['id'] + '" onclick="putRequest(this.id)">- Edit -</button></td></tr>';

        }
        table += '</table>';
        document.getElementById('table').innerHTML = table;
    }
}

function postRequest() {

    var xhr = new XMLHttpRequest();

    var obj = {};
    obj.id = document.getElementById('id').value;
    obj.title = document.getElementById('title').value;
    var json = JSON.stringify(obj);

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(json);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "201") {
            getRequest();
            alert("Record have been created\nResponse status: "+xhr.status
                   +"\n"+xhr.responseText);
        }
    }
    xhr.onerror = function () {
        alert('Error:' + xhr.status);
    }
}

function delRequest(row_id) {
    var new_url = url + row_id;
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", new_url);
    xhr.send();

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            getRequest();
            alert("Record have been deleted\nResponse status: "+xhr.status);
        }
    }

    xhr.onerror = function () {
        alert('Error ' + xhr.status);
    }
}

function putRequest(row_id) {
    var new_url = url + row_id;
    var xhr = new XMLHttpRequest();
    var put_obj = {};
    put_obj.id = document.getElementById('id').value;
    put_obj.title = document.getElementById('title').value;
    var json = JSON.stringify(put_obj);
    xhr.open("PUT", new_url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(json);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            alert("Record have been updated\nResponse status: "+xhr.status
            +"\n"+xhr.responseText);
        }
    }
    xhr.onerror = function () {
        alert('Error:' + xhr.status);
    }

}