'use client';
import { useState } from 'react';
import styles from '@/app/industries/books/page.module.css';

interface AccordionItemData {
  title: string;
  bullets: string[];
}

interface SolutionsAccordionProps {
  items: AccordionItemData[];
}

export default function SolutionsAccordion({ items }: SolutionsAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${isActive ? styles.accordionItemActive : ''}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              aria-expanded={isActive}
            >
              <span className={styles.accordionTitle}>{item.title}</span>
              <span className={styles.accordionToggle}>{isActive ? '−' : '+'}</span>
            </button>
            
            {isActive && (
              <div className={styles.accordionContent}>
                <ul className={styles.solutionsList}>
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.solutionBullet}>
                      <span className={styles.bulletOrange}>■</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
