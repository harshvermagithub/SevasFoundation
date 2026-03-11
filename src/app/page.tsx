import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Registrations from '@/components/Registrations';
import Services from '@/components/Services';
import Products from '@/components/Products';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Registrations />
      <Services />
      <Products />
      <ContactUs />
    </>
  );
}
