import React from 'react';
import './AudioRecorder.css';

class AudioRecorder extends React.Component {
  constructor(props) {
    super(props);

    this.recognition = null;
    this.isRecognizing = false;

    this.state = {
      recording: false,
      recognized: false,
      wordCount: 0,
    };
  }

  componentDidMount() {
    this.initializeRecognition();
  }

  initializeRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'he-IL';
    this.recognition.continuous = true;

    this.recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      console.log('Recognized transcript:', transcript);

      if (transcript.includes('לחזור')) {
        console.log('Word "לחזור" detected');
        this.setState((prevState) => ({ recognized: true, wordCount: prevState.wordCount + 1 }));
      }
    };
  };

  startRecognition = () => {
    if (!this.isRecognizing) {
      this.isRecognizing = true;
      this.recognition.start();
    }
  };

  stopRecognition = () => {
    if (this.isRecognizing) {
      this.isRecognizing = false;
      this.recognition.stop();
    }
  };

  startRecording = () => {
    this.setState({ recording: true });
    this.startRecognition();
  };

  stopRecording = () => {
    this.setState({ recording: false });
    this.stopRecognition();
  };

  render() {
    const { recording, recognized, wordCount } = this.state;

    return (
      <div className="audio-recorder">
        <button className="record-button" onClick={this.startRecording} disabled={recording}>
          Start Recording
        </button>
        <button className="stop-button" onClick={this.stopRecording} disabled={!recording}>
          Stop Recording
        </button>
        {recognized && <p className="recognized-text">Word "לחזור" detected!</p>}
        <p>Word count: {wordCount}</p>
      </div>
    );
  }
}

export default AudioRecorder;
