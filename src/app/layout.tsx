import type { Metadata } from 'next'
import { Noto_Sans, Space_Grotesk } from 'next/font/google'

import { Footer } from '@/components/ui/Footer/Footer'
import { Header } from '@/components/ui/Header/Header'

import './globals.css'
import { DownloadAlertProvider } from '@/context/download-alert.context'

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin']
})

const notoSans = Noto_Sans({
	variable: '--font-noto-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Recon Insight',
	description: '-'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className='hide-scrollbar scroll-smooth'
		>
			<body
				className={`${spaceGrotesk.variable} ${notoSans.variable} flex min-h-screen flex-col overflow-x-hidden bg-background-dark font-body text-white selection:bg-primary selection:text-white`}
			>
				<DownloadAlertProvider>
					<Header />
					{children}
					<Footer />
				</DownloadAlertProvider>
			</body>
		</html>
	)
}
