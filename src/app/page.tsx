import Hero from '@/components/Hero';
import LimbsInfo from '@/components/LimbsInfo';
import DonateForm from '@/components/DonateForm';
import Registrations from '@/components/Registrations';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      <Hero />
      <LimbsInfo />
      <DonateForm />
      <Registrations />
      <ContactUs />
    </>
  );
}
