import { Background } from './Background'
import { MockupImage } from './MockupImage'
import { TextContent } from './TextContent'

export function HeroSection() {
	return (
		<section className='relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32'>
			<Background />
			<div className='relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-20 lg:px-8'>
				<TextContent />
				<MockupImage />
			</div>
		</section>
	)
}
