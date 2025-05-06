import Image from 'next/image'
import styles from './FAQ.module.scss'

type FAQBlockProps = {
	text: string
	description: string
	isOpen: boolean
	onToggle: () => void
}


export const FAQBlock: React.FC<FAQBlockProps> = ({ text, description, isOpen, onToggle }) => {
	return (
		<div className={styles.FAQBlock} onClick={onToggle}>
			<div>
				<h2>{text}</h2>
				<Image
					unoptimized
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
