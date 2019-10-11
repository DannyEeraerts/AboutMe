window.onload=function() {
    // declarations
    let showHideDiv = document.querySelector('#showHideDiv');
    let btn = document.querySelector('#showHideButton');
  
    let items = document.querySelectorAll(".item");
  
    let footerClass = document.querySelectorAll(".footer");
  
    let header = document.querySelector("header");
    const scrollPosition = window.scrollY;
    const heightHeader = header.scrollHeight;
    const heightNav = nav.scrollHeight;
    let navbar = document.querySelector("#nav");
  
    const form = document.querySelector('#form');
    const log = document.querySelector('#log');
  
    let htmlyear = document.querySelector("#htmlYear");
    let year = new Date().getFullYear();
  
    htmlyear.textContent = year;
  
    let datetime = new Date();
    submitdatetime = datetime.toLocaleString('en-US');
  
    let height = navbar.clientHeight;
  
    let firstNameInput = document.querySelector("#firstNameInput");
    let lastNameInput = document.querySelector("#lastNameInput");
    let addressInput = document.querySelector("#addressInput");
    let firstNameErrorMessage = document.querySelector(".firstNameErrorMessage");
    let lastNameErrorMessage = document.querySelector(".lastNameErrorMessage");
    let addressErrorMessage = document.querySelector(".addressErrorMessage");
  
    // functions
  
    function toggleShowHide(){
      showHideDiv.classList.toggle('show');
      if (btn.textContent === "read more "){
        btn.innerHTML = "close <i class=\"fas fa-caret-down fa-lg\"></i>";
      }
      else {
        btn.innerHTML = "read more <i class=\"fas fa-caret-right fa-lg\"></i>";
      }
    }
  
    function toggleActiveClass(){
      let current = document.querySelector(".active");
      current.classList.remove("active");
      if (event.target.nodeName === "A") {
        this.className += " active";// add active to selected nav
      }
      else {
        x = this.parentNode.nextElementSibling.id ;
          if (x === ""){
            xlink = "#".concat("intro");
          }
          else{
            xlink = "#".concat(x);}
        y = document.querySelector(".item[href='"+xlink+"']");
        y.className +=" active";
      }
    }
  
    /*function navfixed(){
      let header = document.querySelector("header");
      const scrollPosition = window.scrollY;
      const heightHeader = header.scrollHeight;
  
      if (scrollPosition > heightHeader){
        header.classList.add("hide");
        navbar.classList.add("position");
      }
      else{
        header.classList.remove("hide");
        navbar.classList.remove("position");
      }
    }
  
     function offsetHash() {
        scrollQuanty = window.scrollY - heightNav - 64;
        window.scrollTo(window.scrollX, scrollQuanty);
  
     }
  */
    function firstNameInputVerify() {
      if (this.value !== ""){
        if (regfirstandlastnameCheck(this.value)) {
          firstNameInput.value = cleanFirstName(firstNameInput.value);
          emptyMessage(firstNameErrorMessage);
        } else {
          firstNameErrorMessage.innerHTML = "Min 2 letters, no numerals or symbols &nbsp;&#x274C";
          toggleErrorMessage(firstNameErrorMessage);
        }
      }
      else {
        firstNameErrorMessage.innerHTML = "Firstname is required &nbsp;&nbsp;&#x274C;";
        toggleErrorMessage(firstNameErrorMessage);
      }
    }
  
    function lastNameInputVerify() {
      if (this.value !== ""){
        if (regfirstandlastnameCheck(this.value)) {
          lastNameInput.value = cleanLastName(lastNameInput.value);
          emptyMessage(lastNameErrorMessage);
        } else {
          lastNameErrorMessage.innerHTML = "Min 2 letters, no numerals or symbols &nbsp;&#x274C";
          toggleErrorMessage(lastNameErrorMessage);
        }
      }
      else {
        lastNameErrorMessage.innerHTML = "lastname is required &nbsp;&nbsp;&#x274C;";
        toggleErrorMessage(lastNameErrorMessage);
      }
    }
  
    function addressInputVerify() {
      if (addressInput.value !== "") {
        if (regaddressCheck(this.value)) {
          addressInput.value = cleanAddress(addressInput.value);
          emptyMessage(addressErrorMessage);
        } else {
          addressErrorMessage.innerHTML = "No valid address building. No separated by space&nbsp;&#x274C";
          toggleErrorMessage(addressErrorMessage);
        }
      }
    }
  
    function emptyMessage(errorMessage){
      errorMessage.innerHTML = "";
      errorMessage.classList.remove("show");
      errorMessage.classList.add('hide');
    }
  
    function toggleErrorMessage(errorMessage){
      errorMessage.classList.remove("hide");
      errorMessage.classList.add("show");
    }
  
    function regfirstandlastnameCheck(nameCheck) {
      let nameRegex = /^[a-zA-Zàâçéèêëîïôûùüÿñæœ /'-]{2,}$/;
      return (nameRegex.test(nameCheck));
    }
  
    function regaddressCheck(addressCheck) {
      let addressRegex = /^([1-9][e][\s])*([a-zA-Zàâçéèêëîïôûùüÿñ\- /']+(([.][\s])?|([\s]))?)+[1-9][0-9]*(([-]|[\/][1-9][[0-9]*)|([\s]?[a-zA-Z 1-9]+))?$/;
      return (addressRegex.test(addressCheck));
    }
  
    function removeErrorMessage() {
      this.classList.remove("show");
      this.classList.add("hide");
    }
  
    function cleanFirstName(string){
      string = string.trim();
      string = string.replace(/\s+/g,' ');
      string = string.replace(/\s-\s/g,'-');
      let newSentence ="";
      let x = string.split(" ").length;
      var words= string.split(" ");
      var firstSubPart;
  
      for (let i=0; i<x; i++){
        if ((words[i].split("-")).length > 1){
          let subWords = words[i].split("-");
          let newSubSentence2 ="";
          let k = subWords.length;
          for (j=0; j < (k-1); j++){
            if (j===0) {
              let firstSubPart1 = subWords[j].substring(0,1).toUpperCase();
              let firstSubPart2 = (subWords[j].substring(1)).toLowerCase();
              firstSubPart = firstSubPart1 + firstSubPart2;
            }
            else {
              firstSubPart = "";
            }
            let lastSubPart1 = (subWords[j+1].substring(0,1)).toUpperCase();
            let lastSubPart2 = (subWords[j+1].substring(1)).toLowerCase();
            let newSubWord = firstSubPart + "-" + lastSubPart1 + lastSubPart2;
            newSubSentence2 = newSubSentence2 + newSubWord;
          }
          newSentence= newSentence + newSubSentence2 + " ";
          string = newSentence;
        }
        else{
          var firstPart = words[i].substring(0,1);
          var lastPart = words[i].substring(1);
          firstPart = (words[i].substring(0,1)).toUpperCase();
          lastPart = (words[i].substring(1)).toLowerCase();
          newWord = firstPart + lastPart;
          newSentence = newSentence + newWord + " ";
          string = newSentence}
      }
      string = string.trimEnd();
      return string;
    }
    function cleanLastName(string){
      string = string.trim();
      string = string.replace(/\s+/g,' ');
      let newSentence ="";
      let x = string.split(" ").length;
      var words= string.split(" ");
      var firstSubPart;
      if (string.valueOf() === string.valueOf().toUpperCase()) {
        for (let i = 0; i < x; i++){
          if ((words[i].split("-")).length > 1) {
            let subWords = words[i].split("-");
            let newSubSentence2 = "";
            let k = subWords.length;
            for (j = 0; j < (k - 1); j++) {
              let counter = subWords[j].length;
              if (j === 0) {
                let firstSubPart1 = subWords[j].substring(0, 1).toUpperCase();
                let firstSubPart2 = (subWords[j].substring(1)).toLowerCase();
                firstSubPart = firstSubPart1 + firstSubPart2;
              } else {
                firstSubPart = "";
              }
              let lastSubPart1 = (subWords[j + 1].substring(0, 1)).toUpperCase();
              let lastSubPart2 = (subWords[j + 1].substring(1)).toLowerCase();
              let newSubWord = firstSubPart + "-" + lastSubPart1 + lastSubPart2;
              newSubSentence2 = newSubSentence2 + newSubWord;
            }
            newSentence = newSentence + newSubSentence2 + " ";
            string = newSentence;
          } else {
            var firstPart = words[i].substring(0, 1);
            var lastPart = words[i].substring(1);
            firstPart = (words[i].substring(0, 1)).toUpperCase();
            lastPart = (words[i].substring(1)).toLowerCase();
            newWord = firstPart + lastPart;
            newSentence = newSentence + newWord + " ";
            string = newSentence
          }
        }
      }
      return string;
    }
  
    function cleanAddress(string){
      string = string.trim();
      string = string.replace(/\s+/g,' ');
      string = string.toLowerCase();
      string = string.split(" ");
      let x = string.length;
      for (let i = 0; i < x; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
      }
      return string.join(" ");
    }
  
    function CheckAll(event){
      firstNameInputVerify();
      lastNameInputVerify();
      addressInputVerify()
      if (errorMessage.innerHTML === "") {
        log.textContent = `Form Submitted on: ${submitdatetime}`;
        log.classList.remove('hide');
        event.preventDefault();
      }
    }
  
  
    /*
  
        let coordinates = header.getBoundingClientRect();
       console.log(coordinates);
       bottom = coordinates.top + coordinates.height;
  
       console.log(coordinates.top);
       console.log(bottom);
  
     if (scrollPosition > (heightHeader +32)) {
        window.scrollTo(window.scrollX, bottom);
        }
        else{
           window.scrollTo(window.scrollX, scrollQuanty));
       }*/
  
    //EventListeners
  
    btn.addEventListener("click",toggleShowHide);
  
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", toggleActiveClass);
    }
  
    for (let j = 0; j < footerClass.length; j++) {
      footerClass[j].addEventListener("click", toggleActiveClass);
    }
  
    /*window.addEventListener("scroll",navfixed);
  
    window.addEventListener('hashchange', offsetHash);*/
  
    form.addEventListener('submit', CheckAll);
  
    firstNameInput.addEventListener('blur',firstNameInputVerify );
    firstNameErrorMessage.addEventListener("click", removeErrorMessage);
    lastNameInput.addEventListener('blur',lastNameInputVerify );
    lastNameErrorMessage.addEventListener('click', removeErrorMessage);
    addressInput.addEventListener('blur',addressInputVerify);
    addressErrorMessage.addEventListener('click',removeErrorMessage);
  
  };
  