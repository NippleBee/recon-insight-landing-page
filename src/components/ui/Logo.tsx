import Image from 'next/image'
import Link from 'next/link'

interface Props {
	withText?: boolean
	size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
	sm: 24,
	md: 32,
	lg: 40
}

export function Logo({ withText = false, size = 'md' }: Props) {
	const logoSize = sizeMap[size]

	return (
		<Link
			href='/'
			className='flex items-center gap-3'
		>
			<Image
				src='/icon.png'
				width={logoSize}
				height={logoSize}
				alt='Recon Insight Logo'
				priority
			/>
			{withText && (
				<span className='font-display text-xl font-bold tracking-tight text-white'>
					Recon Insight
				</span>
			)}
		</Link>
	)
}
