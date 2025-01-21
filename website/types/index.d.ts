declare global {
	type ChangeLogProps = {
		version: string;
		changes: { type: string; details: string[] }[];
	};

	type JokeCategories = {
		[key in CliLoaderCategories]: string[];
	};

	type IconProps = React.SVGProps<SVGSVGElement>;

	type CopyCodeButton = {
		code: string | string[];
	};

	type CardProps = {
		children: React.ReactNode;
		keyframes: string[];
		slug: string;
		name: string;
	};

	type LoaderProps = {
		speed: number;
		keyframes: string[];
		className?: string;
		category?: string;
	};

	type CodeBlockProps = {
		code: string;
		lang: string;
		title: string;
		isV2?: boolean;
	};

	type CopyButtonProps = {
		className?: string;
		code: string;
	};

	type CliLoaderCategories =
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

	type CodeUsage = {
		title: string;
		code: (args: { name?: string; speed?: number; keyframes?: string[] }) => string;
	};

	type CliLoaderProps = {
		category: CliLoaderCategories;
		name: string;
		speed: number;
		keyframes: string[];
	};

	type CliLoaderTabsProps = {
		tabs: string[];
		activeTab: string;
		setActiveTab: (tab: string) => void;
	};

	type IconComponents = {
		default: React.ReactElement<SVGElement>;
		hover?: React.ReactElement<SVGElement>;
	};

	type CliLoaderProps = {
		name: string;
		speed?: number;
		keyframes?: string[];
	};

	type AnimatedIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
		icons: IconComponents;
		className?: string;
		buttonVariant: 'code' | 'keyframes' | 'code-view' | 'back' | 'npm';
	};
}

export {};
