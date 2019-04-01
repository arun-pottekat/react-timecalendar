import React from "react";
import PropTypes from 'prop-types';
import dateFns from "date-fns";

const propTypes = {
  currentMonth: PropTypes.instanceOf(Date)
};

const defaultProps = {
  currentMonth: null,
};

export default class DayTitles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    dateFormat: "ddd"
  };
}

  componentDidMount() {
    this.setState({
      dateFormat: this.refs.dayTitles.parentNode.clientWidth > 767 ? "dddd" : "ddd"
    });
}
  render() {
    const days = [];
    let startDate = dateFns.startOfWeek(this.props.currentMonth);
    [...Array(7)].map((e, i) =>
      days.push(
        <div className="col col-center" key={i}>

          {dateFns.format(dateFns.addDays(startDate, i), this.state.dateFormat)}
        </div>
      )
    );
    return <div className="days row" ref="dayTitles">
      {days}
    </div>;
  }
}

DayTitles.propTypes = propTypes;
DayTitles.defaultProps = defaultProps;
