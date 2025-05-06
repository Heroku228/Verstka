import React from 'react'
import styles from './Checkbox.module.scss'

type CheckBoxProps = {
	checked: boolean
	onChange: () => void
}

export const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
	return (
		<label className={styles.checkboxContainer}>
			<input type="checkbox" checked={checked} onChange={onChange} />
			<span className={styles.checkmark} />
		</label>
	)
}
