window.addEventListener('load', function (e) {
  document.querySelector('a-scene').addEventListener('loaded', function (e) {
    document.querySelector('#backdrop').classList.toggle('hide');
    document.querySelector('#bottom-menu').classList.toggle('slide-bottom');
  })
})
