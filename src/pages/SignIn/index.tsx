import { Button, Form, Input } from 'antd';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss'

interface ISignInData {
    user: string,
    password: string
}

export const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const onFinish = useCallback((values: ISignInData) => {
        localStorage.setItem('user', JSON.stringify(values.user));
        navigate("/home");
    },[navigate]);

    return (
        <div id="SignIn">
            <Form
                className="form"
                name="signIn"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24}}
                onFinish={onFinish}
            >
                <Form.Item
                    label="User"
                    name="user"
                    rules={[
                        {required: true, message: 'Insert a user name.'}
                    ]}
                >
                    <Input placeholder="User Name" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                            {required:true, message: 'Insert a password.'},
                            {min: 6, message: 'Invalid password.'}
                        ]}
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Button
                        style={{width: "100%"}}
                        type="primary"
                        htmlType="submit"
                    >
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}