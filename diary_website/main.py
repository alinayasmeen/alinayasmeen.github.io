from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from typing import Any

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///diary.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db: SQLAlchemy = SQLAlchemy(app)

class User(db.Model):  # type: ignore
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)

class DiaryEntry(db.Model):  # type: ignore
    id = db.Column(db.Integer, primary_key=True)
    entry_text = db.Column(db.Text, nullable=False)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)  # Optional: Start the Flask application
