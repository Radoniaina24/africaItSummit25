"use client";
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dx3xhdaym/video/upload/v1736332411/background_video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-start px-6 text-white">
        <div className="container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur a
            libero labore quaerat vero incidunt aspernatur ad aperiam
            cupiditate, velit minus non quod natus reiciendis sint numquam
            similique illo adipisci?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
