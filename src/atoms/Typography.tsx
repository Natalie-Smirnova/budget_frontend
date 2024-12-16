import React from 'react';
import { Typography, TypographyProps as AntdTypographyProps } from 'antd';


const { Title } = Typography;

type TypographyProps = {
    label: string;
} & AntdTypographyProps;

export const СTypography : React.FC<TypographyProps> = ({label, ...rest}) => (
    <>
        <Title {...rest}>{label}</Title>
    </>
);

