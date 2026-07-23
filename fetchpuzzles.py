import requests
import json


url = "https://www.nytimes.com/puzzles/sudoku/"
page = requests.get(url)
text = page.text
search = "gameData = "
start = text.find(search) + len(search)
obj, end_idx = json.JSONDecoder().raw_decode(text, start)

levels = ['easy', 'medium', 'hard']

puzzle_data = {}
puzzle_data['day'] = obj['easy']['day_of_week']
puzzle_data['date'] = obj['easy']['print_date']

for diff in levels:
    puzzle_data[diff] = {}
    puzzle_data[diff]['given'] = [obj[diff]['puzzle_data']['puzzle'][i : i + 9] for i in range(0, 81, 9)]
    puzzle_data[diff]['solution'] = [obj[diff]['puzzle_data']['solution'][i : i + 9] for i in range(0, 81, 9)]


with open('data/puzzles.json', 'w') as f:
    json.dump(puzzle_data, f, indent=2)