from diary_website import db # type: ignore

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)

class DiaryEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    entry_text = db.Column(db.Text, nullable=False)
