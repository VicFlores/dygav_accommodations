import React, { FC, ReactNode } from 'react';

import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const Hero: FC<HeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.subtitle}>{subtitle}</p>

      {children}
    </section>
  );
};
