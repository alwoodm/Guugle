var darkModeSwitch = document.getElementById('darkModeSwitch');

darkModeSwitch.addEventListener('change', function(event){
  document.body.classList.toggle('dark-mode', event.target.checked);
});
