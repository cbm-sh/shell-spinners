import { memoize } from 'lodash';

type CliLoaderCategories = 'Arrows' | 'Bars' | 'Circles' | 'Dots' | 'Emojis' | 'Lines' | 'Numbers' | 'Squares' | 'Symbols' | 'Togglers';

type CliLoaderProps = {
    category: CliLoaderCategories;
    name: string;
    speed: number;
    keyframes: string[];
}

const cliLoader = (category: CliLoaderCategories, name: string, speed: number, keyframes: string[]) => ({ category, name, speed, keyframes } satisfies CliLoaderProps);

const getCliLoaders = memoize((): CliLoaderProps[] => {
    console.log('getCliLoaders called!');
    const loaders = [
     cliLoader("Arrows", "arrows_1", 100, ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"]),
     cliLoader("Arrows", "arrows_2", 80, ["⬆️ ", "↗️ ", "➡️ ", "↘️ ", "⬇️ ", "↙️ ", "⬅️ ", "↖️ "]),
     cliLoader("Arrows", "arrows_3", 120, ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"]),
     cliLoader("Arrows", "arrows_4", 100, ['⇐', '⇑', '⇒', '⇓']),
     cliLoader("Arrows", "arrows_5", 100, ['↑', '→', '↓', '←']),
     cliLoader("Bars", "bars_1", 80, ["[    ]", "[=   ]", "[==  ]", "[=== ]", "[====]", "[ ===]", "[  ==]", "[   =]", "[    ]", "[   =]", "[  ==]", "[ ===]", "[====]", "[=== ]", "[==  ]", "[=   ]"]),
     cliLoader("Bars", "bars_2", 80, ["|_●____|", "|__●___|", "|___●__|", "|____●_|", "|_____●|", "|____●_|", "|___●__|", "|__●___|", "|_●____|", "|●_____|"]),
     cliLoader("Bars", "bars_3", 17, ["█▁▁▁▁▁▁▁", "██▁▁▁▁▁▁", "███▁▁▁▁▁", "████▁▁▁▁", "██████▁▁", "██████▁▁", "███████▁", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "▁███████", "▁███████", "▁███████", "▁▁██████", "▁▁▁█████", "▁▁▁▁████", "▁▁▁▁████", "▁▁▁▁████", "▁▁▁▁▁███", "▁▁▁▁▁███", "▁▁▁▁▁███", "▁▁▁▁▁▁██", "▁▁▁▁▁▁██", "▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "█▁▁▁▁▁▁▁", "██▁▁▁▁▁▁", "██▁▁▁▁▁▁", "███▁▁▁▁▁", "████▁▁▁▁", "█████▁▁▁", "█████▁▁▁", "██████▁▁", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "▁███████", "▁███████", "▁▁▁█████", "▁▁▁▁▁███", "▁▁▁▁▁███", "▁▁▁▁▁▁██", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁"]),
     cliLoader("Bars", "bars_4", 100, ['|█████|','|████|', '|███|', '|██|', '|█|', '||', '|█|','|██|','|███|','|████|','|█████|']),
     cliLoader("Bars", "bars_5", 100, ['|█||||', '||█|||', '|||█||', '||||█|', '||||█|', '|||█||', '||█|||', '|█||||']),
     cliLoader("Circles", "arc", 100, ["◜", "◠", "◝", "◞", "◡", "◟"]),
     cliLoader("Circles", "balloon_1", 140, [".", "o", "O", "@", "*"]),
     cliLoader("Circles", "balloon_2", 120, [".", "o", "O", "°", "O", "o", "."]),
     cliLoader("Circles", "circle_1", 120, ["◡", "⊙", "◠"]),
     cliLoader("Circles", "circle_2", 50, ["◐", "◓", "◑", "◒"]),
     cliLoader("Circles", "circle_3", 120, ["◴", "◷", "◶", "◵"]),
     cliLoader("Dots", "dots_1", 80, ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]),
     cliLoader("Dots", "dots_2", 80, ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"]),
     cliLoader("Dots", "dots_3", 80, ["⠋", "⠙", "⠚", "⠞", "⠖", "⠦", "⠴", "⠲", "⠳", "⠓"]),
     cliLoader("Dots", "dots_4", 80, ["⠄", "⠆", "⠇", "⠋", "⠙", "⠸", "⠰", "⠠", "⠰", "⠸", "⠙", "⠋", "⠇", "⠆"]),
     cliLoader("Dots", "dots_5", 80, ["⠋", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋"]),
     cliLoader("Dots", "dots_6", 80, ["⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠴", "⠲", "⠒", "⠂", "⠂", "⠒", "⠚", "⠙", "⠉", "⠁"]),
     cliLoader("Dots", "dots_7", 80, ["⠈", "⠉", "⠋", "⠓", "⠒", "⠐", "⠐", "⠒", "⠖", "⠦", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈"]),
     cliLoader("Dots", "dots_8", 80, ["⠁", "⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈", "⠈"]),
     cliLoader("Dots", "dots_9", 80, ["⢹", "⢺", "⢼", "⣸", "⣇", "⡧", "⡗", "⡏"]),
     cliLoader("Dots", "dots_10", 80, ["⢄", "⢂", "⢁", "⡁", "⡈", "⡐", "⡠"]),
     cliLoader("Dots", "dots_11", 100, ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"]),
     cliLoader("Dots", "dots_12", 80, ["⢀⠀", "⡀⠀", "⠄⠀", "⢂⠀", "⡂⠀", "⠅⠀", "⢃⠀", "⡃⠀", "⠍⠀", "⢋⠀", "⡋⠀", "⠍⠁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⢈⠩", "⡀⢙", "⠄⡙", "⢂⠩", "⡂⢘", "⠅⡘", "⢃⠨", "⡃⢐", "⠍⡐", "⢋⠠", "⡋⢀", "⠍⡁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⠈⠩", "⠀⢙", "⠀⡙", "⠀⠩", "⠀⢘", "⠀⡘", "⠀⠨", "⠀⢐", "⠀⡐", "⠀⠠", "⠀⢀", "⠀⡀"]),
     cliLoader("Dots", "dots_13", 80, ["⣼", "⣹", "⢻", "⠿", "⡟", "⣏", "⣧", "⣶"]),
     cliLoader("Dots", "dots_14", 80, ["⠉⠉", "⠈⠙", "⠀⠹", "⠀⢸", "⠀⣰", "⢀⣠", "⣀⣀", "⣄⡀", "⣆⠀", "⡇⠀", "⠏⠀", "⠋⠁"]),
     cliLoader("Dots", "dots_15", 80, ["⢎ ", "⠎⠁", "⠊⠑", "⠈⠱", " ⡱", "⢀⡰", "⢄⡠", "⢆⡀"]),
     cliLoader("Dots", "dots_16", 80, ["⠁", "⠂", "⠄", "⡀", "⡈", "⡐", "⡠", "⣀", "⣁", "⣂", "⣄", "⣌", "⣔", "⣤", "⣥", "⣦", "⣮", "⣶", "⣷", "⣿", "⡿", "⠿", "⢟", "⠟", "⡛", "⠛", "⠫", "⢋", "⠋", "⠍", "⡉", "⠉", "⠑", "⠡", "⢁"]),
     cliLoader("Dots", "dots_17", 120, ["⠁", "⠂", "⠄", "⠂"]),
     cliLoader("Emojis", "car", 200, ["_______", "______🏎️", "_____🏎️_", "____🏎️__", "___🏎️💨_", "__🏎️💨__", "_🏎️💨___", "🏎️_____", "_______"]),
     cliLoader("Emojis", "ship", 100, ["_______", "______🚚", "_____🚚_", "____🚚__", "___🚚__", "__🚚___", "_🚚____", "🚚_____", "_______"]),
     cliLoader("Emojis", "clock", 100, ["🕛 ", "🕐 ", "🕑 ", "🕒 ", "🕓 ", "🕔 ", "🕕 ", "🕖 ", "🕗 ", "🕘 ", "🕙 ", "🕚 "]),
     cliLoader("Emojis", "earth", 180, ["🌍 ", "🌎 ", "🌏 "]),
     cliLoader("Emojis", "hearts", 100, ["💛 ", "💙 ", "💜 ", "💚 ", "❤️ "]),
     cliLoader("Emojis", "italian", 200, ["🫴","🤌","🤌","🤌","👌"]),
     cliLoader("Emojis", "monkey", 300, ["🙈 ", "🙈 ", "🙉 ", "🙊 "]),
     cliLoader("Emojis", "pastel", 200, ["🔴 ", "🟢 ", "🔵 ", "⚪️ ", "🟤 ", "🟡 ", "🟣 ", "🟠 "]),
     cliLoader("Emojis", "smiley", 200, ["😄 ", "😝 "]),
     cliLoader("Lines", "flip", 70, ["_", "_", "_", "-", "`", "`", "'", "´", "-", "_", "_", "_"]),
     cliLoader("Lines", "hamburger", 100, ["☱", "☲", "☴"]),
     cliLoader("Lines", "lines_1", 130, ["-", "\\", "|", "/"]),
     cliLoader("Lines", "lines_2", 100, ["⠂", "-", "–", "—", "–", "-"]),
     cliLoader("Numbers", "binary", 80, ["010010", "001100", "100101", "111010", "111101", "010111", "101011", "111000", "110011", "110101"]),
     cliLoader("Numbers", "percent", 50, ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100"]),
     cliLoader("Numbers", "traverse", 200, ["100000", "010000", "001000", "000100", "000010", "000001", "000010", "000100", "001000", "001000", "010000"]),
     cliLoader("Numbers", "index", 100, ["000000", "010000", "012000", "012300", "012340", "012345", "012340", "012300", "012000", "010000", "000000"]),
     cliLoader("Numbers", "vercel", 80, ["000000", "V01010", "Ve0101", "Ver010", "Verc01", "Verce0", "Vercel", "Vercel", "Vercel", "Verce0", "Verc01", "Ver010", "Ve0101", "V01010", "010101"]),
     cliLoader("Squares", "squares_1", 120, ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "▊", "▋", "▌", "▍", "▎"]),
     cliLoader("Squares", "squares_2", 120, ["▁", "▃", "▄", "▅", "▆", "▇", "▆", "▅", "▄", "▃"]),
     cliLoader("Squares", "squares_3", 120, ["▖", "▘", "▝", "▗"]),
     cliLoader("Squares", "squares_4", 100, ["▌", "▀", "▐", "▄"]),
     cliLoader("Squares", "squares_5", 100, ["▓", "▒", "░"]),
     cliLoader("Squares", "squares_6", 180, ["◰", "◳", "◲", "◱"]),
     cliLoader("Squares", "squares_7", 400, [".  ", ".. ", "..."]),
     cliLoader("Squares", "squares_8", 200, [".  ", ".. ", "...", " ..", "  ."]),
     cliLoader("Squares", "squares_9", 50, ["◢", "◣", "◤", "◥"]),
     cliLoader("Symbols", "box_3", 100, ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"]),
     cliLoader("Symbols", "squish", 100, ["╫", "╪"]),
     cliLoader("Symbols", "star_1", 70, ["✶", "✸", "✹", "✺", "✹", "✷"]),
     cliLoader("Symbols", "star_2", 80, ["+", "x", "*"]),
     cliLoader("Togglers", "togglers_1", 250, ["⊶", "⊷"]),
     cliLoader("Togglers", "togglers_2", 80, ["▫", "▪"]),
     cliLoader("Togglers", "togglers_3", 120, ["□", "■"]),
     cliLoader("Togglers", "togglers_4", 100, ["■", "□", "▪", "▫"]),
     cliLoader("Togglers", "togglers_5", 100, ["▮", "▯"]),
     cliLoader("Togglers", "togglers_6", 300, ["⃝", "Ⓞ"]),
     cliLoader("Togglers", "togglers_7", 80, ["⦾", "⦿"]),
     cliLoader("Togglers", "togglers_8", 100, ["◍", "◌"]),
     cliLoader("Togglers", "togglers_9", 100, ["◉", "◎"]),
     cliLoader("Togglers", "togglers_10", 100, ["㊂", "㊀", "㊁"]),
     cliLoader("Togglers", "togglers_11", 50, ["⧇", "⧆"]),
     cliLoader("Togglers", "togglers_12", 120, ["☗", "☖"]),
     cliLoader("Togglers", "togglers_13", 80, ["=", "*", "-"]),
     cliLoader("Togglers", "togglers_14", 300, ['❂','✪']),
];
return loaders;
});

export default getCliLoaders;


