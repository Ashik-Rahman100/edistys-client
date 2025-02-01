"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionTitle from "../Common/SectionTitle";
import FinanceCard from "./FinanceCard";

const Finance = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const financeData = [
    {
      id: 1,
      tag: "CUSTOMER FOCUSED",
      image: "/images/finance/focused.avif",
      title: "Purpose-built financial services",
      strongDescription:
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      descriptiion:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    },
    {
      id: 2,
      image: "/images/finance/aduptable.avif",
      tag: "AGILE AND ADAPTABLE",
      title: "Agile and adaptable for growth",
      strongDescription:
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      descriptiion:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    },
    {
      id: 3,
      tag: "COMPILANE READY",
      image: "/images/finance/compilance.avif",
      title: "Manage compliance with ease",
      strongDescription:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      descriptiion:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    },
    {
      id: 4,
      tag: "SECURE AND SAFE",
      image: "/images/finance/sucure.avif",
      title: "Highly secure and safe",
      strongDescription:
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      descriptiion:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    },
  ];

  return (
    <section id="testimonial">
      <SectionTitle
        paragraph=""
        width="1200"
        subtitle="TECHNOLOGY BUILT FOR YOU"
        title="The future of finance"
        center
      />
      <div className="container ">
        <Slider {...settings}>
          {financeData.map((items, i) => (
            // <div key={i}>
            //   <div
            //     className={`relative m-4 my-20 rounded-2xl bg-white p-5 ${i % 2 ? "shadow-testimonial-shadow2" : "shadow-testimonial-shadow1"}`}
            //   >
            //     <div className="absolute top-[-45px]">
            //       <Image
            //         src={items.imgSrc}
            //         alt={items.name}
            //         width={100}
            //         height={100}
            //         className="inline-block"
            //       />
            //     </div>
            //     <h4 className="text-darkgray my-4 text-base font-normal">
            //       {items.comment}
            //     </h4>
            //     <div className="flex items-center justify-between">
            //       <div>
            //         <h3 className="text-darkbrown pb-2 pt-4 text-lg font-medium">
            //           {items.name}
            //         </h3>
            //         <h3 className="text-lightgray pb-2 text-sm font-normal">
            //           {items.profession}
            //         </h3>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <FinanceCard key={i} finance={items}></FinanceCard>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Finance;
