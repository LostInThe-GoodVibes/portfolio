import { useEffect } from "react";

export function useSectionIds() {
  useEffect(() => {
    // Add IDs to sections for smooth scrolling
    const sections = [
      { selector: '[data-name="Hero"]', id: 'home' },
      { selector: '[data-name="About"]', id: 'about' },
      { selector: '[data-name="Process"]', id: 'process' },
      { selector: '[data-name="FeaturedWork"]', id: 'work' },
      { selector: '[data-name="Contact"]', id: 'contact' },
    ];

    sections.forEach(({ selector, id }) => {
      const element = document.querySelector(selector);
      if (element && !element.id) {
        element.id = id;
      }
    });
  }, []);
}
