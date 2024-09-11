

const Home = () => {
  return (
    <div className='flex max-h-screen flex-col md:flex-row  p-4 md:p-8'>
      <div className='text-center md:text-left md:w-1/2 space-y-4'>
        <h1 className='text-7xl font-bold text-gray-800;'>etce ingenierie</h1>
        <h2 className='text-2xl font-semibold text-gray-700'>
          Améliorez la gestion de votre chantier
        </h2>
        <p className='text-lg text-gray-600'>
          ETCE INGÉNIERIE Améliorez la gestion de votre chantier Une plateforme
          unique pour tout le cycle de vie du bâtiment. Nous étudions, concevons
          et vous accompagnons jusqu'au bout de votre chantier
        </p>
        <div className='space-x-4'>
          <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
            En savoir plus
          </button>
          <button className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition'>
            Contact
          </button>
        </div>
        <div className='mt-6'>
          <img
            src='/brands.png'
            alt='marques'
            fill
            className='w-full max-w-xs mx-auto md:mx-0'
          />
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img src='/architect.jpg' alt='hero' fill className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Home;
