import Image from 'next/image'

import { Button } from '@/app/ui/button/Button'
import styles from './Header.module.scss'
import { HeaderList } from './HeaderList'

type HeaderPopupProps = {
	setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderPopup: React.FC<HeaderPopupProps> = ({ setShowPopup }) => {
	return (
		<div className={styles.headerPopUpContainer}>
			<Image
				onClick={() => setShowPopup(false)}
				style={{ cursor: 'pointer' }}
				src={'/Type=Close.svg'}
				alt='burger-menu'
				width={30}
				height={30} />

			<div className={styles.burgerContainer}>
				<div className={styles.mobilePopUp}>
					<HeaderList />
					<Button>Связаться с нами</Button>
				</div>
			</div>
		</div>
	)
}
