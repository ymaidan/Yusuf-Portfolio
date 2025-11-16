import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<div className='floating-buttons-header'>
				<FloatingButton
					label='All'
					className='filter-btn'
					href='/#'
				/>
				<FloatingButton
					label='Tech'
					className='filter-btn'
					href='/#tech-stack'
				/>
				<FloatingButton
					label='Projects'
					className='filter-btn'
					href='/#projects'
				/>
				<FloatingButton
					label='About Me'
					className='filter-btn'
					href='/#about-me'
				/>
				<FloatingButton
					label='Gallery'
					className='filter-btn'
					href='/#gallery'
				/>
			</div>
			<p>Hi, I am</p>
			<TextHover
				text='YUSUF-MAIDAN'
				className='name'
			/>
			<p>Informatics Engineer</p>
			<p className='subtitle'>
				Cloud Practitioner / ICT Ambassador / Network Engineer / Full-Stack
				Developer
			</p>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/ymaidan'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/informatics-engineer/'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='https://www.instagram.com/yousif.maidan/'
					color='rgb(225, 48, 108, 0.6)'
					icon={<FaInstagram color='rgb(225, 48, 108)' />}
					aria-label='instagram'
				/>
				<GlowLink
					href='mailto:yousifmaidan62@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
