import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    profession: "Software Engineer",
    image: "/placeholder.svg",
    rating: 5,
    text: "Dr. Gurusharan Bhatia is an exceptional dentist. Her attention to detail and gentle approach made my dental procedures comfortable and stress-free. The clinic maintains high standards of hygiene and professionalism.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    profession: "Teacher",
    image: "/placeholder.svg",
    rating: 5,
    text: "I've been visiting Guru Nanak Dental for the past 5 years. Dr. Bhatia's expertise and the friendly staff make every visit pleasant. The clinic is well-equipped with modern facilities.",
  },
  {
    id: 3,
    name: "Amit Patel",
    profession: "Business Owner",
    image: "/placeholder.svg",
    rating: 5,
    text: "Outstanding dental care! Dr. Bhatia took the time to explain my treatment plan thoroughly. The clinic's commitment to patient care and comfort is remarkable.",
  },
  {
    id: 4,
    name: "Anjali Rana",
    profession: "Software Developer",
    image: "/placeholder.svg",
    rating: 5,
    text: " I have been a patient of Dr. Gurusharan Bhatia at Guru Nanak Dental for the last 4 years. The treatment is always top-notch, and the clinic's atmosphere is welcoming and calming. Highly recommend for all dental needs!",
  },
  {
    id: 5,
    name: "Neha Mehta",
    profession: "Business Owner",
    image: "/placeholder.svg",
    rating: 4,
    text: "Dr. Bhatia has been my dentist for over 6 years now. The care and attention she provides are exceptional. Her clinic is always clean, and the staff is courteous. I trust Guru Nanak Dental completely with my dental health.",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("right");
  const [animationKey, setAnimationKey] = useState(0);

  const goToNext = useCallback(() => {
    setDirection("right");
    setAnimationKey((prev) => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setDirection("left");
    setAnimationKey((prev) => prev + 1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={
          index < rating
            ? "w-5 h-5 text-blue-500 fill-blue-500"
            : "w-5 h-5 text-gray-300"
        }
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <h2 className="max-w-lg mb-0 mt-32 pb-7 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Read </span>
        </span>{" "}
        reviews from Our{" "}
        <span className="text-blue-500 relative">Patients</span>
      </h2>
      <div
        className="relative max-w-4xl mx-auto px-4 py-3"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative overflow-hidden min-h-[500px]">
          <div
            key={animationKey}
            className="flex flex-col items-center space-y-6 p-8 absolute inset-0 animate-fade-in"
          >
            {/* Avatar */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
              <img
                src={currentTestimonial.image}
                className="rounded-full object-cover w-full h-full shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full shadow-inner" />
            </div>

            {/* Name and Profession */}
            <div className="text-center flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {currentTestimonial.name}
              </h3>
              <p className="text-blue-500 font-medium mt-1">
                {currentTestimonial.profession}
              </p>
            </div>

            {/* Testimonial Text */}
            <div className="flex-1 flex items-center">
              <p className="text-center text-gray-600 max-w-2xl text-lg leading-relaxed">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Rating */}
            <div className="flex space-x-1 flex-shrink-0">
              {renderStars(currentTestimonial.rating)}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
                setAnimationKey((prev) => prev + 1);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 w-4"
                  : "bg-blue-200 hover:bg-blue-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
