'use client'

import { Button } from '../Button'

import { NAV_SECTIONS } from './nav-sections.data'
import { useDownloadAlertContext } from '@/context/download-alert.context'

function NavLink({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			className='text-sm font-medium text-gray-300 transition-colors hover:text-white'
		>
			{label}
		</a>
	)
}

export function NavBar() {
	const { onOpen } = useDownloadAlertContext()

	return (
		<nav className='hidden items-center gap-8 md:flex'>
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
	)
}
