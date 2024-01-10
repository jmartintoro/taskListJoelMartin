// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    init();
}

function init() {
    $("#addTask").click(addTask)
}

function addTask() {
    result = window.prompt("Escriu la nova tasca", "new task");
    var newelem = $("<li>"+ result + "</li>");

    var delButton = $("<button id=\"delButton\" >del</button>");
    delButton.click(delTask);
    delButton.css('float','right');

    newelem.append(delButton);
    $("ul").append(newelem);
    $("ul").listview('refresh');
}

function delTask(e) {
    var caller = e.target;
    $(caller).parent().remove();
}