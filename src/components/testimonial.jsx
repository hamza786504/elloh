// TestimonList.js
import TestimonialCard from './testimonialCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect } from "react";
import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Sample data for testimonials
const demoTestimonials = [
  {
    title: "Great Experience",
    image: "/images/user-1.jpg",
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi vitae nisi placerat iaculis quis eget mi."
  },
  {
    title: "Excellent Service",
    image: "/images/user-2.jpg",
    name: "Jane Smith",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris felis lorem, varius non aliquet ut, lacinia sit amet velit."
  },
  {
    title: "Highly Recommend",
    image: "/images/user-3.jpg",
    name: "David Brown",
    description: "Suspendisse potenti. Sed auctor odio sit amet risus sollicitudin, quis ultricies nulla finibus. Cras dapibus, lectus vel accumsan blandit."
  },
];

const TestimonList = () => {
  
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',            // default
      animateClass: 'animate__animated', // default
      offset: 0,                 // default
      mobile: true,              // default
      live: true                 // default
    });
    wow.init();
  }, []);

  return (
    <section className="container-fluid py-5" id='testimonial'>
      <h2 className="text-center section_heading fw-bold">Testimonials</h2>
      <div className="row justify-content-center">
        <div className="col-12 wow animate__animated animate__fadeInUp">
          <Carousel
            ssr={true}
            centerMode={true}
            keyBoardControl={true}
            infinite={true}
            draggable={false}
            responsive={responsive}
            swipeable={false}
          >
            {demoTestimonials.map((record, index) => (
              <div key={index} className="px-2">
                <TestimonialCard
                  title={record.title}
                  image={record.image}
                  description={record.description}
                  name={record.name}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonList;
