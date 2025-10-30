from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
import os

app = Flask(__name__)
CORS(app)

@app.route("/speak", methods=["POST"])
def handle_speech():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file found"}), 400

    audio_file = request.files["audio"]
    temp_path = "temp_audio.wav"
    audio_file.save(temp_path)

    recognizer = sr.Recognizer()
    with sr.AudioFile(temp_path) as source:
        audio_data = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio_data)
        except sr.UnknownValueError:
            text = "Sorry, I couldn't understand the audio."
        except sr.RequestError:
            text = "Error: Could not request results from Google Speech Recognition service."

    os.remove(temp_path)
    return jsonify({"text": text})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
