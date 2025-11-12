import { useState } from 'react';
import { SectionTitle } from '../components/section-title.component';

type GalleryItem = {
	title: string;
	category: string;
	image: string;
	images?: string[];
	description: string;
	color: string;
};

const galleryItems: GalleryItem[] = [
	// Achievement
	{
		title: 'Seeds for the Future - China',
		category: 'achievement',
		image: '/gallery/Seeds China.jpeg',
		description: 'Huawei Seeds for the Future Program in China',
		color: 'rgb(230, 50, 42, 0.5)',
	},
	{
		title: 'Seeds for the Future - TV Interview',
		category: 'achievement',
		image: '/gallery/Seeds TV.jpeg',
		description: 'TV interview about Seeds for the Future program',
		color: 'rgb(0, 237, 100, 0.7)',
	},
	{
		title: 'Seeds for the Future',
		category: 'achievement',
		image: '/gallery/Seeds.jpeg',
		description: 'Huawei Seeds for the Future Program',
		color: 'rgb(0, 160, 220, 0.6)',
	},
	{
		title: 'Bahrain Airport',
		category: 'achievement',
		image: '/gallery/bahrain airport.jpeg',
		description: 'Achievement at Bahrain International Airport',
		color: 'rgb(97, 219, 251, 0.6)',
	},
	{
		title: 'Global Village',
		category: 'achievement',
		image: '/gallery/Global Village.jpeg',
		description: 'Global Village participation',
		color: 'rgb(255, 153, 0, 0.6)',
	},
	{
		title: 'Qatar Pitch',
		category: 'achievement',
		image: '/gallery/Qatar Pitch.jpeg',
		description: 'Pitch event in Qatar',
		color: 'rgb(125, 17, 248, 0.75)',
	},
	{
		title: 'Seeds - Shenzhen',
		category: 'achievement',
		image: '/gallery/seed for the future (shenzhen).jpeg',
		description: 'Seeds for the Future program in Shenzhen',
		color: 'rgb(18, 122, 209, 0.7)',
	},
	{
		title: 'Seeds - Speaking Event',
		category: 'achievement',
		image: '/gallery/seed for the future mic.jpeg',
		description: 'Public speaking at Seeds for the Future event',
		color: 'rgb(104, 160, 99, 0.7)',
	},
	{
		title: 'Seeds - Qatar',
		category: 'achievement',
		image: '/gallery/seed for the future (Qatar).png',
		description: 'Seeds for the Future program in Qatar',
		color: 'rgb(0, 237, 100, 0.7)',
	},
	{
		title: 'Seeds - AlWatan News',
		category: 'achievement',
		image: '/gallery/seed for the future (alwatan news).png',
		description: 'Featured in AlWatan news for Seeds program',
		color: 'rgb(230, 50, 42, 0.5)',
	},
	{
		title: 'Student Council - Last Day',
		category: 'achievement',
		image: '/gallery/last day of Student Council.png',
		description: 'Last day serving in Student Council',
		color: 'rgb(97, 219, 251, 0.6)',
	},
	{
		title: 'Career Fair',
		category: 'achievement',
		image: '/gallery/career fair.png',
		description: 'Participating in university career fair',
		color: 'rgb(125, 17, 248, 0.75)',
	},
	{
		title: 'Bahrain Bourse',
		category: 'achievement',
		image: '/gallery/bahrain bourse.png',
		description: 'Visit to Bahrain Bourse',
		color: 'rgb(0, 160, 220, 0.6)',
	},
	{
		title: 'Graduation Day',
		category: 'achievement',
		image: '/gallery/Graduation day pic.jpeg',
		description: 'University graduation ceremony',
		color: 'rgb(255, 153, 0, 0.6)',
	},
	{
		title: 'Graduation Fireworks',
		category: 'achievement',
		image: '/gallery/Graduation Day fireworks.jpeg',
		description: 'Graduation day celebration with fireworks',
		color: 'rgb(18, 122, 209, 0.7)',
	},
	{
		title: 'Cloud Connect Mustaqbali',
		category: 'achievement',
		image: '/gallery/Cloud Connect Mustaqbali.jpeg',
		description: 'Cloud Connect Mustaqbali event',
		color: 'rgb(104, 160, 99, 0.7)',
	},
	{
		title: 'Lusail Stadium',
		category: 'achievement',
		image: '/gallery/lusail stadium.jpeg',
		description: 'Visit to Lusail Stadium',
		color: 'rgb(230, 50, 42, 0.5)',
	},
	// Volunteering
	{
		title: 'IEEE Day',
		category: 'volunteering',
		image: '/gallery/IEEE Day.jpeg',
		description: 'Volunteering at IEEE Day celebration',
		color: 'rgb(0, 160, 220, 0.6)',
	},
	{
		title: 'Open Day',
		category: 'volunteering',
		image: '/gallery/Open day.jpeg',
		description: 'University Open Day volunteer',
		color: 'rgb(97, 219, 251, 0.6)',
	},
	{
		title: 'Be Safe Volunteer',
		category: 'volunteering',
		image: '/gallery/Be Safe volunteer.jpeg',
		description: 'Be Safe campaign volunteer work',
		color: 'rgb(0, 237, 100, 0.7)',
	},
	{
		title: 'Breast Cancer Awareness',
		category: 'volunteering',
		image: '/gallery/breast cancer awarnees.png',
		description: 'Breast cancer awareness campaign volunteer',
		color: 'rgb(255, 153, 0, 0.6)',
	},
	{
		title: 'Bahrain International Air Show',
		category: 'volunteering',
		image: '/gallery/Bahrain International Air Show (BIAS).png',
		description: 'Volunteering at BIAS event',
		color: 'rgb(125, 17, 248, 0.75)',
	},
	// Projects
	{
		title: 'Smart Waste Management System',
		category: 'projects',
		images: [
			'/gallery/1.jpg',
			'/gallery/2.jpg',
			'/gallery/3.jpg',
			'/gallery/4.jpg',
			'/gallery/5.jpg',
			'/gallery/6.jpg',
		],
		image: '/gallery/1.jpg',
		description: 'IoT-based smart waste management system - Senior Project',
		color: 'rgb(18, 122, 209, 0.7)',
	},
];

