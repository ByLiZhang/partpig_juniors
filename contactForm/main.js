$(document).ready(initializeApp);

// function addClickHandlersToElements(){
//     $("button").on('click',submitForm);
//     $('.close').on('click',function(){
//         $('.modal').hide();
//         $('.modal-overlay').hide();
//     });
//     $('.modal-overlay').on('click',function(){
//         $('.modal').hide();
//         $('.modal-overlay').hide();
//     });
// }
function initializeApp(){
    addClickHandlersToElements();
}

function addClickHandlersToElements(){
    // $("button").on('click',submitForm);
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
    var inputContentArray =[$(".email"), $('.subject')[0].value, $(".name")[0].value,  $(".message")[0].value];
    for(var inputValueIndex =0; inputValueIndex<inputContentArray.length; inputValueIndex++) {
        console.log("ok");
        if (inputContentArray[inputValueIndex][0].value==="") {
            var incompleteInput = inputContentArray[inputValueIndex];
            var modalErrorMessage = `Please complete all input fields before submitting your inquiry.`;
            // $(".modal p").text(`Please complete all input fields before submitting your inquiry.`);
            handleIncompleteInput(incompleteInput, modalErrorMessage);
            showModal();
            // return;
        }
        else if ($(".email")[0].value.indexOf("@") < 0) {
            $(".modal p").text(`Please enter a valid email address`);
            handleIncompleteInput();
            showModal();
            return;
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
    element.css('background-color', 'rgb(255, 153, 153)');
    $(".modal p").text(message);
}