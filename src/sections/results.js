import React from "react"
import { Alert, Divider, Button } from "antd"
import { CopyOutlined, ArrowLeftOutlined } from "@ant-design/icons"

import CopyableText from "../components/copyable-text"
import LinkButton from "../components/link-button"
import AirbnbLogo from "../assets/airbnb-logo"

const styles = {
  alert: {
    fontSize: "16px",
    marginBottom: "32px"
  },
  section: {
    marginBottom: "32px",
    display: "flex",
    justifyContent: "space-between"
  }
}
const dateFormat = "M月D日"

const requestTemplate = (reason, numDays, startDate, endDate) => (
  `本人${reason}，特向您请事假${numDays}天，请假时间自${startDate.format(dateFormat)}至${endDate.format(dateFormat)}。
            恳请批准。`
)

const responseTemplate = (startDate, endDate, contactName, contactMethod) => (
  `谢谢您的来信。我从${startDate.format(dateFormat)}到${endDate.format(dateFormat)}休假，不在办公室。如果有急事请联系${contactName}（${contactMethod}）。非常感谢！`)

export default function({ form, onBack }) {

  const reason = form.getFieldValue("reason")
  const startDate = form.getFieldValue("startDate")
  const endDate = form.getFieldValue("endDate")

  const numDays = endDate.diff(startDate, "days")

  const contactName = form.getFieldValue("contactName")
  const contactMethod = form.getFieldValue("contactMethod")

  const request = requestTemplate(reason, numDays, startDate, endDate)
  const response = responseTemplate(startDate, endDate, contactName, contactMethod)

  return (
    <div className={"results"}>
      <Alert message='点击下面的段落就可以复制到剪贴板' type='info' style={styles.alert}/>
      <CopyableText title="发给老板的" text={request}/>
      <CopyableText title="设为自动回复的" text={response}/>
      <section style={styles.section}>
        <Button onClick={onBack} type='primary' size='large' icon={<ArrowLeftOutlined/>}>上一步</Button>
        <LinkButton to='https://www.airbnb.com/' className='airbnb-btn' icon={<AirbnbLogo/>}>去看爱必迎</LinkButton>
      </section>
    </div>
  )
}
