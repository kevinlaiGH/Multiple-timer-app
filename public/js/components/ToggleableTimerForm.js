import React, { Component } from "react";

class ToggleableTimerForm extends Component {
  render() {
    this.props.isOpen ? (
      <TimerForm />
    ) : (
      <div className="ui basic content center aligned segment">
        <button className="ui basic button ico" />
        <i className="plus icon" />
      </div>
    );
  }
}

export default ToggleableTimerForm;
