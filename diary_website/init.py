from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager  # type: ignore

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdatabase.db'

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

from .models import models
from .views import views

app.register_blueprint(views.views)



