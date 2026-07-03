
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiMeal, GiChefToque, GiFruitBowl } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import {
  FaTrophy,
  FaAward,
  FaStar,
  FaMapMarkedAlt,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <>
     
      <div>
        <HeroBanner />
        <Intro />
        <WhyChooseUs />
       
        <Voucher />
        <Philosophy />
        <Contact />
        <Testimonial />
        <DeliveryCharges />
      </div>
    </>
  );
};

const HeroBanner = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0c0c0c] to-[#120F0F] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-20 min-h-[720px]">
        {/* Image */}
        <div className="hidden lg:block absolute bottom-0 right-0 z-0 max-w-[700px] w-[55vw] pointer-events-none select-none">
          <img
            src="/Images/Herobannerimg.png"
            alt="Food with red blob"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-center gap-12 min-h-[650px]">
          {/* Text Content */}
          <div className="w-full md:w-1/2 max-w-xl md:max-w-lg pt-8 md:pt-0 pl-0 md:pl-8 flex flex-col justify-center h-full">
            {/* Badge */}
            <div className="inline-block max-w-xs bg-gradient-to-r from-[#f20f0f] to-[#8c0909] text-white text-sm sm:text-base  font-semibold px-6 py-2 rounded-full mb-6 shadow text-center whitespace-nowrap">
              Top 5 of 600+ Bangladesh Restaurants
            </div>

            {/* Heading */}
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d91313] font-['Playfair_Display-Bold'] whitespace-nowrap  text-justify">
                Vibrant Bangladesh Flavors:
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl  text-white  leading-tight whitespace-nowrap  text-justify">
                Taste Wellness in Every Bite!
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8  text-justify">
              Where bold flavors harmonize with mindful cooking. Discover the
              essence of authentic Bangladesh traditions at Bangladesh's award-winning
              restaurant, where every dish is crafted with a health-conscious
              philosophy. Indulge in a culinary journey that tantalizes your
              taste buds while nourishing your body.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to=""
                className="bg-gradient-to-r from-[#f20f0f] to-[#8c0909] text-white px-6 py-3 rounded font-semibold hover:scale-105 transition-transform text-center"
              >
                Book Table
              </Link>
              <Link
                to=""
                className="bg-gray-200 text-black px-6 py-3 rounded font-semibold hover:scale-105 transition-transform text-center"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

//Intro Section

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.4 },
  },
};

const Intro = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#161414] to-[#3C3636] overflow-hidden text-white text-justify">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 pointer-events-none z-0" />

      {/* Content Wrapper */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Block */}
          <motion.div
            className="w-full max-w-md sm:max-w-lg lg:max-w-[500px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
            whileHover="hover"
          >
            <img
              src="/Images/res.jpg"
              alt="about img"
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg shadow-[0_0_50px_15px_rgba(242,15,15,0.2)] opacity-0 hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
          </motion.div>

          {/* Text Block */}
          <div className="w-full lg:flex-1 max-w-3xl space-y-6 text-justify">
            <motion.h2
              className="text-red-600 font-bold text-1xl sm:text-2xl md:text-3xl font-['Playfair_Display']"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0}
            >
              About
            </motion.h2>

            <motion.h3
              className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-justify "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.3}
            >
              We provide the best fusion of{" "}
              <span className="text-red-600">Asian and Bangladesh flavors!</span>
            </motion.h3>

            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.6}
            >
              Magpie Healthy Bangladesh Cuisine blends authentic flavors with
              health-conscious practices, offering delicious, nourishing dishes
              in a celebrated dining experience.
            </motion.p>

            <motion.div
              className="text-gray-300 text-sm sm:text-base md:text-lg space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0.9}
            >
              <p>
                <span className="font-semibold text-gray-20 text-justify">
                  Culinary Landmark:
                </span>{" "}
                Consistently ranked among Bangladesh's top 5 restaurants on
                Foody.
              </p>
              <p>
                <span className="font-semibold text-gray-20 text-justify">
                  Quality Ingredients:
                </span>{" "}
                Dishes crafted with minimal oil, fresh herbs, and premium
                spices.
              </p>
              <p>
                <span className="font-semibold text-gray-20 text-justify">
                  Award-Winning:
                </span>{" "}
                Recognized with multiple prestigious awards for excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

