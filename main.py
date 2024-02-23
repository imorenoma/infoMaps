from flask import Flask, render_template, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase
cred = credentials.Certificate('path/to/your/firebase/credentials.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
  email = request.form['email']
  password = request.form['password']
  radius = request.form['radius']

  # Create a new user in Firebase Authentication
  auth = firebase_admin.auth()
  try:
    user = auth.create_user(email=email, password=password)
    user_id = user['uid']
    # Add user data to Firestore
    user_ref = db.collection('users').document(user_id)
    user_ref.set({
      'email': email,
      'radius': radius,
    })
    return 'User created successfully'
  except Exception as e:
    return str(e)

if __name__ == '__main__':
  app.run(debug=True)
