'use client'

import { Button } from '@/components/ui/Button'

export function TextContent() {
	return (
		<div className='flex flex-1 flex-col gap-6 text-center lg:text-left'>
			<h1 className='font-display text-5xl leading-[0.9] font-black tracking-tight uppercase sm:text-6xl lg:text-7xl'>
				Your Valorant <br />
				<span className='text-glow bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
					Assistant
				</span>
			</h1>
			<p className='mx-auto max-w-xl text-lg leading-relaxed text-gray-400 lg:mx-0'>
				Advanced mobile analytics for the Valorant. Track your rank, analyze
				matches, and improve your skills with deep data insights.
			</p>
			<div className='mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start'>
				<Button
					label='Get Started'
					onClick={() =>
						window.scrollTo({
							top: document.getElementById('download')?.offsetTop,
							behavior: 'smooth'
						})
					}
				/>
			</div>
		</div>
	)
}
