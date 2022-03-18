import hamburgerMenu from "./hamburger.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./dark_mode.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "../assets/audio/perforar_1.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countdown(
    "countdown",
    "oct 24,2022",
    "Feliz Cumple al programador de esta pagina"
  );
  scrollTopButtom(".scroll-top-btn");
});
d.addEventListener("keypress", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-btn", "dark-mode");
