import CliLoaderFilter from '@/components/CliLoaderFilter';
import CopyButton from '@/components/CopyButton';

const Home = () => (
    <>
      <section>
      <div className='py-12 px-6'>
        <div className='absolute w-full max-w-5xl h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
        <h1 className='text-balance relative z-40 font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
          Cli Loaders
          </h1>
        <p className='relative z-40 text-neutral-200 text-center py-6'>
          A collection of animated CLI loaders for your projects.
          </p>
        <div className='pt-2 text-center relative z-40'>
            <pre>
              <code className='w-full border bg-black border-neutral-800 p-4'>npm install cli-loaders
              <CopyButton code='npm install cli-loaders' className='p-2 inline-flex ml-2 relative -right-2 top-1 cursor-pointer transition border border-neutral-800 hover:bg-neutral-900'/></code>
          </pre>
          </div>
        </div>
      </section>
      <section className='bg-black border border-x-0 border-t-neutral-800 border-b-0'>
        <CliLoaderFilter />
      </section>
    </>
  );

export default Home;