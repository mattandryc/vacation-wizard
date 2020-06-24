import React from 'react';
import { Form, Divider, Button } from 'antd';
import { TeamOutlined, MailOutlined, ArrowRightOutlined } from '@ant-design/icons';

import Input from '../components/input';
import Select from '../components/select';
import RangePicker from '../components/range-picker';
import DatePicker from '../components/date-picker';

const styles = {
    icon: {
        color: "rgba(0, 0, 0, 0.25)",
    }
}

const shouldUpdate = (prev, current) => {
    return (prev.startDate !== current.startDate || prev.endDate !== current.endDate);
};

const FormItem = ({ name, message, children, ...otherProps }) => {

    return (
        <Form.Item
            name={name}
            gutter={[0, 40]}
            rules={[{ required: true, message }]}
            {...otherProps}
        >
            {children}
        </Form.Item>
    )
}

export default function ({ form, onFinish, onRangeChange, onDateChange }) {

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="form"
        >
            <Divider>请假基本信息</Divider>
            <FormItem name="reason" message="必须选择请假原因">
                <Select
                    placeholder="请选择请假原因"
                    form={form}
                />
            </FormItem>
            <FormItem
                name="range"
                message="必须选择请假日期"
                className="range-picker"
            >
                <RangePicker
                    onChange={onRangeChange}
                    placeholder={['开始日期', '结束日期']}
                />
            </FormItem>
            <Form.Item
                noStyle
                shouldUpdate={shouldUpdate}
            >
                {({ getFieldValue }) => (<FormItem
                    name="startDate"
                    message="必须选择假期开始日期"
                    className="date-picker"
                >
                    <DatePicker
                        variant="startDate"
                        endDate={getFieldValue("endDate")}
                        placeholder="假期开始日期"
                        onDateChange={onDateChange}
                    />
                </FormItem>)}
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={shouldUpdate}
            >
                {({ getFieldValue }) => {
                    return (
                        <FormItem
                            message="必须选择假期结束日期"
                            className="date-picker"
                            name="endDate"
                        >
                            <DatePicker
                                variant="endDate"
                                startDate={getFieldValue("startDate")}
                                placeholder="假期开始日期"
                                onDateChange={onDateChange}
                            />
                        </FormItem>
                    );
                }}
            </Form.Item>
            <Divider>接班人基本信息</Divider>
            <FormItem
                name="contactName"
                message="接班人姓名必须填">
                <Input
                    placeholder="请输入接班人的姓名"
                    icon={<TeamOutlined style={styles.icon}/>}/>
            </FormItem>

            <FormItem name="contactMethod"
                      message="接班人的联系方式必须填">
                <Input
                    placeholder="请输入接班人的联系方式"
                    icon={<MailOutlined style={styles.icon}/>}/>
            </FormItem>
            <div style={{ textAlign: "right", width: "100%", marginBottom: "40px"}}>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large">下一步 <ArrowRightOutlined/></Button>
            </div>
        </Form>
    );
}
