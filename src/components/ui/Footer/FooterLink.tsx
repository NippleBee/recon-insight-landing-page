import Link from 'next/link'

interface Props {
	href: string
	label: string
}

export function FooterLink({ href, label }: Props) {
	return (
		<Link
			className='text-sm text-gray-500 transition-colors hover:text-white'
			href={href}
		>
			{label}
		</Link>
	)
}
