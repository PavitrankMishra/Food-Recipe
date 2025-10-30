from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
from pydub import AudioSegment
import tempfile
import os

app = Flask(__name__)
CORS(app)

@app.route("/speak", methods=["POST"])
def handle_speech():
    try:
        if "audio" not in request.files:
            return jsonify({"error": "No audio file provided"}), 400

        audio_file = request.files["audio"]

        # Save uploaded WebM file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp:
            audio_file.save(temp.name)
            webm_path = temp.name

        # Convert WebM → WAV using pydub (requires ffmpeg installed)
        wav_path = webm_path.replace(".webm", ".wav")
        AudioSegment.from_file(webm_path, format="webm").export(wav_path, format="wav")

        # Use speech recognition on the converted WAV
        recognizer = sr.Recognizer()
        with sr.AudioFile(wav_path) as source:
            audio_data = recognizer.record(source)
            text = recognizer.recognize_google(audio_data)

        # Clean up temporary files
        os.remove(webm_path)
        os.remove(wav_path)

        return jsonify({"text": text})

    except sr.UnknownValueError:
        return jsonify({"error": "Could not understand audio"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
