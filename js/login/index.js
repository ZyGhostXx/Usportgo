$(document).ready(function() {
    var userLogin = 'dev@usportgo.com';
    var passwordLogin = '123456';

    $('#login').on('click', function(e) {
        e.preventDefault();

        var user = $(this).parent().parent().find('#user');
        var password = $(this).parent().parent().find('#password');
        if ((user.val() === userLogin) && (password.val() === passwordLogin)) {
            $('#container').load('home.html');
        }
    });
});