import sys
import json
import requests
from bs4 import BeautifulSoup

def scraping():
    ADDRESS = 'https://www.covers.com'
    EXTENSION = '/sports/nba/matchups'
    DATE = '?selectedDate=2021-03-26'
    ADDRESS_LIST = []
    LAST_10 = {}

    # builds a list of all game links
    html_links = requests.get(ADDRESS + EXTENSION + DATE)
    soup_links = BeautifulSoup(html_links.text, 'lxml')
    for links in soup_links.find_all('a', class_='cmg_btn_primary'):
        if links['href'] == '#ExpertPicksModal':
            continue
        ADDRESS_LIST.append(links['href'])

    # Loop through all links
    for link in ADDRESS_LIST:
        html_games = requests.get(ADDRESS + link)
        soup_games = BeautifulSoup(html_games.text, 'lxml')
        div_container = soup_games.find_all('div', class_='covers-CoversMatchups-responsiveTableContainer')
        
        team1 = div_container[5].find('span').text
        table1 = div_container[7].find('table', class_='covers-CoversMatchups-Table')
        table1_body = table1.find_all('tbody')
        table1_rows = table1_body[0].find_all('tr')
        team1_data = []
        for i in range(0, len(table1_rows)):
            data = table1_rows[i].find_all('td')
            date = data[0].text
            score = data[2].text
            spread_result = data[4].text
            spread_margin = data[5].text
            total_result = data[6].text
            total_margin = data[7].text

            if len(score) > 40:
                score = score[2:][:-54]
            else:
                score = score[2:][:-27]

            info = {
                "date": date[4:][:-6],
                'score': score,
                'spread_result': spread_result,
                'spread_margin': spread_margin,
                'total_result': total_result,
                'total_margin': total_margin
            }
            team1_data.append(info)
        LAST_10[team1] = team1_data

        team2 = div_container[8].find('span').text
        table2 = div_container[10].find('table', class_='covers-CoversMatchups-Table')
        table2_body = table2.find_all('tbody')
        table2_rows = table2_body[0].find_all('tr')
        team2_data = []
        for i in range(0, len(table2_rows)):
            data = table2_rows[i].find_all('td')
            date = data[0].text
            score = data[2].text
            spread_result = data[4].text
            spread_margin = data[5].text
            total_result = data[6].text
            total_margin = data[7].text

            if len(score) > 40:
                score = score[2:][:-54]
            else:
                score = score[2:][:-27]

            info = {
                "date": date[4:][:-6],
                'score': score,
                'spread_result': spread_result,
                'spread_margin': spread_margin,
                'total_result': total_result,
                'total_margin': total_margin
            }
            team2_data.append(info)
        LAST_10[team2] = team2_data

    with open('./sportsbook/src/last10.json', 'w') as data:
        json.dump(LAST_10, data)

if __name__ == "__main__":
    scraping()
