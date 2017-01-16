from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from flask.ext.cors import CORS

from resources.todo import TodoList, Todo

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False

api = Api(app)

api.add_resource(TodoList, '/api/todos')
api.add_resource(Todo, '/api/todo/<int:_id>')

if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(port=5000, debug=True)