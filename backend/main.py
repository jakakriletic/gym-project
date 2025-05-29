from typing import Union
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector
from datetime import date

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="jaka2003",
  database="lift"
)

class Data(BaseModel):
    liftQ: str
    tezaQ: str
    repQ: str
    rpeQ: str
    sqlDateQ: date

@app.get("/lift/izpis")
async def root():
    mycursor = mydb.cursor()
    sql = "select * from liftBaza where id = 1"
    mycursor.execute(sql)
    row = mycursor.fetchone()
    if row:
        return {"id": row[0], "lift": row[1], "teza": row[2], "rep": row[3], "rpe": row[4], "datum": row[5]}
    else:
        return {"ni podatkov"}

@app.post("/lift/vpis")
async def read_root(data: Data):
    mycursor = mydb.cursor()
    sql = "INSERT INTO liftbaza (lift,teza, rep, rpe, datum) VALUES(%s, %s, %s, %s, %s)"
    val = (data.liftQ,data.tezaQ, data.repQ, data.rpeQ, data.sqlDateQ)
    mycursor.execute(sql, val)
    mydb.commit()

    return {"Rezultat": data}


