import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaSeedling,
  FaRegCheckCircle,
  FaTrophy,
  FaAward,
  FaMapMarkedAlt,
  FaStar,
  FaInstagram,
} from "react-icons/fa";

const Home = () => {
  // Background images and dishes data for thr Hero Section
  const images = ["/Images/Full-background.png"];
  // Dishes data for the Signature Dishes Carousel
  const dishes = [
    {
      name: "Meat Thalis",
      description:
        "Chicken Tikka, Meat somosa, Chicken Tikka Masala, Lamb rogan josh  curryor Lamv Ceylon,Bombay Aloo, Mixed raita,Pilau rice & Naan bread",
      price: "BDT 23.99",
      image: "/Images/meatthali.jpeg",
      bgImage: "/Images/meatthalibg.png",
    },
    {
      name: "Chicken Tikka Biriany",
      description:
        "Fragrant basmati rice cooked with tender lamb pieces and a blend of aromatic spices, served with raita.",
      price: "BDT 13.99",
      image: "/Images/biriyani.jpg",
      bgImage: "/Images/biriyani.jpg",
    },
    {
      name: "Chicken Tikka ",
      description:
        "Cooked with Magpie’s very own tiger mango chutney, honey, fresh coriander & an array of exotic spices.",
      price: "BDT 11.99",
      image: "/Images/panir.jpg",
      bgImage: "/Images/img2.png",
    },
  ];
  // Awards data for the Awards Section
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

  // State to manage the current dish and image index
  const [dishIndex, setDishIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentDish = dishes[dishIndex];
  const currentImage = images[imageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const [cardIndex, setCardIndex] = useState(0);

  return (
    <>
     

      <div className="min-h-screen bg-[#0c0c0c] text-text">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#181818] flex items-center justify-center px-4 py-12 sm:px-10 md:px-16 lg:px-20 min-h-[720px] lg:min-h-[800px] xl:min-h-[880px]">
          {/* Background Image slider */}
          <img
            src={currentImage}
            alt="Background Slider"
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000"
          />

          {/* Content */}
          <div className="relative z-10 container flex flex-col items-start gap-2 lg:ml-0 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white leading-tight text-justify ">
              <span className="text-white">Welcome to </span>
              <span className="text-[#f20f0f]">Magpie</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl text-justify ">
              Experience the rich flavors and warm hospitality of India at
              Magpie. Our chefs bring traditional recipes to life with fresh,
              locally-sourced ingredients.
            </p>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-8 mt-6 flex-wrap text-base text-justify">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d91313]">
                  4.8/5
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white ">
                  Foody Rating
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d91313]">
                  2,281+
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white ">
                  Happy Reviews
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d91313]">
                  7 Days
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white ">
                  Open Weekly
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md text-justify">
              <Link
                to=""
                className="w-full sm:w-auto min-w-[140px] bg-gradient-to-r from-[#670D0D] to-[#f20f0f] text-white text-base sm:text-lg font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg"
              >
                Reserve Table
              </Link>
              <Link
                to=""
                className="w-full sm:w-auto min-w-[140px] bg-gradient-to-r from-[#d9d9d9] to-white text-[#f20f0f] text-base sm:text-lg font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg"
              >
                Order Online
              </Link>
            </div>
          </div>
        </section>

  
        {/* Signature Dishes Carousel*/}
        <section className="relative w-full bg-black overflow-hidden flex items-center justify-center text-white text-justify ">
          {/* Background */}
          <div className="absolute inset-0 bg-black">
            <div
              className="absolute w-[40vh] h-[40vh] sm:w-[50vh] sm:h-[50vh] md:w-[60vh] md:h-[60vh] top-[15%] left-[15%] rounded-full overflow-hidden bg-cover bg-center opacity-60 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${currentDish.bgImage})` }}
            />
          </div>

          {/* Content Wrapper */}
          <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
            <h1 className="text-center mb-12 text-white text-[clamp(2rem,5vw,3rem)] font-['Playfair_Display'] font-bold ">
              Our <span className="text-red-600">Signature</span> Dishes
            </h1>

            <article className="w-full max-w-4xl mx-auto bg-white/10 border border-white/30 backdrop-blur-md p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-lg flex-shrink-0">
                  <img
                    src={currentDish.image}
                    alt={currentDish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex-grow text-white text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold  mb-4 font-bold text-justify ">
                    {currentDish.name}
                  </h2>
                  <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-justify">
                    {currentDish.description}
                  </p>
                  <div className="text-red-600 font-bold text-xl md:text-2xl mb-8">
                    {currentDish.price}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <Link
                      to=""
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 flex items-center"
                    >
                      Order Now
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </Link>

                    <Link
                      to=""
                      className="text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:border-white/50 transition"
                    >
                      View Full Menu
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {dishes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setDishIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                    dishIndex === index
                      ? "bg-red-600 w-6"
                      : "bg-gray-500 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`View ${dishes[index].name}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* tradition Intro Section */}
        <section className="bg-[#161414] text-white px-4 sm:px-8 lg:px-16 py-12 xl:py-16 relative overflow-hidden text-justify">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-900 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-yellow-600 rounded-full opacity-10 blur-3xl"></div>
          </div>

          {/* Content container */}
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Title with reduced spacing */}
            <div className="text-center lg:text-left mb-8 lg:mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-bold leading-tight text-justify">
                Where <span className="text-red-600">Tradition</span> Meets
                Wellness
              </h2>
              <div className="mt-3 h-1 w-20 bg-gradient-to-r from-red-600 to-red-500 mx-auto lg:mx-0"></div>
            </div>

            {/* Main content - adjusted spacing */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
              {/* Text content */}
              <div className="lg:w-1/2 space-y-6">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-300 text-center lg:text-left text-justify">
                  Magpie Healthy Bangladesh Cuisine is a culinary landmark in
                  Bangladesh, consistently ranked among the top 5 of over 600
                  restaurants on Foody with more than 2,650 glowing
                  reviews.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed text-gray-300 text-center lg:text-left">
                  We believe exceptional taste need not come at the expense of
                  well-being. Every dish is thoughtfully crafted using minimal
                  oil fresh garden herbs,and premium hand-picked spices.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-justify">
                  {[
                    {
                      icon: <FaLeaf className="text-2xl" />,
                      color: "text-red-500",
                      title: "Low saturated fat",
                      desc: "Healthier cooking techniques",
                    },
                    {
                      icon: <FaSeedling className="text-2xl" />,
                      color: "text-green-500",
                      title: "Fresh ingredients",
                      desc: "Locally sourced produce",
                    },
                    {
                      icon: <FaRegCheckCircle className="text-2xl" />,
                      color: "text-blue-400",
                      title: "Halal certified",
                      desc: "Ethically prepared meals",
                    },
                    {
                      icon: <FaLeaf className="text-2xl" />,
                      color: "text-yellow-500",
                      title: "Vegan options",
                      desc: "Plant-based selections",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-900 bg-opacity-50 rounded-lg"
                    >
                      <div className={`mt-1 ${item.color}`}>{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full lg:w-1/3 flex items-center justify-center mt-4 lg:mt-0 min-h-[360px] sm:min-h-[400px]">
                {/* Decorative Circles */}
                <div className="absolute -top-6 left-6 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-50 blur-2xl z-0" />
                <div className="absolute -bottom-6 right-4 w-20 h-20 sm:w-28 sm:h-28 bg-red-600 rounded-full opacity-50 blur-3xl z-0" />

                <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center z-10">
                  <img
                    src="/Images/biriyani.jpg"
                    alt="Main Bangladesh Dish"
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />

                  <img
                    src="/Images/butterchicken.jpg"
                    alt="Another Dish"
                    className="absolute top-0 -right-6 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white shadow-md z-20"
                    style={{ transform: "translateY(-20%)" }}
                  />

                  <img
                    src="/Images/desert.jpg"
                    alt="Side Dish"
                    className="absolute bottom-0 -left-6 sm:-left-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white shadow-md z-20"
                    style={{ transform: "translateY(20%)" }}
                  />
                </div>

                <img
                  src="/Images/unnamed-2.jpg"
                  alt="Extra Dish Top Left"
                  className="absolute -top-12 -left-2 w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-md z-20"
                />

                <img
                  src="/Images/bread.jpg"
                  alt="Extra Dish Bottom Right"
                  className="absolute bottom-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white shadow-md z-20"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Menu Highlights */}
        <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl font-['Playfair_Display'] font-bold text-center mb-4">
              <span className="text-white">Menu </span>
              <span className="text-red-600">Highlights</span>
            </h2>
            <p className="text-muted text-center mb-12 text-lg max-w-2xl mx-auto">
              Explore our diverse selection that caters to all dietary
              preferences
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cardIndex === 0 && (
                <>
                  {/* Card 1 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/Samusa.jpg.avif"
                      alt="Starters"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Starters</h3>
                      <p className="text-muted text-sm">
                        Sea Bass,Chicken Pakora,Sheek Kebab,Chicken Chaat,King
                        Prawn Puri
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/kabab.jpg.webp"
                      alt="Tandoori & Kebabs"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        Tandoori & Kebabs
                      </h3>
                      <p className="text-muted text-sm">
                        Sheek Kebab,Mixed Kebab,Lamb Tikka (ST),Tandoori Chicken
                        (ST),Hariyali
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/biriyani.jpg"
                      alt="Aromatic Biryanis"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        Aromatic Biryanis
                      </h3>
                      <p className="text-muted text-sm">
                        Vegetable Biriany,Chicken Tikka Biriany,Tiger Prawn
                        Biriany
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/veg.jpeg"
                      alt="Vegetarian Special"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        Vegetarian Special
                      </h3>
                      <p className="text-muted text-sm">
                        Vegetable Bhaji,Mushroom Bhaji,Spinach Bhaji,Bombay
                        Aloo,Palak aloo,Tarka Dhall
                      </p>
                    </div>
                  </div>
                </>
              )}

              {cardIndex === 1 && (
                <>
                  {/* Card 5 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/curries.jpg.avif"
                      alt="Classic Curries"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                         Bangladesh Dishes
                      </h3>
                      <p className="text-muted text-sm">
                       Pathia Dish,Madras dish,Vindaloo dish,Kurma Dish,Bhuna Dish,Karahi Dish
                      </p>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/bread.jpg"
                      alt="Rice & Breads"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Rice & Breads</h3>
                      <p className="text-muted text-sm">
                       Onion & Garlic Fried Rice,Mixed Vegetable Pilau Rice,Keema Rice,Paratha (plain),Peshwari Naan
                      </p>
                    </div>
                  </div>

                  {/* Card 7 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/dessert.jpg"
                      alt="Desserts"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Desserts</h3>
                      <p className="text-muted text-sm">
                        The Ultimate Chocolate Fudge Cake,Ben & Chocolate Fudge Brownie,
                      </p>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="bg-gradient-to-b from-surface to-[#d91313] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-red-500/50 shadow-lg duration-300">
                    <img
                      src="/Images/Menu/sizzling.jpg.webp"
                      alt="Sizzling Tandoori Dishes"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">Sizzling Tandoori Dishes</h3>
                      <p className="text-muted text-sm">
                        Tandoori King Prawn,Tandoori Mixed Grill,Lamb Tikka,Chicken Tikka
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-10 gap-2">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setCardIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ease-in-out ${
                    cardIndex === index
                      ? "bg-red-600 w-6"
                      : "bg-gray-500 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Show card group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

  
        <section className="relative py-[clamp(48px,8vw,96px)] px-4 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-red-700 opacity-80 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
                <span className="text-white">Follow Us on </span>
                <span className="text-[#d91313]">Instagram</span>
              </h2>
              <p className="text-muted text-center text-xl">
                See our latest dishes and behind-the-scenes moments
              </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "/Images/Menu/biriyani.jpg",
                "/Images/Menu/dessert.jpg",
                "/Images/Menu/kabab.jpg.webp",
                "/Images/Menu/tea.jpg",
                "/Images/Menu/curries.jpg.avif",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Instagram ${i + 1}`}
                  className="rounded-lg border-[1px] border-red-800 object-cover aspect-square w-full h-full shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-1 "
                />
              ))}
            </div>

            {/* Follow Button */}
            <div className="flex items-center justify-center mt-12">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="flex items-center gap-2 bg-gradient-to-b from-[#d91313] to-[#730a0a] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:brightness-110 hover:-translate-y-1 shadow-md ">
                  <FaInstagram className="text-xl" />
                  <span className="text-lg">Follow Us</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Reserve Table Banner */}
        <section className="relative bg-black min-h-[293px] overflow-hidden flex items-center justify-center text-justify">
          {/* Background image */}
          <img
            src="/public/Images/res.jpg"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Gradient overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{
              background:
                "linear-gradient(176.14deg, rgba(0, 0, 0, 0.4) 50%)",
            }}
          />

          {/* Content Container */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center text-center ">
            <h2
              className="text-white font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display'",
                fontWeight: 500,
                fontSize: "clamp(24px, 4vw, 48px)",
                lineHeight: 1.2,
              }}
            >
              Ready to Experience Magpie?
            </h2>

            {/* Paragraph */}
            <p
              className="text-muted font-normal mb-8 max-w-3xl "
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                lineHeight: 1.5,
              }}
            >
              Book your table today and enjoy an authentic Bangladesh dining
              experience in the heart of Bangladesh.
            </p>

            {/* Button */}
            <div className="relative group inline-block">
              {/* Gradient Background */}
              <div
                className="absolute inset-0 rounded-[9999px] z-20 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(180deg, #e60000 0%, #cc0000 100%)",
                }}
              />

              {/* Button Text */}
              <Link
                to=""
                aria-label="Make Reservation"
                className="relative text-white font-bold leading-none text-center px-12 py-4 rounded-[9999px] z-30 inline-block transition-transform duration-300 group-hover:scale-105"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                }}
              >
                Reserve Your Table
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
