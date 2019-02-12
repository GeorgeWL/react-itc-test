import React, { Component } from 'react';
import ClassNames from 'classnames'
// import _ from 'lodash';
// import './css/form.sass';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import { Formik } from 'formik';

const INITIAL_VALUES = {
    title: undefined,
    location: undefined,
    department: undefined,
    salary: undefined,
    description: undefined
}
class VacancyForm extends Component {
    render(props) {
        var { onSubmit, className } = this.props;
        return (
            <Formik
                initialValues={INITIAL_VALUES}
                validate={
                    values => {
                        let errors = {}
                        if (!values.title) {
                            errors.title = 'Job Title Required'
                        }

                        if (!values.location) {
                            errors.location = 'Location Required'
                        }

                        if (!values.salary) {
                            errors.salary = 'Salary Required'
                        } else if (
                            typeof Number(values.salary) != 'number'
                        ) {
                            errors.salary = 'Salary Expects a Number'
                        }

                        if (!values.description) {
                            errors.description = 'Description Required'
                        }
                        return errors;
                    }
                }

                onSubmit={(values) => {
                    console.log('onSubmit',values)
                    onSubmit(values);
                }}
            >
                {
                    (
                        {
                            values,
                            errors,
                            handleChange,
                            handleSubmit }
                    ) => (
                            <form
                                onSubmit={handleSubmit}
                                className={ClassNames('form-container', className)}
                            >
                                <FormInput
                                    id={'title'}
                                    label={'Job Title'}
                                    placeholder={'John'}
                                    value={values.title}
                                    onChange={handleChange}
                                    error={errors.title}
                                    required
                                />
                                <FormInput
                                    id={'location'}
                                    label={'Location'}
                                    placeholder={'Manchester, United Kingdom'}
                                    value={values.location}
                                    onChange={handleChange}
                                    error={errors.location}
                                    required
                                />
                                <FormInput
                                    id={'department'}
                                    label={'Department'}
                                    placeholder={'Development'}
                                    value={values.department}
                                    onChange={handleChange}
                                    error={errors.department}
                                />
                                <FormInput
                                    id={'salary'}
                                    label={'Salary'}
                                    placeholder={'25,000'}
                                    value={values.salary}
                                    onChange={handleChange}
                                    error={errors.salary}
                                    required
                                />
                                <FormInput
                                    id={'description'}
                                    label={'Description'}
                                    placeholder={'Explain the role and criteria here'}
                                    value={values.description}
                                    onChange={handleChange}
                                    error={errors.description}
                                    required
                                    textarea
                                />
                                <button
                                    type="submit"
                                    disabled={errors.length > 0 ? true : false}
                                >
                                    Submit
                                </button>
                            </form>
                        )
                }
            </Formik>
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
    ),
    onSubmit: PropTypes.func.isRequired
    /*items : PropTypes.array.isRequired*/
    /*className : PropTypes.string*/
}

VacancyForm.defaultProps = {
    /*onClick : () => console.warn('onClick has not been implemented')*/
}

export default VacancyForm