// Bismillahirahmanirahim

"use client"

import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
       
          <span>PolyLine</span>
<br></br>
          <span>DC</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="/malper"
              type="secondary"
              className={styles.button}
            >
              Discover
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
        </p>


      </div>
    </Wrapper>   
  );
};

export default Hero;
