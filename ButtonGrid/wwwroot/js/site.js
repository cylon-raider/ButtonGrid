$(function () {
    console.log("Page is ready");

    // this works for all .game-button elements that were initially loaded
    // but will not be bound to any dynamically created buttons.    
    //$(".game-button").click(function (event) {

    // this works for any .game-button elements found on the document,
    // even if they were dynamically created. 
    // the click listener is attached to the document (ie. the body of the page)
    $(document).on("click", ".game-button", function (event) {
        event.preventDefault();

        var buttonNumber = $(this).val();
        console.log("Button number " + buttonNumber + " was clicked");
        doButtonUpdate(buttonNumber);
    })


    function doButtonUpdate(buttonNumber) {
        $.ajax({
            datatype: "json",
            method: 'POST',
            url: '/button/ShowOneButton',
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