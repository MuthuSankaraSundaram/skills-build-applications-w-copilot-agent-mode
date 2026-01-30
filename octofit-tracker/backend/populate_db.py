from pymongo import MongoClient

def populate_db():
    client = MongoClient("mongodb://localhost:27017/")
    db = client["octofit_db"]

    db.users.insert_one({
        "username": "octocat",
        "email": "octocat@github.com"
    })

    db.teams.insert_one({
        "name": "Alpha Team"
    })

    db.activities.insert_one({
        "type": "running",
        "duration": 30
    })

    db.workouts.insert_one({
        "name": "Morning Run",
        "calories": 300
    })

if __name__ == "__main__":
    populate_db()
