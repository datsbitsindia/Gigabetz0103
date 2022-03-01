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

const CreditModal = (props: any) => {
  const { visible, setVisible, userId, setUserId } = props;

  const submit = async (values: any) => {
    console.log(userId);
    let data = {
      credit: values.newcredit,
      userid: userId,
      password: values.password,
    };
    const [err, result] = await asyncWrap(axios.post("credit", data));
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
        title="Credit"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        <Form {...layout} name="Generate Points" onFinish={submit}>
          <Form.Item label="Old Credit" name="oldcredit">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="New Credit"
            name="newcredit"
            rules={[
              {
                required: true,
                message: "New Credit is required!",
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

export default CreditModal;
