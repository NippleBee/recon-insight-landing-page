import Image from 'next/image'

export function MockupImage() {
	return (
		<div className='perspective-1000 group relative w-full max-w-[500px] flex-1 lg:max-w-none'>
			<div className='absolute inset-0 scale-75 rounded-full bg-primary/30 blur-[80px] transition-transform duration-700 group-hover:scale-90' />

			<div className='relative z-10 mx-auto w-[280px] -rotate-6 transform overflow-hidden drop-shadow-2xl transition-transform duration-500 ease-out hover:rotate-0 sm:w-[320px]'>
				<Image
					src='/profile.png'
					alt='Mockup Image'
					width={280}
					height={552}
					className='h-full w-full object-cover'
				/>
			</div>
		</div>
	)
}
