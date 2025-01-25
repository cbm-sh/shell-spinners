export const CodeView = ({ children }: { children: React.ReactNode }) => (
	<div className='relative flex min-h-96 flex-col items-center justify-center overflow-hidden border border-neutral-800 bg-black p-6'>
		<div className='absolute size-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
		{children}
	</div>
);

CodeView.displayName = 'CodeView';
