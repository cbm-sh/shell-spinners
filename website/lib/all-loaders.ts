const ALL_LOADERS = [
	{
		category: "Arrows",
		name: "arrows_variant_1",
		speed: 100,
		keyframes: [
			"←",
			"↖",
			"↑",
			"↗",
			"→",
			"↘",
			"↓",
			"↙"
		]
	},
	{
		category: "Arrows",
		name: "arrows_variant_2",
		speed: 80,
		keyframes: [
			"⬆️ ",
			"↗️ ",
			"➡️ ",
			"↘️ ",
			"⬇️ ",
			"↙️ ",
			"⬅️ ",
			"↖️ "
		]
	},
	{
		category: "Arrows",
		name: "arrows_variant_3",
		speed: 120,
		keyframes: [
			"▹▹▹▹▹",
			"▸▹▹▹▹",
			"▹▸▹▹▹",
			"▹▹▸▹▹",
			"▹▹▹▸▹",
			"▹▹▹▹▸"
		]
	},
	{
        category: "Arrows",
        name: "arrows_variant_4",
        speed: 100,
        keyframes: ['⇐', '⇑', '⇒', '⇓']
    },
	{
        category: "Arrows",
        name: "arrows_variant_5",
        speed: 100,
        keyframes: ['↑', '→', '↓', '←']
    },
	{
		category: "Bars",
		name: "bars_variant_1",
		speed: 80,
		keyframes: [
			"[    ]",
			"[=   ]",
			"[==  ]",
			"[=== ]",
			"[====]",
			"[ ===]",
			"[  ==]",
			"[   =]",
			"[    ]",
			"[   =]",
			"[  ==]",
			"[ ===]",
			"[====]",
			"[=== ]",
			"[==  ]",
			"[=   ]"
		]
	},
	{
		category: "Bars",
		name: "bars_variant_2",
		speed: 80,
		keyframes: [
			"|_●____|",
			"|__●___|",
			"|___●__|",
			"|____●_|",
			"|_____●|",
			"|____●_|",
			"|___●__|",
			"|__●___|",
			"|_●____|",
			"|●_____|"
		]
	},
	{
		category: "Bars",
		name: "bars_variant_3",
		speed: 17,
		keyframes: [
			"█▁▁▁▁▁▁▁",
			"██▁▁▁▁▁▁",
			"███▁▁▁▁▁",
			"████▁▁▁▁",
			"██████▁▁",
			"██████▁▁",
			"███████▁",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"▁███████",
			"▁███████",
			"▁███████",
			"▁▁██████",
			"▁▁▁█████",
			"▁▁▁▁████",
			"▁▁▁▁████",
			"▁▁▁▁████",
			"▁▁▁▁▁███",
			"▁▁▁▁▁███",
			"▁▁▁▁▁███",
			"▁▁▁▁▁▁██",
			"▁▁▁▁▁▁██",
			"▁▁▁▁▁▁▁█",
			"▁▁▁▁▁▁▁█",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"█▁▁▁▁▁▁▁",
			"██▁▁▁▁▁▁",
			"██▁▁▁▁▁▁",
			"███▁▁▁▁▁",
			"████▁▁▁▁",
			"█████▁▁▁",
			"█████▁▁▁",
			"██████▁▁",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"████████",
			"▁███████",
			"▁███████",
			"▁▁▁█████",
			"▁▁▁▁▁███",
			"▁▁▁▁▁███",
			"▁▁▁▁▁▁██",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
			"▁▁▁▁▁▁▁▁",
            "▁▁▁▁▁▁▁▁",
            "▁▁▁▁▁▁▁▁",
            "▁▁▁▁▁▁▁▁",
            "▁▁▁▁▁▁▁▁",
            "▁▁▁▁▁▁▁▁"
        ]
    },
	{
        category: "Bars",
        name: "bars_variant_4",
        speed: 100,
        keyframes: ['|█████|','|████|', '|███|', '|██|', '|█|', '||', '|█|','|██|','|███|','|████|','|█████|']
    },
		{
        category: "Bars",
        name: "bars_variant_5",
        speed: 100,
        keyframes: ['|█||||', '||█|||', '|||█||', '||||█|', '||||█|', '|||█||', '||█|||', '|█||||']
    },
	{
		category: "Circles",
		name: "arc",
		speed: 100,
		keyframes: [
			"◜",
			"◠",
			"◝",
			"◞",
			"◡",
			"◟"
		]
	},
	{
		category: "Circles",
		name: "balloon",
		speed: 140,
		keyframes: [
			".",
			"o",
			"O",
			"@",
			"*"
		]
	},
	{
		category: "Circles",
		name: "balloon2",
		speed: 120,
		keyframes: [
			".",
			"o",
			"O",
			"°",
			"O",
			"o",
			"."
		]
	},
	{
		category: "Circles",
		name: "circle",
		speed: 120,
		keyframes: [
			"◡",
			"⊙",
			"◠"
		]
	},
	{
		category: "Circles",
		name: "circleHalves",
		speed: 50,
		keyframes: [
			"◐",
			"◓",
			"◑",
			"◒"
		]
	},
	{
		category: "Circles",
		name: "circleQuarters",
		speed: 120,
		keyframes: [
			"◴",
			"◷",
			"◶",
			"◵"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_1",
		speed: 80,
		keyframes: [
			"⠋",
			"⠙",
			"⠹",
			"⠸",
			"⠼",
			"⠴",
			"⠦",
			"⠧",
			"⠇",
			"⠏"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_2",
		speed: 80,
		keyframes: [
			"⣾",
			"⣽",
			"⣻",
			"⢿",
			"⡿",
			"⣟",
			"⣯",
			"⣷"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_3",
		speed: 80,
		keyframes: [
			"⠋",
			"⠙",
			"⠚",
			"⠞",
			"⠖",
			"⠦",
			"⠴",
			"⠲",
			"⠳",
			"⠓"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_4",
		speed: 80,
		keyframes: [
			"⠄",
			"⠆",
			"⠇",
			"⠋",
			"⠙",
			"⠸",
			"⠰",
			"⠠",
			"⠰",
			"⠸",
			"⠙",
			"⠋",
			"⠇",
			"⠆"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_5",
		speed: 80,
		keyframes: [
			"⠋",
			"⠙",
			"⠚",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠲",
			"⠴",
			"⠦",
			"⠖",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠓",
			"⠋"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_6",
		speed: 80,
		keyframes: [
			"⠁",
			"⠉",
			"⠙",
			"⠚",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠲",
			"⠴",
			"⠤",
			"⠄",
			"⠄",
			"⠤",
			"⠴",
			"⠲",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠚",
			"⠙",
			"⠉",
			"⠁"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_7",
		speed: 80,
		keyframes: [
			"⠈",
			"⠉",
			"⠋",
			"⠓",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠖",
			"⠦",
			"⠤",
			"⠠",
			"⠠",
			"⠤",
			"⠦",
			"⠖",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠓",
			"⠋",
			"⠉",
			"⠈"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_8",
		speed: 80,
		keyframes: [
			"⠁",
			"⠁",
			"⠉",
			"⠙",
			"⠚",
			"⠒",
			"⠂",
			"⠂",
			"⠒",
			"⠲",
			"⠴",
			"⠤",
			"⠄",
			"⠄",
			"⠤",
			"⠠",
			"⠠",
			"⠤",
			"⠦",
			"⠖",
			"⠒",
			"⠐",
			"⠐",
			"⠒",
			"⠓",
			"⠋",
			"⠉",
			"⠈",
			"⠈"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_9",
		speed: 80,
		keyframes: [
			"⢹",
			"⢺",
			"⢼",
			"⣸",
			"⣇",
			"⡧",
			"⡗",
			"⡏"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_10",
		speed: 80,
		keyframes: [
			"⢄",
			"⢂",
			"⢁",
			"⡁",
			"⡈",
			"⡐",
			"⡠"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_11",
		speed: 100,
		keyframes: [
			"⠁",
			"⠂",
			"⠄",
			"⡀",
			"⢀",
			"⠠",
			"⠐",
			"⠈"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_12",
		speed: 80,
		keyframes: [
			"⢀⠀",
			"⡀⠀",
			"⠄⠀",
			"⢂⠀",
			"⡂⠀",
			"⠅⠀",
			"⢃⠀",
			"⡃⠀",
			"⠍⠀",
			"⢋⠀",
			"⡋⠀",
			"⠍⠁",
			"⢋⠁",
			"⡋⠁",
			"⠍⠉",
			"⠋⠉",
			"⠋⠉",
			"⠉⠙",
			"⠉⠙",
			"⠉⠩",
			"⠈⢙",
			"⠈⡙",
			"⢈⠩",
			"⡀⢙",
			"⠄⡙",
			"⢂⠩",
			"⡂⢘",
			"⠅⡘",
			"⢃⠨",
			"⡃⢐",
			"⠍⡐",
			"⢋⠠",
			"⡋⢀",
			"⠍⡁",
			"⢋⠁",
			"⡋⠁",
			"⠍⠉",
			"⠋⠉",
			"⠋⠉",
			"⠉⠙",
			"⠉⠙",
			"⠉⠩",
			"⠈⢙",
			"⠈⡙",
			"⠈⠩",
			"⠀⢙",
			"⠀⡙",
			"⠀⠩",
			"⠀⢘",
			"⠀⡘",
			"⠀⠨",
			"⠀⢐",
			"⠀⡐",
			"⠀⠠",
			"⠀⢀",
			"⠀⡀"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_13",
		speed: 80,
		keyframes: [
			"⣼",
			"⣹",
			"⢻",
			"⠿",
			"⡟",
			"⣏",
			"⣧",
			"⣶"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_14",
		speed: 80,
		keyframes: [
			"⠉⠉",
			"⠈⠙",
			"⠀⠹",
			"⠀⢸",
			"⠀⣰",
			"⢀⣠",
			"⣀⣀",
			"⣄⡀",
			"⣆⠀",
			"⡇⠀",
			"⠏⠀",
			"⠋⠁"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_15",
		speed: 80,
		keyframes: [
			"⢎ ",
			"⠎⠁",
			"⠊⠑",
			"⠈⠱",
			" ⡱",
			"⢀⡰",
			"⢄⡠",
			"⢆⡀"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_16",
		speed: 80,
		keyframes: [
			"⠁",
			"⠂",
			"⠄",
			"⡀",
			"⡈",
			"⡐",
			"⡠",
			"⣀",
			"⣁",
			"⣂",
			"⣄",
			"⣌",
			"⣔",
			"⣤",
			"⣥",
			"⣦",
			"⣮",
			"⣶",
			"⣷",
			"⣿",
			"⡿",
			"⠿",
			"⢟",
			"⠟",
			"⡛",
			"⠛",
			"⠫",
			"⢋",
			"⠋",
			"⠍",
			"⡉",
			"⠉",
			"⠑",
			"⠡",
			"⢁"
		]
	},
	{
		category: "Dots",
		name: "dots_variant_17",
		speed: 120,
		keyframes: [
			"⠁",
			"⠂",
			"⠄",
			"⠂"
		]
	},
	{
		category: "Emojis",
		name: "car",
		speed: 200,
		keyframes: [
			"_______",
			"______🏎️",
			"_____🏎️_",
			"____🏎️__",
			"___🏎️💨_",
			"__🏎️💨__",
			"_🏎️💨___",
			"🏎️_____",
			"_______",
		]
	},
	{
		category: "Emojis",
		name: "ship",
		speed: 100,
		keyframes: [
			"_______",
			"______🚚",
			"_____🚚_",
			"____🚚__",
			"___🚚__",
			"__🚚___",
			"_🚚____",
			"🚚_____",
			"_______",

		]
	},
	{
		category: "Emojis",
		name: "clock",
		speed: 100,
		keyframes: [
			"🕛 ",
			"🕐 ",
			"🕑 ",
			"🕒 ",
			"🕓 ",
			"🕔 ",
			"🕕 ",
			"🕖 ",
			"🕗 ",
			"🕘 ",
			"🕙 ",
			"🕚 "
		]
	},
	{
		category: "Emojis",
		name: "earth",
		speed: 180,
		keyframes: [
			"🌍 ",
			"🌎 ",
			"🌏 "
		]
	},
	{
		category: "Emojis",
		name: "hearts",
		speed: 100,
		keyframes: [
			"💛 ",
			"💙 ",
			"💜 ",
			"💚 ",
			"❤️ "
		]
	},
	{
		category: "Emojis",
		name: "italian",
		speed: 200,
		keyframes: ["🫴","🤌","🤌","🤌","👌"],
	},
	{
		category: "Emojis",
		name: "monkey",
		speed: 300,
		keyframes: [
			"🙈 ",
			"🙈 ",
			"🙉 ",
			"🙊 "
		]
	},{
		category: "Emojis",
		name: "pastel",
		speed: 200,
		keyframes: [
			"🔴 ",
			"🟢 ",
			"🔵 ",
			"⚪️ ",
			"🟤 ",
			"🟡 ",
			"🟣 ",
			"🟠 ",
		]
	},
	{
		category: "Emojis",
		name: "smiley",
		speed: 200,
		keyframes: [
			"😄 ",
			"😝 "
		]
	},
	{
		category: "Lines",
		name: "flip",
		speed: 70,
		keyframes: [
			"_",
			"_",
			"_",
			"-",
			"`",
			"`",
			"'",
			"´",
			"-",
			"_",
			"_",
			"_"
		]
	},
	{
		category: "Lines",
		name: "hamburger",
		speed: 100,
		keyframes: [
			"☱",
			"☲",
			"☴"
		]
	},
	{
		category: "Lines",
		name: "lines_variant_1",
		speed: 130,
		keyframes: [
			"-",
			"\\",
			"|",
			"/"
		]
	},
	{
		category: "Lines",
		name: "lines_variant_2",
		speed: 100,
		keyframes: [
			"⠂",
			"-",
			"–",
			"—",
			"–",
			"-"
		]
	},
	{
		category: "Numbers",
		name: "binary",
		speed: 80,
		keyframes: [
			"010010",
			"001100",
			"100101",
			"111010",
			"111101",
			"010111",
			"101011",
			"111000",
			"110011",
			"110101"
		]
	},
	{
		category: "Numbers",
		name: "percent",
		speed: 50,
		keyframes: [
            "000",
            "001",
            "002",
            "003",
            "004",
            "005",
            "006",
            "007",
            "008",
            "009",
            "010",
            "011",
            "012",
            "013",
            "014",
            "015",
            "016",
            "017",
            "018",
            "019",
            "020",
            "021",
            "022",
            "023",
            "024",
            "025",
            "026",
            "027",
            "028",
            "029",
            "030",
            "031",
            "032",
            "033",
            "034",
            "035",
            "036",
            "037",
            "038",
            "039",
            "040",
            "041",
            "042",
            "043",
            "044",
            "045",
            "046",
            "047",
            "048",
            "049",
            "050",
            "051",
            "052",
            "053",
            "054",
            "055",
            "056",
            "057",
            "058",
            "059",
            "060",
            "061",
            "062",
            "063",
            "064",
            "065",
            "066",
            "067",
            "068",
            "069",
            "070",
            "071",
            "072",
            "073",
            "074",
            "075",
            "076",
            "077",
            "078",
            "079",
            "080",
            "081",
            "082",
            "083",
            "084",
            "085",
            "086",
            "087",
            "088",
            "089",
            "090",
            "091",
            "092",
            "093",
            "094",
            "095",
            "096",
            "097",
            "098",
            "099",
            "100",
        ]
	},
	{
		category: "Numbers",
		name: "traverse",
		speed: 200,
		keyframes: [
			"100000",
			"010000",
			"001000",
			"000100",
			"000010",
			"000001",
			"000010",
			"000100",
			"001000",
			"001000",
			"010000",
		]
	},
	{
		category: "Numbers",
		name: "index",
		speed: 100,
		keyframes: [
			"000000",
			"010000",
			"012000",
			"012300",
			"012340",
			"012345",
			"012340",
			"012300",
			"012000",
			"010000",
			"000000",
		]
	},
	{
		category: "Numbers",
		name: "logo",
		speed: 80,
		keyframes: [
			"000000",
			"V01010",
			"Ve0101",
			"Ver010",
			"Verc01",
			"Verce0",
			"Vercel",
			"Vercel",
			"Vercel",
			"Verce0",
			"Verc01",
			"Ver010",
			"Ve0101",
			"V01010",
			"010101",
		]
	},
	{
		category: "Squares",
		name: "squares_variant_1",
		speed: 120,
		keyframes: [
			"▏",
			"▎",
			"▍",
			"▌",
			"▋",
			"▊",
			"▉",
			"▊",
			"▋",
			"▌",
			"▍",
			"▎"
		]
	},
	{
		category: "Squares",
		name: "squares_variant_2",
		speed: 120,
		keyframes: [
			"▁",
			"▃",
			"▄",
			"▅",
			"▆",
			"▇",
			"▆",
			"▅",
			"▄",
			"▃"
		]
	},
	{
		category: "Squares",
		name: "squares_variant_3",
		speed: 120,
		keyframes: [
			"▖",
			"▘",
			"▝",
			"▗"
		]
	},
	{
		category: "Squares",
		name: "squares_variant_4",
		speed: 100,
		keyframes: [
			"▌",
			"▀",
			"▐",
			"▄"
		]
	},
	{
		category: "Squares",
		name: "squareNoise",
		speed: 100,
		keyframes: [
			"▓",
			"▒",
			"░"
		]
	},
	{
		category: "Squares",
		name: "squareCorners",
		speed: 180,
		keyframes: [
			"◰",
			"◳",
			"◲",
			"◱"
		]
	},
	{
		category: "Squares",
		name: "squareDots",
		speed: 400,
		keyframes: [
			".  ",
			".. ",
			"..."
		]
	},
	{
		category: "Squares",
		name: "squareDots2",
		speed: 200,
		keyframes: [
			".  ",
			".. ",
			"...",
			" ..",
			"  ."
		]
	},
	{
		category: "Squares",
		name: "squareTriangle",
		speed: 50,
		keyframes: [
			"◢",
			"◣",
			"◤",
			"◥"
		]
	},
	{
		category: "Symbols",
		name: "box_variant_3",
		speed: 100,
		keyframes: [
			"┤",
			"┘",
			"┴",
			"└",
			"├",
			"┌",
			"┬",
			"┐"
		]
	},
	{
		category: "Symbols",
		name: "squish",
		speed: 100,
		keyframes: [
			"╫",
			"╪"
		]
	},
	{
		category: "Symbols",
		name: "star_variant_1",
		speed: 70,
		keyframes: [
			"✶",
			"✸",
			"✹",
			"✺",
			"✹",
			"✷"
		]
	},
	{
		category: "Symbols",
		name: "star_variant_2",
		speed: 80,
		keyframes: [
			"+",
			"x",
			"*"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_1",
		speed: 250,
		keyframes: [
			"⊶",
			"⊷"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_2",
		speed: 80,
		keyframes: [
			"▫",
			"▪"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_3",
		speed: 120,
		keyframes: [
			"□",
			"■"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_4",
		speed: 100,
		keyframes: [
			"■",
			"□",
			"▪",
			"▫"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_5",
		speed: 100,
		keyframes: [
			"▮",
			"▯"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_6",
		speed: 300,
		keyframes: [
			"⃝",
			"Ⓞ",
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_7",
		speed: 80,
		keyframes: [
			"⦾",
			"⦿"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_8",
		speed: 100,
		keyframes: [
			"◍",
			"◌"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_9",
		speed: 100,
		keyframes: [
			"◉",
			"◎"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_10",
		speed: 100,
		keyframes: [
			"㊂",
			"㊀",
			"㊁"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_11",
		speed: 50,
		keyframes: [
			"⧇",
			"⧆"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_12",
		speed: 120,
		keyframes: [
			"☗",
			"☖"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_13",
		speed: 80,
		keyframes: [
			"=",
			"*",
			"-"
		]
	},
	{
		category: "Togglers",
		name: "togglers_variant_14",
		speed: 300,
		keyframes: ['❂','✪']
	},
];

export default ALL_LOADERS;