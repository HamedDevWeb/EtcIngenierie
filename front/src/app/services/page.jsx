import ExpertiseSection from "@/components/expertiseSection/ExpertiseSection"
import VideoSection from "@/components/videoSection/VideoSection.jsx"

const Services = () => {
  return (
    <main className="py-[5rem] px-[1rem">

      <h1 className="text-center text-4xl font-bold mb-8">Découvrez nos domaines d'expertise</h1>
      <ExpertiseSection />
      <div className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold text-center mb-8">Notre expertise métier en video</h2>
      <VideoSection />
      </div>
      
    </main>



  )
}

export default Services