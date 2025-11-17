import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    role: "Product Manager",
    company: "Brightline Inc.",
    project: "Marketing Dashboard",
    date: "Mar 2024",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "The team delivered an elegant, high-performance dashboard that our marketing team uses daily. Their attention to accessibility and performance cut load times in half and improved adoption across teams.",
  },
  {
    id: 2,
    name: "John De Marli",
    role: "Founder",
    company: "Vokalia Labs",
    project: "Landing + Onboarding",
    date: "Aug 2023",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "They rebuilt our onboarding flow and improved conversions by over 30%. The design and implementation were both thoughtful and pragmatic.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    role: "Head of Engineering",
    company: "Consonantia",
    project: "Refactor & CI",
    date: "Jan 2022",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "They helped us refactor legacy front-end code and introduced an automated CI pipeline. The result: fewer regressions and faster releases.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "Bookmarksgrove",
    project: "Support Portal",
    date: "Nov 2021",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Their customer-first approach meant we could iterate quickly. They were available, responsive and delivered quality work on time.",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Operations Lead",
    company: "Coastline Corp.",
    project: "Internal Tools",
    date: "May 2024",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We've been using their services for over a year. The platform is intuitive and matches our workflow precisely.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Product Designer",
    company: "Venture UX",
    project: "Design System",
    date: "Feb 2025",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "They helped us create a consistent design system that reduced design-production gaps and sped up development.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-25 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What our happy client say
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Things that make it the best place to start trading
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-left bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto md:mx-0 mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <div className="mb-3">
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="font-semibold text-lg md:text-xl"
                  >
                    {testimonial.name}
                  </motion.h3>
                  <motion.div variants={fadeIn('up', 0.4 * (index + 1))} className="text-sm text-gray-500">
                    {testimonial.role} — <span className="font-medium">{testimonial.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-xs">{testimonial.date}</span>
                  </motion.div>
                </div>

                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600 mb-4 flex-1"
                >
                  {testimonial.text}
                </motion.p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg">{i < testimonial.rating ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <div className="text-sm text-indigo-600 font-medium">{testimonial.project}</div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
