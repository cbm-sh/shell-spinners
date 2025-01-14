import { CliLoader } from '@/components/CliLoader';
import { allLoaders } from 'cli-loaders';
import { Card } from '@/components/Card';

const Home = () => {
  return (
    <>
      <section>
        <div className='py-16 px-6'>
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
      <section className='border border-x-0 border-t-neutral-900 border-b-0'>
      <div className='min-h-screen w-full p-6 border border-y-neutral-900 border-x-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {allLoaders.map((loader) => (
          <Card key={loader.name} slug={loader.name} name={loader.name}>
          <CliLoader speed={90} keyframes={loader.keyframes} />
          </Card>
        ))}
      </div>
    </div>
      </section>
    </>
  );
};

export default Home;