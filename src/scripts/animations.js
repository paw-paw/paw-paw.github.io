// Global animations using GSAP with AOS still handling basic reveals
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Make sure ScrollTrigger is properly registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

document.addEventListener('DOMContentLoaded', () => {
  // Refresh AOS when window resizes
  if (typeof window.AOS !== 'undefined') {
    window.addEventListener('resize', () => {
      window.AOS.refresh();
    });
  }

  // Custom animations for specific elements using GSAP

  // Navbar animations - sticky effect
  const navbar = document.getElementById('navbar');

  if (navbar) {
    ScrollTrigger.create({
      start: 'top-=200',
      end: 99999,
      toggleClass: { className: 'shadow-md', targets: navbar }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Get the navbar height for offset
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight - 20,
          behavior: 'smooth'
        });

        // Update URL hash without scrolling
        history.pushState(null, null, targetId);
      }
    });
  });

  // Skills section animations - keep scroll reveals in AOS and use GSAP only for hover refinement
  const skillClusters = document.querySelectorAll('.skill-cluster');

  if (skillClusters.length > 0) {
    skillClusters.forEach(cluster => {
      const clusterHeader = cluster.querySelector('.cluster-header');
      const clusterDescription = cluster.querySelector('.cluster-description');
      const clusterIcon = cluster.querySelector('.icon-container svg');

      // Enhanced cluster hover effect with more dynamic animations
      const primaryColorRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-rgb').trim() || '37, 99, 235';
      const initialBorderColor = getComputedStyle(cluster).borderColor;
      const initialBoxShadow = getComputedStyle(cluster).boxShadow;

      // Create a hover timeline for more coordinated animations
      let hoverTimeline;

      cluster.addEventListener('mouseenter', () => {
        // Kill any existing animations
        if (hoverTimeline) hoverTimeline.kill();

        // Create new timeline for hover effect
        hoverTimeline = gsap.timeline();

        // Add various animations to the timeline
        hoverTimeline
          .to(cluster, {
            borderColor: `rgba(${primaryColorRGB}, 0.55)`,
            boxShadow: `0 6px 14px -5px rgba(${primaryColorRGB}, 0.18), 0 4px 8px -6px rgba(${primaryColorRGB}, 0.12)`,
            y: -2,
            duration: 0.24,
            ease: 'power2.out'
          }, 0)
          .to(clusterIcon, {
            scale: 1.05,
            rotate: 2,
            duration: 0.24,
            ease: 'power2.out'
          }, 0)
          .to(clusterHeader, {
            x: 2,
            duration: 0.24,
            ease: 'power1.out'
          }, 0)
          .to(clusterDescription, {
            opacity: 1,
            x: 1,
            duration: 0.24,
            ease: 'power1.out'
          }, 0);
      });

      cluster.addEventListener('mouseleave', () => {
        // Kill any existing animations
        if (hoverTimeline) hoverTimeline.kill();

        // Create new timeline for hover-out effect
        hoverTimeline = gsap.timeline();

        // Reset all animations
        hoverTimeline
          .to(cluster, {
            borderColor: initialBorderColor,
            boxShadow: initialBoxShadow,
            y: 0,
            duration: 0.22,
            ease: 'power2.out'
          }, 0)
          .to(clusterIcon, {
            scale: 1,
            rotate: 0,
            duration: 0.22,
            ease: 'power2.out'
          }, 0)
          .to(clusterHeader, {
            x: 0,
            duration: 0.22,
            ease: 'power1.out'
          }, 0)
          .to(clusterDescription, {
            opacity: 1,
            x: 0,
            duration: 0.22,
            ease: 'power1.out'
          }, 0);
      });
    });
  }

  // Project cards hover effect
  const projectCards = document.querySelectorAll('#projects .group');

  projectCards.forEach(card => {
    const image = card.querySelector('img');

    if (image) {
      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.02,
          duration: 0.35,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }
  });
});
