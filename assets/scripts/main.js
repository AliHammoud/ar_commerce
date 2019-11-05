window.addEventListener('load', function (e) {
  AFRAME.registerComponent('changeTex', {
    init: function(){alert('hey')}
  });
  document.querySelector('a-scene').addEventListener('loaded', function (e) {
    document.querySelector('#backdrop').classList.toggle('hide');
    document.querySelector('#bottom-menu').classList.toggle('slide-bottom');
    
    var shoe = document.querySelector("#target");
  })
})
