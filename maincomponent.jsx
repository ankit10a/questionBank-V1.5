import React, { Component } from "react";
import { getQuestions } from "./question";
import CreateQuestionpPaper from "./createquestionpaper";
import ViewTests from "./viewquestionpaper";

class HomeScreen extends Component {
  state = {
    question: getQuestions(),
    view: -1,
    Tests: []
  };
  Submit = test => {
    this.state.Tests.push(test);
    this.setState({ view: -1 });
    console.log(test);
  };
  handleview = v => {
    this.setState({ view: v });
  };
  render() {
    const { view, question, Tests } = this.state;
    return (
      <div className="container">
        {view === -1 ? (
          <div>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleview(0)}
            >
              Question Bank
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleview(1)}
            >
              Create Question Paper
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleview(2)}
            >
              View Question Paper
            </button>
          </div>
        ) : (
          ""
        )}
        {view > -1 ? (
          <button
            className="btn btn-primary m-2"
            onClick={() => this.handleview(-1)}
          >
            Home
          </button>
        ) : (
          ""
        )}
        {view === 0 ? (
          <div>
            <h3>Question Bank</h3>
            {question.map((show, index) => (
              <div key={index}>
                Q {index + 1} . {show.qnText}
                <ul>
                  <li>A. {show.A}</li>
                  <li>B. {show.B}</li>
                  <li>C. {show.C}</li>
                  <li>D. {show.D}</li>
                  <li>Answer. {show.ans}</li>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {view === 1 ? (
          <CreateQuestionpPaper question={question} Submit={this.Submit} />
        ) : (
          ""
        )}
        {view === 2 ? (
          Tests.length === 0 ? (
            <h4>No Test is created</h4>
          ) : (
            <ViewTests Tests={Tests} />
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default HomeScreen;
