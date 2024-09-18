import Video from "next-video";
import presta1 from "/videos/presta1.mp4";
const VideoSection = () => {
  return (
    <div className='flex justify-center space-x-10 flex-wrap px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
      {/* First Vidéo */}
      <div className='video-item text-center m-4'>
        <h2 className='text-[1.3rem] font-medium mb-4'>Notre bureau d'étude</h2>
        <video controls className='w-80 rounded-lg shadow-lg'>
          <source src='' type='video/mp4' />
        </video>
      </div>
      <div className='video-item text-center m-4'>
        <h2 className='text-[1.3rem] font-medium mb-4'>Notre Expertise</h2>
        <video controls className='w-80 rounded-lg shadow-lg'>
          <source src='' type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
