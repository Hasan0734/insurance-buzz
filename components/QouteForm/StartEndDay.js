import React from "react";
import dayjs from "dayjs";

import { DatePicker, InputNumber } from "antd";

const dateFormat = "DD/MM/YYYY";

const StartEndDay = ({
  start_date,
  end_date,
  start_value,
  end_value,
  daysName,
  daysValue,
  setFieldValue,
  insuranceType,
  disabled,
  ...attribute
}) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div>
          <div>
            <label htmlFor={start_date}>Start Date</label>
          </div>
          <DatePicker
            defaultValue={dayjs(start_value, dateFormat)}
            // value={values.start_date ? dayjs(values.start_date) : '' }
            format={dateFormat}
            size="large"
            className=""
            name={start_date}
            id={start_date}
            placeholder="Start Date"
            onChange={(date, dateString) => {
              setFieldValue(start_date, dateString);

              if (insuranceType === "supervisa") {
                const days = dayjs(
                  dayjs(dateString, dateFormat).add(1, "year").add(-1, "days")
                ).diff(dayjs(dateString, dateFormat), "day");

                setFieldValue(daysName, days);

                setFieldValue(
                  end_date,
                  dayjs(dateString, dateFormat)
                    .add(1, "year")
                    .add(-1, "days")
                    .format(dateFormat)
                );
              } else {
                const days = dayjs(dayjs(end_value, dateFormat)).diff(
                  dayjs(dateString, dateFormat),
                  "day"
                );
                setFieldValue(daysName, days);
              }
            }}
            {...attribute}
          />
        </div>
        <div>
          <div>
            <label htmlFor={end_date}>End Date</label>
          </div>
          <DatePicker
            defaultValue={dayjs(end_value, dateFormat)}
            format={dateFormat}
            value={end_value ? dayjs(end_value, dateFormat) : ""}
            size="large"
            onChange={(data, dateString) => {
              if (insuranceType === "supervisa") {
              } else {
                setFieldValue(end_date, dateString);
                const days = dayjs(dayjs(dateString, dateFormat)).diff(
                  dayjs(start_value, dateFormat),
                  "day"
                );
                setFieldValue(daysName, days);
              }
            }}
            className=""
            name={end_date}
            id={end_date}
            placeholder="End Date"
            disabled={insuranceType === "supervisa"}
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
            value={daysValue}
            defaultValue={dayjs(end_value, dateFormat).diff(
              dayjs(start_value, dateFormat),
              "day"
            )}
            id={daysName}
            name={daysName}
            disabled={insuranceType === "supervisa"}
            onChange={(days) => setFieldValue(daysName, days)}
          />
        </div>
      </div>
    </>
  );
};

export default StartEndDay;
