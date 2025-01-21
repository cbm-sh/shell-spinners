export type AnimatedIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icons: IconComponents;
	className?: string;
	buttonVariant: 'code' | 'keyframes' | 'code-view' | 'back' | 'npm';
};

export type CardProps = {
	children: React.ReactNode;
	keyframes: string[];
	slug: string;
	name: string;
};

export type ExampleCardProps = {
	title: string;
	code: string;
	isV2?: boolean;
};

export type ChangeLogProps = {
	version: string;
	changes: { type: string; details: string[] }[];
};

export type CliLoaderCategories =
	| 'Arrows'
	| 'Bars'
	| 'Circles'
	| 'Dots'
	| 'Emojis'
	| 'Lines'
	| 'Numbers'
	| 'Squares'
	| 'Symbols'
	| 'Togglers';

export type CliLoaderFilterProps = {
	category: string;
	onFilterChange: (filteredLoaders: CliLoaderProps[]) => void;
};

export type CliLoaderProps = {
	category: CliLoaderCategories;
	name: string;
	speed: number;
	keyframes: string[];
};

export type CliLoaderTabsProps = {
	tabs: string[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
};

export type CodeBlockProps = {
	code: string | string[];
	title: string;
	isV2?: boolean;
};

export type CopyButtonProps = {
	className?: string;
	code: string;
};

export type CopyCodeButtonProps = {
	code: string | string[];
};

export type IconComponents = {
	default: React.ReactElement<SVGElement>;
	hover?: React.ReactElement<SVGElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement>;

export type JokeCategories = {
	[key in CliLoaderCategories]: string[];
};

export type LoaderProps = {
	speed: number;
	keyframes: string[];
	className?: string;
	category?: string;
};

