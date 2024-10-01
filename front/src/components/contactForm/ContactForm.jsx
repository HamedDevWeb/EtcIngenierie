const ContactForm = () => {
  return (
    <div className='min-h-screen flex  justify-center bg-blue-200'>
      <form className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex gap-5'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Prénom
            </label>
            <input
              type='text'
              name='firstName'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Nom
            </label>
            <input
              type='text'
              name='lastName'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Entreprise
            </label>
            <input
              type='text'
              name='entreprise'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Fonction
            </label>
            <input
              type='text'
              name='Fonction'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Numéro de téléphone
            </label>
            <input
              type='text'
              name='telephone'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              E-mail
            </label>
            <input
              type='text'
              name='email'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Message
          </label>
          <textarea
            name='message'
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
          />
        </div>
        <div></div>
        <div className=' flex  justify-center'>
          <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
            Envoyez votre message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
