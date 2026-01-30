from pymongo import MongoClient

def populate_db():
    client = MongoClient("mongodb://localhost:27017/")
    db = client["octofit_db"]

    # Clear existing data
    db.users.delete_many({})
    db.teams.delete_many({})
    db.activities.delete_many({})
    db.workouts.delete_many({})

    # Users
    db.users.insert_many([
        {"username": "octocat", "email": "octocat@github.com"},
        {"username": "hubot", "email": "hubot@github.com"}
    ])

    # Teams
    db.teams.insert_many([
        {"name": "Alpha Team"},
        {"name": "Beta Team"}
    ])

    # Activities
    db.activities.insert_many([
        {"type": "running", "duration": 30},
        {"type": "cycling", "duration": 45}
    ])

    # Workouts
    db.workouts.insert_many([
        {"name": "Morning Run", "calories": 300},
        {"name": "Evening Cycle", "calories": 450}
    ])

    print("✅ octofit_db populated successfully")

if __name__ == "__main__":
    populate_db()
