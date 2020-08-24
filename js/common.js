let nav = $('#nav > ul > li');
let cont = $('#contents > div');

nav.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    console.log(offset);

     $("html,body").stop().animate({"scrollTop":offset},600);
    
});