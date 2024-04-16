///
const cartCont = document.querySelector(".cartCont");

const toggleCart = (e) => {
  cartCont.classList.toggle("active");
};

//
const cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener("click", toggleCart);
//
const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", toggleCart);


// 
