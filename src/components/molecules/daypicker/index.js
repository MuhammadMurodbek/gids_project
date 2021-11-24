import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }

  handleDayClick(day, { selected }) {
    console.log(day);
    const selectedDays = this.state.selectedDays.concat();
    console.log(selectedDays);
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        {
          this.props.title === "no" ? null:<div style={{fontWeight:'bold', fontSize:'15px', margin:"10px 0", transform: 'translateX(-10px)'}}>Gid\Tarjimonning band kunlari</div>
        }
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        //   style={{backgroundColor:'red'}}
        />
      </div>
    );
  }
}