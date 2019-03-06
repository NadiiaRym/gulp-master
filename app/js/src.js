var $ = require('jquery');
var _ = require('lodash');
$('menu-opener').on('click',function(){
  $(this).toggleClass('active')
})
var opener = document.querySelector('menu-opener')
var menu = document.querySelector('.menu')
if(opener){
  opener.addEventListener('click',function(){
    this.classList.toggle('actie')
    menu.classList.toggle('actie')
  })
}


// $ ('a').on('click',function(e){

//   console.log(e,this)
// })
// $('.header').on('click',function(){
//   console.log('header clicked !!!')
// })
// $(window).on('scroll',_.throttle(function(e){
//   console.log(e)
// }, 1000))
// $(window).on('mousemove',_.debounce(function(e){
//   console.log(e)
// }, 200))
console.log('works !!!');
