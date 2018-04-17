$(document).ready(initializeApp);

function initializeApp(){
    addClickHandlersToElements();
}

function addClickHandlersToElements(){
    $("button").on('click',submitForm);
    $('.close').on('click',function(){
        $('.modal').hide();
        $('.modal-overlay').hide();
    });
    $('.modal-overlay').on('click',function(){
        $('.modal').hide();
        $('.modal-overlay').hide();
    });
}

function showModal(){
    $(".modal").show();
    $(".modal-overlay").show();
}


function submitForm(){
    debugger;
    $("input").css('background-color','#fff');
    $("textarea").css('background-color','#fff');
    var inputContentArray =[$(".email"), $('.subject'), $(".name"),  $(".message")];
    for(var inputValueIndex =0; inputValueIndex<inputContentArray.length; inputValueIndex++) {
        if (inputContentArray[inputValueIndex][0].value==="") {
            var incompleteInput = inputContentArray[inputValueIndex][0];
            var modalErrorMessage = `Please complete all input fields before submitting your inquiry.`;
            handleIncompleteInput(incompleteInput, modalErrorMessage);
            showModal();
        }
        else if ($(".email")[0].value.indexOf("@") < 0) {
            $(".modal p").text(`Please enter a valid email address`);
            var incompleteInput = inputContentArray[inputValueIndex][0];
            handleIncompleteInput(incompleteInput);
            showModal();
        }
    }
    var fullName = $(".name")[0].value;
    var emailAddress = $('.email')[0].value;
    var subject = $(".subject")[0].value;
    var message = $(".message")[0].value;
    var customerInquiry = {name: fullName, email: emailAddress, subject: subject, message: message};
    $('.form-control').css('backgroundColor','#ffffff');
    console.log(customerInquiry);
}

function handleIncompleteInput(element, message) {
    console.log(element);
    $(element).css('background-color', 'rgb(255, 153, 153)');
    $(".modal p").text(message);
}