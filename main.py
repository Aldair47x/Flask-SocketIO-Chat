from flask import Flask, render_template, Response
from flask_socketio import *
from flask import redirect, url_for
import socketio
import eventlet
import os.path

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
io = socketio.Server()
socket = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')

@socket.on('message')
def handleMessage(msg):
    print('Message: ' + msg)
    send(msg, broadcast = True)

"""
@socket.on('chat')
def Chat(self, data):
    send(data)

@socket.on('typing')
def typing(self,data):
    send('typing', data, broadcast = True)
"""

if __name__ == '__main__':
    app.run('192.168.0.15', 5000)