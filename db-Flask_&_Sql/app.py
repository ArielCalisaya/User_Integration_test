from flask import Flask, request, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

# init app
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))

# DATABASE
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database/usersList.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# INIT DB && Marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)

# user Class/Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    gitHub = db.Column(db.String(100), unique = True)
    birthday = db.Column(db.String(100))
    name = db.Column(db.String(100))
    lastName = db.Column(db.String(100))


    def __init__(self, gitHub, birthday, name, lastName):
        self.gitHub = gitHub
        self.birthday = birthday
        self.name = name
        self.lastName = lastName

db.create_all()

# User SCHEMA data content, id=display_none
class UserSchema(ma.Schema):
    class Meta:
        fields=(
        'id',
        'gitHub',
        'birthday',
        'name',
        'lastName'
        )

# Init SCHEMA
this_userSchema = UserSchema()
this_userSchemas = UserSchema(many=True)

@app.route('/')
def home():
    return render_template('index.html')

# POST new User
@app.route('/create_user', methods=['POST'])
def createUser():
    data = request.get_json()
    gitHub = data['gitHub']
    birthday = data['birthday']
    name = data['name']
    lastName = data['lastName']

    newUser = User(gitHub, birthday, name, lastName)
    db.session.add(newUser)
    db.session.commit()
    return this_userSchema.jsonify(newUser)

# GET all Users & Table For Users
@app.route('/all_users', methods=['GET'])
def get_allUser():
    all_users = User.query.all()
    result = this_userSchemas.dump(all_users)
    return jsonify(result)

@app.route('/get_user/<id>', methods=['GET'])
def get_User(id):
    user = User.query.filter_by(id = id).first()
    if not user:
        return jsonify({ 'message': 'No user found'})

    user_data = {}
    user_data['id'] = user.id
    user_data['gitHub'] = user.gitHub
    user_data['birthday'] = user.birthday
    user_data['name'] = user.name
    user_data['lastName'] = user.lastName

    return jsonify({ 'user': user_data })


# Update User
@app.route('/update_user/<id>', methods=['PUT'])
def update_User(id):
    user = User.query.filter_by(id=id).first()
    gitHub = request.json['gitHub']
    birthday = request.json['birthday']
    name = request.json['name']
    lastName = request.json['lastName']


    user.gitHub = gitHub
    user.birthday = birthday
    user.name = name
    user.lastName = lastName

    db.session.commit()
    return this_userSchema.jsonify(user)

@app.route('/del_user/<id>', methods=['DELETE'])
def delete_user(id):
    user= User.query.filter_by(id = id).first()
    db.session.delete(user)
    db.session.commit()

    return this_userSchema.jsonify(user)

if __name__ == '__main__':
    app.run(port= 5000, debug= True)
