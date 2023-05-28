# Word Detector

This project is a React frontend component that detects occurrences of a specific word in real-time using the Web Speech API. It provides a simple interface for recording audio input from the microphone and analyzing the speech to identify instances of a target word.

## How to Run the Program

To run the program, follow these steps:

1. Open a terminal in the project directory.

2. Install the necessary dependencies by running the command:
   npm install

3. Start the application by running the command:
   npm start

4. The application should open in your default browser, and you will see the user interface.

## How It Works

The Word Detector component utilizes the Web Speech API to perform real-time speech recognition. It listens for audio input from the microphone and analyzes the captured speech to detect occurrences of a specific word.

When the application is running, you can click the "Start Recording" button to enable speech recognition. As you speak, the application will continuously process the speech and check for instances of the target word.

If the target word is detected, a message will be displayed indicating its presence. Additionally, a counter will keep track of the total number of occurrences of the target word.

To stop the recording and speech recognition, click the "Stop Recording" button.

## Customization

You can customize the target word to detect by modifying the `toDetect` field within the `AudioRecorder` component. Simply update the value of `this.toDetect` to the desired word or phrase.
