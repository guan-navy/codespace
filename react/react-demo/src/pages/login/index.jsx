import { Button,  Form, Input } from "antd";
import './index.css'
import { useNavigate as  UseNavigate } from "react-router-dom";
export default function index() {
  const navigate = UseNavigate()
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/layout")
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
     
      <Form
        name="basic"
        labelCol={{//左侧标签名占据的空间
          span: 8,
        }}
        wrapperCol={{//右侧框占据的空间
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入你的用户名!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入你的密码",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

       

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
