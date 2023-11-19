from flask import Flask, render_template, request
import json
import os

app = Flask(__name__)

# Set up file path of json
script_folder = os.path.dirname(os.path.abspath(__file__))
json_file_path = os.path.join(script_folder, 'passwords-encrypted.json')

# Home page
@app.route("/")
def index():
    return render_template('index.html')

# Set password
@app.route("/set-password", methods = ['GET', 'POST'])
def set_():
    if request.method == "POST":
        ser = request.form['ser']
        enc_password = request.form['enc_password']

        with open(json_file_path, 'r+') as password_json:
            # Convert json to python dictionary
            dict_ = json.loads(password_json.read())
            dict_[ser] = enc_password

            password_json.seek(0) # move cursor to beginning
            password_json.write(json.dumps(dict_))
            password_json.truncate()
    
    return render_template('set-password.html')

# Get password
@app.route("/get-password", methods = ['GET', 'POST'])
def get_():
    if request.method == "POST":
        ser = request.form['ser']
        with open(json_file_path, 'r') as password_json:
            # Convert json to python dictionary
            dict_ = json.loads(password_json.read())
            if ser in dict_:
                return dict_[ser]
            else:
                return "0" # corresponds to password not existing
    return render_template('get-password.html')

app.run()