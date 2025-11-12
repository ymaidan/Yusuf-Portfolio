import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';

const projects = [
	{
		title: 'Reboot Records',
		description:
			'A dynamic web application for tracking student progress and skills at Reboot01, featuring interactive visualizations and real-time data analytics.',
		technologies: ['JavaScript', 'CSS', 'HTML'],
		github: 'https://github.com/ymaidan/Reboot-Records-G',
		demo: 'https://reboot-records-g.vercel.app/',
		color: 'rgb(97, 219, 251, 0.6)',
	},
	{
		title: 'Social Network (Next Station)',
		description:
			'A modern, full-stack social networking platform built with Next.js and Go, featuring real-time chat, user profiles, groups, and more. Think Facebook meets modern web development.',
		technologies: ['TypeScript', 'JavaScript', 'Go', 'Next.js'],
		github: 'https://github.com/ymaidan/Next-Station',
		demo: '',
		color: 'rgb(125, 17, 248, 0.75)',
	},
	{
		title: 'Codymon Catcher (Space Invaders)',
		description:
			'Classic arcade game reimagined. Players defend Earth from waves of invading aliens by skillfully throwing Poké Balls to capture Golang Hamsters.',
		technologies: ['JavaScript', 'HTML', 'CSS'],
		github: 'https://github.com/ymaidan/Codymon-Catcher',
		demo: 'http://codymon-catcher.vercel.app/',
		color: 'rgb(255, 153, 0, 0.6)',
	},
	{
		title: 'LightFrames (Mini Framework)',
		description:
			'A custom JavaScript framework with DOM abstraction, state management, routing, and event handling.',
		technologies: ['JavaScript', 'CSS', 'HTML'],
		github: 'https://github.com/ymaidan/LightFrames',
		demo: 'https://light-frames-red.vercel.app/',
		color: 'rgb(0, 237, 100, 0.7)',
	},
	{
		title: 'Bomberman-DOM',
		description:
			'A multiplayer bomberman game where multiple players can join in and battle until one of them is the last man standing, built with custom framework.',
		technologies: ['JavaScript', 'HTML', 'CSS'],
		github: 'https://github.com/ymaidan/Bomberman-Game',
		demo: '',
		color: 'rgb(230, 50, 42, 0.5)',
	},
	{
		title: 'Smart Waste Management System',
		description:
			'Senior Project: Smart waste management solution aimed at reducing human error and improving efficiency in waste disposal in urban areas.',
		technologies: ['IoT', 'Python', 'React', 'raspberry pi'],
		github: 'https://github.com/ymaidan',
		demo: 'https://waste-management-system-c9715.web.app/',
		color: 'rgb(0, 160, 220, 0.6)',
	},
	{
		title: 'ESG Reporting Platform',
		description:
			'Full-stack web application for Environmental, Social, and Governance (ESG) program reporting and disclosures for Dimuma.',
		technologies: ['C#', 'JavaScript', 'XML', 'MSSQL', 'Bootstrap'],
		github: '',
		demo: 'https://dimuma.com/',
		color: 'rgb(104, 160, 99, 0.7)',
	},
	{
		title: 'Fintech Platform (MenaMoney)',
		description:
			'Cross-platform fintech platforms for savings, investment and pension management. Web and Mobile App solutions.',
		technologies: ['React Native', 'React', 'TypeScript', 'Python', 'AWS'],
		github: '',
		demo: 'https://technology.menamoney.org/',
		color: 'rgb(18, 122, 209, 0.7)',
	},
	{
		title: 'Portfolio Website',
		description:
			'Modern and responsive portfolio website built with React, TypeScript, and Vite showcasing projects and skills.',
		technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
		github: 'https://github.com/ymaidan/Yusuf-Portfolio',
		demo: '',
		color: 'rgb(97, 219, 251, 0.6)',
	},
];

export const Projects = () => {
	return (
		<section
			className='projects-section'
			id='projects'
		>
			<div className='projects-content'>
				<SectionTitle
					title='My'
					subTitle='PROJECTS'
				/>
			</div>
			<div className='container'>
				<div className='projects-grid'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='project-card'
							style={{
								'--project-clr': project.color,
							}}
							onClick={() => {
								if (project.demo) {
									window.open(project.demo, '_blank');
								}
							}}
							role={project.demo ? 'button' : undefined}
							tabIndex={project.demo ? 0 : undefined}
						>
							<div className='project-header'>
								<h3>{project.title}</h3>
								<div className='project-links'>
									<a
										href={project.github || 'https://github.com/ymaidan'}
										target='_blank'
										rel='noopener noreferrer'
										aria-label='GitHub'
										className='project-link'
										onClick={(e) => e.stopPropagation()}
									>
										<FaGithub />
									</a>
									{project.demo && (
										<div
											className='project-link demo-icon'
											title='Click card to view live demo'
										>
											<FaExternalLinkAlt />
										</div>
									)}
								</div>
							</div>
							<p className='project-description'>{project.description}</p>
							<div className='project-technologies'>
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className='tech-tag'
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

