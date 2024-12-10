import React from 'react';
import { Table, TableProps } from "antd";

type CTableProps<T> = {
    dataSource: T[],
    columns: TableProps<T>['columns']
}

export const CTable = <T extends object>({ dataSource, columns, ...rest }: CTableProps<T>): React.ReactElement => {
    return <Table dataSource={dataSource} columns={columns} {...rest} />;
};