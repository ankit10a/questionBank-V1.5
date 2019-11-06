import React, { Component } from "react";

class ViewTests extends Component {
  state = {
    Tests: this.props.Tests,
    Choose: "",
    ques: []
  };
  handlechange = ({ currentTarget: input }) => {
    let ques = [...this.state.Tests[input.value].quesSelect].filter(
      n => n.select === true
    );

    console.log(ques);
    this.setState({ ques, Choose: this.state.Tests[input.value].Testname });
  };
  render() {
    const { Tests, Choose, ques } = this.state;
    return (
      <div className="container">
        <select className="form-control" onChange={this.handlechange}>
          <option disabled selected={!Choose}>
            ChoosePaper
          </option>
          {Tests.map((nm, index) => (
            <option key={index} value={index}>
              {nm.Testname}
            </option>
          ))}
        </select>
        {ques.length === 0 ? (
          ""
        ) : (
          <div>
            <h3>Question Paper</h3>
            <h4>Name : {Choose}</h4>
            <ul>
              {ques.map((q, index) => (
                <li>
                  Q {index + 1}. {q.qnText}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default ViewTests;
