import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<div className='floating-buttons-top'>
				<FloatingButton
					label='About Me'
					className='first'
					href='/#about-me'
				/>
				<FloatingButton
					label='Projects'
					className='first first-right'
					href='/#projects'
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
			<div className='floating-buttons-bottom'>
				<FloatingButton
					label='Tech'
					className='sec'
					href='/#tech-stack'
				/>
				<FloatingButton
					label='Gallery'
					className='sec sec-left'
					href='/#gallery'
				/>
			</div>

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
