from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
import tempfile
from pydub import AudioSegment

app = Flask(__name__)
CORS(app)

@app.route("/speak", methods=["POST"])
def handle_speech():
    try:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            print("Listening...")
            audio = r.listen(source)

        text = r.recognize_google(audio)
        print("Recognized:", text)
        return jsonify({"text": text})

    except sr.UnknownValueError:
        # Google could not understand the audio
        return jsonify({"error": "Could not understand audio"}), 400

    except sr.RequestError as e:
        # Network or API issue
        return jsonify({"error": f"Speech recognition service failed: {e}"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)