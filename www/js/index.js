// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var tasks = [];

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    init();
}

function init() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (tasks.length > 0) {
        addTasks();
    }
    $("#addTask").click(addTask)
}

function addTask() {
    result = window.prompt("Escriu la nova tasca", "new task");
    tasks.push(result);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    var newelem = $("<li>"+ result + "</li>");

    var delButton = $("<button id=\"delButton\" >del</button>");
    delButton.click(delTask);
    delButton.css('float','right');

    var editButton = $("<button>edit</button>");
    editButton.click(editTask);
    editButton.css('float','right');
    editButton.css('margin-right','10px');

    newelem.append(delButton);
    newelem.append(editButton);

    $("ul").append(newelem);

    $("ul").listview('refresh');
}

function delTask(e) {
    var caller = e.target;
    $(caller).parent().remove();
}

function editTask(e) {
    var caller = e.target;
}

function addTasks() {
    for (var i = 0; i < tasks.length; i++) {
        var newelem = $("<li>"+ tasks[i] + "</li>");

        var delButton = $("<button id=\"delButton\" >del</button>");
        delButton.click(delTask);
        delButton.css('float','right');

        var editButton = $("<button>edit</button>");
        editButton.click(editTask);
        editButton.css('float','right');
        editButton.css('margin-right','10px');

        newelem.append(delButton);
        newelem.append(editButton);

        $("ul").append(newelem);

        $("ul").listview('refresh');
    }
}