import { Modal, Form, Input, Button, Switch, message } from "antd";
import { useEffect, useState } from "react";
import { asyncWrap } from "../../../utils/utils";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const SuperMasterModal = (props: any) => {
  const { visible, setVisible, userId } = props;
  const [data, setData] = useState<any>();

  const getUserBalance = async () => {
    const [err, result] = await asyncWrap(axios.get(`/change-game/${userId}`));
    if (err) {
      message.error({
        content: "Something went wrong",
        style: { marginTop: "5vh" },
      });
    }
    setData(result.data.data[0]);
  };

  useEffect(() => {
    getUserBalance();
  }, [userId]);

  const submit = () => {};

  const onCancel = () => {
    setData(null);
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Super Master Access"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        {data && (
          <Form
            {...layout}
            name="Generate Points"
            onFinish={submit}
            initialValues={{
              cricket: data.Cricket,
              soccer: data.Soccer,
              tennis: data.Tennis,
              casino: data.Casino,
            }}
          >
            <Form.Item label="Cricket" name="cricket" valuePropName="checked">
              <Switch checkedChildren="ON" unCheckedChildren="OFF" />
            </Form.Item>
            <Form.Item label="Scocer" name="soccer" valuePropName="checked">
              <Switch checkedChildren="ON" unCheckedChildren="OFF" />
            </Form.Item>
            <Form.Item label="Tennis" name="tennis" valuePropName="checked">
              <Switch checkedChildren="ON" unCheckedChildren="OFF" />
            </Form.Item>
            <Form.Item label="Casino" name="casino" valuePropName="checked">
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
        )}
      </Modal>
    </div>
  );
};

export default SuperMasterModal;
