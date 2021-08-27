import { useEffect, useState } from "react";
import Themes from "../themes";
import NavbarComponent from "./navbar";
import MobileNavComponent from "./mobileNav";

const Navs = () => {
	const [themeNo, setThemeNo] = useState(
		!!localStorage.getItem("Theme") ? parseInt(localStorage.getItem("Theme")) : 0
	);

	useEffect(() => {
		let stateCheck = setInterval(() => {
			if (document.readyState === "complete") {
				clearInterval(stateCheck);

				const angle = Themes[themeNo].angle;
				document.body.style.filter = `hue-rotate(${angle}deg)`;

				let img = document.getElementsByTagName("img");
				let noFilter = document.getElementsByClassName("no-filter");

				for (let i = 0; i < img.length; i++)
					img[i].style.filter = `hue-rotate(-${angle}deg)`;
				for (let i = 0; i < noFilter.length; i++)
					noFilter[i].style.filter = `hue-rotate(-${angle}deg)`;

				localStorage.setItem("Theme", themeNo);
			}
		}, 100);
	});
		return <><NavbarComponent themeNo={() => themeNo} setThemeNo={setThemeNo} />
		 <MobileNavComponent themeNo={() => themeNo} setThemeNo={setThemeNo} /></>;
};

export default Navs;
