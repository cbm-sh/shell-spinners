export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: React.ReactElement<SVGElement>;
	iconAlt?: React.ReactElement<SVGElement>;
	className?: string;
	variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

export type CardProps = {
	children: React.ReactNode;
	slug: string;
	name: string;
};

export type ChangeLogProps = {
	v: string | number;
	change: { type: string; notes: string[] }[];
};

type CodeBlockProps = {
	code?: string;
	keyframes?: string[];
	lang: string;
	title: string;
	isV2?: boolean;
};

type CopyButtonProps = {
	hasKeyframes: boolean;
	code: string | string[];
	copyText: string;
	className?: string;
	variant: ButtonProps['variant'];
};

export type FilterProps = {
	category: string;
	onFilterChange: (filteredLoaders: Props[]) => void;
};

export type IconComponents = {
	default: React.ReactElement<SVGElement>;
	hovered: React.ReactElement<SVGElement>;
	clicked?: React.ReactElement<SVGElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement>;

export type LoaderCategories =
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

export type LoaderProps = {
	name: string;
	category: LoaderCategories;
	speed: number;
	keyframes: string[];
};

export type RendererProps = {
	category?: LoaderCategories;
	speed: number;
	keyframes: string[];
	className?: string;
};

export type TabsProps = {
	activeTab: string;
	setActiveTab: (tab: string) => void;
};

export type ToastContextProps = {
	toasts: ToastProps[];
	addToast: (message: string) => void;
	removeToast: (id: number) => void;
};

export type ToastMessageProps = {
	message: string;
};

export type ToastProps = {
	id: number;
	message: string;
	onClose?: () => void;
	isOpen?: boolean;
};
