// Define pizza state

const pizza = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
};

function renderPizza() {
  const rodajasPeperoni = document.querySelectorAll(".pep")
  rodajasPeperoni.forEach(rodaja => {
    rodaja.style.visibility = pizza.pepperoni === true ? "visible" : "hidden";
  })

  const setas = document.querySelectorAll(".mushroom")
  setas.forEach(seta => {
    seta.style.visibility = pizza.mushrooms === true ? "visible" : "hidden";
  })

  const pimientos = document.querySelectorAll(".green-pepper")
  pimientos.forEach(pimiento => {
    pimiento.style.visibility = pizza.greenPeppers === true ? "visible" : "hidden";
  })


}

const btnPep = document.querySelector(".btn.btn-pepperoni");

btnPep.onclick = function () {
  pizza.pepperoni === true ? pizza.pepperoni = false : pizza.pepperoni = true
  btnPep.classList.toggle("active")
  renderPizza()
};

const btnMush = document.querySelector(".btn.btn-mushrooms");

btnMush.onclick = function () {
  pizza.mushrooms === true ? pizza.mushrooms = false : pizza.mushrooms = true
  btnMush.classList.toggle("active")
  renderPizza()
}

const btnGrPp = document.querySelector(".btn.btn-green-peppers");

btnGrPp.onclick = function () {
  pizza.greenPeppers === true ? pizza.greenPeppers = false : pizza.greenPeppers = true
  btnGrPp.classList.toggle("active")
  renderPizza()
}