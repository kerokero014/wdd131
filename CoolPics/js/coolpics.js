document.addEventListener('DOMContentLoaded', function() {
  var toggleMenu = document.querySelector('.toggle-menu');
  if(toggleMenu) {
    toggleMenu.addEventListener('click', function() {
      var menuItems = document.querySelector('.menu-items');
      if (menuItems.style.display === 'none') {
        menuItems.style.display = 'block';
      } else {
        menuItems.style.display = 'none';
      }
    });
  }
});