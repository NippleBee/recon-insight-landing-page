import type { Metadata } from 'next'

import Content from './content.mdx'

export const metadata: Metadata = {
	title: 'Terms of Service - Recon Insight'
}

export default function Page() {
	return <Content />
}
