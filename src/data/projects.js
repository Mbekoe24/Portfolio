import Anchoi from "../images/an-choi.png";
import Instapic from "../images/instapic.png";
import Weather from "../images/weather.png";
import Nba from "../images/nbadatabase.png";
import Poke from "../images/pokeapptest.png";
import Recipe from "../images/recipebook.png";
import Netflix from "../images/netflixclone.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Netflix Clone 2.0",
    image: Netflix,
    imageAlt: "Netflix",
    description:
      "A responsive, Netflix-inspired movie discovery app built with React. Browse trending movies and TV shows, watch trailers, and explore content by genre—all powered by The Movie Database (TMDB) API.",
    tech: ["React", "Javascript", "CursorAI", "SCSS"],
    link: "https://moviecloneui.netlify.app/",
  },
  {
    id: 2,
    title: "Anchoi Restaurant Website",
    image: Anchoi,
    imageAlt: "Anchoi Restaurant",
    description:
      "Collaborated with UX Design team to convert hi-fidelity prototype into full-stack website for local Brooklyn eatery.",
    tech: ["React", "Javascript", "CSS"],
    link: "https://an-choi.netlify.app/",
  },
  {
    id: 3,
    title: "Instapic",
    image: Instapic,
    imageAlt: "Instapic",
    description:
      "Created a full-stack, full-CRUD app, with Auth utilizing a RESTful JSON API information to construct an Instagram Clone.",
    tech: ["React", "Ruby on Rails", "PostgreSQL", "Javascript", "CSS"],
    link: "https://instapic.surge.sh/",
  },
  {
    id: 4,
    title: "Poké App",
    image: Poke,
    imageAlt: "Poké App",
    description:
      "Built a Pokémon trivia game using data from the PokéAPI that generates multiple choice questions where users guess \"Who's That Pokémon?\"",
    tech: ["Vanilla JS", "HTML", "CSS"],
    link: "https://pokeapptest.surge.sh/",
  },
  {
    id: 5,
    title: "NBA Database 2017-18",
    image: Nba,
    imageAlt: "NBA Database",
    description:
      "Created an NBA database app that pulls API data to display player bios and 2017–18 season stats in a searchable interface.",
    tech: ["React", "Javascript", "CSS", "Storybook"],
    link: "https://github.com/Mbekoe24/NBADatabase",
  },
  {
    id: 6,
    title: "Recipe Book",
    image: Recipe,
    imageAlt: "Recipe Book",
    description:
      "Built full-stack recipe website using React.JS, MongoDB, Express.JS (back-end) and HTML, CSS, and JavaScript (front-end) and custom API",
    tech: ["React", "Express.js", "MongoDB", "Mongoose", "Javascript", "CSS"],
    link: "https://my-recipebook.surge.sh/",
  },
  {
    id: 7,
    title: "Temperature App",
    image: Weather,
    imageAlt: "Temperature App",
    description:
      "Built a temperature app that converts fahrenheit and celsius temperatures while rendering different background images.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://mikebweatherapp.surge.sh/",
  },
];
