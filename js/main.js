(() => {
  const svgObj = document.querySelectorAll('.svg-image');

  function toggleSelection() {
    this.classList.toggle("selected");
    console.log(this.id);
  }

  svgObj.forEach(item => item.addEventListener('click', toggleSelection));

})();
