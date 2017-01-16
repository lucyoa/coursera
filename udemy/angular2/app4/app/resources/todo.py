from flask_restful import Resource, reqparse
from models.todo import TodoModel


class Todo(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('text',
        type=str,
        required=True,
        help="This field cannot be left blank")
    parser.add_argument('completed',
        type=int,
        required=False,
        help="Is completed")

    def get(self, _id):
        todo = TodoModel.find_by_id(_id)
        if todo:
            return todo.json()

        return {"Message": "Todo item not found!"}, 404

    def post(self, _id):
        data = self.parser.parse_args()

        todo = TodoModel(data['text'])
        try:
            todo.save_to_db()
        except:
            return {'Message': 'An error occured while creating the todo item'}, 500

        return todo.json()

    def delete(self, _id):
        todo = TodoModel.find_by_id(_id)
        if todo:
            todo.delete_from_db()

        return {'message': 'Todo item deleted', 'n': 1}

    def put(self, _id):
        data = self.parser.parse_args()

        todo = TodoModel.find_by_id(_id)

        if todo is None:
            todo = TodoModel(data['text'])
        else:
            todo.text = data['text']
            todo.completed = data['completed']

        todo.save_to_db()

        return todo.json()

class TodoList(Resource):
    def get(self):
        return {'todos': [todo.json() for todo in TodoModel.query.all()]}
