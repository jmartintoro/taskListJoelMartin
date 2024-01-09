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
    $("ul").append(newelem);
    $("ul").listview('refresh');
}
