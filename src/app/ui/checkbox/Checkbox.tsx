import React from 'react'
import styles from './Checkbox.module.scss'

export const CheckBox: React.FC = () => {
	return (
		<label className={styles.checkboxContainer}>
			<input type="checkbox" />
			<span className={styles.checkmark} />
		</label>
	)
}
