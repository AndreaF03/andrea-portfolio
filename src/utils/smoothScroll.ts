export const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};