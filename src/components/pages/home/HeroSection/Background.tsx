export function Background() {
	return (
		<>
			<div className='pointer-events-none absolute inset-0 z-0 bg-grid-pattern bg-size-[3rem_3rem] opacity-10' />
			<div className='pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]' />
		</>
	)
}
