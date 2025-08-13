// import { Loader } from "./components/Loader.js";
// import { Header } from "./components/Header.js";

// await Loader.html("components/header.html", "#header-container");
// Header.activeMenu("news-detail");

import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";
import { Footer } from "./components/Footer.js";

Header.init("#header-container", "news-detail");
Footer.init("#footer-container");
Favicon.init();
