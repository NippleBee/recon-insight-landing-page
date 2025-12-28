import { Background } from './Background'
import { Carousel } from './Carousel'
import { ShowcaseHeader } from './ShowcaseHeader'

export function ShowcaseSection() {
	return (
		<section
			className='relative overflow-hidden bg-background-dark py-24'
			id='showcase'
		>
			<Background />
			<ShowcaseHeader />
			<Carousel />
		</section>
	)
}
