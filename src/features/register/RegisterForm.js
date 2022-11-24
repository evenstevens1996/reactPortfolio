import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateRegisterForm } from '../../utils/validateRegisterForm';

const RegisterForm = () => {
    const[modalOpen, setModalOpen] = useState (false);
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        const register = {
            id: Date.now(),
            age: values.age,
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNum: values.phoneNum,
            email: values.email,
        };
        dispatch(register);
        setModalOpen(false);
    }

    
    return (
    <>
        <Button
            onClick={() => setModalOpen(true)}
            style={{ color: 'white', border: '2px solid black' }}
            >
            <i className='fa btn-dark fa-lg' /> Register Now!
        </Button>
        <Modal isOpen={modalOpen}>
            <ModalHeader toggle={() => setModalOpen(false)}>
                Register Now
            </ModalHeader>
            <ModalBody>
                <Formik initialValues={{
                    age: undefined,
                    firstName: '',
                    lastName: '',
                    phoneNum: '',
                    email: '',
                }}
                onSubmit={handleSubmit}
                validate={validateRegisterForm}
                >
                    <Form>
                        <FormGroup>
                            <Label htmlFor='age'>Age Group</Label>
                            <Field
                                    name='age'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>under 6</option>
                                    <option>under 8</option>
                                    <option>under 10</option>
                                    <option>under 12</option>
                                    <option>under 16</option>
                                    <option>under 18</option>
                                    <option>Adult</option>
                            </Field>
                            <ErrorMessage name="age">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='firstName' md='2'>
                                First Name
                            </Label>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className='form-control'
                            />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>  
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='lastName' md='2'>
                                Last Name
                            </Label>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control'
                            />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                    <Label htmlFor='phoneNum'>Phone</Label>
                        <Field
                            name='phoneNum'
                            placeholder='Phone'
                            className='form-control'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>
                        Email
                    </Label>
                    
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    
                </FormGroup>
                        <Button type='submit' color='dark'>
                                Submit
                        </Button>
                    </Form>
                </Formik>
            </ModalBody>
        </Modal>
    </>
  )
}

export default RegisterForm