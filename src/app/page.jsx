import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';
import SuccessStories from '@/components/SuccessStories'; 
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <SuccessStories />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}