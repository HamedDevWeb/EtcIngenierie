

const Home = () => {
  return (
    

    <div className='homeNav flex  w-full max-h-screen flex-col md:my-auto md:flex-row md:my-0  p-4 md:p-8 lg:h-screen'>
      <div className='text-center h-full md:text-left md:w-1/2 space-y-4'>
        <h1 className='text-4xl font-500 mb-7 text-gray-900 '>ETC | INGENIERIE</h1>
        <h2 className='text-2xl py-2 font-semibold text-gray-600'>
          Améliorez la gestion de votre chantier
        </h2>
        <p className='text-lg mt-[2rem] text-gray-600'>
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
        
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img src='/architect.jpg' alt='hero' fill className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
    
  );
};

export default Home;
