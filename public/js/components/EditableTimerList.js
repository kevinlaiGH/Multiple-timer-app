import React, { Component } from "react";
import { EditableTimer } from "./components/EditableTimer";

class EditableTimerList extends Component {
  render() {
    <div id="timers">
      <EditableTimer
        title="Learn Physics"
        project="hmm"
        elapsed="32434"
        runningSince={null}
        editFormOpen={false}
      />
      <EditableTimer
        title="Learn something"
        project="hmm"
        elapsed="4000"
        runningSince={null}
        editFormOpen={true}
      />
    </div>;
  }
}

export default EditableTimerList;
