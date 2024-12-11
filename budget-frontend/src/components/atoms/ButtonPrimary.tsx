import React from 'react';
import { Button } from 'antd';

type ButtonPrimaryProps = {
  text: string;
  block?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
};

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, block = false, htmlType = 'button' }) => (
  <Button block={block} type="primary" htmlType={htmlType}>
    {text}
  </Button>
);
