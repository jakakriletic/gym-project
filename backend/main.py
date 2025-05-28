from typing import Union
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

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
  database="testbaza"
)

class Data(BaseModel):
    lift: str
    teza: str
    rep: str
    rpe: str

@app.post("/lift")
async def read_root(data: Data):
    mycursor = mydb.cursor()
    sql = "INSERT INTO lift (lift,teza, rep, rpe) VALUES(%s, %s, %s, %s)"
    val = (Data.lift,Data.teza, Data.rep, Data.rpe)
    mycursor.execute(sql, val)
    mydb.commit()

    return {"Rezultat": "končano"}


