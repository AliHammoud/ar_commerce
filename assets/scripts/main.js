window.addEventListener('load', function (e) {
  var hammertime = new Hammer(document);
  var markerMsg = document.querySelector('#m-marker-lost');

  var marker = document.querySelector('#qr-marker');
  marker.addEventListener("markerFound", function () {
    var markerId = marker.id;
    var model = document.querySelector('#model');
    console.log('Marker Found', markerId);

    hammertime.on('pan', function (ev) {
      
      var rot_speed = 0.8
      
      switch(ev.direction){
          case 2: //left
          model.object3D.rotation.x += THREE.Math.degToRad(rot_speed)
          break;
          
          case 4: //right
          model.object3D.rotation.x -= THREE.Math.degToRad(rot_speed)
          break;
          
      }
      
    });
    
    if (!markerMsg.classList.contains('hidden'))
      markerMsg.classList.toggle('hidden');

  });
  
  marker.addEventListener("markerLost", function () {
    var markerId = marker.id;
    console.log('Marker Lost', markerId);
    
    markerMsg.classList.toggle('hidden');
    
  });
  
})
