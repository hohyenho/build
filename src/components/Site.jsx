import React from 'react'
const siteText = [
	{
		text: ["make", "site compliant with", "webstardard"],
		titel: "웹 표준을 준수한 사이트 제작",
		site: "https://github.com/hohyenho/hi2",
		info: ["site code", "produiction period : tow days", "UI/UX design"]
	},
	{
		text: ["2make", "2site compliant with", "2webstardard"],
		titel: "2웹페이지 디자인",
		site: "2https://github.com/hohyenho/hi2",
		info: ["2site code", "2produiction period : tow days", "2UI/UX design"]
	},
	{
		text: ["3make", "3site compliant with", "3webstardard"],
		titel: "3웹페이지 디자인",
		site: "3https://github.com/hohyenho/hi2",
		info: ["3site code", "3produiction period : tow days", "3UI/UX design"]
	},
	{
		text: ["4make", "4site compliant with", "4webstardard"],
		titel: "4웹 표준을 준수한 사이트 제작",
		site: "4https://github.com/hohyenho/hi2",
		info: ["4site code", "4produiction period : tow days", "4UI/UX design"]
	},
]

const Site = () => {
	return (
		<section id='site'>
			<div className="site_inner">
				<div className="site_titel">
					Site coding <em>작품들</em>
				</div>
				<div className="site_wrap">
					{siteText.map((site, key) => (
						<article className={`site_item s${key + 1}`} key={key}>
							<span className='num'>0{key + 1}.</span>
							<div className="text">
								<div>{site.text[0]}</div>
								<div>{site.text[1]}</div>
								<div>{site.text[2]}</div>
							</div>
							<h3 className='title'>{site.titel}</h3>
							<div className="btn">
								<a href={site.site}>code</a>
								<a href={site.site}>view</a>
							</div>
							<div className="info">
								<span>{site.info[0]}</span>
								<span>{site.info[1]}</span>
								<span>{site.info[2]}</span>
							</div>
						</article>
					))}

				</div>
			</div>
		</section>
	)
}

export default Site