from typing import Union
from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Data(BaseModel):
    text1: str
    text2: str

@app.post("/process")
async def read_root(data: Data):
    combined = f"{data.text1} {data.text2}"
    return {"Rezultat": combined}