import { memoizer } from "./utils";

// Create a function to generate jokes
export const getJokes = memoizer((name: string, category: string): string => {
	const jokeCategories: Record<string, { name: string, joke: string }[]> = {
		Arrows: [
			{ name: "arrows_joke_1", joke: `Why did ${name} cross the road? To point you in the right direction!` },
			{ name: "arrows_joke_2", joke: `What do you call an arrow that tells jokes? A pun-derful pointer!` },
			{ name: "arrows_joke_3", joke: `Why ${name} always calm? It knew how to stay on target!` },
			{ name: "arrows_joke_4", joke: `Why did ${name} become an artist? It had a point to make!` },
		],
		Bars: [
			{ name: "bars_joke_1", joke: `Why did ${name} go to school? To become a progressional!` },
			{ name: "bars_joke_2", joke: `What do you call a bar loader that loves to dance? A bar-tender!` },
			{ name: "bars_joke_3", joke: `Why was ${name} always invited to parties? It knew how to keep things moving!` },
			{ name: "bars_joke_4", joke: `Why did ${name} become a musician? It knew how to hit the right notes!` },
		],
		Circles: [
			{ name: "circles_joke_1", joke: `Why did ${name} get promoted? It was well-rounded!` },
			{ name: "circles_joke_2", joke: `What do you call a circle loader that loves to travel? A globetrotter!` },
			{ name: "circles_joke_3", joke: `Why did ${name} become a chef? It knew how to handle the heat!` },
			{ name: "circles_joke_4", joke: `Why did ${name} become a teacher? It knew how to keep things in motion!` },
		],
		Dots: [
			{ name: "dots_joke_1", joke: `Why did ${name} become a detective? It could connect the dots!` },
			{ name: "dots_joke_2", joke: `What do you call a dots loader that loves puzzles? A dot-connector!` },
			{ name: "dots_joke_3", joke: `Why did ${name} start a band? It had great rhythm!` },
			{ name: "dots_joke_4", joke: `Why did ${name} become a scientist? It loved to experiment!` },
		],
		Emojis: [
			{ name: "emojis_joke_1", joke: `Why did ${name} become a writer? It had a way with expressions!` },
			{ name: "emojis_joke_2", joke: `What do you call an emoji loader that loves music? A note-worthy performer!` },
			{ name: "emojis_joke_3", joke: `Why did ${name} join the circus? It was a great performer!` },
			{ name: "emojis_joke_4", joke: `Why did ${name} become a comedian? It had everyone in stitches!` },
		],
		Lines: [
			{ name: "lines_joke_1", joke: `Why did ${name} become a writer? It had a way with lines!` },
			{ name: "lines_joke_2", joke: `What do you call a lines loader that loves music? A line-dancer!` },
			{ name: "lines_joke_3", joke: `Why did ${name} join the circus? It was a great performer!` },
			{ name: "lines_joke_4", joke: `Why did ${name} become a poet? It had a way with words!` },
		],
		Numbers: [
			{ name: "numbers_joke_1", joke: `Why did ${name} become a mathematician? It loved to count!` },
			{ name: "numbers_joke_2", joke: `What do you call a numbers loader that loves puzzles? A number-cruncher!` },
			{ name: "numbers_joke_3", joke: `Why did ${name} start a band? It had great rhythm!` },
			{ name: "numbers_joke_4", joke: `Why did ${name} become a banker? It knew how to count on success!` },
		],
		Squares: [
			{ name: "squares_joke_1", joke: `Why did ${name} become a scientist? It loved to experiment!` },
			{ name: "squares_joke_2", joke: `What do you call a square loader that loves art? A square-ative genius!` },
			{ name: "squares_joke_3", joke: `Why did ${name} become a teacher? It loved to share knowledge!` },
			{ name: "squares_joke_4", joke: `Why did ${name} become an architect? It had a solid foundation!` },
		],
		Symbols: [
			{ name: "symbols_joke_1", joke: `Why did ${name} become a magician? It could make anything disappear!` },
			{ name: "symbols_joke_2", joke: `What do you call a symbols loader that loves history? A symbol-chronologist!` },
			{ name: "symbols_joke_3", joke: `Why did ${name} become a pilot? It loved to take off!` },
			{ name: "symbols_joke_4", joke: `Why did ${name} become a linguist? It knew the language of symbols!` },
		],
		Togglers: [
			{ name: "togglers_joke_1", joke: `Why did ${name} become a switch operator? It loved to toggle!` },
			{ name: "togglers_joke_2", joke: `What do you call a togglers loader that loves puzzles? A toggle-master!` },
			{ name: "togglers_joke_3", joke: `Why did ${name} start a band? It had great rhythm!` },
			{ name: "togglers_joke_4", joke: `Why did ${name} become a DJ? It knew how to switch up the beats!` },
		],
	};

	const jokes = jokeCategories[category] || [
		{ name: `${category.toLocaleLowerCase()}_joke_1`, joke: `Why did ${name} get promoted? It was the ${category.toLocaleLowerCase()} teacher's pet!` },
	];

	const selectedJoke = jokes[Math.floor(Math.random() * jokes.length)];
	return selectedJoke.joke;
});

