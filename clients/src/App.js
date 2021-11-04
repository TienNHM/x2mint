import React from 'react'
import './App.scss'

function App() {
  return (
    <div className="app">
      <nav className="navbar-test">
        <div className="logo">X2MINT</div>
        <div className="test-title">
          <div className="title">
            <input type="text" className="test-title-input"></input>
          </div>
          <button className="submit-title">OK</button>
        </div>
        <div className="settings">
          <button className="preview-test">preview</button>
          <button className="save-test">save</button>
          <button className="exit-test">exit</button>
        </div>
      </nav>
      <div className="container">
        <div className="panel-left">
          <div className="questions-preview">
            <div className="question-item-preview">
              <div className="question-item-preview-number">1</div>
              <div className="question-item-preview-content">Hello, Nguyễn Huỳnh Minh Tiến</div>
            </div>
            <div className="question-item-preview">
              <div className="question-item-preview-number">1</div>
              <div className="question-item-preview-content">Hello, Nguyễn Huỳnh Minh Tiến</div>
            </div>
            <div className="question-item-preview">
              <div className="question-item-preview-number">1</div>
              <div className="question-item-preview-content">Hello, Nguyễn Huỳnh Minh Tiến</div>
            </div>
            <div className="question-item-preview">
              <div className="question-item-preview-number">1</div>
              <div className="question-item-preview-content">Hello, Nguyễn Huỳnh Minh Tiến</div>
            </div>
            <div className="question-item-preview">
              <div className="question-item-preview-number">1</div>
              <div className="question-item-preview-content">Hello, Nguyễn Huỳnh Minh Tiến</div>
            </div>
            <div className="question-item-preview">
              <div className="question-item-preview-number">1</div>
              <div className="question-item-preview-content">Hello, Nguyễn Huỳnh Minh Tiến</div>
            </div>
          </div>
          <div className="question-actions">
            <button className="add-question">Add question</button>
          </div>
        </div>
        <div className="panel-center">
          <div className="question-content">Thuật toán sắp xếp nào là nhanh nhất?</div>
          <div className="question-embed">
            <img src="https://img-9gag-fun.9cache.com/photo/a9RoXWj_460s.jpg" alt="mèo"></img>
          </div>
          <div className="question-answers">
            <div className="answer">
              <div className="answer-icon">A</div>
              <div className="answer-content">Quick Sort</div>
              <div className="answer-checkbox">
                <button className="btn-checkbox" name="check-A"></button>
              </div>
            </div>
            <div className="answer">
              <div className="answer-icon">B</div>
              <div className="answer-content">Interchange Sort</div>
              <div className="answer-checkbox">
                <button className="btn-checkbox" name="check-B"></button>
              </div>
            </div>
            <div className="answer">
              <div className="answer-icon">C</div>
              <div className="answer-content">Bubble Sort</div>
              <div className="answer-checkbox">
                <button className="btn-checkbox" name="check-B"></button>
              </div>
            </div>
            <div className="answer">
              <div className="answer-icon">D</div>
              <div className="answer-content">Shaker Sort</div>
              <div className="answer-checkbox">
                <button className="btn-checkbox" name="check-B"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-right">
          <div className="attributes">
            <div className="question-type">
              <div>Question type:</div>
              <select name="type" className="select">
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
            </div>
            <div className="question-time-limit">
              <div>Time limit:</div>
              <select name="time-limit" className="select">
                <option value="10">10 giây</option>
                <option value="15">15 giây</option>
                <option value="20">20 giây</option>
                <option value="30">30 giây</option>
                <option value="60">60 giây</option>
                <option value="90">90 giây</option>
                <option value="120">120 giây</option>
              </select>
            </div>
            <div className="question-points">
              <div>Points:</div>
              <select name="points" className="select">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="question-music">
              <div>Music:</div>
            </div>
            <div className="question-answer-option">
              <div>Answer Option:</div>
            </div>
          </div>
          <div className="quick-actions">
            <button className="duplicate-question">Duplicate</button>
            <button className="delete-question">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
