// Define pizza state

const pizza = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true,
};

const precios = document.querySelectorAll(".panel.price ul li")

function renderPizza() {
  let valores = Object.values(pizza)

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

  const salsa = document.querySelector(".sauce")
  pizza.whiteSauce === true ? salsa.classList.add("sauce-white") : salsa.classList.remove("sauce-white")

  const masa = document.querySelector(".crust")
  pizza.glutenFreeCrust === true ? masa.classList.add("crust-gluten-free") : masa.classList.remove("crust-gluten-free")

  precios.forEach((precio, index) => {
    valores[index] === true ? precio.style.display = "inherit" : precio.style.display = "none"
  })

  let precioTotal = 10
  for (let ingrediente in pizza) {
   if (pizza[ingrediente] === true) {
    if (ingrediente === "pepperoni") {
      precioTotal += 1
    } else if (ingrediente === "mushrooms") {
      precioTotal += 1 
    } else if (ingrediente === "greenPeppers") {
      precioTotal += 1
    } else if (ingrediente === "whiteSauce") {
      precioTotal += 3
    } else if (ingrediente === "glutenFreeCrust") {
      precioTotal += 5
    }
   }
  }
  document.querySelector(".panel.price strong").innerHTML= "$" + precioTotal


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

const btnWhtSc = document.querySelector(".btn-sauce")

btnWhtSc.onclick = function () {
  pizza.whiteSauce === true ? pizza.whiteSauce = false : pizza.whiteSauce = true
  btnWhtSc.classList.toggle("active")
  renderPizza()
}

const btnCrust = document.querySelector(".btn-crust")

btnCrust.onclick = function () {
  pizza.glutenFreeCrust === true ? pizza.glutenFreeCrust = false : pizza.glutenFreeCrust = true
  btnCrust.classList.toggle("active")
  renderPizza()
}
