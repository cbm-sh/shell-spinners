import CliLoaderFilter from '@/components/CliLoaderFilter';
import CopyButton from '@/components/CopyButton';
import FlipWords from '@/components/FlipWords';

const Home = () => {
  return (
    <>
      <section>
        <div className='py-16 px-6'>
          <h1 className='mb-8 font-semibold text-neutral-100 text-4xl md:text-5xl'>
          Cli<FlipWords words={['Loaders', 'Arrows', 'Bars', 'Circles', 'Dots', 'Emojis', 'Lines', 'Numbers', 'Squares', 'Symbols', 'Togglers']} />
          </h1>
          <p className='text-neutral-300'>
          A collection of copy and paste CLI loaders
          </p>
          <div className='mt-12'>
            <pre>
              <code className='w-full border border-neutral-800 p-4'>npm install cli-loaders
              <CopyButton code='npm install cli-loaders' className='inline-flex pl-2 relative right-0 top-1 cursor-pointer transition'/></code>
          </pre>
          </div>
        </div>
      </section>
      <section className='bg-black border border-x-0 border-t-neutral-800 border-b-0'>
        <CliLoaderFilter />
      </section>
    </>
  );
};

export default Home;