type THeaderItems = {
	readonly label: string,
	readonly children?: string[]
}

export const headerItems: THeaderItems[] = [
	{
		label: 'О нас',
		children: ['О 500на700', 'Команда', 'Документы', 'Стратегия', 'Устойчивое развитие']
	},
	{ label: 'Проекты', children: ['NextFrame', 'Pinterest'] },
	{ label: 'Новости' },
	{ label: 'FAQ' },
	{ label: 'Контакты' }
] as const
