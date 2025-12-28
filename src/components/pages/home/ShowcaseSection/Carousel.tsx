'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import { Button } from '@/components/ui/Button'

import { IMAGES } from './images.data'

export function Carousel() {
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	const scroll = (direction: 'left' | 'right') => {
		if (!scrollContainerRef.current) return

		const container = scrollContainerRef.current
		const scrollAmount = direction === 'left' ? -400 : 400

		container.scrollBy({
			left: scrollAmount,
			behavior: 'smooth'
		})
	}

	return (
		<div className='group relative w-screen'>
			<Button
				onClick={() => scroll('left')}
				aria-label='Scroll left'
				icon={ChevronLeft}
				className='absolute top-1/2 left-4 z-10 -translate-y-1/2'
				variant='secondary'
				size='icon'
			/>

			<div
				ref={scrollContainerRef}
				className='hide-scrollbar flex w-full snap-x snap-mandatory gap-10 overflow-x-auto overflow-y-hidden px-10'
			>
				{IMAGES.map(image => (
					<div
						key={image.src}
						className='relative w-[280px] shrink-0 snap-center snap-always transition-all duration-300 hover:scale-105 sm:w-[320px]'
					>
						<Image
							src={image.src}
							alt={image.alt}
							height={757}
							width={384}
							className='h-full w-full object-cover'
						/>
					</div>
				))}
			</div>

			<Button
				onClick={() => scroll('right')}
				aria-label='Scroll right'
				icon={ChevronRight}
				className='absolute top-1/2 right-4 z-10 -translate-y-1/2'
				variant='secondary'
				size='icon'
			/>
		</div>
	)
}
