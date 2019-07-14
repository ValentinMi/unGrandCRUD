// IMG
import absolute from "../img/absolute.jpeg";
import beer from "../img/beer.jpg";
import water from "../img/water.jpeg";

export function mockingData() {
  // Check if saved data exist
  var savedData = localStorage.getItem("alcoolStories");
  if (savedData !== null) return JSON.parse(savedData);

  // If not set and return initial data
  const initalData = [
    {
      title: "Absolut",
      imgSrc: absolute,
      quote: "L'alcool est la réponse. Je ne me rapelle plus de la question",
      author: "Valentin Misiaszek"
    },
    {
      title: "UPD",
      imgSrc: beer,
      quote: "Une petite dernière ? ",
      author: "Le bon ami"
    },
    {
      title: "Lendemain",
      imgSrc: water,
      quote: "J'adore l'eau...",
      author: "JCVD"
    }
  ];

  localStorage.setItem("alcoolStories", JSON.stringify(initalData));
  return JSON.parse(localStorage.getItem("alcoolStories"));
}
