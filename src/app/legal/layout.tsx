import type { PropsWithChildren } from 'react'

import { ScrollReset } from '@/components/ScrollReset'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main className='mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8'>
			<ScrollReset />
			<article className='prose max-w-none prose-slate dark:prose-invert'>
				{children}
			</article>
		</main>
	)
}
