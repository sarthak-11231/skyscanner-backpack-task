import React, { useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';


const getClassName = cssModules(STYLES);
const formatDateFull = date =>
  date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

const formatMonth = date =>
  date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

const daysOfWeek = [
  { name: 'Monday', abbreviation: 'Mon' },
  { name: 'Tuesday', abbreviation: 'Tue' },
  { name: 'Wednesday', abbreviation: 'Wed' },
  { name: 'Thursday', abbreviation: 'Thu' },
  { name: 'Friday', abbreviation: 'Fri' },
  { name: 'Saturday', abbreviation: 'Sat' },
  { name: 'Sunday', abbreviation: 'Sun' },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
const [currentMonth, setCurrentMonth] = useState(new Date());

return(
  <div className={getClassName('App')}>
    <header className={getClassName('App__header')}>
      <div className={getClassName('App__header-inner')}>
        <BpkText
          tagName="h1"
          textStyle="xxl"
          className={getClassName('App__heading')}
        >
          Flight Schedule
        </BpkText>
      </div>
    </header>

    <main className={getClassName('App__main')}>
  <BpkCalendar
    id="flight-schedule-calendar"
    daysOfWeek={daysOfWeek}
    weekStartsOn={1}
    formatDateFull={formatDateFull}
    formatMonth={formatMonth}
    changeMonthLabel="Change month"
    nextMonthLabel="Next month"
    previousMonthLabel="Previous month"
    month={currentMonth}
    onMonthChange={(event, { month }) => setCurrentMonth(month)}
    onDateSelect={setSelectedDate}
    date={selectedDate}
  />

  <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
</main>
  </div>
);
};



export default App;
