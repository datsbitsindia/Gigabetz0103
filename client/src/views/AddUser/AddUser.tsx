import { Card, Form, Input, Button, message, Row, Col } from "antd";
import { asyncWrap } from "../../utils/utils";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const tailLayout = {
  wrapperCol: { offset: 12, span: 12 },
};

const AddUser = (props:any) => {
  const submit = async (values: any) => {
    let data = {
      amount: values.amount,
      remark: values.remarks,
      //userid: userId,
      password: values.password,
    };
    const [err, result] = await asyncWrap(axios.post("deposit", data));
    if (err) {
      return message.error({
        content: "Something Went Wrong!",
        style: { marginTop: "5vh" },
      });
    }
    //setUserId(false);
    //setData(null);
    //setVisible(false);
    return message.success({
      content: "Inserted successfully",
    });
  };

  return (
    <div>
      <Card title="Add User">
        <Form {...layout} name="Generate Points" onFinish={submit}>
          <div>
            <p>Personal Detail</p>
          </div>
          <Form.Item
            label="Client Name"
            name="clientName"
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
            label="Password"
            rules={[
              {
                required: true,
                message: "Transaction password is required!",
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
                message: "Transaction password is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
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
            <Input />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: "City is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Phone is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>
            <p>Account Details</p>
          </div>
          <Form.Item
            label="Account Type"
            name="accountType"
            rules={[
              {
                required: true,
                message: "Account Type is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Credit Reference"
            name="creditrefrence"
            rules={[
              {
                required: true,
                message: "Account Type is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Exposure Limit"
            name="exposurelimit"
            rules={[
              {
                required: true,
                message: "Account Type is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>
            <p>Commission Setting</p>
          </div>
          <Row>
            <Col>
              <p>Cricket</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Soccer</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Tennis</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <p>Partnership Setting</p>
          </div>
          <Row>
            <Col>
              <p>Cricket</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Soccer</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Tennis</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <p>Bet Limit Setting</p>
          </div>
          <Row>
            <Col>
              <p>Cricket</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Soccer</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Tennis</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Fancy</p>
              <Form.Item
                label="Up Line"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Down Line"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Our"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <p>Casino</p>
              <Form.Item
                label="Manimum"
                name="cricUpLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Maximum"
                name="cricDownLine"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Delay"
                name="cricOur"
                rules={[
                  {
                    required: true,
                    message: "Account Type is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <p>Min-Max Odds</p>
          </div>
          <Form.Item
            label="Maximum Odds"
            name="maximumodds"
            rules={[
              {
                required: true,
                message: "Phone is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Minimum Odds"
            name="minimumodds"
            rules={[
              {
                required: true,
                message: "Phone is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <br />
          <Form.Item
            label="Transaction Password"
            name="transactionpassword"
            rules={[
              {
                required: true,
                message: "Phone is required!",
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
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddUser;