//Why Choose Us Section
const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#161414] to-[#120F0F] overflow-hidden text-white text-justify">
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-12 pt-12 pb-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* left side cards */}
          <div className="w-full lg:w-[45%] space-y-8 text-justify">
            {[
              {
                title: "High Quality",
                icon: <GiMeal className="text-3xl text-[#f20f0f]" />,
                description:
                  "Premium ingredients ensure exceptional taste and nutrition.",
              },
              {
                title: "Top Chefs",
                icon: <GiChefToque className="text-3xl text-[#f20f0f]" />,
                description:
                  "Expert culinary team dedicated to innovative dishes.",
              },
              {
                title: "Fresh Foods",
                icon: <GiFruitBowl className="text-3xl text-[#f20f0f]" />,
                description:
                  "Daily preparations using the freshest herbs and spices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gradient-to-br from-[#434347] to-[#5a5961] rounded-lg shadow-xl backdrop-blur-sm border border-white/10 hover:border-[#f20f0f]/70 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-50">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="w-full lg:w-[55%]">
            <span className="inline-block text-[#f20f0f] font-semibold text-sm sm:text-base mb-3 sm:mb-4 font-['Playfair_Display']">
              Why Us
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 text-justify">
              <span className="text-white">
                Wholesome Bangladesh Dining: Discover{" "}
              </span>
              <span className="text-[#f20f0f]">Magpie's</span>
              <span className="text-white"> Culinary Art</span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 sm:mb-10 text-justify">
              At Magpie, we provide the best fusion of Asian and Bangladesh
              flavors, expertly crafted with fresh ingredients. Enjoy a vibrant
              dining experience that celebrates:
            </p>

            <ul className="space-y-4 mb-8 sm:mb-12 text-sm sm:text-base">
              {[
                {
                  title: "Health",
                  content:
                    "Dishes prepared with minimal oil and wholesome ingredients.",
                },
                {
                  title: "Authenticity",
                  content:
                    "Traditional recipes reimagined for a modern palate.",
                },
                {
                  title: "Culinary Creativity",
                  content: "Innovative specials that delight every guest.",
                },
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#f20f0f] rounded-full mt-2 mr-3"></span>
                  <span className="flex-1">
                    <strong className="font-semibold text-gray-50">
                      {point.title}:
                    </strong>{" "}
                    {point.content}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to=""
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-2.5 bg-gradient-to-r from-[#f20f0f] to-[#8c0909] rounded-lg text-base sm:text-lg font-bold text-white hover:opacity-90 transition-opacity duration-300 group"
            >
              See Our Menu
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

//Awards Winning Section

const awards = [
  {
    icon: (
      <FaTrophy className="text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "ARTA Award 2024",
    subtitle: "Regional Champion",
  },
  {
    icon: (
      <FaAward className="text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "BCA Award 2018",
    subtitle: "Best Healthy Bangladesh Concept",
  },
  {
    icon: (
      <FaMapMarkedAlt className="text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Foody",
    subtitle: "Traveller's Choice Winner",
  },
  {
    icon: (
      <FaStar className="text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Curry Awards 2025",
    subtitle: "Featured Guide Restaurant",
  },
];


//Voucher For Students

const Voucher = () => {
  return (
    <div className="bg-black p-4 sm:p-0 text-justify">
      <div className="relative w-full h-[250px] sm:h-[339px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[#161414] rounded-lg sm:rounded-none" />

        {/* Main Rectangle  */}
        <div
          className="absolute top-[12%] sm:top-[16%] left-[5%] sm:left-[11.7%] right-[5%] sm:right-[17.66%] bottom-[15%] sm:bottom-[13%] w-[90%] sm:w-[70.64%] h-[65%] sm:h-[71%] max-w-full max-h-full overflow-hidden bg-gray-200 rounded-lg sm:rounded-l-[12px] sm:rounded-r-[6px]"
          style={{
            clipPath: "polygon(0 0, 100% 16px, 100% calc(100% - 16px), 0 100%)",
          }}
        />

        {/* Circles  */}
        <div className="absolute top-[1%] sm:top-[3.54%] left-[45%] sm:left-[42.08%] w-[10%] sm:w-[5.98%] h-[15%] sm:h-[30%] max-w-full max-h-full overflow-hidden bg-[#161414] rounded-full" />
        <div className="absolute top-[84%] sm:top-[66.67%] left-[45%] sm:left-[41.72%] w-[10%] sm:w-[5.98%] h-[15%] sm:h-[30%] max-w-full max-h-full overflow-hidden bg-[#161414] rounded-full" />

        {/* Food Image - hidden on small screens */}
        <div className="hidden sm:flex absolute top-[4.83%] left-[72.99%] right-[11.98%] bottom-[25.85%] w-[15.03%] h-[79.32%] items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#8B5A2B] flex items-center justify-center overflow-hidden">
            <img
              src="/Images/Top-View-of-Michelin-Star-Restaurant-Dish-1920x1080.jpg.png"
              className="w-[90%] h-[90%] object-cover rounded-full"
              alt="Michelin Star Restaurant Dish"
            />
          </div>
        </div>

        {/* Main Text  */}
        <div className="absolute top-[18%] sm:top-[27.84%] left-[8%] sm:left-[13.37%] text-left text-[18px] sm:text-[clamp(18px,2vw,24px)] text-black text-justify font-semibold">
          Special Offer for <span className="text-[#d91313]">Students!</span> 🎉
        </div>
        <div className="absolute top-[32%] sm:top-[37.86%] left-[8%] sm:left-[13.3%] w-[80%] sm:w-[28.12%] text-left text-[13px] sm:text-[clamp(10px,1vw,16px)] font-semibold text-black/90">
          Students enjoy 10% off delicious, healthy Bangladesh cuisine at
          Magpie!(collection only)
        </div>

        <div className="hidden sm:block absolute top-[31.67%] left-[57.96%] text-[clamp(30px,3vw,50px)] font-bold  text-left text-[#d91313]">
          10%
        </div>

        <div className="hidden sm:block">
          <img
            src="/Images/4128349.png"
            className="absolute top-[58.51%] bottom-[29.16%] left-[13.3%] right-[83.93%] w-[2.77%] h-[12.33%] object-cover rounded-full"
            alt="Decoration"
          />
          <img
            src="/Images/4128349.png"
            className="absolute top-[58.51%] bottom-[29.16%] left-[15.3%] right-[81.93%] w-[2.77%] h-[12.33%] object-cover rounded-full"
            alt="Decoration"
          />
          <img
            src="/Images/4128349.png"
            className="absolute top-[58.51%] bottom-[29.16%] left-[17.45%] right-[79.78%] w-[2.77%] h-[12.33%] object-cover rounded-full"
            alt="Decoration"
          />
          <div className="absolute top-[58.51%] bottom-[29.69%] left-[19.6%] right-[77.63%] w-[2.77%] h-[11.8%] bg-red-200 rounded-full" />
          <div className="absolute top-[60.87%] left-[19.94%] text-[clamp(16px,1.5vw,20px)] font-bold font-AbhayaLibre text-left text-red-500">
            40+
          </div>
        </div>

        <div className="hidden sm:block absolute top-[52.81%] left-[49.42%] w-[24.52%] text-[clamp(12px,1.6vw,20px)] font-semibold  text-black/90 text-center transform -rotate-0.9">
          student discount with valid ID <br /> (collection only)
        </div>
      </div>
    </div>
  );
};

//Philosophy Section

const Philosophy = () => {
  return (
    <section className="relative w-full min-h-[666px] bg-[#0c0c0c] text-white  px-4 py-10 md:py-20 overflow-hidden text-justify">
      {/* Background  */}
      <div className="absolute inset-0 bg-black opacity-80 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f20f0f] font-['Playfair_Display'] mb-6 sm:mb-8">
            Authentic Bangladesh Cuisine:{" "}
            <span className="text-white">Health and Flavor Combined.</span>
          </h2>

          <p className="text-[3vw] md:text-lg lg:text-xl text-white mb-8 max-w-[90%] text-justify">
            At Magpie, we believe exceptional taste need not come at the
            expense of well-being. Every dish is thoughtfully crafted using
            minimal oil, fresh garden herbs, and premium hand-picked spices.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div>
              <div className="flex items-center gap-3 mb-1 text-justify">
                <FaLeaf className="text-[#f20f0f] text-[5vw] md:text-xl" />
                <h3 className="text-[3vw] md:text-xl lg:text-1xl font-semibold">
                  Healthy Cooking
                </h3>
              </div>
              <p className="text-[4vw] md:text-base lg:text-lg max-w-[90%] text-justify">
                Low-fat ingredients without compromising authentic taste
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <FaLeaf className="text-[#f20f0f] text-[5vw] md:text-xl" />
                <h3 className="text-[3vw] md:text-xl lg:text-1xl font-semibold">
                  Fresh Ingredients
                </h3>
              </div>
              <p className="text-[4vw] md:text-base lg:text-lg max-w-[90%]">
                Garden-fresh herbs and premium hand-picked spices
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <FaLeaf className="text-[#f20f0f] text-[5vw] md:text-xl" />
                <h3 className="text-[3vw] md:text-xl lg:text-1xl font-semibold">
                  Mindful Cooking
                </h3>
              </div>
              <p className="text-[4vw] md:text-base lg:text-lg max-w-[90%]">
                Sunflower oil, low-fat yogurt, reduced salt and sugar
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6 justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#d91313] rounded-2xl shadow-xl p-6 md:p-8 flex flex-col justify-between h-full"
          >
            <h3 className="text-[6vw] md:text-[32px] lg:text-[40px]  font-bold mb-4">
              Our Philosophy
            </h3>
            <p className="text-[4vw] md:text-base lg:text-lg text-white/90 mb-6">
              "Innovation and creativity is our practice and polite service is
              our weapon. We honour our customers with these qualities and
              thereby try to create a pleasant aroma for everyone."
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-[4vw] md:text-base lg:text-lg ">
                Health Meets Authenticity
              </h4>
            </div>
          </motion.div>

          {/* Stat Boxes */}
          <div className="flex justify-between gap-4 mt-6 md:mt-8 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 h-[100px] sm:h-[120px] bg-gradient-to-b from-[#5a5961] to-[#434347] rounded-xl shadow-xl flex flex-col items-center justify-center"
            >
              <p className="text-[4vw] md:text-base lg:text-lg font-bold">
                Seats Available
              </p>
              <p className="text-[6vw] md:text-[28px] lg:text-[36px] text-[#f20f0f] font-bold">
                56
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 h-[100px] sm:h-[120px] bg-gradient-to-t from-[#5a5961] to-[#434347] rounded-xl shadow-xl flex flex-col items-center justify-center"
            >
              <p className="text-[4vw] md:text-base lg:text-lg font-bold">
                Days Open
              </p>
              <p className="text-[6vw] md:text-[28px] lg:text-[36px] text-[#f20f0f] font-bold">
                7
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

//Contact and Address Section
const Contact = () => {
  return (
    <section className="relative w-full h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden text-white/90">
      {/* Background Image */}
      <img
        src="/Images/res.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center space-y-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug">
          We Are Fully Ready and Excited to Welcome You
        </h2>

        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white/80">
          Enjoy the best dining experience with flavor, comfort, and care.
        </h3>

        {/* Info section */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-4">
          {/* Location */}
          <div className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-white text-base sm:text-lg md:text-xl" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
              20 Bridge Street, Bangladesh AB11 6JJ
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-white text-base sm:text-lg md:text-xl" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
              01200000000
            </span>
          </div>
        </div>

        {/* Button */}
        <Link
          to=""
          className="mt-4 inline-block px-6 py-2 text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-full bg-gradient-to-b from-[#d91313] to-[#730a0a] hover:opacity-90 transition-opacity"
        >
          Make Reservation
        </Link>
      </div>
    </section>
  );
};

//Testimonials Section

const testimonials = [
  {
    name: "John A.",
    text: "Excellent all round experience for our 42nd wedding anniversary. Nice ambience in the restaurant, friendly attentive staff, superb food, fair price. We could hardly have asked for anything more. We booked online before hand and they were fully expecting us. ",
    image: "/Images/Icon.jpg.webp",
  },
  {
    name: "Jeannette D.",
    text: "The Best service I had in ages, fab quality of food and really great atmosphere-music and general ambiance spot on for relaxing evening to catch up with friends",
    image: "/Images/Icon.jpg.webp",
  },
  {
    name: "Mike Lee",
    text: "Overall, it was a fantastic experience. The service was quick, and the dishes were packed with flavor, making for a delightful dining outing that I thoroughly enjoyed!",
    image: "/Images/Icon.jpg.webp",
  },
];

const Testimonial = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-[#161414] py-16 overflow-hidden  text-white">
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling {
            display: flex;
            width: max-content;
            animation: scrollLeft 20s linear infinite;
          }
          .scrolling.paused {
            animation-play-state: paused;
          }
        `}
      </style>

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 px-4 sm:px-0 font-['Playfair_Display'] ">
        What People <span className="text-[#d91313]">Say?</span>
      </h2>

      <div className="relative w-full overflow-x-hidden px-4 sm:px-0">
        <div
          className={`scrolling ${paused ? "paused" : ""}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-2xl p-5 sm:p-6 w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 cursor-pointer mr-4 sm:mr-6 bg-gradient-to-b from-[#D91313] to-[#730A0A] border border-#D91313 border-opacity-30
      shadow-[0_4px_7px_rgba(255,255,255,0.3)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <h3 className="text-base sm:text-lg font-bold">
                  {testimonial.name}
                </h3>
              </div>

              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//Delivery Charges by post code
const DeliveryCharges = () => {
  return (
    <section className="relative w-full bg-[#161414] overflow-hidden text-white ">
      {/* Title */}
      <div className="text-center py-10 px-4 sm:px-6 md:px-12 font-['Playfair_Display']">
        <motion.h1
          className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          Delivery <span className="text-[#f20f0f]">Information</span>
        </motion.h1>
      </div>

      {/* Content wrapper */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-12 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">
          {/* Image */}
          <motion.div
            className="absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 w-48 sm:w-64 md:w-80 lg:w-[30rem] z-10 md:mr-[-140px] lg:mr-[-180px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
            whileHover="hover"
          >
            <img
              src="/Images/sweet-dessert-on-black-background-260nw-427677541.jpg-2.png"
              alt="Sweet Dessert on Black Background"
              className="rounded-lg object-cover w-full h-auto shadow-lg"
            />
          </motion.div>

          {/* Delivery charge Card */}
          <motion.div
            className="bg-white/20 border border-white/30 rounded-3xl p-5 sm:p-6 md:p-8 w-full md:max-w-5xl z-20 backdrop-blur-[10px] shadow-xl text-center md:ml-[-190px] lg:ml-[-380px]"
            style={{ backdropFilter: "blur(10px)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0.5}
          >
            <div className="px-3 md:px-10">
              <h2 className="text-white/90  font-bold text-lg sm:text-xl md:text-3xl mb-5">
                Delivery Charges by Post-code
              </h2>

              {/* Table Header */}
              <div className="grid grid-cols-[2fr_1.2fr_1.7fr] gap-x-4 sm:gap-x-6 mb-3 text-[#d91313] font-bold text-sm sm:text-lg md:text-xl ">
                <div className="text-left">Postcode</div>
                <div className="text-left">Minimum Order</div>
                <div className="text-left">Delivery Charge</div>
              </div>

              {/* Table Rows */}
              <div className="space-y-3 text-white font-bold text-xs sm:text-base md:text-lg ">
                {[
                  {
                    postcode: "R10, R11, R24, R25",
                    minOrder: "BDT 15.00",
                    deliveryCharge: "BDT 2.00",
                  },
                  {
                    postcode: "R12, R15",
                    minOrder: "BDT 16.95",
                    deliveryCharge: "BDT 2.50 - BDT 3.00",
                  },
                  {
                    postcode: "R16",
                    minOrder: "BDT 15.00",
                    deliveryCharge: "BDT 2.50",
                  },
                  {
                    postcode: "R21, R22",
                    minOrder: "BDT 25.00",
                    deliveryCharge: "BDT 3.00",
                  },
                  {
                    postcode: "R13, R14",
                    minOrder: "BDT 30.00",
                    deliveryCharge: "BDT 4.00 - BDT 5.00",
                  },
                  {
                    postcode: "R23, R32",
                    minOrder: "BDT 35.00",
                    deliveryCharge: "BDT 3.50 - BDT 5.00",
                  },
                ].map(({ postcode, minOrder, deliveryCharge }) => (
                  <div
                    className="grid grid-cols-[2fr_1.2fr_1.7fr] gap-x-4 sm:gap-x-6"
                    key={postcode}
                  >
                    <div className="text-left break-words">{postcode}</div>
                    <div className="text-left">{minOrder}</div>
                    <div className="text-left">{deliveryCharge}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
