import { traducir } from "./traductor.js";

const chiste = document.getElementById("chiste"),
  btn = document.getElementById("btn");
const chisteAleatorio = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const respuesta = await fetch("https://icanhazdadjoke.com", config);
  const data = await respuesta.json();
  console.log(data)
  chiste.innerText = await traducir(data.joke);
};
btn.addEventListener("click", chisteAleatorio);
chisteAleatorio();
