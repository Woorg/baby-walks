'use client';

// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import { cn } from '../../lib/utils';
import Styles from './Form.module.css';

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
					<div className={cn(Styles.row, 'grid-cols-3')}>
						<div className={cn(Styles.field, 'col-span-3 w-full lg:col-span-1 ')}>
							<label className={cn(Styles.label)} htmlFor="nameSignUp">
								Ваше имя
							</label>
							<input
								id="nameSignUp"
								className={cn(Styles.inputText)}
								{...register('name', {
									required: true,
								})}
								placeholder="Введите ваше имя"
							/>
						</div>

						<div className={cn(Styles.field, 'col-span-3 w-full lg:col-span-1 ')}>
							<label className={cn(Styles.label)} htmlFor="phoneSignUp">
								Номер телефона *
							</label>
							<input
								id="phoneSignUp"
								className={cn(Styles.inputText)}
								{...registerWithMask('phone', ['+7 (___) ___-__-__', '+7 (999) 999-99-99'], {
									required: true,
								})}
								placeholder="+7 (___) ___-__-__"
							/>
						</div>

						<div className={cn(Styles.submitW, 'col-span-3 w-full lg:col-span-1')}>
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
					<div className={cn(Styles.row, 'grid-cols-4')}>
						<div className={cn(Styles.field, 'col-span-2 w-full lg:col-span-1')}>
							<label className={cn(Styles.label)} htmlFor="nameAffiliate">
								Ваше имя
							</label>
							<input
								id="nameAffiliate"
								className={cn(Styles.inputText)}
								{...register('name', {
									required: true,
								})}
								placeholder="Введите ваше имя"
							/>
						</div>

						<div className={cn(Styles.field, 'col-span-2 w-full lg:col-span-1')}>
							<label className={cn(Styles.label)} htmlFor="phoneAffiliate">
								Номер телефона *
							</label>
							<input
								id="phoneAffiliate"
								className={cn(Styles.inputText)}
								{...registerWithMask('phone', ['+7 (___) ___-__-__', '+7 (999) 999-99-99'], {
									required: true,
								})}
								placeholder="+7 (___) ___-__-__"
							/>
						</div>

						<div className={cn(Styles.field, 'col-span-4 w-full lg:col-span-1')}>
							<label className={cn(Styles.label)} htmlFor="messageAffiliate">
								Комментарий
							</label>
							<input
								id="messageAffiliate"
								className={cn(Styles.inputText)}
								{...register('message', {
									required: true,
								})}
								placeholder="Введите ваш комментарий"
							/>
						</div>

						<div className={cn(Styles.submitW, 'col-span-4 w-full lg:col-span-1')}>
							<button
								type="submit"
								className={cn(
									Styles.submit,
									'btn  btn_big btn_full  transition-all hover:shadow-btn',
								)}
							>
								Стать партнёром
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
