import ExpertiseSection from "@/components/expertiseSection/ExpertiseSection"
import VideoSection from "@/components/videoSection/VideoSection.jsx"

const Services = () => {
  return (
    <main className="py-[5rem] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] ">

      <h1 className="text-center text-4xl font-bold mb-8">Découvrez nos domaines d'expertise</h1>
      <ExpertiseSection />
      <div className="bg-blue-50 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 sm:mb-8 md:mb-10">Notre expertise métier en video</h2>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <VideoSection />
        </div>
        
      </div>

    </main>



  )
}

export default Services