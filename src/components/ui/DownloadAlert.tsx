'use client'

import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { Button } from './Button'

interface Props {
	isOpen: boolean
	onClose: () => void
}

export function DownloadAlert({ isOpen, onClose }: Props) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-40 flex items-center justify-center bg-black/20'>
			<div
				ref={ref}
				className='relative z-50 mx-4 max-w-md rounded-xl border border-border-dark bg-background-dark/70 px-8 py-6 text-center backdrop-blur-md'
			>
				<Button
					size='icon'
					variant='secondary'
					icon={X}
					onClick={onClose}
					iconSize={16}
					className='absolute top-2 right-2'
				/>
				<h3 className='my-4 text-2xl font-semibold text-white'>
					Download will be available later
				</h3>
				<p className='text-lg font-medium text-gray-400'>
					We apologize, but at the moment the application is in the development
					and approval stage.
				</p>

				<Button
					label='Ok'
					size='sm'
					type='button'
					onClick={onClose}
					className='mx-auto mt-6 flex min-w-[120px] items-center justify-center'
				/>
			</div>
		</div>
	)
}
