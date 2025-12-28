import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props extends DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> {
	variant?: 'primary' | 'secondary'
	icon?: LucideIcon | string
	iconPosition?: 'start' | 'end'
	label?: string
	size?: 'sm' | 'md' | 'icon'
	iconSize?: number
}

const IconComponent = ({
	icon: Icon,
	size = 'md',
	iconSize = 24
}: {
	icon?: LucideIcon | string
	size?: 'sm' | 'md' | 'icon'
	iconSize?: number
}) => {
	if (!Icon) return null

	if (typeof Icon === 'string') {
		return (
			<Image
				src={Icon}
				alt=''
				width={iconSize ? iconSize : size === 'sm' ? 20 : 24}
				height={iconSize ? iconSize : size === 'sm' ? 20 : 24}
			/>
		)
	}

	return <Icon size={iconSize ? iconSize : size === 'sm' ? 20 : 24} />
}

export function Button({
	variant = 'primary',
	icon: Icon,
	iconPosition = 'start',
	label,
	size = 'md',
	disabled,
	iconSize,
	...props
}: Props) {
	const className = clsx(
		'flex items-center gap-2 rounded-lg font-bold transition-all text-white cursor-pointer',
		variant === 'primary'
			? 'bg-primary hover:bg-purple-600 glow glow-hover'
			: 'bg-surface-dark border border-border-dark hover:border-gray-500',
		size === 'icon'
			? 'p-1'
			: size === 'sm'
				? 'px-5 py-2 text-sm'
				: 'px-6 py-3.5 text-base',
		disabled && 'cursor-not-allowed opacity-50',
		props.className
	)
	return (
		<button
			{...props}
			className={className}
		>
			{iconPosition === 'start' && (
				<IconComponent
					icon={Icon}
					size={size}
					iconSize={iconSize}
				/>
			)}
			{label}
			{iconPosition === 'end' && (
				<IconComponent
					icon={Icon}
					size={size}
					iconSize={iconSize}
				/>
			)}
		</button>
	)
}
