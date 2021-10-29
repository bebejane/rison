import styles from './NavBar.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import Hamburger from 'hamburger-react';
import { useUI, UIAction } from '/lib/context/ui';
import { useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize } from 'rooks'

const menuHeight = 100;
const scrollBreakpoint = 980
const initialScrolStyles = { ratio: 0, marker: 0, direction:undefined }

const generateScrollStyles = (ratio, direction, marker) => {
	const opacity = Math.max(1 - (ratio*1), 0);
	const scale = Math.max(1, 1 + ratio - 0.75);
	const margin = 100
	return {
		r: { transform: `translateX(-${ratio * margin}px) translateY(${ratio * margin}px)`, opacity },
		i: { transform: `translateX(-${ratio * margin}px) translateY(${ratio * margin}px)`, opacity },
		s: { transform: `translateX(-${ratio * margin}px) translateY(${ratio * margin}px)`, opacity },
		o: { transform: `translateX(-${ratio * 95}px) scale(${scale})`, top:ratio*100},
		n: { transform: `translateY(${(ratio/3) * margin}px)`, opacity },
		nav: { transform: `translateY(-${ratio * margin}%)` },
		ratio,
		direction,
		marker,
		floater: ratio >= 1
	}
}

export default function NavBar({ menu, contact, pathname }) {
	const [ui, setUI] = useUI();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [scrollStyles, setScrollStyles] = useState(initialScrolStyles);
	const { innerWidth: windowWidth } = useWindowSize();

	const enableFloater = () => {
		if(!scrollStyles.floater) return // Dont trigger until scrolled down
		const speed = 200;
		const marker = -window.scrollY
		let ratio = 1;
		const loop = setInterval(()=>{
			if(ratio <= 0) return clearInterval(loop)
			setScrollStyles(generateScrollStyles(ratio = Math.max(ratio-=0.02, 0), 'down', marker));
		}, speed/100)
	};

	useScrollPosition(({ prevPos, currPos }) => {
		
		if (windowWidth < scrollBreakpoint) return setScrollStyles(initialScrolStyles); // Skip and reset below desktop
		if (currPos.y === 0) return setScrollStyles(initialScrolStyles); // Reset on reload
		if (currPos.y > 0) return console.log('bounce'); // Ignore on bounce scroll Safari
		
		const { y } = currPos;
		const { ratio: prevRatio, direction : prevDirection, marker: prevMarker } = scrollStyles
		const direction = prevPos.y > y ? 'down' : 'up';
		const marker = prevDirection != direction ? y - (direction === 'up' ?  ((1-prevRatio)*menuHeight) : 0) : prevMarker;
		const ratio = direction === 'down' ? Math.min(Math.abs(y - marker) / menuHeight, 1) : (Math.min(Math.abs(marker), 100) - Math.min(y - marker, 100)) / 100;
		setScrollStyles(generateScrollStyles(ratio, direction, marker));
	});
	useEffect(() => windowWidth < scrollBreakpoint && setScrollStyles({}), [windowWidth]) // Fix resize bug

	const handleClick = (e) => {
		setShowMobileMenu(false);
	}

	return (
		<nav className={cn(styles.nav, showMobileMenu ? styles.showMobile : styles.hideMobile)} style={scrollStyles.nav} >
			<div className={styles.menuWrapper}>
				<div className={styles.logo}>
					<Link href={`/`} >
						<a>
							<span style={scrollStyles.r} alt='R'>R</span>
							<span style={scrollStyles.i} alt='I'>I</span>
							<span style={scrollStyles.s} alt='S'>S</span>
							<span style={scrollStyles.o} alt='O' onMouseEnter={enableFloater}>O</span>
							<span style={scrollStyles.n} alt='N'>N</span>
						</a>
					</Link>
				</div>
				<div className={styles.menu}>
					<ul className={styles.navItems}>
						{menu.map((m, idx) => (
							<li key={idx} className={cn(styles.navItem, `/${m.slug}` === pathname && styles.selected)}>
								<Link href={`/${m.slug || ''}`} scroll={false}>
									<a onClick={handleClick}>{m.title}</a>
								</Link>
							</li>
						))}
						<li className={cn(styles.navItem, styles.mobileContact)}>
							<a  onClick={() => setUI({ type: UIAction.SHOW_CONTACT })}>
								Contact
							</a>
						</li>
					</ul>
					<button className={styles.contact} onClick={() => setUI({ type: UIAction.SHOW_CONTACT })}>
						Contact us
					</button>
					<div className={styles.navMobile}>
						<Hamburger
							isOpen={showMobileMenu}
							duration={0.5}
							onToggle={(toggle) => setShowMobileMenu(toggle)}
							color={showMobileMenu ? '#fff' : '#000'}
							label={'Menu'}
							size={20}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

