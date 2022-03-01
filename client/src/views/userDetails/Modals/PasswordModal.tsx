import { Modal, Form, Input, Button, message } from "antd";
import { asyncWrap } from "../../../utils/utils";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const PasswordModal = (props: any) => {
  const { visible, setVisible, userId, setUserId } = props;

  const submit = async (values: any) => {
    if (values.newpassword === values.confirmpassword) {
      let data = {
        changePassword: values.newpassword,
        userid: userId,
        password: values.password,
      };
      const [err, result] = await asyncWrap(
        axios.post("change-password", data)
      );
      if (err) {
        return message.error({
          content: "Something Went Wrong!",
          style: { marginTop: "5vh" },
        });
      }
      setVisible(false);
      return message.success({
        content: "Inserted successfully",
      });
    } else {
      return message.error({
        content: "New Password and Confirm Password should be same!",
        style: { marginTop: "5vh" },
      });
    }
  };

  const onCancel = () => {
    setUserId(null);
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Password"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        <Form {...layout} name="Generate Points" onFinish={submit}>
          <Form.Item
            label="New Password"
            name="newpassword"
            rules={[
              {
                required: true,
                message: "New Password is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            label="Confirm Password"
            rules={[
              {
                required: true,
                message: "Points are required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Transaction Password"
            rules={[
              {
                required: true,
                message: "Transaction password is required!",
              },
            ]}
          >
            <Input />
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
            <Button danger onClick={onCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PasswordModal;
