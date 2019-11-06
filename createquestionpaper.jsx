import React, { Component } from "react";

class CreateQuestionpPaper extends Component {
  state = {
    data: [],
    papername: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    let test = {
      Testname: this.state.papername,
      quesSelect: [...this.state.data]
    };
    this.props.Submit(test);
  };
  Initialisedata = () => {
    let data = this.props.question.map((data, index) => ({
      select: false,
      qnText: data.qnText,
      A: data.A,
      B: data.B,
      C: data.C,
      D: data.D,
      ans: data.ans
    }));
    this.setState({ data });
  };
  handleChange = ({ currentTarget: input }) => {
    let data = [...this.state.data];
    let papername = this.state.papername;
    input.type === "checkbox"
      ? (data[input.id - 1].select = input.checked)
      : (papername = input.value);
    this.setState({ data, papername });
  };
  render() {
    return (
      <div>
        {this.state.data.length === 0 && this.Initialisedata()}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="quespapername">Name of QuestionPaper</label>
            <input
              id="quespapername"
              type="text"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.papername}
            />
          </div>
          {this.state.data.map((ques, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={index + 1}
                value={this.state.data.select}
                name={ques.select}
                onChange={this.handleChange}
                checked={this.state.data.select}
              />
              <label htmlFor={index + 1}>
                Q{index + 1}.{ques.qnText}
              </label>
            </div>
          ))}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateQuestionpPaper;
