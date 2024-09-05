let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let content1 = document.querySelector("#content1");
let content2 = document.querySelector("#content2");

tab1.onclick = function () {
  tab1.style.opacity = 1;
  tab2.style.opacity = 0.5;
  content1.style.display = "block";
  content2.style.display = "none";
};

tab2.onclick = function () {
  tab1.style.opacity = 0.5;
  tab2.style.opacity = 1;
  content1.style.display = "none";
  content2.style.display = "block";
};
