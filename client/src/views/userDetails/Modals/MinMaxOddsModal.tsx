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

const MinMaxOddsModal = (props: any) => {
  const { visible, setVisible, userId, setUserId } = props;

  const submit = async (values: any) => {
    let data = {
      minOdds: values.minodd,
      maxOdds: values.maxodd,
      userid: userId,
      password: values.password,
    };
    const [err, result] = await asyncWrap(axios.post("odds", data));
    if (err) {
      return message.error({
        content: "Something Went Wrong!",
        style: { marginTop: "5vh" },
      });
    }
    setUserId(null)
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
        title="Min Max Odds"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        <Form {...layout} name="Generate Points" onFinish={submit}>
          <Form.Item
            label="Minimum Odds"
            name="minodd"
            rules={[
              {
                required: true,
                message: "Minimum odds required!",
              },
            ]}
          >
            <Input placeholder="Lay Odds" />
          </Form.Item>
          <Form.Item
            label="Maximum Odds"
            name="maxodd"
            rules={[
              {
                required: true,
                message: "Maximum odds required!",
              },
            ]}
          >
            <Input placeholder="Back Odds" />
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

export default MinMaxOddsModal;
