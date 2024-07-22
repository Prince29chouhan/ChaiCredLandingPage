import React from "react";
import "./testimonial.css";
import team from "../assets/avatar-5.jpg";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";


const testimonials = [
    {
      text: "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      name: "ANKIT SANGHVI",
      role: "CEO, Recontact",
      image: person1,
      rating: 4.5,
    },
    {
      text: "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      name: "NIRMAAN",
      role: "Incubator cell",
      image: person2,
      rating: 5,
    },
    {
      text: "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      name: "MUSKAAN",
      role: "Angel Investor",
      image: person3,
      rating: 5,
    },
    {
      text: "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      name: " BETTER CAPITAL",
      role: "VC Firm",
      image: person4,
      rating: 5,
    },
    {
      text: "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      name: " ABHINAV",
      role: " Co Founder, Friday.ai",
      image: person5,
      rating: 5,
    },
    {
      text: "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      name: "RISHABH ARYA",
      role: "Co Founder, Entvin, YC’22",
      image: person6,
      rating: 5,
    },
  ];

  
  const TestimonialComponent = () => {
    return (
      <>
        <div className="text-white text-center mt-[10%]">
          <h1 className="text-7xl" data-aos="fade-down" data-aos-delay="50">Testimonials</h1>
          <div className="flex items-center justify-center">
            <div className="w-60 h-2 bg-gray-500 flex items-center justify-center mt-5"></div>
          </div>
          <p className="px-20 text-xl mt-10 text-gray-300" data-aos="fade-down" data-aos-delay="100">
            At our company, we are dedicated to creating exceptional digital
            experiences for brands, transcending beyond the ordinary. Our app
            offers a seamless platform where investors and founders can
            effortlessly register, manage, and organize their expenses with
            precision and ease.
          </p>
        </div>
        <div className="testimonial-container" data-aos="fade-down" data-aos-delay="250">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <div className="stars">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              </div>
              <div className="testimonial-profile" data-aos="fade-down" data-aos-delay="350">
                <div className="profile-image mt-10">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-info mt-5">
                  <h1>{testimonial.name}</h1>
                  <p className="text-xl">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default TestimonialComponent;
  