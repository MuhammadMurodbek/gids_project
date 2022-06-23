import { t } from 'i18next';
import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "./style.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
    // console.log(props)
    if (props.postData?.success !== '') {
      state.selectedDays = []
      // return props.setPostData({success:'', error:'', loading: false})
    }
    // return {favoritecolor: props.favcol };/
  }
  handleDayClick(day, { selected }) {
    // console.log(day);
    const selectedDays = this.state.selectedDays.concat();
    if (selected) {
      const selectedIndex = selectedDays?.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
    if (this.props.setData)
      this.props.setData(selectedDays)
  }

  render() {
    // if(this.props.postData?.success!==''){
    //   this.state.selectedDays=[]
    // }
    return (

      <div style={{ textAlign: 'center', paddingBottom:'10px' }}>
        {
          this.props.title === "no" ? null :
           <div style={{ fontWeight: 'bold', fontSize: '15px' , margin: "10px 0", transform: 'translateX(-10px)' }} className="oylikcenter">{t("ishJadvali.oylikJadvalim")}</div>
        }
        <DayPicker
          selectedDays={this.props.default ? this.props.selectedDays : this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
        <br />
        <div className='divbg'>
            <span className='divdisplay'><span className='span_sirkle'></span>&nbsp;{t("ishJadvali.ishKunlarim")} </span> 
            <span className='divdisplay'><span className='span_sirkle2'></span> &nbsp;{t("ishJadvali.bandKunlarim")} </span>
        </div>
      </div>
    );
  }
}