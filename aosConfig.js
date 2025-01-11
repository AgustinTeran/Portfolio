import Aos from "aos";
import 'aos/dist/aos.css';

Aos.init()

document.addEventListener("astro:after-swap",() => {
  Aos.init()
});