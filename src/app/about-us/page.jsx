import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import FAQ from '@/components/FAQ';
import AboutSection from '@/components/AboutSection';
import OurAmazingPeople from '@/components/OurAmazingPeople';
import { CallToAction } from '@/components/CallToAction';
import AboutText from '@/components/AboutText';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <AboutText />
        <OurAmazingPeople />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}