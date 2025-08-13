// import { Loader } from "./components/Loader.js";
// import { Header } from "./components/Header.js";

// await Loader.html("components/header.html", "#header-container");
// Header.activeMenu("news");

import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";
import { Banner } from "./components/Banner.js";

Header.init("#header-container", "news");
Footer.init("#footer-container");
Banner.init("#banner-container");
Favicon.init();
