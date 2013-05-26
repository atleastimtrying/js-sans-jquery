document.addEventListener('DOMContentLoaded', function(){
  document.getElementsByTagName('section')[0].className = 'showing';
  var nextSlide = function(){
    var current = document.getElementsByClassName('showing')[0];
    current.className = '';
    var next = current.nextElementSibling;
    if(next){
      next.className = 'showing';
    }
  };
  var previousSlide = function(){
    var current = document.getElementsByClassName('showing')[0];
    current.className = '';
    var next = current.previousElementSibling;
    if(next){
      next.className = 'showing';
    }
  };
  window.addEventListener('click', nextSlide, false);
  window.addEventListener('keyup', previousSlide, false);
});