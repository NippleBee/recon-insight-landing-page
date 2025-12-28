import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://recon-insight.xyz'

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/'
		},
		sitemap: `${baseUrl}/sitemap.xml`
	}
}
