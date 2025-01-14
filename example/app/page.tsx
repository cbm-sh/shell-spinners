import CliLoaderFilter from '@/components/CliLoaderFilter';

const Home = () => {
  return (
    <>
      <section>
        <div className='bg-gradient-to-b from-neutral-900 to-black py-16 px-6'>
          <h1 className='mb-8 font-semibold text-neutral-100 text-4xl md:text-5xl'>
            Cli Loaders
          </h1>
          <p className='text-neutral-300'>
            Copy and paste into your cli apps.
          </p>
          <div className='mt-12'>
            <pre>
              <code className='w-full bg-neutral-900 p-4 rounded-md'>npm install cli-loaders</code>
          </pre>
          </div>
        </div>
      </section>
      <section className='bg-black border border-x-0 border-t-neutral-900 border-b-0'>
    <CliLoaderFilter />
      </section>
    </>
  );
};

export default Home;