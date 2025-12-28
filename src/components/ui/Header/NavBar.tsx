'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../Button'

import { NAV_SECTIONS } from './nav-sections.data'
import { useDownloadAlertContext } from '@/context/download-alert.context'

function NavLink({
	href,
	label,
	onClick
}: {
	href: string
	label: string
	onClick?: () => void
}) {
	return (
		<a
			href={href}
			className='text-sm font-medium text-gray-300 transition-colors hover:text-white'
			onClick={onClick}
		>
			{label}
		</a>
	)
}

export function NavBar() {
	const { onOpen } = useDownloadAlertContext()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<nav className='hidden items-center justify-end gap-8 md:flex'>
				{NAV_SECTIONS.map(({ href, label }) => (
					<NavLink
						key={href}
						href={href}
						label={label}
					/>
				))}
				<Button
					label='Download App'
					variant='primary'
					size='sm'
					type='button'
					onClick={onOpen}
				/>
			</nav>

			<div className='flex items-center justify-end md:hidden'>
				<Button
					variant='secondary'
					size='icon'
					icon={isOpen ? X : Menu}
					onClick={() => setIsOpen(!isOpen)}
				/>
			</div>

			{isOpen && (
				<div className='z-50 col-span-2 flex flex-col p-4'>
					<nav className='flex flex-col gap-6 px-2'>
						{NAV_SECTIONS.map(({ href, label }) => (
							<NavLink
								key={href}
								href={href}
								label={label}
								onClick={() => setIsOpen(false)}
							/>
						))}
						<Button
							label='Download App'
							variant='primary'
							size='sm'
							type='button'
							onClick={() => {
								onOpen()
								setIsOpen(false)
							}}
						/>
					</nav>
				</div>
			)}
		</>
	)
}
