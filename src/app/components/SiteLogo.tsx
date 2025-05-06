'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'


export const SiteLogo = ({ whiteColor }: { whiteColor?: boolean }) => {
	const router = useRouter()
	const pathname = usePathname()

	const handleClickOnLogo = () => {
		if (pathname === '/') window.location.reload()
		else router.push('/')
	}

	return (
		<>
			{whiteColor ?
				<Image
					onClick={handleClickOnLogo}
					style={{ cursor: 'pointer' }}
					src={'/Vector copy.svg'}
					alt='site-logo'
					width={70}
					height={84}
				/>
				: <Image
					onClick={handleClickOnLogo}
					style={{ cursor: 'pointer' }}
					src={'/Logo.svg'}
					alt='site-logo'
					width={70}
					height={84}
				/>}
		</>
	)
}
