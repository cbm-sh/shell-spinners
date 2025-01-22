import dynamic from 'next/dynamic';

const CopyCodeButton = dynamic(() => import('@/components/Buttons').then(mod => mod.CopyCodeButton));
const Filter = dynamic(() => import('@/components/Filter').then(mod => mod.Filter));

const HomePage = () => {
  return (
    <>
      <section>
      <div className='py-12 px-6'>
        <div className='absolute w-full max-w-5xl h-48 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:8px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
          <h1 className='text-balance relative font-semibold text-neutral-100 text-4xl md:text-5xl text-center'>
          Cli Loaders
          </h1>
          <p className='relative text-neutral-200 text-center pt-6 pb-12'>
          A collection of animated CLI loaders for your projects.
          </p>
          <div className='text-center relative'>
            <pre>
              <code className='w-full border bg-black border-neutral-800 pr-3.5 pl-2.5 pt-[16px] pb-[14px]'>npm install cli-loaders
              <CopyCodeButton code={'npm install cli-loaders'} />
            </code>
          </pre>
          </div>
        </div>
      </section>
      <section className='bg-black border border-x-0 border-t-neutral-800 border-b-0'>
        <Filter />
      </section>
    </>);
};

export default HomePage;