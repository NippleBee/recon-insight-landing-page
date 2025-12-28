'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

import { DownloadAlert } from '@/components/ui/DownloadAlert'

interface DownloadAlertContextValue {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const DownloadAlertContext = createContext<DownloadAlertContextValue>({
	isOpen: false,
	onOpen: () => {},
	onClose: () => {}
})

export function useDownloadAlertContext() {
	return useContext(DownloadAlertContext)
}

export function DownloadAlertProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = () => setIsOpen(true)
	const onClose = () => setIsOpen(false)
	return (
		<DownloadAlertContext.Provider
			value={{
				isOpen,
				onOpen,
				onClose
			}}
		>
			{children}
			<DownloadAlert
				isOpen={isOpen}
				onClose={onClose}
			/>
		</DownloadAlertContext.Provider>
	)
}
