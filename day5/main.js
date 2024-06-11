//task 1
let button = document.getElementById("my-but");
button.addEventListener("click", clicked);
function clicked() {
  alert("Button clicked!");
}

//task 2
let button2 = document.getElementById("my-but2");
button2.addEventListener("click", clicked);
function clicked() {
 document.getElementById("para").innerHTML="Hello!"
}

//task 3
let div = document.getElementById("div");
div.addEventListener("dblclick",dblclick)
function dblclick() {
div= document.getElementById("div").style.backgroundColor = "orange";
}

//task 4 && task 5
let div2 = document.getElementById("div2");
div2.addEventListener("mouseenter",menter);
div2.addEventListener("mouseleave",mleave);
function menter() {
    div2.innerHTML = "Hello";
    div2.style.color = "orangered";
}
function mleave() {
    div2.innerHTML = "Enter to this text";
     div2.style.color = "black";
}

//task 6
let submit = document.getElementById("my-but3");
submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Form not submitted");
});


// //task 7
    document.getElementById("inputField").addEventListener("focus", function () {
        this.style.outline = "orange";
        this.style.borderColor = "orange";
      });
 //task 8
    document.getElementById("inputField").addEventListener("blur", function () {
      this.style.borderColor = "blue"; 
    });

//task 9
let pressKey = document.getElementById("inputField2");
pressKey.addEventListener("keydown", key);
function key(e) {
    console.log("pressed key is :",e.key);
     
 }
//task 10
let element = document.getElementById("toggle");
element.addEventListener("click",Toggle);
function Toggle() {
    element.classList.toggle("zaina");

}

//take 11

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    document.getElementById("validation").onsubmit = function (e) {
      let userValid = false;
      let passValid = false;

      if (username.value !== "" && username.value.length <= 10) {
        userValid = true;
      }

      if (password.value !== "") {
        passValid = true;
      }

      if (userValid==false || passValid==false) {
        e.preventDefault();
        console.log("Form not submitted");
      }
    };

//task 12
let img = document.getElementById("changeImg");
img.addEventListener("click", changeimg)
function changeimg() {
let image = document.getElementById("Img");
let imageSrc = image.getAttribute("src");

  if (imageSrc == "OIP (6).jpg") {
    image.src = "download.jpg";
  } else {
    image.src = "OIP (6).jpg";
  }
}

//task 13
let passwordinput = document.getElementById("pass");
let checkboxs = document.getElementById("show");
checkboxs.addEventListener("change", showpass);

function showpass() {
  if (checkboxs.checked == true) {
    passwordinput.type = "text";
  }
  else {
    passwordinput.type = "password";
  }
}

//task 14
let background = document.getElementById("background");
let colors = document.getElementById("colors");
colors.addEventListener("input", colorBackground);
function colorBackground() {
  background.style.backgroundColor = colors.value;

}

//task 15


let images = ["OIP (6).jpg", "download.jpg", "gg.jpg","IMG_6822.webp"];


let imageElement = document.getElementById("image");
 let current = 0;
 function showCurrentImage() {
   imageElement.src = images[current];
 }
let nextBtn = document.getElementById("nextBtn");
 nextBtn.addEventListener("click", function () {
   current = (current + 1) % images.length;
   showCurrentImage();
 });
let prevBtn = document.getElementById("prevBtn");
 prevBtn.addEventListener("click", function () {
   current = (current- 1 + images.length) % images.length;
   showCurrentImage();
 });
showCurrentImage();
 
//task 16

  let currentIndex = 0;
  let arr = ["Content 1", "Content 2", "Content 3", "Content 4"];
    document.getElementById("loadContentBtn").addEventListener("click", loadContent);
  function loadContent() {
    let selected = arr[currentIndex];
    let contentDiv = document.getElementById("contentDiv");
    contentDiv.innerHTML= selected;
    currentIndex = (currentIndex + 1) % arr.length;
  }
//task 17
  let contentDiv = document.getElementById("contentDiv");
  let customMenu = document.getElementById("customMenu");
  contentDiv.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    // customMenu.style.display = "block";
    // customMenu.style.left =e.pageX + "px";
    // customMenu.style.top = e.pageY + "px";
  });

//task 18
  
  function logWindowSize() {
    console.log("Window width: " + window.innerWidth + ", height: " + window.innerHeight);
  }

  window.addEventListener("resize", logWindowSize);

  logWindowSize();

//task 19
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");
function scrollToTop() {
    window.scrollTo(0,0);
  }

scrollToTopBtn.addEventListener("click", scrollToTop);
  
//task 20
  let myLink = document.getElementById("myLink");

myLink.addEventListener("click", handleClick);
    function handleClick(event) {
      event.preventDefault();
      alert("Default action prevented!");
    }
//task 21
  let myDiv = document.getElementById("myDiv");
  let tooltip = document.getElementById("tooltip");
  function showTooltip() {
    tooltip.style.visibility = "visible";
  }
  function hideTooltip() {
    tooltip.style.visibility = "hidden";
  }
  myDiv.addEventListener("mouseenter", showTooltip);
  myDiv.addEventListener("mouseleave", hideTooltip);