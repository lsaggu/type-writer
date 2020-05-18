//global vars
var text = []; //this is the text that has been captured and is to be recorded and played back
var player;
var audioPlayer = document.getElementById('audio_player');

// on page load
$(document).ready(() => {
    console.log('Home page loaded');

    $("#menu_item_home").addClass("active");

});


//function to be run every time the user enters a character into the text input area
function handleTextInput(event) {
    if (text.length >= 1000) {
        $('#error_message').text('You have reached the recording character limit of 2500 characters. Additional characters will not be included. Please click on Reset to clear your entry and start over');
        $('#error_message').removeClass('d-none');
        return;
    }

    event = event || window.event;
    var code = event.charCode || event.keyCode; //event.key;
    
    text.push(code);
}

//function for input of whitespace keys (backspace, enter, delete)
function handleWhiteSpaceInput(event) {
    if (text.length >= 1000) {
        $('#error_message').text('You have reached the recording character limit of 2500 characters. Additional characters will not be included. Please click on Reset to clear your entry and start over');
        $('#error_message').removeClass('d-none');
        return;
    }

    //backspace: 8
    //enter: 13
    //delete: 46

    event = event || window.event;
    var code = event.charCode || event.keyCode;

    if (code === 8) { //only handling backspace at this time
        text.push(code);
    }
    
}

//save a recording of the text that was entered into the text input
function save() {
    //check if text input is empty
    if ($('#text_input').val() == null || $('#text_input').val() == '') {
        $('#text_input').addClass('error');

        return;
    }

    $('#text_input').removeClass('error');

    $('#player_output').text(null); //clear existing text


    //start typing sound effect
    audioPlayer.play();

    //type text
    type(text);

    //save the recording
    $.post("/save", { recording: text }, function (data) {
        console.log(data);

    }).catch((error) => {
        console.log('error');
        console.log(error);

        $('#error_message').text('There was an issue with your request...');
        $('#error_message').removeClass('d-none'); //show error message
    })
}

//reset the recorder
//this function will clear the text array and reset UI elements
function reset() {
    console.log('reset');

    clearTimeout(player); //stop playback

    text = []; //clear text array
    $('#text_input').val(null); //empty text input
    $('#player_output').text('Nothing recorded yet...');

    $('#error_message').text('');
    $('#error_message').addClass('d-none'); //clear error message

    //stop typing sound effect
    audioPlayer.pause();
    audioPlayer.currentTime = 0; //restart audio clip

}

//recursive function for "typing text" on the screen
function type(chars) {
    if (chars.length === 0) {
        //stop typing sound effect
        audioPlayer.pause();
        audioPlayer.currentTime = 0; //restart audio clip

        return;
    }

    var char = chars[0];

    if (char === 8) { //handle backspace
        let printedText = $('#player_output').html();
        if (printedText.slice(0, -6) === '<br />') { //remove newline
            $('#player_output').html(printedText.substring(0, printedText.length - 6));
        } else {
            $('#player_output').html(printedText.substring(0, printedText.length - 1));
        }
    } else if (char === 13) { //handle newline
        $('#player_output').append('<br />');
    } else {
        $('#player_output').append(String.fromCharCode(char));
    }

    player = setTimeout(() => {
        type(chars.slice(1));
    }, 200); //length of time (milliseconds) to wait between printing characters
}

