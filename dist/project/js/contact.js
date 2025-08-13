// import { Loader } from "./components/Loader.js";
// import { Header } from "./components/Header.js";

// await Loader.html("components/header.html", "#header-container");
// Header.activeMenu("contact");

import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";
import { Banner } from "./components/Banner.js";

Header.init("#header-container", "contact");
Footer.init("#footer-container");
Banner.init("#banner-container");
Favicon.init();
