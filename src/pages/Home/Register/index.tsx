
import { Button, Form, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import { EMAIL_REGEX } from '../../../utils/regexUtils'
import './styles.scss'

export const Register: React.FC = () => {
    const [hasError, setHasError] = useState<boolean>(true);

    const onFormFieldsChange = useCallback((changedFields: any) => {
        const formHasError = changedFields.some((field: any) => field.errors.length > 0);
        setHasError(formHasError);
    }, []);

    const onFinish = useCallback((values: any)=>{
        console.log("Register complete!");
        console.log(JSON.stringify(values));
    },[])

    return (
        <div id="Register">
            <label className="register-title">Register a account</label>
            <Form
                className="form"
                name="register"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 24}}
                style={{width: "50%"}}
                onFinish={onFinish}
                onFieldsChange={onFormFieldsChange}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {required: true, message: 'Insert a name.'},
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        {required: true, message: 'Insert a E-mail.'},
                        {pattern: EMAIL_REGEX, message: 'Invalid E-mail'}
                    ]}
                >
                    <Input placeholder="E-mail" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                            {required: true, message: 'Insert a password.'},
                            {min: 6, message: 'Invalid password.'}
                        ]}
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                            {required:true, message: 'Insert a password.'},
                            ({ getFieldValue}) => ({ validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The passwords do not match.'))
                            },}),
                        ]}
                >
                    <Input.Password placeholder="Confirm Password"/>
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{width: "100%"}}
                        type="primary"
                        htmlType="submit"
                        disabled={hasError}
                    >
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}