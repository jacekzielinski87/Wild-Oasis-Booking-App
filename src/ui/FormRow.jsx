import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({label, error, children}) {
    return (
    <FormRow>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
        {error?.name?.message && <Error>{error.name.message}</Error>}
    </FormRow>
    );
}

export default FormRow
