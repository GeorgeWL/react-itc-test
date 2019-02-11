import React, { Component } from 'react';
import ClassNames from 'classnames'
import _ from 'lodash';
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
            className
        } = this.props;
        let inputProps = {
            id,
            value,
            placeholder,
            required,
            onChange
        }
        return (
            <div className={ClassNames('container', className)}>
                <LabelWrapper
                    label={label}
                    required={required}
                >
                    {textarea === true ?
                        <TextAreaInput
                            {...inputProps}
                        /> :
                        <BasicInput
                            {...inputProps}
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
    return (
        <textarea
            {...props}
        />
    )
}

const BasicInput = (props) => {
    return (
        <input
            {..._.omit(props, 'value')}
            value={typeof Number(props.value) == 'number' ? props.value.toLocaleString('en-GB') : props.value}
        />
    )
}

const LabelWrapper = (props) => {
    const { children, label, required } = props;
    return (
        <div>
            <strong>{label}{required && '*'}</strong>
            {children}
        </div>
    )
}

export default FormInput

