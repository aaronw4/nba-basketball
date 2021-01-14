import sys
import json
import requests
from bs4 import BeautifulSoup

def scraping():
    teams = {}
    
    ADDRESS1 = 'https://www.teamrankings.com/nba/stat/points-per-game'
    ADDRESS2 = 'https://www.teamrankings.com/nba/stat/opponent-points-per-game'
    ADDRESS3 = 'https://www.teamrankings.com/nba/stat/possessions-per-game'

    html_data1 = requests.get(ADDRESS1)
    soup1 = BeautifulSoup(html_data1.text, 'lxml')
    table1 = soup1.find('tbody')
    teams1 = table1.findAll('tr')
    for team in teams1:
        stats = team.findAll('td')
        name = stats[1].find('a').text
        off_points = stats[2].text
        teams[name] = []
        teams[name].append(off_points)

    html_data2 = requests.get(ADDRESS2)
    soup2 = BeautifulSoup(html_data2.text, 'lxml')
    table2 = soup2.find('tbody')
    teams2 = table2.findAll('tr')
    for team in teams2:
        stats = team.findAll('td')
        name = stats[1].find('a').text
        opp_points = stats[2].text
        teams[name].append(opp_points)
    
    html_data3 = requests.get(ADDRESS3)
    soup3 = BeautifulSoup(html_data3.text, 'lxml')
    table3 = soup3.find('tbody')
    teams3 = table3.findAll('tr')
    for team in teams3:
        stats = team.findAll('td')
        name = stats[1].find('a').text
        possessions = stats[2].text
        teams[name].append(possessions)

    STATS = []
    team_names = teams.keys()
    for name in team_names:
        team_stats = {}
        team_stats['name'] = name
        team_stats['points_scored'] = teams[name][0]
        team_stats['points_against'] = teams[name][1]
        team_stats['possessions'] = teams[name][2]
        STATS.append(team_stats)

    with open('./sportsbook/src/stats.json', 'w') as data:
        json.dump(STATS, data)

if __name__ == "__main__":
    scraping()
