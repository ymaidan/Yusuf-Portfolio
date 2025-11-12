import { CSSProperties } from 'react';

type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
	style?: CSSProperties;
};
export const FloatingButton = ({
	label,
	className,
	href,
	style,
}: TFloatingBtn) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
			style={style}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};
