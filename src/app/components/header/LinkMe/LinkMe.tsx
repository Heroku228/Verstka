'use client'

import { Button } from '@/app/ui/button/Button'
import { CheckBox } from '@/app/ui/checkbox/Checkbox'
import { Input } from '@/app/ui/input/Input'
import { STYLES_VARIANTS } from '@/const/StylesVarians'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './LinkMe.module.scss'

type LinkMeProps = {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const LinkMe: React.FC<LinkMeProps> = ({ setShowModal }) => {
	const modalRef = useRef<HTMLDivElement>(null)

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [agree, setAgree] = useState(false)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const handlePhoneChange = (value: string) => {
		const numbersOnly = value.replace(/\D/g, '')
		let formatted = '+7 ('

		if (numbersOnly.length > 1) formatted += numbersOnly.slice(1, 4)
		if (numbersOnly.length >= 4) formatted += ') ' + numbersOnly.slice(4, 7)
		if (numbersOnly.length >= 7) formatted += '-' + numbersOnly.slice(7, 9)
		if (numbersOnly.length >= 9) formatted += '-' + numbersOnly.slice(9, 11)

		setPhone(formatted)
	}

	const validate = () => {
		const newErrors: { [key: string]: string } = {}
		if (!name.trim()) newErrors.name = 'Введите имя'
		if (!phone.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) newErrors.phone = 'Введите корректный номер'
		if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Некорректный email'
		if (!agree) newErrors.agree = 'Необходимо согласие'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (validate()) {
			alert('Форма успешно отправлена!')

			setName('')
			setPhone('')
			setEmail('')
			setErrors({})
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				setShowModal(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [setShowModal])

	return (
		<div ref={modalRef}>
			<form className={styles.modal} onSubmit={handleSubmit}>
				<div className={styles.modalUpPart}>
					<h2>СВЯЗАТЬСЯ С НАМИ</h2>
					<Image
						onClick={() => setShowModal(false)}
						src={'/Close.svg'}
						alt='Close icon'
						width={30}
						height={30}
					/>
				</div>

				<div className={styles.modalMain}>
					<div>
						<Input
							placeholder='Имя'
							value={name}
							type='text'
							onChange={e => setName(e.target.value)}
						/>
						{errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

						<Input
							placeholder='Телефон'
							value={phone}
							type='text'
							onChange={e => handlePhoneChange(e.target.value)}
						/>
						{errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}

						<Input
							placeholder='E-mail'
							value={email}
							type='email'
							onChange={e => setEmail(e.target.value)}
						/>
						{errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
					</div>

					<div>
						<CheckBox
							checked={agree}
							onChange={() => setAgree(prev => !prev)}
						/>
						<span>
							Я СОГЛАСЕН (-А) НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
						</span>
					</div>
					{errors.agree && <span style={{ color: 'red' }}>{errors.agree}</span>}


					<div>
						<Button variant={STYLES_VARIANTS.SECONDARY}>
							Отправить
						</Button>
					</div>
				</div>

			</form>
		</div >
	)
}
