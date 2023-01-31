let all = [
  {
    name: "Martins Olumide",
    age: 19,
  },
  {
    name: "Marvellous Ayoade",
    age: 18,
  },
  {
    name: "Idowu David",
    age: 19,
  },
  {
    name: "Tobby Dihno",
    age: 19,
  },
  {
    name: "Esther Okolie",
    age: 18,
  },
];
const CONTAINER = document.querySelector(".container");
(function () {
  for (let i = 0; i < all.length; i++) {
    const div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `${JSON.stringify(all[i])}`;
    CONTAINER.appendChild(div);
  }
})();
