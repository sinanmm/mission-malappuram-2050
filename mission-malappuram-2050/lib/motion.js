/** Shared motion tokens — content stays visible; only position/scale animate. */

export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

export const viewport = {
  once: true,
  margin: "-48px",
  amount: 0.12,
};

export const transition = {
  default: { duration: 0.75, ease: EASE_OUT },
  slow: { duration: 0.95, ease: EASE_OUT },
  fast: { duration: 0.55, ease: EASE_OUT },
  spring: { type: "spring", stiffness: 280, damping: 26, mass: 0.8 },
  springSoft: { type: "spring", stiffness: 200, damping: 28 },
};

export const stagger = {
  tight: 0.05,
  default: 0.08,
  relaxed: 0.12,
};

/** Hidden states keep opacity: 1 so content is never invisible if JS/motion fails. */
export const variants = {
  fadeUp: {
    hidden: { opacity: 1, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 1, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 1, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 1, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 1, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger.default,
        delayChildren: 0.06,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 1, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transition.default,
    },
  },
};

const directionVariants = {
  up: variants.fadeUp,
  down: variants.fadeDown,
  left: variants.fadeLeft,
  right: variants.fadeRight,
  scale: variants.scaleIn,
  fade: variants.fadeIn,
};

/** Scroll-reveal props (opacity always 1). */
export function revealProps(direction = "up", delay = 0) {
  const v = directionVariants[direction] ?? variants.fadeUp;
  return {
    initial: v.hidden,
    whileInView: v.visible,
    viewport,
    transition: { ...transition.default, delay },
  };
}

/** Staggered list item transition by index. */
export function itemTransition(index = 0, baseDelay = 0) {
  return {
    ...transition.default,
    delay: baseDelay + index * stagger.default,
  };
}

/** Hero / mount: visible immediately, subtle slide only. */
export function mountReveal(delay = 0) {
  return {
    initial: { opacity: 1, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition.default, delay },
  };
}

/** whileInView cards — never start fully transparent. */
export function scrollReveal(delay = 0) {
  return {
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: itemTransition(0, delay),
  };
}
