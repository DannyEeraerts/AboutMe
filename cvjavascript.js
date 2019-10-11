const mapButtonQuerySelector = ".fa-map-marker-alt";
const mapQuerySelector=".map";



function toggleClassOnNode(selector, className) {
    const item = document.querySelector(selector);
    item.classList.toggle(className);
  }


// https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/

  document.addEventListener('click', function (event) {

    if (event.target.matches(mapButtonQuerySelector)){

        toggleClassOnNode(mapQuerySelector, "show");
    } 
}, false);