'use client'

import Image from 'next/image'

import { useDownloadAlertContext } from '@/context/download-alert.context'

export function DownloadIosButton() {
	const { onOpen } = useDownloadAlertContext()

	return (
		<button
			onClick={onOpen}
			className='mx-auto flex w-full transform cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-black shadow-lg transition-all hover:scale-105 hover:bg-gray-200 sm:w-auto'
		>
			<Image
				src='/apple-icon.svg'
				alt='App Store Icon'
				width={28}
				height={28}
				className='mb-1'
			/>
			<div className='flex flex-col items-start justify-between leading-none'>
				<span className='text-[10px] font-medium text-gray-600 uppercase'>
					Download on the
				</span>
				<span className='text-base font-bold'>App Store</span>
			</div>
		</button>
	)
}
