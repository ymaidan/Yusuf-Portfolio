import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Software Developer / Software Engineer',
				place: '@MenaMoney',
				timePeriod: 'Oct 2024 - Present',
				description: (
					<ul>
						<li>
							Focusing on fintech solutions using <strong>React Native</strong>, <strong>Python</strong>, and <strong>AWS</strong>.
						</li>
					</ul>
				),
			},
			{
				title: 'Full-Stack Developer',
				place: '@Dimuma',
				timePeriod: 'Mar 2024 - June 2024',
				description: (
					<ul>
						<li>
							Working on <strong>ESG Program Reporting and Disclosures</strong>.
						</li>
					</ul>
				),
			},
			{
				title: 'Huawei ICT Ambassador',
				place: '@Huawei',
				timePeriod: 'May 2024 - Jan 2025',
				description: (
					<ul>
						<li>Involved in Seeds for the Future Program.</li>
						<li>ICT Academy Instructor.</li>
						<li>ICT Competition participation.</li>
					</ul>
				),
			},
			{
				title: 'IT Intern',
				place: '@Global Vision Solutions',
				timePeriod: 'Sep 2024 - Nov 2024',
				description: (
					<ul>
						<li>Web Analysis and CRM management.</li>
						<li>Computer Technician responsibilities.</li>
						<li>Logistics Sales, Pricing and Freight Forwarder Agent.</li>
					</ul>
				),
			},
			{
				title: 'Administrative Assistant',
				place: '@National Aluminum Factory',
				timePeriod: 'Aug 2020 - Aug 2023',
				description: (
					<ul>
						<li>Managing marketing positions and overseeing operations.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Certifications & Licenses',
				place: 'Various Organizations',
				timePeriod: '',
				description: (
					<ul>
						<li>AWS Cloud Practitioner</li>
						<li>Certificate in Cisco Networking (CCNAv7)</li>
						<li>Rotary Youth Leadership Award (RYLA)</li>
						<li>Huawei Seeds For The Future</li>
						<li>Huawei ICT Ambassador</li>
						<li>Injaz Bahrain (Head Start Program)</li>
						<li>Soft Skills (ThinkSmart)</li>
						<li>Toastmaster Member</li>
						<li>Adult and Pediatric First Aid/CPR/AED</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Diploma in Full-Stack Development',
				place: 'Reboot Coding Institute',
				timePeriod: '2024 - Present',
				description: (
					<ul>
						<li>Worked on over 50 projects using JavaScript, Go, and more.</li>
						<li>Toastmaster Member.</li>
					</ul>
				),
			},
			{
				title: 'Bachelor in Informatics Engineering',
				place: 'University of Technology Bahrain',
				timePeriod: '2020 - 2024',
				description: (
					<ul>
						<li>Projects: Smart Waste Management Bins, Bank Network Topology.</li>
						<li>Student Council Member (2022-2023).</li>
						<li>IEEE Member.</li>
					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Yusuf Yaser Maidan, an Informatics Engineer.
					</p>
					<p>
						I am a reliable Informatics Engineer with a strong background in <strong>IT development</strong> and{' '}
						<strong>engineering principles</strong>. I'm eager to apply my technical skills 
						and work ethic in a dynamic team to contribute to innovative IT projects.
					</p>
					<p>
						I specialize in <strong>Full-Stack Development</strong>, working with modern technologies 
						like React, Next.js, and Go. I'm passionate about solving complex problems and continuously 
						learning new technologies.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
