window.onload=function() {
    const mapicon = document.querySelector(".fa-map-marker-alt");
    console.log(mapicon);
    const frame = document.querySelector(".map");
    console.log(frame);

    function showmap(){
        //toggle class
        console.log(frame);
        frame.classList.toggle('show');
        a = frame.classList.toggle('show');
        console.log(a);
        if (frame.classList.toggle('show')){
            frame.classList.add('show');
        }
        else {
            frame.classList.remove('show');
        }
        };

        //event listener that will change the css class of the html object frame.    
    
        mapicon.addEventListener("click", showmap);
 }
