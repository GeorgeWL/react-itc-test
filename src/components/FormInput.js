import React, { Component } from 'react';
import PropTypes from 'prop-types'
class FormInput extends Component {
    render(props) {
        var {
            id,
            label,
            value,
            placeholder,
            required,
            textarea,
            type,
            onChange,
            error,
            className
        } = this.props;

        return (
            <LabelWrapper
                // simple wrapper
                label={label}
                error={error}
                required={required}
                className={className}
            >
                {textarea === true ?
                    // change the input type if textarea prop is true
                    <TextAreaInput
                        name={id}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        onChange={onChange}
                    /> :
                    <BasicInput
                        name={id}
                        value={value}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        onChange={onChange}
                    />
                }
            </LabelWrapper>
        )
    }
}
FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
    textarea: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
}

FormInput.defaultProps = {
    required: false,
    textarea: false,
    value: ''
    /*onClick : () => console.warn('onClick has not been implemented')*/
}


const TextAreaInput = (props) => {
    const {
        name,
        value,
        placeholder,
        required,
        onChange
    } = props;
    return (
        <textarea
            name={name} //formik expects each field to have unique name prop
            value={value}
            placeholder={placeholder}
            required={required}
            rows={10}
            onChange={onChange} //handling onChange by passing to formik
        />
    )
}

const BasicInput = (props) => {
    const {
        name,
        value,
        placeholder,
        type,
        required,
        onChange } = props;
    return (
        <input
            name={name} //formik expects each field to have unique name prop
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange} //handling onChange by passing to formik
            min={14000}
            type={type != null ? type : 'string'}
        />
    )
}

const LabelWrapper = (props) => {
    const {
        children,
        label,
        error,
        className,
        required
    } = props;
    return (
        <div
            className={className}
        >
            <strong>{label}{required && '*'}</strong>
            {children}
            {error && <small style={{ color: 'red' }}>{error ? error : null}</small>
                // show errors under each input
            }
        </div>
    )
}

export default FormInput

