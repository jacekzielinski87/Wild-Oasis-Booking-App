

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
