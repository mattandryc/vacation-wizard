import React, { useState, useRef } from "react"
import { Select, Divider, Input } from "antd"
import { FormOutlined } from "@ant-design/icons"

const { Option } = Select

const styles = {
  select: {
    width: "100%"
  },
  option: {
    fontSize: "16px",
    padding: "8px 11px"
  },
  divider: {
    margin: "4px 0"
  },
  div: {
    display: "flex",
    flexWrap: "nowrap",
    padding: 8
  },
  span: {
    flex: "none",
    padding: "10px 8px 10px 6px",
    display: "block",
    fontSize: "16px",
    transition: "color 200ms ease"
  }
}

const options = [
  "因私人事务",
  "为参加婚礼而要回家",
  "因家里有急事需要处理",
  "因要回老家过节"
]

export default function({ placeholder, form, ...otherProps }) {
  const [customOption, setCustomOption] = useState("")
  const selectEl = useRef(null)

  const handleInputChange = evt => {
    setCustomOption(evt.target.value)
  }

  const handleCustomSelect = _ => {
    if (!customOption) {
      return
    }
    form.setFieldsValue({ "reason": customOption })
    setCustomOption("")
    selectEl.current.blur()
  }

  const dynamicStyles = {
    cursor: customOption ? "pointer" : "not-allowed",
    color: customOption ? "#1890ff" : "rgba(0, 0, 0, 0.25)"
  }

  const optionInput = (menu) => (
    <div>
      {menu}
      <Divider style={styles.divider}/>
      <div style={styles.div}>
        <Input value={customOption}
               onChange={handleInputChange}
               size="large"
               style={{ flex: "auto" }}
        />
        <span
          style={{ ...styles.span, ...dynamicStyles }}
          onClick={handleCustomSelect}
        >
                    <FormOutlined/> 选择
                </span>
      </div>
    </div>
  )

  return (
    <Select
      placeholder={placeholder}
      dropdownRender={optionInput}
      ref={selectEl}
      size="large"
      style={styles.select}
      {...otherProps}
    >
      {options.map(option => <Option value={option} key={option} style={styles.option}>{option}</Option>)}
    </Select>
  )
}