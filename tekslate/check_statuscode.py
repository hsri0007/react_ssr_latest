# -*- coding: utf-8 -*-
"""
Created on Wed Jun 30 16:18:24 2021

@author: nikhi
"""

import pandas as pd
import requests



#change file name for courses and articles 
df = pd.read_csv('articles_list30621.csv')

codes = []

f = open("article_codes.txt",'w')

for index,row in df.iterrows():
    url = "https://mindmajix.com/"+row[1]
    
    x = requests.get(url)
    print(x.status_code)
    if x.status_code>=400:
        f.write(url)

f.close()
    
