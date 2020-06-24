import React, { useState, useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { Form } from "antd"
import useWindowSize from "../hooks/useWindowSize"
import Layout from "../components/layout"
import Title from "../components/title"
import Inputs from "../sections/inputs"
import Results from "../sections/results"

const CSS_TRANSITION_TIMEOUT = 300

export default function() {

  const { width } = useWindowSize()
  const [activeView, setActiveView] = useState("form")
  const [viewHeight, setViewHeight] = useState(null)
  const viewRef = useRef(null)
  const [form] = Form.useForm()

  useEffect(() => {
    setViewHeight(viewRef.current?.firstChild.offsetHeight)
  }, [width])

  function calcHeight(el) {
    const height = el.offsetHeight
    setViewHeight(height)
  }

  const handleRangeChange = (range) => {
    if (range) {
      form.setFieldsValue({ startDate: range[0], endDate: range[1] })
    } else {
      form.setFieldsValue({ startDate: null, endDate: null })
    }
  }

  const handleDateChange = (key, value) => {

    const range = form.getFieldValue("range")

    if (key === "startDate") {
      form.setFieldsValue({ "range": [value, range ? range[1] : null], startDate: value })
    } else {
      form.setFieldsValue({ "range": [range ? range[0] : null, value], endDate: value })
    }
  }

  const toggleActiveView = _ => {
    setActiveView(activeView === "form" ? "results" : "form")
  }

  return (
    <Layout>
      <Title/>
      <div ref={viewRef} style={{ height: viewHeight, transition: "height 200ms ease-in" }}>
        <CSSTransition
          in={activeView === "form"}
          timeout={CSS_TRANSITION_TIMEOUT}
          classNames="form"
          onEnter={calcHeight}
          unmountOnExit>
          <Inputs form={form}
                  onRangeChange={handleRangeChange}
                  onDateChange={handleDateChange}
                  onFinish={toggleActiveView}/>
        </CSSTransition>
        <CSSTransition
          in={activeView === "results"}
          timeout={CSS_TRANSITION_TIMEOUT}
          classNames="results"
          onEnter={calcHeight}
          unmountOnExit>
          <Results form={form} onBack={toggleActiveView}/>
        </CSSTransition>
      </div>
    </Layout>
  )
}