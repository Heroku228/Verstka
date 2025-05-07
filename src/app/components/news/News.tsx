import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './News.module.scss'
import { MobileVersion } from './subcomponents/MobileVersion'


export type NewsProps = {
	title: string,
	description: string,
	image: string,
	date: string
}

export const News = () => {
	const [news, setNews] = useState<NewsProps[]>([])
	const [isMobile, setIsMobile] = useState(false)

	const router = useRouter()

	useEffect(() => {
		console.log('news :', news)
	}, [news])

	useEffect(() => {
		const fetchDataFromServer = async () => {
			const response = await fetch('/data-from-server/dataFromServer.json')
				.catch(err => console.error(err))
			if (!response) throw new Error('File not found')

			const data = await response.json()
			setNews(data)
		}
		fetchDataFromServer()
	}, [])

	useEffect(() => {
		const checkScreen = () => setIsMobile(window.innerWidth <= 768)
		checkScreen()
		window.addEventListener('resize', checkScreen)
		return () => window.removeEventListener('resize', checkScreen)
	}, [])


	return (
		<section className={styles.newsContainer}>
			{isMobile ? (
				<MobileVersion news={news} />
			) : (
				news.map((item, index) => (
					<div
						onClick={() => router.push(`/news/${encodeURIComponent(item.title)}`)}
						className={styles.itemBlock} key={index}>
						<div className={styles.imageWrapper}>
							<Image
								unoptimized
								loading={'eager'}
								src={item.image}
								alt='news-image'
								fill
							/>
						</div>
						<div>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</div>
						<span className={styles.date}>{item.date}</span>
					</div>
				))
			)}
		</section>
	)
}
