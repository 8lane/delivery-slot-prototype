import React, { useState } from "react";
import "./styles.css";
import {
  Dates,
  Date,
  Times,
  Time,
  Slots,
  Slot,
  SlotDate,
  SlotTime,
  SlotPrice,
  Day,
  Label,
  NativeRadioInput
} from "./App.styles";

import slotsMock from "./slotsMock";

export default function App() {
  const [activeRadio, setActiveRadio] = useState();
  const [activeTab, setActiveTab] = useState("tab-0");

  const handleRadioChange = (id) => {
    console.log(id);
    setActiveRadio(id);
  };

  const handleTabChange = (idx) => {
    // set the new tab
    setActiveTab(`tab-${idx}`);

    // auto focus first available slot when changing tabs on mobile
    const firstAvailableSlotToFocus = slotsMock[idx]?.slots.find(
      (slot) => slot.price
    );

    if (firstAvailableSlotToFocus) {
      setActiveRadio(firstAvailableSlotToFocus.id);
    }
  };

  const times = ["", ...slotsMock[0].slots.map((slot) => slot.time)];

  return (
    <div className="App">
      <Dates as="div" mobile>
        {slotsMock.map((slot, idx) => {
          const currentTab = `tab-${idx}`;
          return (
            <Date
              as="button"
              role="tab"
              aria-selected={activeTab === currentTab}
              aria-controls={`day-${idx}`}
              id={currentTab}
              onClick={() => handleTabChange(idx)}
            >
              {slot.date}
            </Date>
          );
        })}
      </Dates>

      <Slots>
        <Times>
          {times.map((time) => (
            <Time as="li">{time}</Time>
          ))}
        </Times>
        {slotsMock.map(({ date, slots }, idx) => {
          return (
            <Day
              key={idx}
              id={`day-${idx}`}
              role="tabpanel"
              aria-labelledby={`tab-${idx}`}
              isVisible={activeTab === `tab-${idx}`}
            >
              <Date desktop>{date}</Date>

              {slots.map((slot, index) => {
                const isChecked = slot.id === activeRadio;
                return (
                  <Slot key={slot.id}>
                    <NativeRadioInput
                      disabled={!slot.price}
                      type="radio"
                      id={slot.id}
                      value={index}
                      name="price-grid"
                      onChange={() => handleRadioChange(slot.id)}
                    />
                    <Label
                      key={index}
                      htmlFor={slot.id}
                      checked={isChecked}
                      disabled={!slot.price}
                    >
                      <Time mobile>{slot.time}</Time>
                      <span>
                        {slot.price ? (
                          <>
                            <SlotDate screenReader>{date}</SlotDate>
                            <SlotTime screenReader>{slot.time}</SlotTime>
                            <SlotPrice>£{slot.price}</SlotPrice>
                          </>
                        ) : (
                          "Unavailable"
                        )}
                      </span>
                    </Label>
                  </Slot>
                );
              })}
            </Day>
          );
        })}
      </Slots>
    </div>
  );
}
