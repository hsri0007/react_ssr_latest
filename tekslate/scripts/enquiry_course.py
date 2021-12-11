# -*- coding: utf-8 -*-
"""
Created on Fri Jun 18 13:08:19 2021

@author: nikhi
"""

import pandas as pd

import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="root",
  # port = 8888, #for Mamp users
  database='teksla',
   auth_plugin='mysql_native_password'
)
print(mydb) 
cursor = mydb.cursor()

#Change the file path accordingly
xls = pd.ExcelFile('Mindmajix Entire Curriculum\'s & PDF\'s.xlsx')

df = pd.read_excel(xls, 3 ,header = None)

add_entry = ("INSERT INTO enquiry_course_names"
               "(course_name, course_url) "
               "VALUES (%s, %s)")

for index,row in df.iterrows():
    name = row[0]
    urls = []
    for i in range(1,len(row)):
        if row[i]=="No page":
            urls.append('')
        elif pd.isna(row[i]):
            continue
        else:
            urls.append(row[i])
    
    for link in urls:
        value = (name,link)
        cursor.execute(add_entry, value)
        
mydb.commit()

cursor.close()
mydb.close()
    
