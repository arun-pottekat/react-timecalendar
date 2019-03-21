import React from 'react';
import ReactDOM from 'react-dom';
import TimeCalendar from './TimeCalendar';
import dateFns from "date-fns";

function logging(day) {
  console.log(day)
}
function loggingTime(time) {
  console.log(time);
  console.log(dateFns.format(time, "YY-MM-DD-mm"))
}
// Convert to class and test below
// handleTimeClick(time) {
//   if(this.state.startTime == ''){
//     this.setState({
//       startTime: time
//     });
//   }
//   else if (!dateFns.isSameDay(this.state.startTime, time)){
//     this.setState({
//       startTime: '',
//       endTime: ''
//     });
//   }
//   else if (time<this.state.startTime) {
//     this.setState({
//       startTime: '',
//       endTime: ''
//     });
//   }
//   else{
//     this.setState({
//       endTime: time
//     });
//   }
// };
const divStyle = window.innerWidth > 1023 ? {width:'40%'} : {width:'100%'};
const openHours = [
  [9.5, 15],
  [9, 23.5],
  [8, 16],
  [8.5, 18],
  [10, 10],
  [0, 0],
  [9, 17]
];
// let bookings = [
//  'Thu Mar 07 2019 14:30:00 GMT+1100 (Australian Eastern Daylight Time)'
// ]
function Welcome() {
  return (
    <div style = {divStyle}>

    <TimeCalendar
    disableHistory
    clickable
    timeSlot = {30}
    onDateFunction = {logging}
    openHours = {openHours}
    onTimeClick = {loggingTime}
    // bookings = {bookings}
    />

    </div>
  );
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
