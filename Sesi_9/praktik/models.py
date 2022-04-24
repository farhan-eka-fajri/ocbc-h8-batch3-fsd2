from datetime import datetime
from config import db, ma

class Person(db.Model):
    __tablename__ = 'person'
    person_id = db.Column(db.Integer, primary_key=True)
    lname = db.Column(db.String(32), index=True)
    fname = db.Column(db.String(32))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __str__(self):
        return f'{self.Person.person_id} {self.Person.fname} {self.Person.lname} {self.Person.timestamp}'
class PersonSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Person
        sqla_session = db.session
        load_instance = True