window.addEventListener('load', function (e) {
  var marker = document.querySelector('#qr-marker');
  marker.addEventListener("markerFound", function () {
    var markerId = marker.id;
    console.log('Marker Found', markerId);
    document.addEventListener('touchMove', handleMove);
  });

  marker.addEventListener('markerLost', function () {
    var markerId = marker.id;
    console.log('Marker Lost', markerId);
    document.removeEventListener('touchMove', handleMove);
  });

})

function handleMove(e){
  console.log('moving');
  var model = document.querySelector('#model');
  model.object3D.scale.multiplyScalar(1.1, 1.1, 1.1);
  
}