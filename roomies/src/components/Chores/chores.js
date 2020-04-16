import React, { Component } from "react";
import "./chores.css";
import DatePicker from "react-date-picker";

class Chores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskItems: [],
      message: "",
      roommates: ["Devin", "Erline", "Mike", "Nicole"],
      date: new Date()
    };
  }

  //onChange = date => this.setState({ date }, () => console.log(this.state));
  onChange = date => this.setState({ date }, () => console.log(this.state));

  addTask(evt) {
    evt.preventDefault();
    const { taskItems } = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = taskItems.includes(newItem);

    if (isOnTheList) {
      this.setState({
        message: "Item already on the list."
      });
    } else {
      newItem !== "" &&
        this.setState({
          //prevention of empty sring
          taskItems: [...this.state.taskItems, newItem], //this will be an object that updates the current state
          message: ""
        });
    }

    this.addForm.reset();
  }

  removeAll() {
    this.setState({
      taskItems: []
    });
  }

  render() {
    const { taskItems, message } = this.state;
    return (
      <div className="chores">
        <div className="chore-columns">
          <h2>House Tasks</h2>
          <form
            ref={input => (this.addForm = input)}
            className="form-inline"
            onSubmit={evt => {
              this.addTask(evt);
            }}
          >
            <div className="form-group">
              <label className="sr-only" htmlFor="newItemInput">
                Add New Task
              </label>
              <input
                ref={input => (this.newItem = input)}
                type="text"
                placeholder="Sweeping"
                className="form-control"
                id="newItemInput"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
          <div>
            {message !== "" && <p className="message text-danger">{message}</p>}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Leader</th>
                <th scope="col">Complete By</th>
              </tr>
            </thead>
            <tbody>
              {taskItems.map(item => {
                return (
                  <tr key={item}>
                    {/* <th scope="row">1</th> */}
                    <td>{item}</td>
                    <td>
                      <select>
                        {this.state.roommates.map(list => (
                          <option key={list} value={list}>
                            {list}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">&nbsp;</td>
                <td className="text-right">
                  <button
                    onClick={evt => this.removeAll()}
                    type="button"
                    className="btn btn-sm"
                  >
                    Clear Item List
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
export default Chores;
