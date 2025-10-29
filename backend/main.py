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
    said = "" 

    try:
        with sr.Microphone(device_index=1) as source:
            r.pause_threshold = 1
            audio = r.listen(source)

        query = r.recognize_google(audio, language='en-in')
        print("🗣️ User said:", query)
        said = query
        latest_text = said

    except sr.UnknownValueError:
        print("⚠️ Could not understand audio")
        said = "Could not understand audio"
    except sr.RequestError as e:
        print(f"⚠️ Could not request results; {e}")
        said = "Speech recognition service error"
    except Exception as e:
        print(f"❌ Exception: {e}")
        said = "Error recognizing speech"

    return jsonify({"status": "recorded", "text": said})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)