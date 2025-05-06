import { HTMLAttributes } from 'react'
import styles from './Input.module.scss'

type UIInputProps = HTMLAttributes<HTMLInputElement>

export const Input: React.FC<UIInputProps> = ({ ...props }) => {
	return <input className={styles.input} {...props} />
}
