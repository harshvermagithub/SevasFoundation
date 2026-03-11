import Hero from '@/components/Hero';
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
      <WhatWeDo />
      <Journey />
      <SuccessStories />
      <Achievements />
      <Testimonials />
      <DonateCTA />
    </>
  );
}
