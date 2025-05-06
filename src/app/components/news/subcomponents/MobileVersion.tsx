import Image from 'next/image'
import { useState } from 'react'
import { NewsProps } from '../News'
import styles from '../News.module.scss'

type MobileVersionProps = {
	news: NewsProps[]
}

export const MobileVersion: React.FC<MobileVersionProps> = ({ news }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrev = () => {
		setCurrentIndex(prev => (prev > 0 ? prev - 1 : news.length - 1))
	}

	const handleNext = () => {
		setCurrentIndex(prev => (prev + 1) % news.length)
	}

	return (
		<>
			{news.length > 0 && (
				<div className={styles.itemBlock}>
					<div className={styles.imageWrapper}>
						<Image
							unoptimized
							src={news[currentIndex].image}
							alt='news-image'
							fill
						/>
					</div>
					<div>
						<h2>{news[currentIndex].title}</h2>
						<p>{news[currentIndex].description}</p>
					</div>
					<span className={styles.date}>{news[currentIndex].date}</span>
				</div>
			)}
			<div className={styles.arrows}>
				<Image
					unoptimized
					onClick={handlePrev}
					src={'/Type=Left.svg'}
					width={30}
					height={30}
					alt='arrow-icon'
				/>
				<Image
					unoptimized
					onClick={handleNext}
					src={'/Type=Right.svg'}
					width={30}
					height={30}
					alt='arrow-icon'
				/>
			</div>
		</>
	)
}
