import { BrandsSection } from './BrandsSection';
import { CodeSection } from './CodeSection';
import { ContactSection } from './ContactSection';
import { IntroSection } from './IntroSection';
import { MisionSection } from './MisionSection';
import { Navbar } from './Navbar';
import { ProyectSection } from './ProyectSection';
import { SkillSection } from './SkillSection';
import { StyleProvider } from './context/NeumorphicStylesContext';

export const PortfolioApp = () => {
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     event.preventDefault();
  //     const delta = event.deltaY;

  //     if (delta < 0) {
  //       // Desplazamiento hacia arriba
  //       const currentSection = document.querySelector('.active');
  //       if (currentSection.previousElementSibling) {
  //         currentSection.previousElementSibling.classList.add('active');
  //         currentSection.classList.remove('active');
  //       }
  //     } else if (delta > 0) {
  //       // Desplazamiento hacia abajo
  //       const currentSection = document.querySelector('.active');
  //       if (currentSection.nextElementSibling) {
  //         currentSection.nextElementSibling.classList.add('active');
  //         currentSection.classList.remove('active');
  //       }
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);
  return (
    <StyleProvider>
      <Navbar />
      <IntroSection />
      <MisionSection />
      <ProyectSection />
      <SkillSection />
      <BrandsSection />
      <CodeSection />
      <ContactSection />
    </StyleProvider>
  );
};
