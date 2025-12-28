import { Background } from './Background'
import { DownloadHeader } from './DownloadHeader'
import { DownloadIosButton } from './DownloadIosButton'

export function DownloadSection() {
	return (
		<section
			className='relative overflow-hidden py-24'
			id='download'
		>
			<Background />
			<div className='z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8'>
				<DownloadHeader />
				<DownloadIosButton />
			</div>
		</section>
	)
}
