import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Categories from '@/components/Categories';
import ProductShowcase from '@/components/ProductShowcase';
import Newsletter from '@/components/Newsletter';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories/>
      <TrustBar />
      <ProductShowcase />
      <Newsletter />
      <Footer />
    </>
  );
}