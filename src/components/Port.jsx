import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port01.jpg";
import port05 from "../assets/img/port02.jpg";
import port06 from "../assets/img/port03.jpg";

const portTExt = [
	{
		num: "01",
		site: "http://jok874.dothome.co.kr/main/",
		img: port01,
		title: "Team Ace 팀프로젝트",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "02",
		site: "http://kimmina.dothome.co.kr/hwasung/",
		img: port02,
		title: "화성 포트폴리오",
		desc: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "03",
		site: "http://dongbinhosting.dothome.co.kr/team/",
		img: port03,
		title: "C팀 포트폴리오",
		desc: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "04",
		site: "http://jok874.dothome.co.kr/main/",
		img: port04,
		title: "Team Ace 팀프로젝트",
		desc: "4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "05",
		site: "http://kimmina.dothome.co.kr/hwasung/",
		img: port05,
		title: "화성 포트폴리오",
		desc: "5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
	{
		num: "06",
		site: "http://dongbinhosting.dothome.co.kr/team/",
		img: port06,
		title: "C팀 포트폴리오",
		desc: "6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nam illum? Numquam aperiam facere quod corporis hic consequuntur, repellat cum saepe, neque dolorum cumque veniam tenetur in dolores officia voluptatum?",

	},
]

const Port = () => {
	const horizontalRef = useRef(null);
	const sectionsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		//gsap 라이브러리에서 ScrollTrigger를 사용할 수 있도록 플러그인을 등록합니다.

		const horizontal = horizontalRef.current;
		const sections = sectionsRef.current;

		let scrollTween = gsap.to(sections, {
			xPercent: -120 * (sections.length - 1),  // -120*(6-1) = -600
			ease: "none",
			scrollTrigger: {
				trigger: horizontal,
				start: "top 56px",
				end: () => "+=" + horizontal.offsetWidth,
				pin: true,//활성 상태에서 트리거 요소 고정
				scrub: 1, //
			},

		});
		// console.log(sectionsRef.current)
		return () => {
			scrollTween.kill();
		}
	}, []);


	return (
		<section id="port" ref={horizontalRef}>
			<div className="port__inner">
				<div className="port__title">
					portfolio <em>포폴 작업물</em>
				</div>
				<div className="port__wrap">


					{portTExt.map((port, key) => (
						<article className={`port__item p${key + 1}`} key={key}
							ref={(el) => (sectionsRef.current[key] = el)}
						// ref 키워드를 이용하면 명시적으로 call by refence(참조 전달)
						>

							<span className="num">{port.num}</span>
							<a href={port.site} target="_blank" className="img">
								<img src={port.img} alt={port.title} />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">{port.desc}</p>
							<a href={port.site} target="_blank" className="site">사이트 보기</a>
						</article>

					))}

				</div>
			</div>
		</section>
	)
}

export default Port