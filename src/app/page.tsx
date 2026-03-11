import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhatWeDo from '@/components/WhatWeDo';
import Journey from '@/components/Journey';
import SuccessStories from '@/components/SuccessStories';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import DonateCTA from '@/components/DonateCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Journey />
      <SuccessStories />
      <Achievements />
      <Testimonials />
      <DonateCTA />
    </>
  );
}
