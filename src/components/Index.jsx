import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image0 from "./Images/image0wa.webp";
import image1 from "./Images/image1wa.jpeg";
import image2 from "./Images/image2wa.jpeg";
import image3 from "./Images/image3wa.jpeg";
import image4 from "./Images/image4wa.jpeg";

export const ImageCarousel = ({ images, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const CarouselButton = ({ onClick, direction }) => (
    <button
      className={`absolute top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm
        p-2 rounded-full shadow-lg transition-all duration-300
        opacity-0 group-hover:opacity-100
        hover:bg-white hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-black/20
        ${direction === "left" ? "left-4" : "right-4"}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous image" : "Next image"}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );

  return (
    <div
      name="gallery"
      id="gallery"
      className={`relative group select-none touch-pan-y
        rounded-xl overflow-hidden ${className || ""}`}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-fit object-cover transition-opacity duration-300"
              style={{
                opacity: currentIndex === index ? 1 : 0.3,
              }}
            >
              <img
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover aspect-[16/9]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <CarouselButton onClick={scrollPrev} direction="left" />
      <CarouselButton onClick={scrollNext} direction="right" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-black/20
          ${
            currentIndex === index
              ? "bg-white scale-125"
              : "bg-white/50 hover:bg-white/75"
          }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const images = [image0, image1, image2, image3, image4];

  return (
    <div className="min-h-fit py-8 mb-16 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-center mb-2">Smile Gallery</h1>
        <p className="text-gray-500 text-center mb-8">
          Swipe or use arrows to navigate
        </p>
        <ImageCarousel images={images} className="shadow-xl" />
      </div>
    </div>
  );
};

export default Index;
