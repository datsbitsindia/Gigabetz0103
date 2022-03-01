import { Modal, Form, Input, Button, message } from "antd";
import { asyncWrap } from "../../utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const BetModal = (props: any) => {
  const { visible, setVisible, betId, fiId, itId, eventName, sportsId, odValue } =
    props;

  const [odCalcValue, setOdCalcValue] = useState<number>(0);

  const calculate = () => {
    let val = eval(odValue);
    val = val + 1;
    setOdCalcValue(val.toFixed(2));
  };

  const submit = async (values: any) => {
    if (values.amount > 0) {
      let data = {
        SportID: sportsId,
        EventName: eventName,
        FIID: fiId,
        ITID: itId,
        BetID: betId,
        ODValue: odValue,
        ODCalcValue: odCalcValue,
        BetAmount: values.amount,
        ReturnAmount: +(odCalcValue * values.amount),
      };
      console.log(data);
      const [err, result] = await asyncWrap(axios.post("add-bet", data));
      if (err) {
        return message.error({
          content: "Something Went Wrong!",
          style: { marginTop: "5vh" },
        });
      }
      //setUserId(null);
      setVisible(false);
      return message.success({
        content: "Inserted successfully",
      });
    } else {
      return message.error({
        content: "Please input amount!",
        style: { marginTop: "5vh" },
      });
    }
  };

  const onCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    calculate();
  }, []);

  return (
    <div>
      <Modal
        title="Place Bet"
        visible={visible}
        footer={null}
        destroyOnClose={true}
        onCancel={onCancel}
      >
        <Form {...layout} onFinish={submit}>
          <Form.Item
            name="amount"
            label="Bet Amount"
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

export default BetModal;
