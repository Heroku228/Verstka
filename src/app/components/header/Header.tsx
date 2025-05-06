import Image from 'next/image'

import { Button } from '@/app/ui/button/Button'
import { useEffect, useState } from 'react'
import { SiteLogo } from '../SiteLogo'
import styles from './Header.module.scss'
import { HeaderList } from './HeaderList'
import { HeaderPopup } from './HeaderPopup'

export const Header: React.FC = () => {
	const [showPopup, setShowPopup] = useState<boolean>(false)

	// Скрываем 'body', чтобы ограничить скролл на мобилках
	useEffect(() => {
		if (showPopup) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = ''

		return () => { document.body.style.overflow = '' }
	}, [showPopup])

	return <header className={styles.header}>
		<SiteLogo />

		<div className={styles.headerRightPart}>
			<HeaderList />
			<Button>Связаться с нами</Button>
		</div>

		<div className={styles.burgerMenu}>
			{showPopup
				? <HeaderPopup setShowPopup={setShowPopup} />
				: <Image
					onClick={() => setShowPopup(true)}
					style={{ cursor: 'pointer' }}
					src={'/vector.svg'}
					alt='burger-menu'
					width={30}
					height={30}
				/>
			}
		</div>

	</header>
}
