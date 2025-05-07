'use client'

import { MenuItem } from '@/app/components/menu-item/MenuItem'
import { headerItems } from '@/const/header-items/HeaderItems'
import { STYLES_VARIANTS } from '@/const/StylesVarians'
import { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'

export const HeaderList: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	const ulRef = useRef<HTMLUListElement>(null)

	const hasActive = activeIndex !== null

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
				setActiveIndex(null)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])


	const handleClick = (index: number) => {
		setActiveIndex(prev => (prev === index ? null : index))
	}

	return (
		<ul ref={ulRef} className={styles.ul}>
			{headerItems.map((item, index) => {
				const isActive = activeIndex === index
				const isNonActive = hasActive && !isActive

				return (
					<MenuItem
						key={index}
						isActive={isActive}
						childrenList={item.children}
						isNonActive={isNonActive}
						variant={index < 2 ? STYLES_VARIANTS.PRIMARY : STYLES_VARIANTS.SECONDARY}
						onClick={() => handleClick(index)}
					>
						{item.label}
					</MenuItem>
				)
			})}
		</ul>

	)
}
