from flask import Flask, jsonify
from gtts import gTTS
import speech_recognition as sr
from flask_cors import CORS
import playsound

app = Flask(__name__)
CORS(app)

latest_text = ""  # store latest recognized text

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
    
# @app.route("/listen", methods=["GET"])
# def listen():
#     return jsonify({"text": latest_text})
    
# @app.route("/upload_audio", methods=["POST"])
# def upload_audio():
#     if "audio" not in request.files:
#         return jsonify({"error": "No audio file found"}), 400

#     audio = request.files["audio"]
#     save_path = os.path.join("uploads", audio.filename)
#     os.makedirs("uploads", exist_ok=True)
#     audio.save(save_path)

#     print("✅ Audio received and saved at:", save_path)
#     return jsonify({"message": "Audio uploaded successfully!", "path": save_path})