/**
 * Smoothly scrolls the window so that the section title (h2)
 * lands perfectly in view right below the sticky navbar.
 */
export const scrollToSectionTitle = (targetId: string) => {
  if (targetId === 'hero' || targetId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  // Find the h2 or h3 or title wrapper element inside the section
  const titleElement = targetElement.querySelector('h2') || targetElement.querySelector('h3') || targetElement;

  // Measure current sticky header height
  const navbar = document.querySelector('header');
  const navbarHeight = navbar ? navbar.offsetHeight : 80;

  // Calculate absolute position on page
  const rect = titleElement.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Position the title cleanly ~18px below the sticky header
  const targetTop = scrollTop + rect.top - navbarHeight - 18;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: 'smooth',
  });
};
