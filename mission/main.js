document.addEventListener("DOMContentLoaded", function() {
  var themeElement = document.getElementById("theme");
  
  if(themeElement) {
    themeElement.addEventListener("change", function () {
      var selectedTheme = this.value;

      if (selectedTheme === "dark") {
        enableDarkMode();
      } else {
        enableLightMode();
      }
    });
  }

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
  }

  function enableLightMode() {
    document.body.classList.remove("dark-mode");
  }
});