from flask import Flask, g, request
from flask_restful import Resource, Api
import sqlite3
import json
app = Flask(__name__)
api = Api(app)

DATABASE = 'sqlite_python.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


class PostMessage(Resource):
    def get(self):
        return {"id_person": "int", "messages": "str"}

    def post(self):
        result = request.json
        try:
            _id_persone = result["id_person"]
            _messages = result["messages"]

            conn = get_db_connection()
            cur = conn.cursor()
            cur.execute("INSERT INTO Chat (id_person, messages) VALUES (?,?)", (_id_persone, _messages))
            conn.commit()
            conn.close()
            
            return "GOOD"
        except: 
            return "Error"

api.add_resource(PostMessage, '/PostMessage')



class GetAnyMessage(Resource):
    def get(self): 
        conn = get_db_connection()
        posts = conn.execute('SELECT id_person, messages FROM Chat').fetchall()
        conn.close()

        return json.dumps( [dict(ix) for ix in posts], ensure_ascii=False)

api.add_resource(GetAnyMessage, '/GetAnyMessage')

if __name__ == "__main__":
    app.run()