'use client';

// import { useState } from 'react';
import { cn } from '../../lib/utils';
import Styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

export const FormSignUp = ({ className }) => {
	const { register, control, handleSubmit } = useForm();
	const registerWithMask = useHookFormMask(register);

	const data = {
		title: 'Записаться на курс',
	};

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<>
			<div className={cn(Styles.form, className)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
				<form className={cn(Styles.formObject)} onSubmit={handleSubmit(onSubmit)}>
					<div className={cn(Styles.row)}>
						<div className={cn(Styles.field, 'w-full max-w-[453px]')}>
							<label className={cn(Styles.label)} htmlFor="name">
								Ваше имя
							</label>
							<input
								id="name"
								className={cn(Styles.inputText)}
								{...register('name', {
									required: true,
								})}
								placeholder="Введите ваше имя"
							/>
						</div>

						<div className={cn(Styles.field, 'w-full max-w-[453px]')}>
							<label className={cn(Styles.label)} htmlFor="phone">
								Номер телефона *
							</label>
							<input
								id="phone"
								className={cn(Styles.inputText)}
								{...registerWithMask('phone', ['+7 (___) ___-__-__', '+7 (999) 999-99-99'], {
									required: true,
								})}
								placeholder="+7 (___) ___-__-__"
							/>
						</div>

						<div className={cn(Styles.submitW)}>
							<button type="submit" className={cn(Styles.submit, 'btn btn_big btn_full')}>
								Отправить
							</button>
							<p className={cn(Styles.note)}>
								Нажимая отправить вы соглашаетесь с политикой конфиденциальности
							</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export const FormAffiliate = ({ className }) => {
	const { register, control, handleSubmit } = useForm();
	const registerWithMask = useHookFormMask(register);

	const data = {
		title: 'Стать партнёром',
	};

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<>
			<div className={cn(Styles.form, className)}>
				<h2 className={cn(Styles.title, 'title title_h2')}>{data.title}</h2>
				<form className={cn(Styles.formObject)} onSubmit={handleSubmit(onSubmit)}>
					<div className={cn(Styles.row)}>
						<div className={cn(Styles.field, 'w-full max-w-[302px]')}>
							<label className={cn(Styles.label)} htmlFor="name">
								Ваше имя
							</label>
							<input
								id="name"
								className={cn(Styles.inputText)}
								{...register('name', {
									required: true,
								})}
								placeholder="Введите ваше имя"
							/>
						</div>

						<div className={cn(Styles.field, 'w-full max-w-[302px]')}>
							<label className={cn(Styles.label)} htmlFor="phone">
								Номер телефона *
							</label>
							<input
								id="phone"
								className={cn(Styles.inputText)}
								{...registerWithMask('phone', ['+7 (___) ___-__-__', '+7 (999) 999-99-99'], {
									required: true,
								})}
								placeholder="+7 (___) ___-__-__"
							/>
						</div>

						<div className={cn(Styles.field, 'w-full max-w-[302px]')}>
							<label className={cn(Styles.label)} htmlFor="message">
								Комментарий
							</label>
							<input
								id="message"
								className={cn(Styles.inputText)}
								{...register('message', {
									required: true,
								})}
								placeholder="Введите ваш комментарий"
							/>
						</div>

						<div className={cn(Styles.submitW)}>
							<button type="submit" className={cn(Styles.submit, 'btn  btn_big btn_full')}>
								Стать партнёром
							</button>
							<small className={cn(Styles.note)}>
								Нажимая отправить вы соглашаетесь с политикой конфиденциальности
							</small>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
