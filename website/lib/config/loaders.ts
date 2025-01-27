import { cache } from "react";

// Object to store loaders
const LOADERS = {
    arrows_1: {
        speed: 100,
        category: 'arrows',
        keyframes: ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
    },
    arrows_2: {
        speed: 80,
        category: 'arrows',
        keyframes: ['⬆️ ', '↗️ ', '➡️ ', '↘️ ', '⬇️ ', '↙️ ', '⬅️ ', '↖️ '],
    },
    arrows_3: {
        speed: 120,
        category: 'arrows',
        keyframes: ['▹▹▹▹▹', '▸▹▹▹▹', '▹▸▹▹▹', '▹▹▸▹▹', '▹▹▹▸▹', '▹▹▹▹▸'],
    },
    arrows_4: {
        speed: 100,
        category: 'arrows',
        keyframes: ['⇐', '⇑', '⇒', '⇓'],
    },
    arrows_5: {
        speed: 100,
        category: 'arrows',
        keyframes: ['↑', '→', '↓', '←'],
    },
    bars_1: {
        speed: 80,
        category: 'bars',
        keyframes: [
            '[    ]', '[=   ]', '[==  ]', '[=== ]', '[====]', '[ ===]',
            '[  ==]', '[   =]', '[    ]', '[   =]', '[  ==]', '[ ===]',
            '[====]', '[=== ]', '[==  ]', '[=   ]'
        ],
    },
    bars_2: {
        speed: 80,
        category: 'bars',
        keyframes: [
            '|_●____|', '|__●___|', '|___●__|', '|____●_|',
            '|_____●|', '|____●_|', '|___●__|', '|__●___|',
            '|_●____|', '|●_____|'
        ],
    },
    bars_3: {
        speed: 17,
        category: 'bars',
        keyframes: [
            '█▁▁▁▁▁▁▁', '██▁▁▁▁▁▁', '███▁▁▁▁▁', '████▁▁▁▁', '██████▁▁', '██████▁▁',
            '███████▁', '████████', '████████', '████████', '████████', '████████',
            '████████', '████████', '████████', '▁███████', '▁███████', '▁███████',
            '▁▁██████', '▁▁▁█████', '▁▁▁▁████', '▁▁▁▁████', '▁▁▁▁████', '▁▁▁▁▁███',
            '▁▁▁▁▁███', '▁▁▁▁▁███', '▁▁▁▁▁▁██', '▁▁▁▁▁▁██', '▁▁▁▁▁▁▁█', '▁▁▁▁▁▁▁█',
            '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁',
            '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁', '▁▁▁▁▁▁▁▁'
        ],
    },
    bars_4: {
        speed: 100,
        category: 'bars',
        keyframes: [
            '|█████|', '|████|', '|███|', '|██|', '|█|', '||',
            '|█|', '|██|', '|███|', '|████|', '|█████|'
        ],
    },
    bars_5: {
        speed: 100,
        category: 'bars',
        keyframes: [
            '|█||||', '||█|||', '|||█||', '||||█|',
            '||||█|', '|||█||', '||█|||', '|█||||'
        ],
    },
    circles_1: {
        speed: 100,
        category: 'circles',
        keyframes: ['◜', '◠', '◝', '◞', '◡', '◟'],
    },
    circles_2: {
        speed: 140,
        category: 'circles',
        keyframes: ['.', 'o', 'O', '@', '*'],
    },
    circles_3: {
        speed: 120,
        category: 'circles',
        keyframes: ['.', 'o', 'O', '°', 'O', 'o', '.'],
    },
    circles_4: {
        speed: 120,
        category: 'circles',
        keyframes: ['◡', '⊙', '◠'],
    },
    circles_5: {
        speed: 50,
        category: 'circles',
        keyframes: ['◐', '◓', '◑', '◒'],
    },
    circles_6: {
        speed: 120,
        category: 'circles',
        keyframes: ['◴', '◷', '◶', '◵'],
    },
    dots_1: {
        speed: 80,
        category: 'dots',
        keyframes: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
    },
    dots_2: {
        speed: 80,
        category: 'dots',
        keyframes: ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'],
    },
    dots_3: {
        speed: 80,
        category: 'dots',
        keyframes: ['⠋', '⠙', '⠚', '⠞', '⠖', '⠦', '⠴', '⠲', '⠳', '⠓'],
    },
    dots_4: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠄', '⠆', '⠇', '⠋', '⠙', '⠸',
            '⠰', '⠠', '⠰', '⠸', '⠙', '⠋',
            '⠇', '⠆'
        ],
    },
    dots_5: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠋', '⠙', '⠚', '⠒', '⠂', '⠂',
            '⠒', '⠲', '⠴', '⠦', '⠖', '⠒',
            '⠐', '⠐', '⠒', '⠓', '⠋'
        ],
    },
    dots_6: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠁', '⠉', '⠙', '⠚', '⠒', '⠂', '⠂',
            '⠒', '⠲', '⠴', '⠤', '⠄', '⠄', '⠤',
            '⠴', '⠲', '⠒', '⠂', '⠂', '⠒', '⠚',
            '⠙', '⠉', '⠁'
        ],
    },
    dots_7: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠈', '⠉', '⠋', '⠓', '⠒', '⠐', '⠐',
            '⠒', '⠖', '⠦', '⠤', '⠠', '⠠', '⠤',
            '⠦', '⠖', '⠒', '⠐', '⠐', '⠒', '⠓',
            '⠋', '⠉', '⠈'
        ],
    },
    dots_8: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠁', '⠁', '⠉', '⠙', '⠚', '⠒', '⠂',
            '⠂', '⠒', '⠲', '⠴', '⠤', '⠄', '⠄',
            '⠤', '⠠', '⠠', '⠤', '⠦', '⠖', '⠒',
            '⠐', '⠐', '⠒', '⠓', '⠋', '⠉', '⠈', '⠈'
        ],
    },
    dots_9: {
        speed: 80,
        category: 'dots',
        keyframes: ['⢹', '⢺', '⢼', '⣸', '⣇', '⡧', '⡗', '⡏'],
    },
    dots_10: {
        speed: 80,
        category: 'dots',
        keyframes: ['⢄', '⢂', '⢁', '⡁', '⡈', '⡐', '⡠'],
    },
    dots_11: {
        speed: 100,
        category: 'dots',
        keyframes: ['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'],
    },
    dots_12: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⢀⠀', '⡀⠀', '⠄⠀', '⢂⠀', '⡂⠀', '⠅⠀', '⢃⠀', '⡃⠀',
            '⠍⠀', '⢋⠀', '⡋⠀', '⠍⠁', '⢋⠁', '⡋⠁', '⠍⠉', '⠋⠉',
            '⠋⠉', '⠉⠙', '⠉⠙', '⠉⠩', '⠈⢙', '⠈⡙', '⢈⠩', '⡀⢙',
            '⠄⡙', '⢂⠩', '⡂⢘', '⠅⡘', '⢃⠨', '⡃⢐', '⠍⡐', '⢋⠠',
            '⡋⢀', '⠍⡁', '⢋⠁', '⡋⠁', '⠍⠉', '⠋⠉', '⠋⠉', '⠉⠙',
            '⠉⠙', '⠉⠩', '⠈⢙', '⠈⡙', '⠈⠩', '⠀⢙', '⠀⡙', '⠀⠩',
            '⠀⢘', '⠀⡘', '⠀⠨', '⠀⢐', '⠀⡐', '⠀⠠', '⠀⢀', '⠀⡀'
        ],
    },
    dots_13: {
        speed: 80,
        category: 'dots',
        keyframes: ['⣼', '⣹', '⢻', '⠿', '⡟', '⣏', '⣧', '⣶'],
    },
    dots_14: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠉⠉', '⠈⠙', '⠀⠹', '⠀⢸', '⠀⣰', '⢀⣠', '⣀⣀', '⣄⡀',
            '⣆⠀', '⡇⠀', '⠏⠀', '⠋⠁'
        ],
    },
    dots_15: {
        speed: 80,
        category: 'dots',
        keyframes: ['⢎ ', '⠎⠁', '⠊⠑', '⠈⠱', ' ⡱', '⢀⡰', '⢄⡠', '⢆⡀'],
    },
    dots_16: {
        speed: 80,
        category: 'dots',
        keyframes: [
            '⠁', '⠂', '⠄', '⡀', '⡈', '⡐', '⡠', '⣀', '⣁', '⣂',
            '⣄', '⣌', '⣔', '⣤', '⣥', '⣦', '⣮', '⣶', '⣷', '⣿',
            '⡿', '⠿', '⢟', '⠟', '⡛', '⠛', '⠫', '⢋', '⠋', '⠍',
            '⡉', '⠉', '⠑', '⠡', '⢁'
        ],
    },
    dots_17: {
        speed: 120,
        category: 'dots',
        keyframes: ['⠁', '⠂', '⠄', '⠂'],
    },
    emojis_1: {
        speed: 200,
        category: 'emojis',
        keyframes: [
            '_______', '______🏎️', '_____🏎️_', '____🏎️__',
            '___🏎️💨_', '__🏎️💨__', '_🏎️💨___', '🏎️_____', '_______'
        ],
    },
    emojis_2: {
        speed: 100,
        category: 'emojis',
        keyframes: [
            '_______', '______🚚', '_____🚚_', '____🚚__',
            '___🚚__', '__🚚___', '_🚚____', '🚚_____'
        ],
    },
    emojis_3: {
        speed: 100,
        category: 'emojis',
        keyframes: [
            '🕛 ', '🕐 ', '🕑 ', '🕒 ', '🕓 ', '🕔 ', '🕕 ',
            '🕖 ', '🕗 ', '🕘 ', '🕙 ', '🕚 '
        ],
    },
    emojis_4: {
        speed: 180,
        category: 'emojis',
        keyframes: ['🌍 ', '🌎 ', '🌏 '],
    },
    emojis_5: {
        speed: 100,
        category: 'emojis',
        keyframes: ['💛 ', '💙 ', '💜 ', '💚 ', '❤️ '],
    },
    emojis_6: {
        speed: 200,
        category: 'emojis',
        keyframes: ['🫴', '🤌', '🤌', '🤌', '👌'],
    },
    emojis_7: {
        speed: 300,
        category: 'emojis',
        keyframes: ['🙈 ', '🙈 ', '🙉 ', '🙊 '],
    },
    emojis_8: {
        speed: 200,
        category: 'emojis',
        keyframes: ['🔴 ', '🟢 ', '🔵 ', '⚪️ ', '🟤 ', '🟡 ', '🟣 ', '🟠 '],
    },
    emojis_9: {
        speed: 200,
        category: 'emojis',
        keyframes: ['😄 ', '😝 '],
    },
    lines_1: {
        speed: 70,
        category: 'lines',
        keyframes: ["_", "_", "_", "-", "`", "`", "'", "´", "-", "_", "_", "_"],
    },
    lines_2: {
        speed: 100,
        category: 'lines',
        keyframes: ['☱', '☲', '☴'],
    },
    lines_3: {
        speed: 130,
        category: 'lines',
        keyframes: ['-', '\\', '|', '/'],
    },
    lines_4: {
        speed: 100,
        category: 'lines',
        keyframes: ['⠂', '-', '–', '—', '–', '-'],
    },
    numbers_1: {
        speed: 80,
        category: 'numbers',
        keyframes: [
            '010010', '001100', '100101', '111010', '111101',
            '010111', '101011', '111000', '110011', '110101'
        ],
    },
    numbers_2: {
        speed: 50,
        category: 'numbers',
        keyframes: [
            '000', '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011',
            '012', '013', '014', '015', '016', '017', '018', '019', '020', '021', '022', '023',
            '024', '025', '026', '027', '028', '029', '030', '031', '032', '033', '034', '035',
            '036', '037', '038', '039', '040', '041', '042', '043', '044', '045', '046', '047',
            '048', '049', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059',
            '060', '061', '062', '063', '064', '065', '066', '067', '068', '069', '070', '071',
            '072', '073', '074', '075', '076', '077', '078', '079', '080', '081', '082', '083',
            '084', '085', '086', '087', '088', '089', '090', '091', '092', '093', '094', '095',
            '096', '097', '098', '099', '100'
        ],
    },
    numbers_3: {
        speed: 200,
        category: 'numbers',
        keyframes: [
            '100000', '010000', '001000', '000100', '000010', '000001', '000010',
            '000100', '001000', '001000', '010000'
        ],
    },
    numbers_4: {
        speed: 100,
        category: 'numbers',
        keyframes: [
            '000000', '010000', '012000', '012300', '012340', '012345', '012340',
            '012300', '012000', '010000', '000000'
        ],
    },
    numbers_5: {
        speed: 80,
        category: 'numbers',
        keyframes: [
            '000000', 'V01010', 'Ve0101', 'Ver010', 'Verc01', 'Verce0', 'Vercel',
            'Vercel', 'Vercel', 'Verce0', 'Verc01', 'Ver010', 'Ve0101', 'V01010', '010101'
        ],
    },
    squares_1: {
        speed: 120,
        category: 'squares',
        keyframes: ['▏', '▎', '▍', '▌', '▋', '▊', '▉', '▊', '▋', '▌', '▍', '▎'],
    },
    squares_2: {
        speed: 120,
        category: 'squares',
        keyframes: ['▁', '▃', '▄', '▅', '▆', '▇', '▆', '▅', '▄', '▃'],
    },
    squares_3: {
        speed: 120,
        category: 'squares',
        keyframes: ['▖', '▘', '▝', '▗'],
    },
    squares_4: {
        speed: 100,
        category: 'squares',
        keyframes: ['▌', '▀', '▐', '▄'],
    },
    squares_5: {
        speed: 100,
        category: 'squares',
        keyframes: ['▓', '▒', '░'],
    },
    squares_6: {
        speed: 180,
        category: 'squares',
        keyframes: ['◰', '◳', '◲', '◱'],
    },
    squares_7: {
        speed: 400,
        category: 'squares',
        keyframes: ['.  ', '.. ', '...'],
    },
    squares_8: {
        speed: 200,
        category: 'squares',
        keyframes: ['.  ', '.. ', '...', ' ..', '  .'],
    },
    squares_9: {
        speed: 50,
        category: 'squares',
        keyframes: ['◢', '◣', '◤', '◥'],
    },
    symbols_1: {
        speed: 100,
        category: 'symbols',
        keyframes: ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
    },
    symbols_2: {
        speed: 100,
        category: 'symbols',
        keyframes: ['╫', '╪'],
    },
    symbols_3: {
        speed: 70,
        category: 'symbols',
        keyframes: ['✶', '✸', '✹', '✺', '✹', '✷'],
    },
    symbols_4: {
        speed: 80,
        category: 'symbols',
        keyframes: ['+', 'x', '*'],
    },
    togglers_1: {
        speed: 250,
        category: 'togglers',
        keyframes: ['⊶', '⊷'],
    },
    togglers_2: {
        speed: 80,
        category: 'togglers',
        keyframes: ['▫', '▪'],
    },
    togglers_3: {
        speed: 120,
        category: 'togglers',
        keyframes: ['□', '■'],
    },
    togglers_4: {
        speed: 100,
        category: 'togglers',
        keyframes: ['■', '□', '▪', '▫'],
    },
    togglers_5: {
        speed: 100,
        category: 'togglers',
        keyframes: ['▮', '▯'],
    },
    togglers_6: {
        speed: 300,
        category: 'togglers',
        keyframes: ['⃝', 'Ⓞ'],
    },
    togglers_7: {
        speed: 80,
        category: 'togglers',
        keyframes: ['⦾', '⦿'],
    },
    togglers_8: {
        speed: 100,
        category: 'togglers',
        keyframes: ['◍', '◌'],
    },
    togglers_9: {
        speed: 100,
        category: 'togglers',
        keyframes: ['◉', '◎'],
    },
    togglers_10: {
        speed: 100,
        category: 'togglers',
        keyframes: ['㊂', '㊀', '㊁'],
    },
    togglers_11: {
        speed: 50,
        category: 'togglers',
        keyframes: ['⧇', '⧆'],
    },
    togglers_12: {
        speed: 120,
        category: 'togglers',
        keyframes: ['☗', '☖'],
    },
    togglers_13: {
        speed: 80,
        category: 'togglers',
        keyframes: ['=', '*', '-'],
    },
    togglers_14: {
        speed: 300,
        category: 'togglers',
        keyframes: ['❂', '✪'],
    },
};

export const getLoaders = cache(() => LOADERS);
export default LOADERS;