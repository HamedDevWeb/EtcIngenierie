import Video from 'next-video';
import presta1 from '/videos/presta1.mp4'
const VideoSection = () => {
  return (
    <div className="flex justify-center space-x-10 -wrap">
       {/* First Vidéo */}
      <div className="video-item text-center m-4">
        <h2 className="text-lg font-medium mb-4">Notre identité</h2>
        <div >
          <Video controls className="w-72 rounded-lg shadow-lg" src={presta1} type="video/mp4" />
          Your browser does not support the video tag.
        </div>
      </div>
      <div className="video-item text-center m-4">
        <h2 className="text-lg font-medium mb-4">Notre bureau d'étude</h2>
        <video controls className="w-72 rounded-lg shadow-lg">
          <source src="/videos/office.mp4" type="video/mp4" />
          
        </video>
      </div>
    </div>
  )
}

export default VideoSection