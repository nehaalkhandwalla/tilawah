from flask import Flask, request, jsonify
from transformers import pipeline
import os
from flask_cors import CORS
from bidi.algorithm import get_display

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Route for the root URL
@app.route('/')
def index():
    return jsonify({'message': 'Welcome to the transcription server!'})

# Load the ASR pipeline from Hugging Face's Transformers
pipe = pipeline("automatic-speech-recognition", model="tarteel-ai/whisper-base-ar-quran")

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Save the file temporarily
    file_path = os.path.join('/tmp', file.filename)
    file.save(file_path)

    # Perform transcription using the model
    try:
        # The pipe expects a dictionary with the file path under a 'path' key
        transcription = pipe(file_path)

        print(type(transcription['text']))

        
        # Clean up the saved file
        os.remove(file_path)
        
        # Print the transcription to the terminal
        print("Transcription:", transcription['text'])
        print("Transcription reversed:", (transcription['text'])[::-1])
        
        # Convert transcription to a dictionary
        transcription_dict = {'transcription': str((transcription['text'])[::-1])}
        bidi_text = get_display(str((transcription['text'])[::-1]))
        
        # Convert transcription to a dictionary
        transcription_dict = {'transcription': bidi_text}
        return jsonify(transcription_dict)
    except Exception as e:
        # If transcription fails, remove the file and return an error
        os.remove(file_path)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)