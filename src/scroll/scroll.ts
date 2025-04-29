import Lenis from "@studio-freight/lenis";

export const initSmoothScroll = () => {
	const lenis = new Lenis({
		duration: 1,
		easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
	});

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
};
