from typing import Union
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector
from datetime import date
import json

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

@app.delete("/lift/delete/{lift_id}")
async def brisi_uporabnika(lift_id: int):
    mycursor = mydb.cursor()
    sql = "delete from liftBaza where id = %s"
    mycursor.execute(sql, (lift_id,))
    mydb.commit()
    return "Uspešno deletano"

@app.get("/lift/izpisChart/{lift_name}")
async def izpis_dt_lift(lift_name: str):
    mycursor = mydb.cursor()
    sql = "select teza,rep,rpe,datum from liftBaza where lift = %s"
    mycursor.execute(sql, (lift_name,))
    rows = mycursor.fetchall()

    array = []
    for row in rows:
        array.append({"teza": row[0],"rep": row[1],"rpe": row[2], "datum": row[3]})
    return array

@app.get("/lift/izpis/{lift_name}")
async def root(lift_name: str):
    mycursor = mydb.cursor()
    sql = "select * from liftBaza where lift = %s"
    mycursor.execute(sql, (lift_name,))
    rows = mycursor.fetchall()

    array = []
    for row in rows:
         array.append({"id": row[0], "lift": row[1], "teza": row[2], "rep": row[3], "rpe": row[4], "datum": row[5]})
    return array

@app.post("/lift/vpis")
async def read_root(data: Data):
    mycursor = mydb.cursor()
    sql = "INSERT INTO liftbaza (lift,teza, rep, rpe, datum) VALUES(%s, %s, %s, %s, %s)"
    val = (data.liftQ,data.tezaQ, data.repQ, data.rpeQ, data.sqlDateQ)
    mycursor.execute(sql, val)
    mydb.commit()

    return {"Rezultat": data}

@app.get("/lift/gymDay")
async def gymDay():
    mycursor = mydb.cursor()
    sql = "SELECT * from gymDay"
    mycursor.execute(sql)
    rez = mycursor.fetchall()

    return rez

