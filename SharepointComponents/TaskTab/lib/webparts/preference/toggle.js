$(document).ready(function(){
		$('form input[type="submit"]').prop("disabled", true);
		$(".agree").click(function(){
            if($(this).prop("checked") == true){
                $('form input[type="submit"]').prop("disabled", false);
            }
            else if($(this).prop("checked") == false){
                $('form input[type="submit"]').prop("disabled", true);
            }
        });
    });
