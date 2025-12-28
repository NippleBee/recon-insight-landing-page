import { DownloadSection } from './DownloadSection/DownloadSection'
import { FeaturesSection } from './FeaturesSection/FeaturesSection'
import { HeroSection } from './HeroSection/HeroSection'
import { ShowcaseSection } from './ShowcaseSection/ShowcaseSection'

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<ShowcaseSection />
			<DownloadSection />
		</main>
	)
}
