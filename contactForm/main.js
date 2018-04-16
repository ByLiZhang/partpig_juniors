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
    $('.close').on('click',function(){
        $('.modal').hide();
        $('.modal-overlay').hide();
    });
    $('.modal-overlay').on('click',function(){
        $('.modal').hide();
        $('.modal-overlay').hide();
    });
    $("button").on('click',submitForm);
}
function showModal(){
    $(".modal").show();
    $(".modal-overlay").show();
}

function submitForm(){
    debugger;
    if( $(".email")[0].value==="" || $('.subject')[0].value==="" || $(".name")[0].value==="" || $(".message")[0].value===""){
        $(".modal p").text(`Please complete all input fields before submitting your inquiry.`)
        handleIncompleteInput();
        showModal();
        return;
    }
    else if($(".email")[0].value.indexOf("@")<0){
        $(".modal p").text(`Please enter a valid email address`);
        handleIncompleteInput();
        showModal();
        return;
    }
    var fullName = $(".name")[0].value;
    var emailAddress = $('.email')[0].value;
    var subject = $(".subject")[0].value;
    var message = $(".message")[0].value;
    var customerInquiry = {name: fullName, email: emailAddress, subject: subject, message: message};
    $('.form-control').css('backgroundColor','#ffffff');
    console.log(customerInquiry);
}

function handleIncompleteInput(){
    $("input").css('background-color','rgb(255, 153, 153)');
}