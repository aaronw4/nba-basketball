import sys
import json
import requests
from bs4 import BeautifulSoup

def scraping():
    ADDRESS = 'https://classic.sportsbookreview.com'
    EXTENSION = '/betting-odds/nba-basketball/?date='
    EXTENSION_TOTALS = '/betting-odds/nba-basketball/totals/?date='
    DATE = '20210330'
    # EXTENSION = sys.argv[1] 
    # DATE = sys.argv[2]
    TEAMS_LIST = []
    SCORES_LIST = []
    SPREADS_LIST = []
    ODDS_LIST = []
    OPENING_ODDS_LIST = []
    OPENING_SPREAD_LIST = []
    OPENING_TOTAL_LIST = []
    TOTALS_LIST = []
    RESULTS_DATA = []
    USER_SETTINGS = 'user_settings=eyJkYXRhIjoie1wic2V0dGluZ3NcIjpbe1wiaWRcIjpcIjVhNGJhMjYzODI4MTg5NTNjMDkyZWZmMFwiLFwidmFsdWVcIjpcIlxcXCJ0aW1lXFxcIlwifSx7XCJpZFwiOlwiNWE0M2MxMWI4MjgxODk1M2MwOTJlZmU1XCIsXCJ2YWx1ZVwiOlwiXFxcIlVTL0Vhc3Rlcm5cXFwiXCJ9LHtcImlkXCI6XCI1YTQzYzBhZjgyODE4OTUzYzA5MmVmZTRcIixcInZhbHVlXCI6XCJcXFwiMjM4LTIwXFxcIlwifSx7XCJpZFwiOlwiNWE0M2JlOWQ4MjgxODk1M2MwOTJlZmUzXCIsXCJ2YWx1ZVwiOlwiXFxcInVzXFxcIlwifSx7XCJpZFwiOlwiNWE0M2JlNzA4MjgxODk1M2MwOTJlZmUyXCIsXCJ2YWx1ZVwiOlwiZmFsc2VcIn0se1wiaWRcIjpcIjVhNDNiZTQwODI4MTg5NTNjMDkyZWZlMVwiLFwidmFsdWVcIjpcInRydWVcIn0se1wiaWRcIjpcIjVhNDNiZGMxODI4MTg5NTNjMDkyZWZlMFwiLFwidmFsdWVcIjpcImZhbHNlXCJ9LHtcImlkXCI6XCI1YTQzYThjYTgyODE4OTUzYzA5MmVmZGFcIixcInZhbHVlXCI6XCJmYWxzZVwifSx7XCJpZFwiOlwiNWE0Mjg0OWM4MjgxODk1M2MwOTJlZmQ5XCIsXCJ2YWx1ZVwiOlwiXFxcInRydWVcXFwiXCJ9LHtcImlkXCI6XCI1YjBlYmNiMjVkMzQ0NjI4YTU0ZDRmZmFcIixcInZhbHVlXCI6XCJcXFwiY29tcGFjdFxcXCJcIn1dfSIsInR5cGUiOiJvYmplY3QifQ=='
    headers={
        "cookie" : USER_SETTINGS,
        "User-Agent" : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0'
    }

    html_data = requests.get(
        ADDRESS + EXTENSION + DATE,
        headers=headers
    )

    soup = BeautifulSoup(html_data.text, 'lxml')

    # Create list of all team names
    for teams in soup.find_all('span', class_='team-name'):
        name = teams.text
        if name[0] == "(":
            name = name.split(')')[1][1:]
        TEAMS_LIST.append(name)

    # Create list of all team scores
    for points in soup.find_all('span', class_='total'):
        SCORES_LIST.append(points.text)

    # Create list of opening lines
    for opening in soup.find_all('div', class_='eventLine-opener'):
        opening_lines = opening.text.split()
        if len(opening_lines) > 2:
            opening_spread1 = opening_lines[0]
            opening_spread1 = opening_spread1.replace('\u00BD', '.5')
            opening_odds1 = opening_lines[1][:4]
            opening_spread2 = opening_lines[1][4:]
            opening_spread2 = opening_spread2.replace('\u00BD', '.5')
            opening_odds2 = opening_lines[2]
        elif len(opening_lines) == 1:
            opening_spread1 = '0'
            opening_spread2 = '0'
            opening_odds1 = opening_lines[0][2:6]
            opening_odds2 = opening_lines[0][8:]
        else:
            opening_spread1 = ''
            opening_spread2 = ''
            opening_odds1 = ''
            opening_odds2 = ''
        OPENING_SPREAD_LIST.append(opening_spread1)
        OPENING_SPREAD_LIST.append(opening_spread2)
        OPENING_ODDS_LIST.append(opening_odds1)
        OPENING_ODDS_LIST.append(opening_odds2)

    # Create list of game lines
    for lines in soup.find_all('div', rel='1096'):
        game_lines = lines.find_all('b')
        if len(game_lines) == 0:
            continue
        game_line1 = game_lines[0].text
        game_line2 = game_lines[1].text
        spread1 = game_line1[:-5]
        spread1 = spread1.replace('\u00BD', '.5')
        spread2 = game_line2[:-5]
        spread2 = spread2.replace('\u00BD', '.5')
        odds1 = game_line1[-4:]
        odds2 = game_line2[-4:]
        SPREADS_LIST.append(spread1)
        SPREADS_LIST.append(spread2)
        ODDS_LIST.append(odds1)
        ODDS_LIST.append(odds2)

    # Collect totals lines
    html_data = requests.get(
        ADDRESS + EXTENSION_TOTALS + DATE,
        headers=headers
    )
    soup = BeautifulSoup(html_data.text, 'lxml')

    for opening in soup.find_all('div', class_='eventLine-opener'):
        opening_lines = opening.text.split()
        if len(opening_lines) > 2:
            opening_total1 = opening_lines[0]
            opening_total1 = opening_total1.replace('\u00BD', '.5')
            opening_total2 = opening_lines[1]
            opening_total2 = opening_total2.replace('\u00BD', '.5')
        elif len(opening_lines) == 1:
            opening_total1 = '0'
            opening_total2 = '0'
        else:
            opening_total1 = ''
            opening_total2 = ''
        OPENING_TOTAL_LIST.append(opening_total1)
        OPENING_TOTAL_LIST.append(opening_total2)

    for lines in soup.find_all('div', rel='1096'):
        total_lines = lines.find_all('b')
        if len(total_lines) == 0:
            continue
        total_line1 = total_lines[0].text
        total_line2 = total_lines[1].text
        total1 = total_line1[:-5]
        total1 = total1.replace('\u00BD', '.5')
        total2 = total_line2[:-5]
        total2 = total2.replace('\u00BD', '.5')
        TOTALS_LIST.append(total1)
        TOTALS_LIST.append(total2)

    # Create object with data
    for i in range(0, len(TEAMS_LIST), 2):
        team_stats = {}

        team_stats['team1'] = TEAMS_LIST[i]
        team_stats['team2'] = TEAMS_LIST[i+1]
        team_stats['score1'] = SCORES_LIST[i]
        team_stats['score2'] = SCORES_LIST[i+1]
        team_stats['spread1'] = SPREADS_LIST[i]
        team_stats['spread2'] = SPREADS_LIST[i+1]
        team_stats['odds1'] = ODDS_LIST[i]
        team_stats['odds2'] = ODDS_LIST[i+1]
        team_stats['openingSpread1'] = OPENING_SPREAD_LIST[i]
        team_stats['openingSpread2'] = OPENING_SPREAD_LIST[i+1]
        team_stats['openingOdds1'] = OPENING_ODDS_LIST[i]
        team_stats['openingOdds2'] = OPENING_ODDS_LIST[i+1]
        team_stats['total'] = TOTALS_LIST[i]
        team_stats['openingTotal'] = OPENING_TOTAL_LIST[i]
        team_stats['date'] = DATE

        RESULTS_DATA.append(team_stats)

    with open('./sportsbook/src/results.json', 'w') as data:
        json.dump(RESULTS_DATA, data)

if __name__ == "__main__":
    scraping()
