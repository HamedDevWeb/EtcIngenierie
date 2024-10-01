import ContactForm from '@/components/contactForm/ContactForm'

const Contact = () => {
  return (
    <div className='p-4 max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold'>ETCE | INGENIERIE</h1>
        <p className='mb-[50px]'>Une question ? Contactez-nous !</p>
        <ContactForm />
    </div>
  )
}

export default Contact