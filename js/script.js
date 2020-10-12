function checkNotNull(value){
    if(value == "username"){
        return true;
    }else{
        return false;
    };
}
function myFunction() {
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if ((username) && (email)) {

        alert(username + ",We have received your message. Thank you for reaching out to us");
    } else {
        alert("Please Enter you email address")
    }
$(document).ready(function(){
    
    $('#design').click(function(){
        $('#design-img').toggle();
        $('#design-txt').toggle();
    });

    $('#development').click(function(){
        $('#development-img').toggle();
        $('#development-txt').toggle();
    });

    $('#product').click(function(){
        $('#product-img').toggle();
        $('#product-txt').toggle();
    });

    var days = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    days.forEach(function(day){
        $('#'+day).hover(function(){
            $('.'+day).toggle();
        });
    });

    $('form.validate').submit(function(event){
        var user = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if(checkNotNull(username) || checkNotNull(email) || checkNotNull(message)){
            danger(username, email, message);
        }else{
            removeDanger();
            alert('Thank you '+user+' for reaching out. We will get back to you.');
        }
    });
});
function danger(username, email, message){
    if(checkNotNull(username)){
        $('#username').addClass('danger');
    }else{
        $('#username').removeClass('danger');
    }
    if(checkNotNull(email)){
        $('#email').addClass('danger');
    }else{
        $('#email').removeClass('danger');
    }
    if(checkNotNull(message)){
        $('#message').addClass('danger');
    }else{
        $('#message').removeClass('danger');
    }
}