const categories = ['all', 'achievement', 'projects', 'volunteering'];

export const Gallery = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const filteredItems =
		selectedCategory === 'all'
			? galleryItems
			: galleryItems.filter((item) => item.category === selectedCategory);

	// Keyboard navigation for carousel
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (selectedImage === null) return;
		const item = filteredItems[selectedImage];
		if (!item.images) return;

		if (e.key === 'ArrowLeft') {
			setCurrentSlideIndex((prev) =>
				prev > 0 ? prev - 1 : item.images!.length - 1
			);
		} else if (e.key === 'ArrowRight') {
			setCurrentSlideIndex((prev) =>
				prev < item.images!.length - 1 ? prev + 1 : 0
			);
		} else if (e.key === 'Escape') {
			setSelectedImage(null);
		}
	};

	return (
		<section
			className='gallery-section'
			id='gallery'
		>
			<div className='gallery-content'>
				<SectionTitle
					title='My'
					subTitle='GALLERY'
				/>
			</div>
			<div className='container'>
				{/* Category Filter */}
				<div className='gallery-filters'>
					{categories.map((category) => (
						<button
							key={category}
							className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</button>
					))}
				</div>

				{/* Gallery Grid */}
				<div className='gallery-grid'>
					{filteredItems.map((item, index) => (
						<div
							key={index}
							className='gallery-item'
							style={{
								'--gallery-clr': item.color,
							}}
							onClick={() => {
								setSelectedImage(index);
								setCurrentSlideIndex(0);
							}}
						>
							<div className='gallery-image-wrapper'>
								<img
									src={item.image}
									alt={item.title}
									onError={(e) => {
										// Fallback for missing images
										e.currentTarget.src =
											'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="20"%3E' +
											encodeURIComponent(item.title) +
											'%3C/text%3E%3C/svg%3E';
									}}
								/>
								<div className='gallery-overlay'>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<span className='category-badge'>{item.category}</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Lightbox Modal */}
				{selectedImage !== null && (
					<div
						className='gallery-modal'
						onClick={() => setSelectedImage(null)}
						onKeyDown={handleKeyDown}
						tabIndex={0}
					>
						<div
							className='modal-content'
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className='modal-close'
								onClick={() => setSelectedImage(null)}
							>
								×
							</button>
							{filteredItems[selectedImage].images ? (
								<>
									<button
										className='modal-nav modal-prev'
										onClick={() =>
											setCurrentSlideIndex((prev) =>
												prev > 0
													? prev - 1
													: filteredItems[selectedImage].images!.length - 1
											)
										}
										aria-label='Previous image'
									>
										‹
									</button>
									<img
										src={
											filteredItems[selectedImage].images![currentSlideIndex]
										}
										alt={`${filteredItems[selectedImage].title} - ${currentSlideIndex + 1}`}
										onError={(e) => {
											e.currentTarget.src =
												'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="24"%3E' +
												encodeURIComponent(
													filteredItems[selectedImage].title
												) +
												'%3C/text%3E%3C/svg%3E';
										}}
									/>
									<button
										className='modal-nav modal-next'
										onClick={() =>
											setCurrentSlideIndex((prev) =>
												prev < filteredItems[selectedImage].images!.length - 1
													? prev + 1
													: 0
											)
										}
										aria-label='Next image'
									>
										›
									</button>
									<div className='modal-slide-counter'>
										{currentSlideIndex + 1} /{' '}
										{filteredItems[selectedImage].images!.length}
									</div>
								</>
							) : (
								<img
									src={filteredItems[selectedImage].image}
									alt={filteredItems[selectedImage].title}
									onError={(e) => {
										e.currentTarget.src =
											'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="24"%3E' +
											encodeURIComponent(filteredItems[selectedImage].title) +
											'%3C/text%3E%3C/svg%3E';
									}}
								/>
							)}
							<div className='modal-info'>
								<h3>{filteredItems[selectedImage].title}</h3>
								<p>{filteredItems[selectedImage].description}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

