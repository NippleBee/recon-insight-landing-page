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
	title: {
		default: 'Recon Insight - Advanced Valorant Mobile Analytics',
		template: '%s | Recon Insight'
	},
	description:
		'Track your Valorant rank, analyze matches, and improve your skills with deep data insights. The ultimate mobile companion for Valorant players.',
	keywords: [
		'Valorant',
		'Valorant Tracker',
		'Mobile Analytics',
		'Game Stats',
		'Match Analysis',
		'Rank Tracking',
		'Esports'
	],
	authors: [{ name: 'NippleBee', url: 'https://github.com/NippleBee' }],
	creator: 'NippleBee',
	publisher: 'NippleBee',
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_URL || 'https://recon-insight.xyz'
	),
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: '/',
		title: 'Recon Insight - Master Your Valorant Gameplay',
		description:
			'Advanced mobile analytics for Valorant. Detailed match history, combat score analysis, and performance tracking.',
		siteName: 'Recon Insight',
		images: [
			{
				url: '/match-details-combat.png', // Fallback image from public folder
				width: 1200,
				height: 630,
				alt: 'Recon Insight App Interface'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Recon Insight - Valorant Analytics',
		description: 'Track your rank and analyze your Valorant matches on mobile.',
		images: ['/match-details-combat.png'],
		creator: '@NippleBee' // Placeholder
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico'
	}
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
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'SoftwareApplication',
							name: 'Recon Insight',
							applicationCategory: 'GameApplication',
							operatingSystem: 'iOS, Android',
							offers: {
								'@type': 'Offer',
								price: '0',
								priceCurrency: 'USD'
							},
							description:
								'Advanced mobile analytics for Valorant. Track your rank, analyze matches, and improve your skills with deep data insights.',
							aggregateRating: {
								'@type': 'AggregateRating',
								ratingValue: '4.8',
								ratingCount: '100'
							}
						})
					}}
				/>
				<DownloadAlertProvider>
					<Header />
					{children}
					<Footer />
				</DownloadAlertProvider>
			</body>
		</html>
	)
}
