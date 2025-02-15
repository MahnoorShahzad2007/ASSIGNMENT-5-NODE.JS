// Export metadata for the page
export const metadata = {
  title: 'Foodtuck',
};

import NavBar from "./components/navbar";
import HeroHeader from "./components/HeaderHero";
import AboutPage from "./components/about";
import FoodCategoryPage from "./components/foodCategory";
import WhyChooseUsPage from "./components/whyChoseUs";
import Abcd from './components/abcd.jsx';
import Footer from "./components/footer";
import m
export default function Home() {
  return (
    <div>
      <NavBar />

      <HeroHeader />

      <AboutPage />
      
      <FoodCategoryPage />

      <WhyChooseUsPage /> 
      
      <Abcd />

      <Footer />

      
    </div>
  );
}
