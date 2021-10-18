import styles from "./NavBar.module.scss";
import Link from "next/link";
import cn from "classnames";
import { useUI } from "/lib/context/ui";
import { useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useWindowSize, useDebounce } from 'rooks'
import { Squash as Hamburger } from "hamburger-react";

const menuHeight = 100;
const scrollBreakpoint = 980	

export default function NavBar({ menu, contact, pathname }) {
	const [ui, setUI] = useUI();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [scrollStyles, setScrollStyles] = useState({ratio: 0, marker: 0});
	const { innerWidth: windowWidth} = useWindowSize();

	useScrollPosition(({ prevPos, currPos }) => {
		if (windowWidth < scrollBreakpoint || currPos.y === 0) 
			return setScrollStyles({}); //Skip below desktop
		if (currPos.y > 0) return;
		const y = currPos.y;
		const { y: prevY } = prevPos;
		const direction = prevY > y ? "down" : "up";
		const marker = scrollStyles.direction != direction ? y : scrollStyles.marker;
		const ratio = direction === "down" ? Math.min(Math.abs(y - marker) / menuHeight, 1) : (Math.min(Math.abs(marker), 100) - Math.min(y - marker, 100)) / 100;
		setScrollStyles(generateScrollStyles(ratio, direction, marker));
	});
	useEffect(()=> windowWidth < scrollBreakpoint && setScrollStyles({}), [windowWidth]) // Fix resize bug

	const enableFloater = (e) => {
		/* Animate in
		const speed = 200;
		let ratio = 1;
		let marker = window.scrollTop
		const i = setInterval(()=>{
			if(ratio < 0) return clearInterval(i)
			ratio = ratio-=0.01
			setScrollStyles(generateScrollStyles(ratio, 'up', marker));
		}, speed/100)
		//return
		*/
		setScrollStyles({
			direction: "up",
			marker: -window.scrollTop - menuHeight,
			floater:true
		});
	};
	return (
		<nav className={cn(styles.nav, showMobileMenu ? styles.showMobile : styles.hideMobile)}>
			<div className={styles.logo}>
				<Link href={`/`}>
					<a>
						<span style={scrollStyles.r} alt="R">R</span>
						<span style={scrollStyles.i} alt="I">I</span>
						<span style={scrollStyles.s} alt="S">S</span>
						<span style={scrollStyles.o} alt="O" onMouseEnter={enableFloater}>O</span>
						<span style={scrollStyles.n} alt="N">N</span>
					</a>
				</Link>
			</div>
			<div className={cn(styles.menu, scrollStyles.floater &&  styles.floater)} style={scrollStyles.menu}>
				<ul className={styles.navItems}>
					{menu.map((m, idx) => (
						<li
							key={idx}
							className={cn(styles.navItem, `/${m.slug}` === pathname && styles.selected)}
						>
							<Link href={`/${m.slug || ""}`}>
								<a>{m.title}</a>
							</Link>
						</li>
					))}
					<div className={styles.contactFooter}>
						<a href="mailto:info@rison.com">info@rison.com</a>
						<br />
						<a href="tel://0046031223300">+46 (0) 31 223 300</a>
					</div>
				</ul>
				<button className={styles.contact} onClick={() => setUI({ type: "SHOW_CONTACT" })}>
					Contact us
				</button>
				<div className={styles.navMobile}>
					<Hamburger
						isOpen={showMobileMenu}
						duration={0.5}
						onToggle={(toggle) => setShowMobileMenu(toggle)}
						color={showMobileMenu ? "#fff" : "#000"}
						label={"Menu"}
					/>
				</div>
			</div>
		</nav>
	);
}

const generateScrollStyles = (ratio, direction, marker) => {
	const opacity = 1 - ratio;
	const scale = Math.max(1, 1 + ratio - 0.2);
	const margin = 100
	return {
		r: { transform: `translateX(-${ratio * margin}px)`, opacity},
		i: { transform: `translateX(-${ratio * margin}px)`, opacity},
		s: { transform: `translateX(-${ratio * margin}px)`, opacity},
		o: { transform: `translateX(-${ratio * 75}px) scale(${scale})` },
		n: { transform: `translateY(-${ratio * margin}px)`, opacity},
		menu: {
			position: "fixed",
			width: "100%",
			top:0,
			left:0,
			backgroundColor: "#fff",
			transform: `translateY(-${ratio * margin}%)`,
			paddingRight:'3.7%',
			paddingLeft:'3.7%',
		},
		direction,
		marker,
		floater:false,
		t: new Date().getTime()
	}
}