window.addEventListener('load', function (e) {
  var hammertime = new Hammer(document);
  var markerMsg = document.querySelector('#m-marker-lost');
  var finderGfx = document.querySelector('.finder');
  var turntableGfx = document.querySelector('#turntable');
  var bottomMenu = document.querySelector('#bottom-menu');
  var backdrop = document.querySelector('#backdrop');
  
  var marker = document.querySelector('#qr-marker');
  marker.addEventListener("markerFound", function () {
    var markerId = marker.id;
    var model = document.querySelector('#model');
    console.log('Marker Found', markerId);
    
    markerMsg.classList.add('hidden');
    finderGfx.classList.add('fade-out');
    turntableGfx.classList.remove('fade-out');
    bottomMenu.classList.add('slide-bottom');
    backdrop.classList.remove('hide');

    hammertime.on('pan', function (ev) {
      turntableGfx.classList.add('fade-out');
      var rot_speed = 0.8;
      
      switch(ev.direction){
          case 2: //left
          model.object3D.rotation.x += THREE.Math.degToRad(rot_speed)
          break;
          
          case 4: //right
          model.object3D.rotation.x -= THREE.Math.degToRad(rot_speed)
          break;
          
      }
      
    });

  });
  
  marker.addEventListener("markerLost", function () {
    var markerId = marker.id;
    console.log('Marker Lost', markerId);
    
    markerMsg.classList.remove('hidden');
    finderGfx.classList.remove('fade-out');
    turntableGfx.classList.add('fade-out');
    bottomMenu.classList.remove('slide-bottom');
    backdrop.classList.add('hide');
    
  });
  
})
