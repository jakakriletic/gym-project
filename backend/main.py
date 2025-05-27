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
    text1: str
    text2: str

@app.post("/process")
async def read_root(data: Data):
    combined = f"{data.text1} {data.text2}"

    mycursor = mydb.cursor()
    sql = "INSERT INTO combinedString (id, cbString) VALUES(%s, %s)"
    val = (3, combined)
    mycursor.execute(sql, val)
    mydb.commit()

    return {"Rezultat": combined}


