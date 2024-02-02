$(document).ready(function(){

    let t_btn = $('.toggle');

    t_btn.click(function(){
        $(this).find('span').eq(0).toggleClass('rotate45')
        $(this).find('span').eq(1).toggleClass('rotate0')
        $(this).find('span').eq(2).toggleClass('rotate-45')
    })
})