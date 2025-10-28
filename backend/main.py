from flask import Flask, request, jsonify
from gtts import gTTS
import time
import os
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Voice Assistant Flask API is running!"

@app.route("/speak")
def speak():
    data = {"message": "I am getting noticed"}
    return jsonify(data)
    # data = request.get_json()
    # text = data.get("text", "")

    # if not text:
    #     return jsonify({"error": "No text provided"}), 400

    # filename = f"voice_{int(time.time() * 1000)}.mp3"
    # tts = gTTS(text=text, lang="en")
    # tts.save(filename)

    # # Return file to frontend (so it can play it)
    # with open(filename, "rb") as f:
    #     audio_data = f.read()

    # os.remove(filename)
    # return audio_data, 200, {"Content-Type": "audio/mpeg"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
