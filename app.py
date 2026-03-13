from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"].lower()

    if "hello" in user_message:
        reply = "Hello! How can I help with government forms?"
    elif "aadhar" in user_message:
        reply = "You can apply for Aadhaar at uidai.gov.in"
    else:
        reply = "Sorry, I don't understand."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run()
