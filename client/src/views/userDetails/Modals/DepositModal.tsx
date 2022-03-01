import { Modal, Form, Input, Button, message } from "antd";
import { useEffect, useState } from "react";
import { asyncWrap } from "../../../utils/utils";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const DepositModal = (props: any) => {
  const { visible, setVisible, userId, setUserId } = props;
  const [data, setData] = useState<any>();

  const getUserBalance = async () => {
    const [err, result] = await asyncWrap(axios.get(`/balance/${userId}`));
    if (err) {
      message.error({
        content: "Something went wrong",
        style: { marginTop: "5vh" },
      });
    }
    setData(result.data.data);
  };

  useEffect(() => {
    getUserBalance();
    //eslint-disable-next-line
  }, [userId]);

  const submit = async (values: any) => {
    let data = {
      amount: values.amount,
      remark: values.remarks,
      userid: userId,
      password: values.password,
    };
    const [err, result] = await asyncWrap(axios.post("deposit", data));
    if (err) {
      return message.error({
        content: "Something Went Wrong!",
        style: { marginTop: "5vh" },
      });
    }
    setUserId(false);
    setData(null);
    setVisible(false);
    return message.success({
      content: "Inserted successfully",
    });
  };

  const onCancel = () => {
    setUserId(null);
    setData(null);
    setVisible(false);
  };

  return (
    <div>
      {data && (
        <Modal
          title="Deposit"
          visible={visible}
          footer={null}
          destroyOnClose={true}
          onCancel={onCancel}
        >
          <Form {...layout} onFinish={submit}>
            <Form.Item label="Balance" name="balance">
              <Input disabled defaultValue={data[0].UserBalance} />
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Amount is required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Remarks"
              name="remarks"
              rules={[
                {
                  required: true,
                  message: "Remark is required!",
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
      )}
    </div>
  );
};

export default DepositModal;
