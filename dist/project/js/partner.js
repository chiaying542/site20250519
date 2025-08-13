// import { Loader } from "./components/Loader.js";
// import { Header } from "./components/Header.js";

// await Loader.html("components/header.html", "#header-container");
// Header.activeMenu("partner");

import { Header } from "./components/Header.js";
import { Favicon } from "./components/Favicon.js";

Header.init("#header-container", "partner");
Favicon.init();
