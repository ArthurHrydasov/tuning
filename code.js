var popup_open_c = document.querySelectorAll("[popup='popup_curve_open']");
var popup_c = document.querySelector(".popup_curve");
var popup_close_c = document.querySelectorAll(".popup_curve_close");
var popup_block_c = document.querySelector(".popup_curve_block");
popup_open_c.forEach((element) => {
  element.addEventListener("click", () => {
    body.style.overflow = "hidden";
    popup_c.classList.add("active");
    setTimeout(() => {
       document.querySelector(".popup_curve_close").classList.add("active");
      popup_block_c.classList.add("active");
    }, 1);
  });
});
popup_close_c.forEach((element) => {
  element.addEventListener("click", () => {
    body.style.overflow = "auto";
    popup_block_c.classList.remove("active");
    setTimeout(() => {      
      document.querySelector(".popup_curve_close").classList.remove("active");
    }, 150);
    setTimeout(() => {
      popup_c.classList.remove("active");
    }, 300);
  });
});
