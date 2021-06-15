questionFirst = $('[data-question]:first').attr('data-question');
$('#chatList ul').append('<li class = "admin-message">'+ questionFirst+'</li>');
$('[data-question]:first').appendTo('.message-box');
$('#send').click(function(event){
    questtionVal = $('.message-box [data-question]').val();
    $("#chatList ul").append('<li class="client-message">'+questtionVal+'</li>')
    dataName = $('.admin-client-message-wrap [data-name]').attr('data-question');
    if($('.message-box [name]').attr('name')== "name"){
        nameVal = $('.message-box [name]').val();
        $('.admin-client-message-wrap [data-name]').attr('data-question',"Hi "+nameVal+",</br>"+dataName);
    }
       $('.message-box [data-question]').appendTo('.submit_info');

if($('.admin-client-message-wrap').children().length !=0){
    questionFirst = $('[data-question]:first').attr('data-question');
$('#chatList ul').append('<li class = "admin-message">'+ questionFirst+'</li>');
$('[data-question]:first').appendTo('.message-box');
}

})
$("#confirm").click(function(event){
    
    $('#submit').trigger('click');
});
$("#notconfirm").click(function(event){
    location.reload();
});
$('chat_icon').click(function(event){
    $('.chatbot-box').toggleClass('active');
})
$('.message-box [data-question]').bind('click change keyup',function(event){
    if($(this).val()==""){
        $('#send').css({"pointer-event":"none"});
    }
    else{
        $('#send').css({"pointer-event":"auto"});
    }
})