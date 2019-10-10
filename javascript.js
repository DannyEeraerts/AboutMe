window.onload=function() {
    const mapicon = document.querySelector(".fa-map-marker-alt");
    
    function showmap(){
        mapicon.classList.toggle('show');
    }

    mapicon.addEventListener("click", showmap);
}