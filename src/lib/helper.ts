interface ScrollWithDelayElement extends Element {
  scrollIntoView(options?: ScrollIntoViewOptions): void;
}

export const scrollWithDelay = (el: ScrollWithDelayElement): void => {
  // Wait for 100ms before scrolling
  setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth" });
  }, 100);
};
