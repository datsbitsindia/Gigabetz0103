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

const ExposureLimitModal = (props: any) => {
  const { visible, setVisible, userId, setUserId } = props;

  const submit = async (values: any) => {
    let data = {
      limit: values.newlimit,
      userid: userId,
      password: values.password,
    };

    const [err, result] = await asyncWrap(axios.post("/exposure-limit", data));
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
  };

  const onCancel = () => {
    setUserId(false);
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Exposure Limit"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        <Form {...layout} name="Generate Points" onFinish={submit}>
          <Form.Item label="Old Limit" name="oldlimit">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="newlimit"
            label="New Limit"
            rules={[
              {
                required: true,
                message: "New Limit required!",
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

export default ExposureLimitModal;
