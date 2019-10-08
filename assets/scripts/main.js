window.addEventListener('load', function (e) {
  var hammertime = new Hammer(document);

  var marker = document.querySelector('#qr-marker');
  marker.addEventListener("markerFound", function () {
    var markerId = marker.id;
    var model = document.querySelector('#model');

    console.log('Marker Found', markerId);

    hammertime.on('pan', function (ev) {
      console.log('panning ' + ev.deltaX + ', ' + ev.deltaY);
      
      var rot_speed = 1.5
      
      switch(ev.direction){
          case 2: //left
          model.object3D.rotation.z -= THREE.Math.degToRad(rot_speed * 2)
          break;
          
          case 4: //right
          model.object3D.rotation.z += THREE.Math.degToRad(rot_speed * 2)
          break;
          
          case 8: //up
          model.object3D.rotation.x += THREE.Math.degToRad(rot_speed)
          break;
          
          case 16: //down
          model.object3D.rotation.x -= THREE.Math.degToRad(rot_speed)
          break;
      }
      
    });

  });
})
