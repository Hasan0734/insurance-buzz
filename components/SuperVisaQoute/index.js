import React, { useState } from "react";
import { Formik } from "formik";
import { DatePicker, InputNumber, Select, Radio } from "antd";
import dayjs from "dayjs";

import DateOfBirth from "./DateOfBirth";

const dateFormat = "DD/MM/YYYY";
const SuperVisaQoute = () => {
  const [value, setValue] = useState("NO");

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const days = dayjs( "29/10/2024", dateFormat).diff(dayjs( "30/10/2023", dateFormat), "day");

  console.log(days)

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-sm mb-3">
        Get Supervisa Insurance quotes. Enter details and click the Get Quote
        button.
      </p>
      <Formik
        initialValues={{
          dob: "",
          age: "",
          start_date: new Date(),
          end_date: '',
          days: 365,
          coverage: "100000",
          pemc: "NO",
          type: "SINGLE",
          double_dob: "",
          double_age: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="py-2">
                <label>What type of policy do you want?</label>
              </div>
              <Radio.Group
                onChange={(e) => setFieldValue("type", e.target.value)}
                value={values.type}
              >
                <Radio value={"SINGLE"}>Single Coverage</Radio>
                <Radio value={"DOUBLE"}>Double Coverage</Radio>
              </Radio.Group>
            </div>

            <DateOfBirth
              value={values.dob}
              ageName={"age"}
              name="dob"
              setFieldValue={setFieldValue}
              ageValue={values.age}
            />

            {values.type === "DOUBLE" && (
              <DateOfBirth
                value={values.double_dob}
                ageName={"double_age"}
                name="double_dob"
                setFieldValue={setFieldValue}
                ageValue={values.double_age}
              />
            )}

            <div className="flex items-center gap-3">
              <div>
                <div>
                  <label htmlFor="start_date">Start Date</label>
                </div>
                <DatePicker
                  defaultValue={dayjs(values.start_date)}
                  // value={values.start_date ? dayjs(values.start_date) : '' }
                  format={dateFormat}
                  size="large"
                  className=""
                  name="start_date"
                  id="start_date"
                  placeholder="Start Date"
                  onChange={(date, dateString) => {
                    const days = dayjs( dayjs(values.start_date).add(1, "year"), dateFormat).diff(dayjs( values.start_date, dateFormat), "day")
                    console.log(dateString)
                    setFieldValue('days', days)
                    setFieldValue('end_date', dayjs(values.start_date).add(1, "year"))
                    setFieldValue("start_date", dateString)
                  }}
                />
              </div>
              <div>
                <div>
                  <label htmlFor="end_date">End Date</label>
                </div>
                <DatePicker
                  defaultValue={dayjs(values.end_date, dateFormat)}
                  format={dateFormat}
                  // value={values.end_date ?  dayjs(values.end_date) : ''}
                  size="large"
                  disabled
                  className=""
                  name="end_date"
                  id="end_date"
                  placeholder="End Date"
                  onChange={onChange}
                />
              </div>
              <span className="mt-4">or</span>
              <div>
                <div>
                  <label className="" htmlFor="days">
                    Days
                  </label>
                </div>
                <InputNumber
                  size="large"
                  value={values.days}
                  defaultValue={dayjs( "29/10/2024", dateFormat).diff(dayjs( values.start_date, dateFormat), "day")}
                  id="days"
                  name="days"
                  disabled
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="coverage">Coverage</label>
              </div>
              <Select
                size="large"
                style={{ width: 200 }}
                name="coverage"
                id="coverage"
                defaultValue="100000"
                onChange={handleChange}
                options={[
                  { value: "100000", label: "100,000 (min. requirement)" },
                  { value: "150000", label: "150,000" },
                  { value: "200000", label: "200,000" },
                  { value: "300000", label: "300,000" },
                  { value: "500000", label: "500,000" },
                  { value: "1000000", label: "1,000,000" },
                ]}
              />
            </div>
            <div>
              <div>
                <label>
                  Would you like to cover pre-existing medical conditions?
                </label>
              </div>
              <Radio.Group onChange={onChangeRadio} value={value}>
                <Radio value={"NO"}>No</Radio>
                <Radio value={"YES"}>Yes</Radio>
              </Radio.Group>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SuperVisaQoute;
