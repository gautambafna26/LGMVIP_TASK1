$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.navbar').addClass("change");
        }else{
            $('.navbar').removeClass("change");
        }
    })
});
    
