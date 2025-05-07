import Image from 'next/image'

import { Button } from '@/app/ui/button/Button'
import styles from './Header.module.scss'
import { HeaderList } from './HeaderList'

type HeaderPopupProps = {
	setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderPopup: React.FC<HeaderPopupProps> = ({ setShowPopup, setShowModal }) => {
	return (
		<div className={styles.headerPopUpContainer}>
			<Image
				unoptimized
				loading={'eager'}
				onClick={() => setShowPopup(false)}
				style={{ cursor: 'pointer' }}
				src={'/Type=Close.svg'}
				alt='burger-menu'
				width={30}
				height={30} />

			<div className={styles.burgerContainer}>
				<div className={styles.mobilePopUp}>
					<HeaderList />
					<div>
						<Button onClick={() => setShowModal(true)}>
							Связаться с нами
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
