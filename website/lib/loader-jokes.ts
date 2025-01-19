import { cache } from "react";

type JokeCategories = {
  [key: string]: string[];
};

const LOADER_JOKES = cache((name: string, category: string) => {
  const CATEGORIES: JokeCategories = {
    Arrows: [
      `Why did ${name} cross the road? To point you in the right direction!`,
      `What do you call an arrow that tells jokes? A pun-derful pointer!`,
      `Why ${name} always calm? It knew how to stay on target!`,
      `Why did ${name} become an artist? It had a point to make!`,
    ],
    Bars: [
      `Why did ${name} go to school? To become a progressional!`,
      `What do you call a bar loader that loves to dance? A bar-tender!`,
      `Why was ${name} always invited to parties? It knew how to keep things moving!`,
      `Why did ${name} become a musician? It knew how to hit the right notes!`,
    ],
    Circles: [
      `Why did ${name} get promoted? It was well-rounded!`,
      `What do you call a circle loader that loves to travel? A globetrotter!`,
      `Why did ${name} become a chef? It knew how to handle the heat!`,
      `Why did ${name} become a teacher? It knew how to keep things in motion!`,
    ],
    Dots: [
      `Why did ${name} become a detective? It could connect the dots!`,
      `What do you call a dots loader that loves puzzles? A dot-connector!`,
      `Why did ${name} start a band? It had great rhythm!`,
      `Why did ${name} become a scientist? It loved to experiment!`,
    ],
    Emojis: [
      `Why did ${name} become a writer? It had a way with expressions!`,
      `What do you call an emoji loader that loves music? A note-worthy performer!`,
      `Why did ${name} join the circus? It was a great performer!`,
      `Why did ${name} become a comedian? It had everyone in stitches!`,
    ],
    Lines: [
      `Why did ${name} become a writer? It had a way with lines!`,
      `What do you call a lines loader that loves music? A line-dancer!`,
      `Why did ${name} join the circus? It was a great performer!`,
      `Why did ${name} become a poet? It had a way with words!`,
    ],
    Numbers: [
      `Why did ${name} become a mathematician? It loved to count!`,
      `What do you call a numbers loader that loves puzzles? A number-cruncher!`,
      `Why did ${name} start a band? It had great rhythm!`,
      `Why did ${name} become a banker? It knew how to count on success!`,
    ],
    Squares: [
      `Why did ${name} become a scientist? It loved to experiment!`,
      `What do you call a square loader that loves art? A square-ative genius!`,
      `Why did ${name} become a teacher? It loved to share knowledge!`,
      `Why did ${name} become an architect? It had a solid foundation!`,
    ],
    Symbols: [
      `Why did ${name} become a magician? It could make anything disappear!`,
      `What do you call a symbols loader that loves history? A symbol-chronologist!`,
      `Why did ${name} become a pilot? It loved to take off!`,
      `Why did ${name} become a linguist? It knew the language of symbols!`,
    ],
    Togglers: [
      `Why did ${name} become a switch operator? It loved to toggle!`,
      `What do you call a togglers loader that loves puzzles? A toggle-master!`,
      `Why did ${name} start a band? It had great rhythm!`,
      `Why did ${name} become a DJ? It knew how to switch up the beats!`,
    ],
  };

  return CATEGORIES[category as keyof typeof CATEGORIES] || [
    `Why did ${name} get promoted? It was the ${category.toLocaleLowerCase()} teachers pet!`,
  ];
});

export default LOADER_JOKES;