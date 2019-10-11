// window.onload=function() {
//     const mapicon = document.querySelector(".fa-map-marker-alt");
//     const frame = document.querySelector(".frame");
//     console.log(frame);
//     function showmap(){
//         frame.classList.toggle('show');
//         a = frame.classList.toggle('show');
//         console.log(a);
//     }
//     mapicon.addEventListener("click", showmap);
// }

(()=>{
    const map = document.querySelector(".fa-map-marker-alt");
    //event listener that will change the css class of the html object frame.
    //create a variable with the object frame
    //on click remove class and add class (toggle between classes)
    map.addEventListener('click',function(){
        const frame = document.querySelector(".map");
        console.log(frame);
        a = frame.classList.toggle('show');
        console.log(a);
        frame.classList.toggle('show');
    })
})();