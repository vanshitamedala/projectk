import Image from 'next/image';
import Section from '../layout/Section';
import Button from '../ui/Button';
import LinkText from '../ui/LinkText';
import Callout from './Callout';
import Header from './Header';

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="hero-section" id="hero">
      <Header />
      <Section>
        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
          {'about me.'}
        </h2>
        <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
          <p>
            {
              'I\'m a fourth-year engineering student with a coding passion, thriving in fast-paced challenges. With a LeetCode rating of 1,700 and over 400 problem solutions on both LeetCode and CodeChef (earning me a 3-star rating), I bring a strong problem-solving edge. Teamwork and diversity are my strengths, as I seek to create tech solutions for a better world.              '
            }
          </p>
        </div>
      </Section>
    </main>
  );
};
export default HeroSection;
