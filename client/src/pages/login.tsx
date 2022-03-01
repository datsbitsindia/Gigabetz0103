import { Form, Input, Button, message, Card, Row, Col } from "antd";
import axios from "axios";
import { asyncWrap } from "../utils/utils";
import { useAuth } from "../context/auth-context";

const Login = (props: any) => {
  const { setUser } = useAuth();

  const onFinish = async (values: any) => {
    const { username, password } = values;
    const [err, result] = await asyncWrap(
      axios.post("login", { userName: username, password: password })
    );
    if (err) {
      message.error({
        content: "Something went wrong",
        style: { marginTop: "5vh" },
      });
    } else {
      let data = { ...result.data.data, userName: username };
      if (setUser) setUser(data);
      props.history.push("/admin/user-list");
      message.success({
        content: result.data.message,
        style: { marginTop: "5vh" },
      });
    }
  };

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "250px",
      }}
    >
      <Col md={18}>
        <Card title="GigaBetz">
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
