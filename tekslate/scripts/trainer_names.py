# -*- coding: utf-8 -*-
"""
Created on Wed Jun 23 17:10:27 2021

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

xls = pd.ExcelFile('Course Trainer Names.xlsx')

df = pd.read_excel(xls, 0 ,header = None)

update_entry = (
                "UPDATE course_trainers SET trainer_name = %s,description = %s WHERE course_url = %s;"
               )
              

for index,row in df.iterrows():
    val=(row[0],row[3],row[2])
    print(val)
    cursor.execute(update_entry,val,multi=True)
    
    
mydb.commit()
print(cursor.rowcount)
cursor.close()
mydb.close()
    

