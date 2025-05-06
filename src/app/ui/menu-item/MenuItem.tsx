import { STYLES_VARIANTS } from '@/const/StylesVarians'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import styles from './MenuItem.module.scss'

type UIMenuItemProps = HTMLAttributes<HTMLDivElement> & {
	variant: STYLES_VARIANTS
	isActive: boolean
	onClick: () => void
	isNonActive?: boolean
	children: React.ReactNode
	childrenList?: string[]
}

export const MenuItem: React.FC<UIMenuItemProps> = ({
	isActive,
	isNonActive,
	variant,
	children,
	childrenList,
	onClick,
	...props
}) => {
	const baseClass =
		variant === STYLES_VARIANTS.PRIMARY
			? styles.itemPrimary
			: styles.itemSecondary

	const finalClass = [
		baseClass,
		isNonActive ? styles.isNonActive : '',
	].join(' ')

	return (
		<li onClick={onClick} className={styles.itemContainer}>
			<div>
				<span
					{...props}
					className={finalClass}
				>
					{children}
				</span>

				{variant === STYLES_VARIANTS.PRIMARY && (
					<span className={styles.iconWrapper}>
						<Image
							src="/Vector_Stroke.svg"
							alt="vector-image"
							width={10}
							height={10}
							className={[
								styles.icon,
								isActive ? styles.activeIcon : ''
							].join(' ')}
						/>
					</span>
				)}
			</div>

			{isActive && childrenList && (
				<div className={styles.dropdown}>
					<div className={styles.dropdownContainer}>
						{childrenList.map((item, idx) => (
							<span key={idx} className={[styles.dropdownItem, styles.itemSecondary].join(' ')}>{item}
							</span>
						))}
					</div>
				</div>
			)}
		</li>
	)
}
