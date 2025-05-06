'use client'

import { FAQ } from './components/FAQ/FAQ'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { News } from './components/news/News'

export default function Home() {
	return (
		<div id='root'>
			<Header />
			<News />
			<FAQ />
			<Footer />
		</div>
	)
}
