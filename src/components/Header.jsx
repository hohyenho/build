import React, { useState } from 'react'
const headerNav = [
	{
		title: "intro",
		url: "#intro",
	},
	{
		title: "skill",
		url: "#skill",
	},
	{
		title: "site",
		url: "#site",
	},
	{
		title: "portfolio",
		url: "#port",
	},
	{
		title: "contact",
		url: "#contact",
	},
	{
		title: "교회오빠",
		url: "#구동빈",
	},
	{
		title: "말잘듣는동우",
		url: "#말잘듣는동우",
	},
]


const Header = () => {
	const [show, setShow] = useState(false);
	const toggleMenu = () => {
		setShow(pShow => !pShow);
	}

	return (
		<header id='header'>
			<div className="header_inner">
				<div className="header_logo">
					<a href="/">portfolio <em>jhh</em></a>
				</div>
				<div className={`header_nav ${show ? "show" : ""}`} role='navigation' aria-label='메인메뉴'>
					<ul>
						{headerNav.map((nav,key)=>(
							<li key={key}><a href={nav.url}>{nav.title}</a></li>
						))}
						
					</ul>
				</div>
				<div className="header_nav_mobile"
					id="headerToggle"
					aria-controls="primary-menu"
					aria-expanded={show ? "trun" : "false"}
					role='button'
					tabIndex="0"
					onClick={toggleMenu}
				>
					<span></span>
				</div>
			</div>
		</header>
	)
}

export default Header