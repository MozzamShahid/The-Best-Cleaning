import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutPreview } from '@/components/AboutPreview';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { VideoReels } from '@/components/VideoReels';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutPreview />
      <VideoReels />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
