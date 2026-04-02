import Anchoi from "../images/an-choi.png";
import Instapic from "../images/instapic.png";
import Weather from "../images/weather.png";
import Nba from "../images/nbadatabase.png";
import Poke from "../images/pokeapptest.png";
import Recipe from "../images/recipebook.png";
import Netflix from "../images/netflixclone.png";
import PokeQuiz from "../images/pokequizrevamp.png";

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
    title: "Poké Quiz",
    image: PokeQuiz,
    imageAlt: "Poké Quiz",
    description:
      "A modern single-page Pokémon knowledge quiz application and a complete revamp of my original 2020 Poké App project, reflecting the evolution of my coding skills and overall technical comprehension. The app challenges users to identify species from silhouettes, full artwork, types, and cries, with customizable generations and difficulty levels. It includes high score tracking and a shareable, replayable run feature via URL. I leveraged AI agents such as Claude and Cursor to refactor legacy logic and implement new functionality. Built with React, TypeScript, Vite, and Tailwind CSS",
    tech: ["Typescript", "React", "Vite", "ClaudeAI"],
    link: "https://poke-quiz.surge.sh/",
  },
  {
    id: 3,
    title: "Anchoi Restaurant Website",
    image: Anchoi,
    imageAlt: "Anchoi Restaurant",
    description:
      "Collaborated with UX Design team to convert hi-fidelity prototype into full-stack website for local Brooklyn eatery.",
    tech: ["React", "Javascript", "CSS"],
    link: "https://an-choi.netlify.app/",
  },
  {
    id: 4,
    title: "Instapic",
    image: Instapic,
    imageAlt: "Instapic",
    description:
      "Created a full-stack, full-CRUD app, with Auth utilizing a RESTful JSON API information to construct an Instagram Clone.",
    tech: ["React", "Ruby on Rails", "PostgreSQL", "Javascript", "CSS"],
    link: "https://instapic.surge.sh/",
  },
  {
    id: 5,
    title: "Poké App",
    image: Poke,
    imageAlt: "Poké App",
    description:
      'Built a Pokémon trivia game using data from the PokéAPI that generates multiple choice questions where users guess "Who\'s That Pokémon?"',
    tech: ["Vanilla JS", "HTML", "CSS"],
    link: "https://pokeapptest.surge.sh/",
  },
  {
    id: 6,
    title: "NBA Database 2017-18",
    image: Nba,
    imageAlt: "NBA Database",
    description:
      "Created an NBA database app that pulls API data to display player bios and 2017–18 season stats in a searchable interface.",
    tech: ["React", "Javascript", "CSS", "Storybook"],
    link: "https://github.com/Mbekoe24/NBADatabase",
  },
  {
    id: 7,
    title: "Recipe Book",
    image: Recipe,
    imageAlt: "Recipe Book",
    description:
      "Built full-stack recipe website using React.JS, MongoDB, Express.JS (back-end) and HTML, CSS, and JavaScript (front-end) and custom API",
    tech: ["React", "Express.js", "MongoDB", "Mongoose", "Javascript", "CSS"],
    link: "https://my-recipebook.surge.sh/",
  },
  {
    id: 8,
    title: "Temperature App",
    image: Weather,
    imageAlt: "Temperature App",
    description:
      "Built a temperature app that converts fahrenheit and celsius temperatures while rendering different background images.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://mikebweatherapp.surge.sh/",
  },
];
