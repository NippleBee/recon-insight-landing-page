import { Logo } from '../Logo'

import { FooterLink } from './FooterLink'

export function Footer() {
	return (
		<footer className='mt-auto border-t border-border-dark bg-background-dark py-12'>
			<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8'>
				<div className='flex items-center gap-3'>
					<Logo size='sm' />
					<span className='text-sm text-gray-400'>
						© 2026 Recon Insight. All rights reserved.
					</span>
				</div>

				<div className='flex items-center gap-6'>
					<FooterLink
						href='/legal/privacy-policy'
						label='Privacy Policy'
					/>
					<FooterLink
						href='/legal/terms-of-service'
						label='Terms of Service'
					/>
				</div>
			</div>
		</footer>
	)
}
