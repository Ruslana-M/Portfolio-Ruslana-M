
import React, { useState } from 'react';
import './App.css'; 
import profilePhoto from './ruslana.jpg'

const navigation = [
  { name: 'About me', href: '#Aboutme', iconName: "person-outline" },
  { name: 'Experience', href: '#Experience', iconName: "briefcase-outline" },
  { name: 'Projects', href: '#Projects', iconName: "file-tray-full-outline" },
  { name: 'Recomendations', href: '#Recomendations', iconName: "rocket-outline" },
  { name: 'Contact', href: '#Contact', iconName: "mail-outline" },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#add8e6] text-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">

              {/* Navigation links */}
              <div className="hidden md:block">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-black px-3 py-2 hover:text-[#ed774f]  font-semibold">
                    <ion-icon name={item.iconName}></ion-icon>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#b95b3c] p-2 inline-flex items-center justify-center text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <ion-icon name="close-outline" className="h-6 w-6" ></ion-icon>
                ) : (
                  <ion-icon name="menu-outline" className="h-6 w-6"></ion-icon>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive menu for small screens */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black block px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* main content*/}
      <div className="container mx-auto">
        <div className="pl-4 pt-2"> <img src={profilePhoto} alt="Ruslana Photo" className="rounded-[20px] w-80" /></div>

        <div className="typewriter-text font-bold text-2xl pl-4 ">Hi I'm Ruslana.</div>
        <section id="Aboutme" className="pt-4">
          <div className="flex flex-col">
            <p className="font-bold text-2xl pl-4">About Me</p>

            <div className="text-[16] pl-4">

              <p>  Scrum Master | Frontend - Developer | Yoga Teacher</p>
              <p className="text-[18] pt-4">
                I like to help people to feel meaningful, organize projects that have social impact,
                and designe things that people find easy to use.
                <br />Besides I like yoga, mountains and reading. <br />Let me know if we could work on some valuable projects together.
              </p>
            </div>
          </div>

        </section>

        <section id="Experience" className="pt-4 pl-4">
          <p className="font-bold text-2xl">My Experience</p>
          <p  className='pt-2'>  I have experience in project management and customer service in international
            companies and enjoy working with people from different cultures. My foreign background has helped me to understand people
            better and have a new perspective on the situation.</p>
          <p>During the digital transformation from a legacy software to a new SAP application
            I guided my team through this change process using agile best practices like Kanban, Lean methodology and Scrum.</p>
          <p className='pt-2'>
            <b >My Achievements:</b>
            <ul className='list-disc  pl-4'>
              <li>Certified Scrum Master (PSM II) </li>
              <li>Scrum Product Owner (PSPO I)</li>
              <li>Front-End Developer (ReDi School Munich)</li>
              <li>and at my heart I am a Yoga Teacher (AYA) </li>
            </ul>
          </p>
          <p className='pt-2'>
            <b >My Values:</b>
            <ul className='list-disc pl-4'>
              <li>  respect other people, cultures, ideas; </li>
              <li>  readiness to share knowledge;</li>
              <li>  meaningful work and meaningful relationships </li>
            </ul>
          </p>



        </section>

        <section id="Projects" className="pt-4 pl-4">
          <p className="font-bold text-2xl pb-2">My last Projects</p>

          <div className="cards-container pt-2">
            <div className="project-card ">
              <h2 className='font-bold'>Calm Hub App</h2>
              <p>
                <ion-icon name="pricetag-outline" size="small"></ion-icon>HTML,
                <ion-icon name="pricetag-outline" size="small"></ion-icon>CSS,
                <ion-icon name="pricetag-outline" size="small"></ion-icon>ReactJS</p>
              <p className="description">Yoga App that help to create your own yoga practice, using a large selection of yoga poses</p>
              <a href="https://yoga-app-redischool-final-project.netlify.app" target="_blank" > <button className="btn"><ion-icon name="logo-github"></ion-icon> Discover More</button></a>
            </div>

            <div className="project-card">
              <h2 className='font-bold'>Hotel Website</h2>
              <p>
                <ion-icon name="pricetag-outline" size="small"></ion-icon>HTML,
                <ion-icon name="pricetag-outline" size="small"></ion-icon>CSS,
                <ion-icon name="pricetag-outline" size="small"></ion-icon>JS</p>
              <p className="description">Hotel welcome page</p>
              <a href="https://github.com/Ruslana-M/Team_work_Holiday" target="_blank"> <button className="btn"><ion-icon name="logo-github"></ion-icon> Discover More</button></a>
            </div>
            <div className="project-card">
              <h2 className='font-bold'>Weather selector</h2>
              <p>
                <ion-icon name="pricetag-outline" size="small"></ion-icon>HTML,
                <ion-icon name="pricetag-outline" size="small"></ion-icon>CSS,
                <ion-icon name="pricetag-outline" size="small"></ion-icon>ReactJS</p>
              <p className="description">Serching the weather temperature in your city using openweather API</p>
              <a href="https://github.com/Ruslana-M/weather-search" target="_blank"> <button className="btn"><ion-icon name="logo-github"></ion-icon> Discover More</button></a>
            </div>

            <div className="project-card">
              <h2 className='font-bold'>Yoga for Ukraine Project</h2>
             
              <p className="description">
                Participate in oganizing certified Yoga Teacher courses for refugees in Germany. </p>
              <a href="https://www.instagram.com/p/CzB28LuoLi4/?utm_source=ig_web_copy_link" target="_blank"> <button className="btn"><ion-icon name="logo-instagram"></ion-icon> Discover More</button></a>
            </div>

          </div>

        </section>
        <section id="Recomendations" className="pt-4 pl-4">
          <p className="font-bold text-2xl pb-2">Recomendations</p>

          <div className="cards-container pt-2">
          <div className="testimonial-card w-5/6 p-4">
            <h3><a href="https://www.instagram.com/p/CzB28LuoLi4/?utm_source=ig_web_copy_link" target="_blank" className="link link-primary">Marion, Way Yoga</a></h3>
            <p className="testimonial-quote mt-2">Thanks to Ruslana, a vital instructor in our 'Yoga for Ukraine' project. Her dedication contributes to the success of Ukrainian graduates in yoga teacher training, empowering fellow Ukrainians.</p>
          </div>
          </div>


        </section>
        <section id="Contact" className="pt-4 pb-4 pl-4 text-[20px]">
          <p className="font-bold text-2xl pb-2">Contact</p>
          <p><b>Tel:</b> <span className='underline decoration-solid'>+49 151 543 151 39</span></p>
          <p><b>E-mail:</b>  <span className='underline decoration-solid'>r.myshelovka@me.com</span></p>
          <div className=' text-[28px] flex gap-2'>
          <h3><a href="https://www.linkedin.com/in/ruslana-mysholovka-stay-with-ukraine-1605bb141/" target="_blank"> <ion-icon name="logo-linkedin"></ion-icon></a></h3>
          <h3><a href="https://github.com/Ruslana-M" target="_blank"><ion-icon name="logo-github"></ion-icon></a></h3>
          </div>

        </section>
      </div>

    </div>
  );
}

export default App;
