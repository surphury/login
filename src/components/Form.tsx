import { Field } from './';
import { useForm } from 'react-hook-form';
import '../styles/form.scss';

type form = {
	username: string;
	password: string;
};

const onSubmit = (data: form) => {
	console.log(data);
};

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<form>({ mode: 'onChange' });

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<h1 className="form__title">Login</h1>
			<Field
				register={register('username', {
					minLength: 10,
					maxLength: 40,
					required: true
				})}
				placeholder="Username "
				errors={errors.username}
			/>
			<Field
				type="password"
				register={register('password', {
					required: true,
					maxLength: 40
				})}
				placeholder="Password"
				errors={errors.password}
			/>
			<button type="submit">Send</button>
		</form>
	);
}
