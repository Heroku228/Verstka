type FAQBlockProps = {
	text: string
	description: string
	isOpen: boolean
	onToggle: () => void
}


import Image from 'next/image'
import styles from './FAQ.module.scss'


export const FAQBlock: React.FC<FAQBlockProps> = ({ text, description, isOpen, onToggle }) => {
	return (
		<div className={styles.FAQBlock} onClick={onToggle}>
			<div>
				<h2>{text}</h2>
				<Image
					src={isOpen ? '/Type=Hover.svg' : '/Type=Normal.svg'}
					alt='icon'
					width={25}
					height={25}
				/>
			</div>
			{isOpen && <p>{description}</p>}
		</div>
	)
}
