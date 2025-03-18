import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import FAQ from '@/components/FAQ';
import AboutSection from '@/components/AboutSection';
import Story from '@/components/Story';
import OurAmazingPeople from '@/components/OurAmazingPeople';
import { CallToAction } from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <Story />
        <OurAmazingPeople />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}