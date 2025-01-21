import type { LoaderCategories, LoaderProps } from '@/types';
import { memoizer } from './utils';

const _ = (
    category: LoaderCategories,
    name: string,
    speed: number,
    keyframes: string[],
): LoaderProps => ({ category, name, speed, keyframes });

const loaders = [
    _("Arrows", "arrows_1", 100, ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"]),
    _("Arrows", "arrows_2", 80, ["⬆️ ", "↗️ ", "➡️ ", "↘️ ", "⬇️ ", "↙️ ", "⬅️ ", "↖️ "]),
    _("Arrows", "arrows_3", 120, ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"]),
    _("Arrows", "arrows_4", 100, ['⇐', '⇑', '⇒', '⇓']),
    _("Arrows", "arrows_5", 100, ['↑', '→', '↓', '←']),
    _("Bars", "bars_1", 80, ["[    ]", "[=   ]", "[==  ]", "[=== ]", "[====]", "[ ===]", "[  ==]", "[   =]", "[    ]", "[   =]", "[  ==]", "[ ===]", "[====]", "[=== ]", "[==  ]", "[=   ]"]),
    _("Bars", "bars_2", 80, ["|_●____|", "|__●___|", "|___●__|", "|____●_|", "|_____●|", "|____●_|", "|___●__|", "|__●___|", "|_●____|", "|●_____|"]),
    _("Bars", "bars_3", 17, ["█▁▁▁▁▁▁▁", "██▁▁▁▁▁▁", "███▁▁▁▁▁", "████▁▁▁▁", "██████▁▁", "██████▁▁", "███████▁", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "▁███████", "▁███████", "▁███████", "▁▁██████", "▁▁▁█████", "▁▁▁▁████", "▁▁▁▁████", "▁▁▁▁████", "▁▁▁▁▁███", "▁▁▁▁▁███", "▁▁▁▁▁███", "▁▁▁▁▁▁██", "▁▁▁▁▁▁██", "▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "█▁▁▁▁▁▁▁", "██▁▁▁▁▁▁", "██▁▁▁▁▁▁", "███▁▁▁▁▁", "████▁▁▁▁", "█████▁▁▁", "█████▁▁▁", "██████▁▁", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "████████", "▁███████", "▁███████", "▁▁▁█████", "▁▁▁▁▁███", "▁▁▁▁▁███", "▁▁▁▁▁▁██", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁"]),
    _("Bars", "bars_4", 100, ['|█████|', '|████|', '|███|', '|██|', '|█|', '||', '|█|', '|██|', '|███|', '|████|', '|█████|']),
    _("Bars", "bars_5", 100, ['|█||||', '||█|||', '|||█||', '||||█|', '||||█|', '|||█||', '||█|||', '|█||||']),
    _("Circles", "arc", 100, ["◜", "◠", "◝", "◞", "◡", "◟"]),
    _("Circles", "balloon_1", 140, [".", "o", "O", "@", "*"]),
    _("Circles", "balloon_2", 120, [".", "o", "O", "°", "O", "o", "."]),
    _("Circles", "circle_1", 120, ["◡", "⊙", "◠"]),
    _("Circles", "circle_2", 50, ["◐", "◓", "◑", "◒"]),
    _("Circles", "circle_3", 120, ["◴", "◷", "◶", "◵"]),
    _("Dots", "dots_1", 80, ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]),
    _("Dots", "dots_2", 80, ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"]),
    _("Dots", "dots_3", 80, ["⠋", "⠙", "⠚", "⠞", "⠖", "⠦", "⠴", "⠲", "⠳", "⠓"]),
    _("Dots", "dots_4", 80, ["⠄", "⠆", "⠇", "⠋", "⠙", "⠸", "⠰", "⠠", "⠰", "⠸", "⠙", "⠋", "⠇", "⠆"]),
    _("Dots", "dots_5", 80, ["⠋", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋"]),
    _("Dots", "dots_6", 80, ["⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠴", "⠲", "⠒", "⠂", "⠂", "⠒", "⠚", "⠙", "⠉", "⠁"]),
    _("Dots", "dots_7", 80, ["⠈", "⠉", "⠋", "⠓", "⠒", "⠐", "⠐", "⠒", "⠖", "⠦", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈"]),
    _("Dots", "dots_8", 80, ["⠁", "⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈", "⠈"]),
    _("Dots", "dots_9", 80, ["⢹", "⢺", "⢼", "⣸", "⣇", "⡧", "⡗", "⡏"]),
    _("Dots", "dots_10", 80, ["⢄", "⢂", "⢁", "⡁", "⡈", "⡐", "⡠"]),
    _("Dots", "dots_11", 100, ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"]),
    _("Dots", "dots_12", 80, ["⢀⠀", "⡀⠀", "⠄⠀", "⢂⠀", "⡂⠀", "⠅⠀", "⢃⠀", "⡃⠀", "⠍⠀", "⢋⠀", "⡋⠀", "⠍⠁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⢈⠩", "⡀⢙", "⠄⡙", "⢂⠩", "⡂⢘", "⠅⡘", "⢃⠨", "⡃⢐", "⠍⡐", "⢋⠠", "⡋⢀", "⠍⡁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⠈⠩", "⠀⢙", "⠀⡙", "⠀⠩", "⠀⢘", "⠀⡘", "⠀⠨", "⠀⢐", "⠀⡐", "⠀⠠", "⠀⢀", "⠀⡀"]),
    _("Dots", "dots_13", 80, ["⣼", "⣹", "⢻", "⠿", "⡟", "⣏", "⣧", "⣶"]),
    _("Dots", "dots_14", 80, ["⠉⠉", "⠈⠙", "⠀⠹", "⠀⢸", "⠀⣰", "⢀⣠", "⣀⣀", "⣄⡀", "⣆⠀", "⡇⠀", "⠏⠀", "⠋⠁"]),
    _("Dots", "dots_15", 80, ["⢎ ", "⠎⠁", "⠊⠑", "⠈⠱", " ⡱", "⢀⡰", "⢄⡠", "⢆⡀"]),
    _("Dots", "dots_16", 80, ["⠁", "⠂", "⠄", "⡀", "⡈", "⡐", "⡠", "⣀", "⣁", "⣂", "⣄", "⣌", "⣔", "⣤", "⣥", "⣦", "⣮", "⣶", "⣷", "⣿", "⡿", "⠿", "⢟", "⠟", "⡛", "⠛", "⠫", "⢋", "⠋", "⠍", "⡉", "⠉", "⠑", "⠡", "⢁"]),
    _("Dots", "dots_17", 120, ["⠁", "⠂", "⠄", "⠂"]),
    _("Emojis", "car", 200, ["_______", "______🏎️", "_____🏎️_", "____🏎️__", "___🏎️💨_", "__🏎️💨__", "_🏎️💨___", "🏎️_____", "_______"]),
    _("Emojis", "ship", 100, ["_______", "______🚚", "_____🚚_", "____🚚__", "___🚚__", "__🚚___", "_🚚____", "🚚_____", "_______"]),
    _("Emojis", "clock", 100, ["🕛 ", "🕐 ", "🕑 ", "🕒 ", "🕓 ", "🕔 ", "🕕 ", "🕖 ", "🕗 ", "🕘 ", "🕙 ", "🕚 "]),
    _("Emojis", "earth", 180, ["🌍 ", "🌎 ", "🌏 "]),
    _("Emojis", "hearts", 100, ["💛 ", "💙 ", "💜 ", "💚 ", "❤️ "]),
    _("Emojis", "italian", 200, ["🫴", "🤌", "🤌", "🤌", "👌"]),
    _("Emojis", "monkey", 300, ["🙈 ", "🙈 ", "🙉 ", "🙊 "]),
    _("Emojis", "pastel", 200, ["🔴 ", "🟢 ", "🔵 ", "⚪️ ", "🟤 ", "🟡 ", "🟣 ", "🟠 "]),
    _("Emojis", "smiley", 200, ["😄 ", "😝 "]),
    _("Lines", "flip", 70, ["_", "_", "_", "-", "`", "`", "'", "´", "-", "_", "_", "_"]),
    _("Lines", "hamburger", 100, ["☱", "☲", "☴"]),
    _("Lines", "lines_1", 130, ["-", "\\", "|", "/"]),
    _("Lines", "lines_2", 100, ["⠂", "-", "–", "—", "–", "-"]),
    _("Numbers", "binary", 80, ["010010", "001100", "100101", "111010", "111101", "010111", "101011", "111000", "110011", "110101"]),
    _("Numbers", "percent", 50, ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100"]),
    _("Numbers", "traverse", 200, ["100000", "010000", "001000", "000100", "000010", "000001", "000010", "000100", "001000", "001000", "010000"]),
    _("Numbers", "index", 100, ["000000", "010000", "012000", "012300", "012340", "012345", "012340", "012300", "012000", "010000", "000000"]),
    _("Numbers", "vercel", 80, ["000000", "V01010", "Ve0101", "Ver010", "Verc01", "Verce0", "Vercel", "Vercel", "Vercel", "Verce0", "Verc01", "Ver010", "Ve0101", "V01010", "010101"]),
    _("Squares", "squares_1", 120, ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "▊", "▋", "▌", "▍", "▎"]),
    _("Squares", "squares_2", 120, ["▁", "▃", "▄", "▅", "▆", "▇", "▆", "▅", "▄", "▃"]),
    _("Squares", "squares_3", 120, ["▖", "▘", "▝", "▗"]),
    _("Squares", "squares_4", 100, ["▌", "▀", "▐", "▄"]),
    _("Squares", "squares_5", 100, ["▓", "▒", "░"]),
    _("Squares", "squares_6", 180, ["◰", "◳", "◲", "◱"]),
    _("Squares", "squares_7", 400, [".  ", ".. ", "..."]),
    _("Squares", "squares_8", 200, [".  ", ".. ", "...", " ..", "  ."]),
    _("Squares", "squares_9", 50, ["◢", "◣", "◤", "◥"]),
    _("Symbols", "box_3", 100, ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"]),
    _("Symbols", "squish", 100, ["╫", "╪"]),
    _("Symbols", "star_1", 70, ["✶", "✸", "✹", "✺", "✹", "✷"]),
    _("Symbols", "star_2", 80, ["+", "x", "*"]),
    _("Togglers", "togglers_1", 250, ["⊶", "⊷"]),
    _("Togglers", "togglers_2", 80, ["▫", "▪"]),
    _("Togglers", "togglers_3", 120, ["□", "■"]),
    _("Togglers", "togglers_4", 100, ["■", "□", "▪", "▫"]),
    _("Togglers", "togglers_5", 100, ["▮", "▯"]),
    _("Togglers", "togglers_6", 300, ["⃝", "Ⓞ"]),
    _("Togglers", "togglers_7", 80, ["⦾", "⦿"]),
    _("Togglers", "togglers_8", 100, ["◍", "◌"]),
    _("Togglers", "togglers_9", 100, ["◉", "◎"]),
    _("Togglers", "togglers_10", 100, ["㊂", "㊀", "㊁"]),
    _("Togglers", "togglers_11", 50, ["⧇", "⧆"]),
    _("Togglers", "togglers_12", 120, ["☗", "☖"]),
    _("Togglers", "togglers_13", 80, ["=", "*", "-"]),
    _("Togglers", "togglers_14", 300, ['❂', '✪']),
];

export const getLoaders = memoizer((): LoaderProps[] => {
    console.log('getLoaders called!');
    return loaders;
});

export const getAllArrowLoaders = memoizer(() => getAllLoadersFromCategory('Arrows'));
export const getAllBarLoaders = memoizer(() => getAllLoadersFromCategory('Bars'));
export const getAllCircleLoaders = memoizer(() => getAllLoadersFromCategory('Circles'));
export const getAllDotLoaders = memoizer(() => getAllLoadersFromCategory('Dots'));
export const getAllEmojiLoaders = memoizer(() => getAllLoadersFromCategory('Emojis'));
export const getAllLineLoaders = memoizer(() => getAllLoadersFromCategory('Lines'));
export const getAllNumberLoaders = memoizer(() => getAllLoadersFromCategory('Numbers'));
export const getAllSquareLoaders = memoizer(() => getAllLoadersFromCategory('Squares'));
export const getAllSymbolLoaders = memoizer(() => getAllLoadersFromCategory('Symbols'));
export const getAllTogglerLoaders = memoizer(() => getAllLoadersFromCategory('Togglers'));

export const getAllLoadersFromCategory = memoizer((category: string): LoaderProps[] => {
    return getLoaders().filter(loader => loader.category === category);
});

export const getLoaderByName = memoizer((name: string): LoaderProps | undefined => {
    const loader = getLoaders().find(loader => loader.name === name);
    if (!loader) {
        throw new Error(`Loader '${name}' not found`);
    }
    return loader;
});

export const getLoadersByCategory = (category: string): LoaderProps[] => {
    switch (category) {
        case 'Arrows':
            return getAllArrowLoaders();
        case 'Bars':
            return getAllBarLoaders();
        case 'Circles':
            return getAllCircleLoaders();
        case 'Dots':
            return getAllDotLoaders();
        case 'Emojis':
            return getAllEmojiLoaders();
        case 'Lines':
            return getAllLineLoaders();
        case 'Numbers':
            return getAllNumberLoaders();
        case 'Squares':
            return getAllSquareLoaders();
        case 'Symbols':
            return getAllSymbolLoaders();
        case 'Togglers':
            return getAllTogglerLoaders();
        default:
            return [];
    }
};
