from flask import Flask, jsonify
from gtts import gTTS
import speech_recognition as sr
from flask_cors import CORS
import playsound

app = Flask(__name__)
CORS(app)

latest_text = ""

def speak(text):
    tts = gTTS(text=text, lang="en")
    filename = "voice.mp3"
    tts.save(filename)
    playsound.playsound(filename)

@app.route("/speak")
def get_audio():
    global latest_text
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source)
        said = ""
        try:
            said = r.recognize_google(audio)
            print(said)
            latest_text = said
        except Exception as e:
            print("Exception: " + str(e))
    return jsonify({"status": "recorded", "text": said})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)