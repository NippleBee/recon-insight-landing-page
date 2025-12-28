import { Logo } from '../Logo'

import { NavBar } from './NavBar'

export function Header() {
	return (
		<header className='fixed top-0 right-0 left-0 z-50 border-b border-border-dark bg-background-dark/70 backdrop-blur-sm'>
			<div className='mx-auto grid min-h-16 max-w-7xl grid-cols-[179px_1fr] px-4 py-4 sm:px-6 lg:px-8'>
				<Logo withText />
				<NavBar />
			</div>
		</header>
	)
}
