import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'

interface Props {
	icon: LucideIcon
	title: string
	description: string
	color: string
}

export function FeatureCard({ icon: Icon, title, description, color }: Props) {
	return (
		<div className='group card-hover relative overflow-hidden rounded-2xl border border-border-dark bg-surface-dark p-8 transition-all duration-300 hover:border-primary'>
			<div
				className={clsx(
					'absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-bl-full bg-primary/5 transition-all',
					{
						'bg-primary/5 group-hover:bg-primary/10': color === 'primary',
						'bg-secondary/5 group-hover:bg-secondary/10': color === 'secondary',
						'bg-zinc-50/5 group-hover:bg-zinc-50/10': color === 'zinc'
					}
				)}
			/>

			<div
				className={clsx(
					'mb-6 flex size-14 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-gray-800 to-black transition-transform group-hover:scale-110',
					{
						'text-primary': color === 'primary',
						'text-secondary': color === 'secondary',
						'text-zinc-50': color === 'zinc'
					}
				)}
			>
				<Icon size={32} />
			</div>

			<h3 className='mb-3 font-display text-xl font-bold text-white'>
				{title}
			</h3>

			<p className='leading-relaxed text-gray-400'>{description}</p>
		</div>
	)
}
