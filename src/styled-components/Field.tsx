import styled from 'styled-components';

export const StyledField = styled.span`
	position: relative;
	display: inline-grid;
	grid-template-rows: auto 1rem;
	& .error {
		position: absolute;
		font-size: 0.7rem;
		color: var(--error);
		bottom: 0;
	}

	& .input {
		border: 0.1ch solid var(--primary);
		font-size: 0.875rem;
		padding: 1em;
		border-radius: 1ch;
	}
`;
