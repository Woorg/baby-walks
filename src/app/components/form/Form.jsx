'use client';

import { useState } from 'react';
import { cn } from '../../lib/utils';
import Styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

export const FormSignUp = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const { register, control, handleSubmit } = useForm();
	const registerWithMask = useHookFormMask(register);

	const data = {
		title: 'Записаться на курс',
	};

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={cn(Styles.form)}>
			<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
			<form className={cn(Styles.formObject)} onSubmit={handleSubmit(onSubmit)}>
				<div className={cn(Styles.row)}>
					<div className={cn(Styles.field, 'w-full max-w-[453px]')}>
						<label className={cn(Styles.label)}>
							<span className={cn(Styles.labelText)}>Ваше имя</span>
							<input
								className={cn(Styles.inputText)}
								{...register('name', {
									required: true,
								})}
								placeholder="Введите ваше имя"
							/>
						</label>
					</div>

					<div className={cn(Styles.field, 'w-full max-w-[453px]')}>
						<label className={cn(Styles.label)}>
							<span className={cn(Styles.labelText)}>Номер телефона *</span>
							<input
								className={cn(Styles.inputText)}
								{...registerWithMask('phone', ['+7 (___) ___-__-__', '+7 (999) 999-99-99'], {
									required: true,
								})}
								placeholder="+7 (___) ___-__-__"
							/>
						</label>
					</div>

					<div className={cn(Styles.submitW)}>
						<button type="submit" className={cn(Styles.submit, 'btn btn_big btn_full')}>
							Отправить
						</button>
						<div className={cn(Styles.note)}>
							Нажимая отправить вы соглашаетесь с политикой конфиденциальности
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
