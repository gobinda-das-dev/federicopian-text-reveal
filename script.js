const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);


const letters = new SplitType('h1', { types: 'chars' })

gsap.fromTo(
   letters.chars,
   {
      x: -20,
      yPercent: -10,
      clipPath: 'inset(0% 100% 120% -5%)',
      transformOrigin: '0% 50%',
   },
   {
      willChange: 'transform',
      clipPath: 'inset(0% -100% -100% -5%)',
      x: 0,
      yPercent: 0,
      stagger: -0.05,
      duration: 0.8,
      ease: 'power3.out',
   },
   0.05
)