"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCog,
  FaCompress,
} from "react-icons/fa";
import { BsWindowStack } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    video: "/assets/ForBiggerBlazes.mp4",
  },
  {
    id: 2,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 3,
    video:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
];

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleError = (e) => console.error("Video error:", e);

    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("error", handleError);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("error", handleError);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowOverlay(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
  };

  const handleSeek = (e) => {
    const seekBar = e.currentTarget;
    const rect = seekBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const seekPosition = (x / rect.width) * videoRef.current.duration;
    setIsBuffering(true); // Show spinner while seeking
    videoRef.current.currentTime = seekPosition;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.parentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const togglePiP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {
      console.log("PiP failed:", error);
    }
  };

  return (
    <div
      className="relative rounded-[16px] overflow-hidden bg-[#EEEEEE] border-[0.7px] border-greenish group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {showOverlay && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 z-[2] flex items-center justify-center bg-black/20"
        >
          <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-greenish border-[2.8px] border-white text-white">
            <FaPlay className="w-[11px] h-[13px] ms-[1px]" />
          </div>
        </button>
      )}

      {isBuffering && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/40">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full aspect-video object-cover cursor-pointer"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsBuffering(true)} // Show spinner on buffering
        onCanPlay={() => setIsBuffering(false)} // Hide spinner when ready
        onClick={togglePlay}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div
        className={`absolute bottom-0 left-0 right-0 bg-black/90 transition-opacity duration-300 z-[3] ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center px-4 py-2">
          <button onClick={togglePlay} className="text-white mr-3">
            {isPlaying ? (
              <FaPause className="w-3 h-3" />
            ) : (
              <FaPlay className="w-3 h-3" />
            )}
          </button>

          <span className="text-white text-sm mr-4">
            {formatTime(currentTime)}
          </span>

          <div
            className="flex-1 h-1 bg-white/30 rounded-full cursor-pointer relative group"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#4DC488] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#4DC488] rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <button onClick={toggleMute} className="text-white">
              {isMuted ? (
                <FaVolumeMute className="w-4 h-4" />
              ) : (
                <FaVolumeUp className="w-4 h-4" />
              )}
            </button>

            <button className="text-white">
              <FaCog className="w-4 h-4" />
            </button>

            <button onClick={togglePiP} className="text-white">
              <BsWindowStack className="w-4 h-4" />
            </button>

            <button onClick={toggleFullscreen} className="text-white">
              {isFullscreen ? (
                <FaCompress className="w-4 h-4" />
              ) : (
                <FaExpand className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  return (
    <section className="mb-[60px] md:mb-[110px] px-4 sm:px-6 lg:px-8 pb-[40px] sm:pb-[80px] lg:pb-[150px] relative">
      <img
        src="/assets/bottom-left-video-testimonial.png"
        alt="background objects"
        className="absolute xl:w-auto w-[16vw] left-0 bottom-0 z-[1]"
      />
      <img
        src="/assets/bottom-right-video-testimonial.png"
        alt="background objects"
        className="absolute xl:w-auto w-[9vw] right-0 bottom-0 z-[1]"
      />
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-[40px] md:mb-[60px]">
          <div className="text-center max-w-[1280px] mx-auto">
            <span className="text-greenish text-[10px] md:text-[18px] font-[600] uppercase mb-[8px] block">
              TESTIMONIALS
            </span>
            <h2 className="text-[20px] md:text-[40px] md:leading-[45px] font-bold text-blackish mb-[12px]">
              What Our Users Says
            </h2>
            <p className="text-grayish text-[12px] md:text-[16px] max-w-[500px] mx-auto">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={43}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet swiper-pagination-custom",
            bulletActiveClass:
              "swiper-pagination-bullet-active swiper-pagination-custom-active",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <VideoPlayer src={testimonial.video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
