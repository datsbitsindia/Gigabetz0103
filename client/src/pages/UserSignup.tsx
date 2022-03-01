import { Card, Form, Input, Button, message } from "antd";
import { asyncWrap } from "../utils/utils";
import axios from "axios";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};

const UserSignup = (props: any) => {
  const submit = async (values: any) => {
    let data = {
      fullName: values.fullName,
      email: values.email,
      mobileNumber: values.mobile,
      roleId: 3,
      userName: values.username,
      password: values.password,
    };
    const [err, result] = await asyncWrap(axios.post("signup", data));
    if (err) {
      return message.error({
        content: "Something Went Wrong!",
        style: { marginTop: "5vh" },
      });
    }
    props.history.push("/login");
    return message.success({
      content: "Inserted successfully",
    });
  };

  return (
    <div>
      <Card title="Register">
        <Form {...layout} name="Generate Points" onFinish={submit}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Full Name is required!",
              },
            ]}
          >
            <Input placeholder="Enter your fullname" />
          </Form.Item>
          <Form.Item
            label="Aadhar Number"
            name="aadharno"
            rules={[
              {
                required: true,
                message: "Aadhar Number is required!",
              },
            ]}
          >
            <Input placeholder="Enter your aadhar number" />
          </Form.Item>
          <Form.Item
            label="Pan card Number"
            name="panNumber"
            rules={[
              {
                required: true,
                message: "Pan Number is required!",
              },
            ]}
          >
            <Input placeholder="Enter your pan Card" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "email is required!",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Phone is required!",
              },
            ]}
          >
            <Input placeholder="Enter mobile Number" />
          </Form.Item>
          <Form.Item
            label="User Name"
            name="username"
            rules={[
              {
                required: true,
                message: "user name is required!",
              },
            ]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "password is required!",
              },
            ]}
          >
            <Input placeholder="Enter password" />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            label="Confirm Password"
            rules={[
              {
                required: true,
                message: "please enter same as password!",
              },
            ]}
          >
            <Input placeholder="Enter same as password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="mr-3"
              style={{ marginRight: "20px" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UserSignup;
