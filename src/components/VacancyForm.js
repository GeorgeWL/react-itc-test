import React, { Component } from 'react';
import ClassNames from 'classnames'
import _ from 'lodash';
// import './css/form.sass';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import { Formik } from 'formik';
class VacancyForm extends Component {
    render(props) {
        var { data, onSubmit, className } = this.props;
        return (
            <div className={ClassNames('container', className)}>
                <FormInput
                    id={'title'}
                    label={'Job Title'}
                    placeholder={'John'}
                    value={''}
                    required
                />
                <FormInput
                    id={'location'}
                    label={'Location'}
                    placeholder={'Manchester, United Kingdom'}
                    value={''}
                    required
                />
                <FormInput
                    id={'department'}
                    label={'Department'}
                    placeholder={'Development'}
                    value={''}
                />
                <FormInput
                    id={'salary'}
                    label={'Salary'}
                    placeholder={'25,000'}
                    value={''}
                    required
                />
                <FormInput
                    id={'description'}
                    label={'Description'}
                    placeholder={'Explain the role and criteria here'}
                    value={''}
                    required
                    textarea
                />
            </div>
        )
    }
}
VacancyForm.propTypes = {
    data: PropTypes.shape(
        {
            title: PropTypes.string,
            location: PropTypes.string,
            department: PropTypes.string,
            salary: PropTypes.number,
            description: PropTypes.string.isRequired
        }
    ).isRequired,
    onSubmit: PropTypes.func.isRequired
    /*items : PropTypes.array.isRequired*/
    /*className : PropTypes.string*/
}

VacancyForm.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}

export default VacancyForm