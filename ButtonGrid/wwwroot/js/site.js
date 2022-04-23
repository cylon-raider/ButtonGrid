$(function () {
    console.log("Page is ready");

    // this works for all .game-button elements that were initially loaded
    // but will not be bound to any dynamically created buttons.    
    //$(".game-button").click(function (event) {

    // this works for any .game-button elements found on the document,
    // even if they were dynamically created. 
    // the click listener is attached to the document (ie. the body of the page)
    //$(document).on("click", ".game-button", function (event) {
    //   event.preventDefault();

    //    var buttonNumber = $(this).val();
    //    console.log("Button number " + buttonNumber + " was clicked");
    //    doButtonUpdate(buttonNumber);
    //})
    

    $(document).on("mousedown", ".game-button", function (event) {

        event.preventDefault();
        switch (event.which) {
            case 1:
                var buttonNumber = $(this).val();
                console.log("Button number " + buttonNumber + " was left clicked");
                doButtonUpdate(buttonNumber, 'button/ShowOneButton');
                break;
            case 2:
                alert('Middle mouse button is pressed');
                break;
            case 3:
                var buttonNumber = $(this).val();
                console.log("Button number " + buttonNumber + " was right clicked");
                doButtonUpdate(buttonNumber, 'button/RightClickShowOneButton');
                break;
            default:
                alert('Nothing');
        }
    })

    $(document).bind("contextmenu", function (e) {
        e.preventDefault();     
        console.log("Right click. Prevent context menu from showing.")
    })


    function doButtonUpdate(buttonNumber, urlString) {
        $.ajax({
            datatype: "json",
            method: 'POST',
            url: urlString,
            data: {
                "buttonNumber": buttonNumber
            },
            success: function (data) {
                console.log(data);
                $("#" + buttonNumber).html(data);
            }
        })
    }
})