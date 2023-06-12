import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import animation from '../styles/animation.module.css';
import BonusBall from '../components/BonusBall';

function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className={animation.loadingAnimation}>
          <BonusBall />
          <h3 class={animation.springyText}>Akash</h3>
          <p></p>
          <div className={animation.springyLine}></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
