'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

export function ScrollReset() {
	const pathname = usePathname()

	useLayoutEffect(() => {
		// Force scroll to top instantly, overriding CSS smooth scroll
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		})
	}, [pathname])

	return null
}
