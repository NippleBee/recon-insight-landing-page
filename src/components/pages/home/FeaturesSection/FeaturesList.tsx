import { FeatureCard } from './FeatureCard'
import { FEATURES } from './features.data'

export function FeaturesList() {
	return (
		<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
			{FEATURES.map(feature => (
				<FeatureCard
					key={feature.title}
					{...feature}
				/>
			))}
		</div>
	)
}
