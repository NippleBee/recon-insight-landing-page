import { FeaturesHeader } from './FeaturesHeader'
import { FeaturesList } from './FeaturesList'

export function FeaturesSection() {
	return (
		<section
			className='relative bg-surface-dark/50 py-24'
			id='features'
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<FeaturesHeader />
				<FeaturesList />
			</div>
		</section>
	)
}
