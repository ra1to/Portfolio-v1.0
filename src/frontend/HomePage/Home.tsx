import { About } from './About';
import {SkillsSection} from '../SkillComponents/SkillsSection';
import { Works } from './Works';
import { Contact } from './Contact';


export const Home = () => {
  return (
    <div>
        <About />
        <SkillsSection />
        <Works />
        <Contact />
    </div>
  );
}