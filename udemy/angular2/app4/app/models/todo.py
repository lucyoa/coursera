from db import db


class TodoModel(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200))
    completed = db.Column(db.Integer)

    def __init__(self, text):
        self.text = text
        self.completed = 0

    def json(self):
        return {'id': self.id, 'text': self.text, 'completed': self.completed}

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()


    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()