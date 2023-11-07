import BrandsSection from './BrandsSection';
import CodeSection from './CodeSection';
import ContactSection from './ContactSection';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import PresentationSection from './PresentationSection';
import ProyectSection from './ProyectSection';
import SkillSection from './SkillSection';
import { StyleProvider } from './context/NeumorphicStylesContext';

export const PortfolioApp = () => {
  return (
    <StyleProvider>
      <Navbar />
      <IntroSection />
      <PresentationSection />
      <ProyectSection />
      <SkillSection />
      <BrandsSection />
      <CodeSection />
      <ContactSection />
    </StyleProvider>
  );
};
