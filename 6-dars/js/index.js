document.addEventListener('DOMContentLoaded',function(){
    var splide=new Splide('.slider',{
        type:'loop',
        arrows:false,
        autoplay:2000,
    })
    splide.mount()

    new Splide( '#thumbnail-slider', {
		fixedWidth : 400,
        fixedHeight: 350,
		gap        : 20,
		rewind     : true,
		pagination : false,
    cover      : true,
  } ).mount();
})