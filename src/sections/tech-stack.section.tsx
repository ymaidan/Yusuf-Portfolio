import { BiLogoGoLang, BiLogoPython, BiLogoTypescript } from 'react-icons/bi';
import { DiMsqlServer } from 'react-icons/di';
import {
	FaAws,
	FaBootstrap,
	FaDocker,
	FaGitAlt,
	FaNodeJs,
	FaReact,
	FaRust,
} from 'react-icons/fa';
import {
	SiDjango,
	SiDotnet,
	SiSequelize,
	SiSharp,
	SiSqlite,
	SiTailwindcss,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { VscAzureDevops, VscCode } from 'react-icons/vsc';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'Go',
				icon: <BiLogoGoLang color='rgb(0, 173, 216)' />,
				color: 'rgb(0, 173, 216, 0.6)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Python',
				icon: <BiLogoPython color='rgb(55, 118, 171)' />,
				color: 'rgb(55, 118, 171, 0.6)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'C#',
				icon: <SiSharp color='rgb(104, 33, 122)' />,
				color: 'rgb(104, 33, 122, 0.7)',
			},
			{
				title: 'Rust',
				icon: <FaRust color='rgb(206, 73, 0)' />,
				color: 'rgb(206, 73, 0, 0.6)',
			},
			{
				title: 'Next JS',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
		],
	},
	{
		heading: 'Frameworks & Tools',
		items: [
			{
				title: 'Django',
				icon: <SiDjango color='rgb(9, 46, 32)' />,
				color: 'rgb(9, 146, 32, 0.8)',
			},
			{
				title: 'ASP.NET',
				icon: <SiDotnet color='rgb(94, 77, 210)' />,
				color: 'rgb(94, 77, 210, 0.7)',
			},
			{
				title: 'Sequelize.js',
				icon: <SiSequelize color='rgb(82, 139, 255)' />,
				color: 'rgb(82, 139, 255, 0.7)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgb(125, 17, 248, 0.75)',
			},
			{
				title: 'Docker',
				icon: <FaDocker color='rgb(0, 151, 230)' />,
				color: 'rgb(0, 151, 230, 0.6)',
			},
			{
				title: 'AWS',
				icon: <FaAws color='rgb(255, 153, 0)' />,
				color: 'rgb(255, 153, 0, 0.6)',
			},
			{
				title: 'Git',
				icon: <FaGitAlt color='rgb(240, 80, 50)' />,
				color: 'rgb(240, 80, 50, 0.7)',
			},
			{
				title: 'VS Code',
				icon: <VscCode color='rgb(0, 122, 204)' />,
				color: 'rgb(0, 122, 204, 0.7)',
			},

			{
				title: 'Azure DevOps',
				icon: <VscAzureDevops color='rgb(0, 120, 215)' />,
				color: 'rgb(0, 120, 215, 0.7)',
			},
		],
	},
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MSSQL Server',
				icon: <DiMsqlServer color='rgb(230, 50, 42)' />,
				color: 'rgb(241, 83, 75, 0.5)',
			},
			{
				title: 'SQLite',
				icon: <SiSqlite color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},

		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
