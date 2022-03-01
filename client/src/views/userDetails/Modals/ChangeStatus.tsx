import { Modal, Form, Input, Button, Switch, message } from "antd";
import { useEffect } from "react";
import axios from "axios";
import { asyncWrap } from "../../../utils/utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const ChangeStatusModal = (props: any) => {
  const { visible, setVisible, userId, setUserId } = props;

  useEffect(() => {}, []);

  const submit = async (values: any) => {
    let data = {
      betActive: values.betActive,
      userid: userId,
      password: values.password,
      userActive: values.useractive,
    };
    const [err, result] = await asyncWrap(axios.post("change-status", data));
    if (err) {
      return message.error({
        content: "Something Went Wrong!",
        style: { marginTop: "5vh" },
      });
    }
    setUserId(null);
    setVisible(false);
    return message.success({
      content: "Inserted successfully",
    });
  };

  const onCancel = () => {
    setUserId(null);
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Change Status"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        <Form
          {...layout}
          name="Generate Points"
          onFinish={submit}
          initialValues={{ useractive: false, betActive: false }}
        >
          <Form.Item label="User Active" name="useractive">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" />
          </Form.Item>
          <Form.Item name="betActive" label="bet Active">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" />
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

export default ChangeStatusModal;
