import type { Metadata } from 'next'

import Content from './content.mdx'

export const metadata: Metadata = {
	title: 'Privacy Policy'
}

export default function Page() {
	return <Content />
}
