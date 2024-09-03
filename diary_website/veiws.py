from flask import Blueprint
from flask_login import login_required  # type: ignore

views = Blueprint('views', __name__)

@views.route('/protected')
@login_required
def protected():
    return "This is a protected route."
