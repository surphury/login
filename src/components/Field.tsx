import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import '../styles/field.scss';

const errorsMessages = {
	required: 'Campo requerido',
	minLength: 'No ha alcanzado los carácteres mínimos',
	maxLength: 'Ha excedido el máximo de carácteres',
	pattern: 'Carácteres no válidos'
};

export function Field({
	register,
	placeholder,
	type,
	errors
}: {
	register: UseFormRegisterReturn;
	placeholder?: string;
	errors?: FieldError;
	type?: string;
}) {
	return (
		<span className="field">
			<input
				className="field__input"
				type={type}
				placeholder={placeholder}
				{...register}
			/>
			{errors && (
				<span className="field__error">
					{errorsMessages[errors.type]}
				</span>
			)}
		</span>
	);
}
