import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Form as antd } from "antd";
import Title from '../components/title';
import Form from '../sections/form'
import Results from '../sections/results';

import '../app.css';

const styles = {

  main: {
    margin: "0 auto",
    position: "relative",
    maxWidth: "256px",
    width: "100%",
  }
}


export default function () {


  const [activeView, setActiveView] = useState("form");

  const [form] = antd.useForm();

  const handleRangeChange = range => {
    if (range) {
      form.setFieldsValue({ startDate: range[0], endDate: range[1] });
    } else {
      form.setFieldsValue({ startDate: null, endDate: null });
    }
  };

  const handleDateChange = (key, value) => {

    const range = form.getFieldValue("range");

    if (key === "startDate") {
      form.setFieldsValue({ "range": [value, range ? range[1] : null], startDate: value });
    } else {
      form.setFieldsValue({ "range": [range ? range[0] : null, value], endDate: value });
    }
  };

  const toggleActiveView = _ => {
    setActiveView(activeView === "form" ? "results" : "form");
  };

  return (
    <div style={styles.div}>
      <Title/>
      <main style={styles.main}>
        <CSSTransition
          in={activeView === "form"}
          timeout={300}
          classNames="form"
          unmountOnExit>
          <Form form={form}
                onRangeChange={handleRangeChange}
                onDateChange={handleDateChange}
                onFinish={toggleActiveView}/>
        </CSSTransition>

        <CSSTransition
          in={activeView === "results"}
          timeout={300}
          classNames="results"
          unmountOnExit>
          <Results form={form} onBack={toggleActiveView}/>
        </CSSTransition>
      </main>
    </div>
  )
}