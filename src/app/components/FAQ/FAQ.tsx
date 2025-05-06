import { FAQItems } from '@/const/faq-items'
import { useState } from 'react'
import styles from './FAQ.module.scss'
import { FAQBlock } from './FAQBlock'


export const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const handleToggle = (index: number) => {
		setOpenIndex(prev => (prev === index ? null : index))
	}

	return (
		<section className={styles.FAQContainer}>
			<h1>FAQ</h1>
			<div>
				{FAQItems.map((item, index) => (
					<FAQBlock
						key={index}
						text={item.text}
						description={item.description}
						isOpen={openIndex === index}
						onToggle={() => handleToggle(index)}
					/>
				))}
			</div>

		</section>
	)
}
