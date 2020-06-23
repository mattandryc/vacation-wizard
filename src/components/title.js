import React from 'react';
import { Typography } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const { Title, Link } = Typography;

const styles = {
  div: {
    textAlign: "center",
    marginBottom: "16px",
    width: "100%",
  },
  title: {
    paddingTop: "8vmin",
    marginBottom: "8px",
  },
  link: {
    fontSize: "16px",
  }
}

export default _ => (<div style={styles.div}>
  <Title style={styles.title}>Vacation Wizard</Title>
  <Link style={styles.link} href={'https://ant.design/index-cn'}>made with <AntDesignOutlined /> in Beijing</Link>
</div>);
