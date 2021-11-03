import React from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <div className="app">
      <nav className="navbar-test">
        <div className="logo">Logo</div>
        <div className="test-title">
          <div className="title">Test Title</div>
          <div className="submit-title">submit</div>
        </div>
        <div className="settings">
          <div className="preview-test">preview</div>
          <div className="save-test">save</div>
          <div className="exit-test">exit</div>
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
          <div className="question-content">Câu hỏi</div>
          <div className="question-embed">Ảnh minh họa</div>
          <div className="question-answers">
            <div className="answer">A</div>
            <div className="answer">A</div>
            <div className="answer">A</div>
            <div className="answer">A</div>
          </div>
        </div>
        <div className="panel-right">
          <div className="attributes"></div>
          <div className="quick-actions">
            <button className="delete-question">Delete</button>
            <button className="duplicate-question">Duplicate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
