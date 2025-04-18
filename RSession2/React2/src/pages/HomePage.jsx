import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Accordion from '../components/common/Accordion/Accordion'
import AccordionItem from '../components/common/AccordionItem/AccordionItem'

export default function HomePage() {
  const accordionData = [
    {
      id: 1,
      title: "Accordion One",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem repellendus nihil a tempore omnis exercitationem."
    },
    {
      id: 2,
      title: "Accordion Two",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem repellendus nihil a tempore omnis exercitationem."
    },
    {
      id: 3,
      title: "Accordion Three",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem repellendus nihil a tempore omnis exercitationem."
    }
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      {
        accordionData.map((item) => (
          <Accordion key={item.id} title={item.title}>
            <AccordionItem content={item.body} />
          </Accordion>
        ))
      }
      {/* <button className="bg-sky-500 hover:bg-sky-800 hover:text-white duration-75 hover:animate-pulse p-6 cursor-pointer rounded-4xl">Tailwind</button> */}
      
      <div className="containerItem grid xl:p-16 xl:gap-10 xl:grid-cols-4 lg:p-8 lg:gap-5 lg:grid-cols-3 md:p-4 md:gap-3 md:grid-cols-2 sm:p-2 sm:gap-0 sm:grid-cols-1">
        <div className="box bg-red-800 w-full h-40"></div>
        <div className="box bg-red-800 w-full h-40"></div>
        <div className="box bg-red-800 w-full h-40"></div>
        <div className="box bg-red-800 w-full h-40"></div>
        <div className="box bg-red-800 w-full h-40"></div>
        <div className="box bg-red-800 w-full h-40"></div>
      </div>

      <Footer />
    </div>
  )
}