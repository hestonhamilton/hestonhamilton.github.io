from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='assets')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/assets/<path:filename>')
def custom_static(filename):
    return send_from_directory('assets', filename)

if __name__ == '__main__':
    app.run(debug=True)
