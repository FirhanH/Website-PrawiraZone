var dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function() {
  var dropdownContent = this.querySelector('.dropdown-content');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});
