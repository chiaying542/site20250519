import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";
import { Banner } from "./components/Banner.js";

Header.init("#header-container", "about-us");
Footer.init("#footer-container");
Banner.init("#banner-container");
Favicon.init();
