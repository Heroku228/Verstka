import { STYLES_VARIANTS } from '@/const/StylesVarians'
import React from 'react'
import styles from './Button.module.scss'

type UIButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: STYLES_VARIANTS
}

export const Button: React.FC<UIButtonProps> = ({ variant = STYLES_VARIANTS.PRIMARY, ...props }) => {
	return <button {...props} className={
		variant === STYLES_VARIANTS.PRIMARY
			? styles.buttonPrimary
			: styles.buttonSecondary}>
	</button>
}
