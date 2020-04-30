import { Modal, Button } from 'antd'
import React, { useState } from 'react'
export default ({ handleSignIn }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button
        type="link"
        style={{ color: '#3333EE' }}
        onClick={() => setVisible(true)}
      >
        SignIn
      </Button>
      <Modal
        visible={visible}
        title="Blockstack是什么?"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={[
          <Button
            type="link"
            key="login"
            style={{ color: '#3333EE' }}
            onClick={handleSignIn}
          >
            Login with BlockStack
          </Button>,
        ]}
      >
        <p>
          DLakes 基于{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blockstack.org"
          >
            Blockstack
          </a>{' '}
          基础设施构建, 提供去中心化的加密数据存储及分享。
        </p>
        <p>
          Blockstack ID
          提供了用户控制的登录和存储功能，因此你对您的身份和数据具有完全的控制权。
        </p>
      </Modal>
    </div>
  )
}
