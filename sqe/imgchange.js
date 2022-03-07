// let img1 = document.querySelector("#imgc1");
// let img2 = document.querySelector("#imgc2");
// let img3 = document.querySelector("#imgc3");
// let img4 = document.querySelector("#imgc4");
// let img5 = document.querySelector("#imgc5");
// let img6 = document.querySelector("#imgc6");

// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let btn3 = document.querySelector("#btn3");
// let btn4 = document.querySelector("#btn4");
// let btn5 = document.querySelector("#btn5");

// btn1.addEventListener("click", () => {
//   img1.src = "./assets/portfolio-01.jpg";
//   img2.src = "./assets/portfolio-02.jpg";
//   img3.src = "./assets/portfolio-03.jpg";
//   img4.src = "./assets/portfolio-04.jpg";
//   img5.src = "./assets/portfolio-05.jpg";
//   img6.src = "./assets/portfolio-06.jpg";
// });

// btn2.addEventListener("click", () => {
//   img1.src = "./assets/portfolio-01.jpg";
//   img2.src = "./assets/portfolio-03.jpg";
//   img3.src = "";
//   img4.src = "";
//   img5.src = "";
//   img6.src = "";
// });

// btn3.addEventListener("click", () => {
//   img1.src = "./assets/portfolio-04.jpg";
//   img2.src = "";
//   img3.src = "";
//   img4.src = "";
//   img5.src = "";
//   img6.src = "";
// });

// btn4.addEventListener("click", () => {
//   img1.src = "./assets/portfolio-02.jpg";
//   img2.src = "./assets/portfolio-05.jpg";
//   img3.src = "";
//   img4.src = "";
//   img5.src = "";
//   img6.src = "";
// });

// btn5.addEventListener("click", () => {
//   img1.src = "./assets/portfolio-06.jpg";
//   img2.src = "";
//   img3.src = "";
//   img4.src = "";
//   img5.src = "";
//   img6.src = "";
// });

function b1() {
  document.getElementById("imgn1").src = "./assets/portfolio-01.jpg";
  document.getElementById("imgn2").src = "./assets/portfolio-02.jpg";
  document.getElementById("imgn3").src = "./assets/portfolio-03.jpg";
  document.getElementById("imgn4").src = "./assets/portfolio-04.jpg";
  document.getElementById("imgn5").src = "./assets/portfolio-05.jpg";
  document.getElementById("imgn6").src = "./assets/portfolio-06.jpg";

  document.getElementById("imgn1").style.display = "block";
  document.getElementById("imgn2").style.display = "block";
  document.getElementById("imgn3").style.display = "block";
  document.getElementById("imgn4").style.display = "block";
  document.getElementById("imgn5").style.display = "block";
  document.getElementById("imgn6").style.display = "block";
}

function b2() {
  document.getElementById("imgn1").src = "./assets/portfolio-01.jpg";
  document.getElementById("imgn2").src = "./assets/portfolio-03.jpg";
  document.getElementById("imgn3").style.display = "none";
  document.getElementById("imgn4").style.display = "none";
  document.getElementById("imgn5").style.display = "none";
  document.getElementById("imgn6").style.display = "none";

  document.getElementById("imgn1").style.display = "block";
  document.getElementById("imgn2").style.display = "block";
}

function b3() {
  document.getElementById("imgn1").src = "./assets/portfolio-04.jpg";
  document.getElementById("imgn2").style.display = "none";
  document.getElementById("imgn3").style.display = "none";
  document.getElementById("imgn4").style.display = "none";
  document.getElementById("imgn5").style.display = "none";
  document.getElementById("imgn6").style.display = "none";

  document.getElementById("imgn1").style.display = "block";
}

function b4() {
  document.getElementById("imgn1").src = "./assets/portfolio-03.jpg";
  document.getElementById("imgn2").src = "./assets/portfolio-05.jpg";
  document.getElementById("imgn3").style.display = "none";
  document.getElementById("imgn4").style.display = "none";
  document.getElementById("imgn5").style.display = "none";
  document.getElementById("imgn6").style.display = "none";

  document.getElementById("imgn1").style.display = "block";
  document.getElementById("imgn2").style.display = "block";
}

function b5() {
  document.getElementById("imgn1").src = "./assets/portfolio-06.jpg";
  document.getElementById("imgn2").style.display = "none";
  document.getElementById("imgn3").style.display = "none";
  document.getElementById("imgn4").style.display = "none";
  document.getElementById("imgn5").style.display = "none";
  document.getElementById("imgn6").style.display = "none";

  document.getElementById("imgn1").style.display = "block";
}
