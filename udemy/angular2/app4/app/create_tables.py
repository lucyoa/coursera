import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

query = "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, text TEXT, completed INTEGER)"
cursor.execute(query)

connection.commit()
connection.close()