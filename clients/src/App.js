import React from 'react'
import logo from './logo.svg'
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
          <button className="submit-title">submit</button>
        </div>
        <div className="settings">
          <button className="preview-test">preview</button>
          <button className="save-test">save</button>
          <button className="exit-test">exit</button>
        </div>
      </nav>
      <div className="container">
        <div className="panel-left">
          <div className="questions-preview"></div>
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
            </div>
            <div className="answer">
              <div className="answer-icon">B</div>
              <div className="answer-content">Interchange Sort</div>
            </div>
            <div className="answer">
              <div className="answer-icon">C</div>
              <div className="answer-content">Bubble Sort</div>
            </div>
            <div className="answer">
              <div className="answer-icon">D</div>
              <div className="answer-content">Shaker Sort</div>
            </div>
          </div>
        </div>
        <div className="panel-right">
          <div className="attributes"></div>
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
