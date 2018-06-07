from flask_wtf import FlaskForm
from wtforms.fields import StringField, SubmitField
from wtforms.validators import Required
#from flask_wtf import FlaskForm as BaseForm


class LoginForm(FlaskForm):
    """Accepts a nickname and a room."""
    name = StringField('', validators=[Required()])
    room = StringField('', validators=[Required()])
    submit = SubmitField('')
    
