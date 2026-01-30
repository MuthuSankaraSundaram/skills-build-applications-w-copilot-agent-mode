
from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create Users (Superheroes)
        users = [
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team='Marvel'),
            User.objects.create(name='Captain America', email='cap@marvel.com', team='Marvel'),
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team='Marvel'),
            User.objects.create(name='Batman', email='batman@dc.com', team='DC'),
            User.objects.create(name='Superman', email='superman@dc.com', team='DC'),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team='DC'),
        ]

        # Create Activities
        from datetime import date
        for user in users:
            Activity.objects.create(user=user.name, type='run', duration=30, date=date.today())
            Activity.objects.create(user=user.name, type='cycle', duration=60, date=date.today())

        # Create Workouts
        Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes', difficulty='Easy')
        Workout.objects.create(name='Strength Training', description='Strength for all heroes', difficulty='Medium')

        # Create Leaderboard
        Leaderboard.objects.create(user='Marvel', score=300)
        Leaderboard.objects.create(user='DC', score=250)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))
