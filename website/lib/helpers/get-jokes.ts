import { memoizer } from "@/lib/utils";

// Function and data structure to get jokes
const jokes = (id: string, category: string): string => {
	const jokeCategories: Record<string, { id: string, joke: string }[]> = {
		Arrows: [
			{ id: "arrows_joke_1", joke: `Why did ${id} cross the road? To point you in the right direction!` },
			{ id: "arrows_joke_2", joke: `What do you call an arrow that tells jokesList? A pun-derful pointer!` },
			{ id: "arrows_joke_3", joke: `Why ${id} always calm? It knew how to stay on target!` },
			{ id: "arrows_joke_4", joke: `Why did ${id} become an artist? It had a point to make!` },
		],
		Bars: [
			{ id: "bars_joke_1", joke: `Why did ${id} go to school? To become a progressional!` },
			{ id: "bars_joke_2", joke: `What do you call a bar loader that loves to dance? A bar-tender!` },
			{ id: "bars_joke_3", joke: `Why was ${id} always invited to parties? It knew how to keep things moving!` },
			{ id: "bars_joke_4", joke: `Why did ${id} become a musician? It knew how to hit the right notes!` },
		],
		Circles: [
			{ id: "circles_joke_1", joke: `Why did ${id} get promoted? It was well-rounded!` },
			{ id: "circles_joke_2", joke: `What do you call a circle loader that loves to travel? A globetrotter!` },
			{ id: "circles_joke_3", joke: `Why did ${id} become a chef? It knew how to handle the heat!` },
			{ id: "circles_joke_4", joke: `Why did ${id} become a teacher? It knew how to keep things in motion!` },
		],
		Dots: [
			{ id: "dots_joke_1", joke: `Why did ${id} become a detective? It could connect the dots!` },
			{ id: "dots_joke_2", joke: `What do you call a dots loader that loves puzzles? A dot-connector!` },
			{ id: "dots_joke_3", joke: `Why did ${id} start a band? It had great rhythm!` },
			{ id: "dots_joke_4", joke: `Why did ${id} become a scientist? It loved to experiment!` },
		],
		Emojis: [
			{ id: "emojis_joke_1", joke: `Why did ${id} become a writer? It had a way with expressions!` },
			{ id: "emojis_joke_2", joke: `What do you call an emoji loader that loves music? A note-worthy performer!` },
			{ id: "emojis_joke_3", joke: `Why did ${id} join the circus? It was a great performer!` },
			{ id: "emojis_joke_4", joke: `Why did ${id} become a comedian? It had everyone in stitches!` },
		],
		Lines: [
			{ id: "lines_joke_1", joke: `Why did ${id} become a writer? It had a way with lines!` },
			{ id: "lines_joke_2", joke: `What do you call a lines loader that loves music? A line-dancer!` },
			{ id: "lines_joke_3", joke: `Why did ${id} join the circus? It was a great performer!` },
			{ id: "lines_joke_4", joke: `Why did ${id} become a poet? It had a way with words!` },
		],
		Numbers: [
			{ id: "numbers_joke_1", joke: `Why did ${id} become a mathematician? It loved to count!` },
			{ id: "numbers_joke_2", joke: `What do you call a numbers loader that loves puzzles? A number-cruncher!` },
			{ id: "numbers_joke_3", joke: `Why did ${id} start a band? It had great rhythm!` },
			{ id: "numbers_joke_4", joke: `Why did ${id} become a banker? It knew how to count on success!` },
		],
		Squares: [
			{ id: "squares_joke_1", joke: `Why did ${id} become a scientist? It loved to experiment!` },
			{ id: "squares_joke_2", joke: `What do you call a square loader that loves art? A square-ative genius!` },
			{ id: "squares_joke_3", joke: `Why did ${id} become a teacher? It loved to share knowledge!` },
			{ id: "squares_joke_4", joke: `Why did ${id} become an architect? It had a solid foundation!` },
		],
		Symbols: [
			{ id: "symbols_joke_1", joke: `Why did ${id} become a magician? It could make anything disappear!` },
			{ id: "symbols_joke_2", joke: `What do you call a symbols loader that loves history? A symbol-chronologist!` },
			{ id: "symbols_joke_3", joke: `Why did ${id} become a pilot? It loved to take off!` },
			{ id: "symbols_joke_4", joke: `Why did ${id} become a linguist? It knew the language of symbols!` },
		],
		Togglers: [
			{ id: "togglers_joke_1", joke: `Why did ${id} become a switch operator? It loved to toggle!` },
			{ id: "togglers_joke_2", joke: `What do you call a togglers loader that loves puzzles? A toggle-master!` },
			{ id: "togglers_joke_3", joke: `Why did ${id} start a band? It had great rhythm!` },
			{ id: "togglers_joke_4", joke: `Why did ${id} become a DJ? It knew how to switch up the beats!` },
		],
	};

	const jokesList = jokeCategories[category] || [
		{ id: `${category.toLocaleLowerCase()}_joke_1`, joke: `Why did ${id} get promoted? It was the ${category.toLocaleLowerCase()} teacher's pet!` },
	];

	const randomJoke = jokesList[Math.floor(Math.random() * jokesList.length)];
	return randomJoke.joke;
};


// Function to get jokes
export const getJokes = memoizer((id: string, category: string): string => jokes(id, category));