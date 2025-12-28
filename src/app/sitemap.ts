import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://recon-insight.xyz'

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1
		},
		{
			url: `${baseUrl}/legal/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5
		},
		{
			url: `${baseUrl}/legal/terms-of-service`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5
		}
	]
}
