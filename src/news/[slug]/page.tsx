import { Footer } from '@/app/components/footer/Footer'
import { Header } from '@/app/components/header/Header'
import fs from 'fs/promises'
import Image from 'next/image'
import path from 'path'
import styles from './NewsDetail.module.scss'


type NewsProps = {
	title: string
	description: string
	fullDescription: string
	image: string
	date: string
}


export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), 'public', 'data-from-server', 'dataFromServer.json')
	const fileData = await fs.readFile(filePath, 'utf8')
	const news = JSON.parse(fileData)

	return news.map((item: { title: string }) => ({
		slug: encodeURIComponent(item.title),
	}))
}


export default async function NewsDetail({ params }) {
	const { slug } = params

	const filePath = path.join(process.cwd(), 'public', 'data-from-server', 'dataFromServer.json')
	const fileData = await fs.readFile(filePath, 'utf8')
	const news: NewsProps[] = JSON.parse(fileData)

	const decodedSlug = decodeURIComponent(slug)
	const selected = news.find(item => item.title === decodedSlug)

	if (!selected) return <div>Новость не найдена</div>



	return (
		<div className={styles.newsDetail}>
			<Header />

			<section className={styles.newsContainer}>
				<Image unoptimized src={selected.image} alt="news" width={800} height={400} />
				<div>
					<h2>{selected.title}</h2>
					<span>{selected.date}</span>
					<p>{selected.fullDescription}</p>

					<div>
						<p>{selected.description}</p>
						<br />
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dicta soluta rem quos, distinctio similique, autem nulla quisquam ex earum, itaque accusantium hic in asperiores harum excepturi tempora minus fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dicta soluta rem quos, distinctio similique, autem nulla quisquam ex earum, itaque accusantium hic in asperiores harum excepturi tempora minus fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dicta soluta rem quos, distinctio similique, autem nulla quisquam ex earum, itaque accusantium hic in asperiores harum excepturi tempora minus fuga.
						</p>
						<br />
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dicta soluta rem quos, distinctio similique, autem nulla quisquam ex earum, itaque accusantium hic in asperiores harum excepturi tempora minus fuga.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
