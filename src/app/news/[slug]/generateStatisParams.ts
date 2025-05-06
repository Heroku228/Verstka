import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
	const filePath = path.join(process.cwd(), 'public', 'data-from-server', 'dataFromServer.json')
	const fileData = fs.readFileSync(filePath, 'utf8')
	const news = JSON.parse(fileData)

	return news.map((item: { title: string }) => ({
		slug: encodeURIComponent(item.title),
	}))
}
