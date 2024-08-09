import video1 from "../assets/videos/video.mp4";
const VideoSection = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-950 sm:text-3xl my-5 text-center ">
        OUR VALUES
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 my-10 ">
        <div className="flex-1">
          <video
            src={video1}
            autoPlay
            controls
            muted
            className="rounded-lg "
          ></video>
        </div>
        <div className="flex-1">
          <h1 className=" text-3xl text-slate-500 mb-4">Integrity</h1>
          <p>
            At Campers Shop, integrity is core to our business. We prioritize
            honesty, transparency, and ethical conduct to build trust with
            customers. Upholding high moral standards and accountability, we
            provide exceptional products and services, nurturing long-term
            relationships. Integrity shapes our decisions, reflecting our
            commitment to excellence in every interaction. It's not just a
            value; it's our compass toward sustainable success, earning the
            respect of our community.
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
