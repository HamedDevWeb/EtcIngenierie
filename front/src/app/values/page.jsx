import Image from "next/image";

const Values = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-blue-900 text-white text-center py-6'>
        <h1 className='text-4xl font-bold'>Nos Valeurs</h1>
      </header>
      {/* Content */}
      <div className='container mt-10 mb-10 mx-auto px-7'>
        {/* Intro Section */}
        <section className=' flex flex-col '>
          <div className='mb-5'>
            <img src='/architect.jpg' alt='nos valeurs' />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-blue-900 mb-6'>
              L’indépendance est sans conteste notre marque de fabrique
            </h2>
            <p className='text-lg mb-4'>
              Nous exerçons notre activité en toute impartialité et autonomie en
              état affranchis des groupes financiers, industriels et de
              constructeurs.
            </p>
            <p className='text-lg'>
              Il nous semble important de mettre toute notre expérience au
              service de nos clients afin de réaliser des projets où les mots
              clés sont :
            </p>
            {/* Key Values */}
            <ul className=' pl-5 list-disc list-inside my-4 text-lg space-y-2'>
              <li>Qualité</li>
              <li>Écoute</li>
              <li>Proximité</li>
              <li>Disponibilité</li>
              <li>Réactivité et Flexibilité</li>
              <li>Rigueur</li>
              <li>Engagement de moyens et de résultats</li>
              <li>Exigence sur la performance technique et économique</li>
              <li>Culture de la satisfaction client</li>
            </ul>

            <h2 className='bg-blue-500 rounded-[10px] px-4  py-2 text-white text-2xl font-bold text-blue-900 mb-6'>
              Nos valeurs s'appliquent aussi à nos collaborateurs
            </h2>
            <ul className=' pl-5 list-disc list-inside my-4 text-lg space-y-2'>
              <li>
                Valeurs morales de Management et écoute rapprochée de nos
                collaborateurs
              </li>
              <li>La volonté que chaque salarié s'approprie nos valeurs</li>
              <li>Formation après intégration</li>
              <li>Développement professionnel et employabilité</li>
            </ul>
          </div>
        </section>

        {/* Value Equation */}
        <section className='bg-gray-200 p-8 rounded-lg'>
          <h2 className='text-2xl font-bold text-blue-900 mb-6 text-center'>
            Équation des valeurs
          </h2>
          <div className='flex flex-col   items-left space-y-5  sm:space-x-4'>
            <div className='text-left'>
              <h3 className='text-[19px] font-semibold'>Ce que nous donnons</h3>
              <ul className='list-disc list-inside my-2 text-lg'>
                <li>La confiance</li>
                <li>L'acceptation de nos différences</li>
                <li>L'écoute</li>
              </ul>
            </div>
            <div className='text-left'>
              <h3 className='text-xl font-bold'>Ce que nous attendons</h3>
              <ul className='list-disc list-inside my-2 text-lg'>
                <li>L'état d'esprit</li>
                <li>L'engagement</li>
                <li>La compétence</li>
              </ul>
            </div>
            <div className='text-left'>
              <h3 className='text-xl font-bold'>Ce que nous obtenons</h3>
              <ul className='list-disc list-inside my-2 text-lg'>
                <li>De l'autonomie</li>
                <li>De la responsabilité</li>
                <li>Du développement personnel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className='mt-12 text-center'>
          <p className='text-lg font-semibold'>
            Restaurer, développer et renforcer la confiance, voilà des
            préoccupations qui figurent en tête de nos objectifs majeurs.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Values;
