import React, { Component } from 'react';
import ClassNames from 'classnames'
// import _ from 'lodash';
// import './css/form.sass';
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
            onChange,
            error,
            className
        } = this.props;


        return (
            <div className={ClassNames('container', className)}>
                <LabelWrapper
                    label={label}
                    error={error}
                    required={required}
                >
                    {textarea === true ?
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
                            placeholder={placeholder}
                            required={required}
                            onChange={onChange}
                        />
                    }
                </LabelWrapper>
            </div>
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
    const { name, value, placeholder, required, onChange } = props;
    return (
        <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    )
}

const BasicInput = (props) => {
    const { name, value, placeholder, required, onChange } = props;
    return (
        <input
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    )
}

const LabelWrapper = (props) => {
    const { 
        children, 
        label,
        error, 
        required
     } = props;
    return (
        <div>
            <strong>{label}{required && '*'}</strong>
            {children}
            <small style={{color:'red'}}>{error ? error :null}</small>
        </div>
    )
}

export default FormInput

