import Header from './components/Header';
import { HeroParallaxDemo } from './components/HeroParallaxDemo';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroParallaxDemo />

      <section>
        <div>ashduashd </div>
        <p>jaisjdiasjda</p>
      </section>
      <section>
        <Header backgroundImage='./office.jpg' />
      </section>
    </>
  );
}
