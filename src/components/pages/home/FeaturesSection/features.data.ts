import { ChartColumnIncreasing, Map, Rows3 } from 'lucide-react'

export const FEATURES = [
	{
		icon: ChartColumnIncreasing,
		title: 'Performance Tracking',
		description:
			'Track K/D Ratio, ADR, and ACS across all matches to monitor your progression. Visualize your improvement over time with intuitive graphs.',
		color: 'primary'
	},
	{
		icon: Rows3,
		title: 'Match Analysis',
		description:
			'Review past matches, round details, and agent performance to find areas for improvement. Deep dive into economy and ability usage.',
		color: 'secondary'
	},
	{
		icon: Map,
		title: 'Combat & Map Insights',
		description:
			'See weapon kills, ability casts, and map win rates to optimize your loadouts and strategies. Master every angle of the map.',
		color: 'zinc'
	}
]
