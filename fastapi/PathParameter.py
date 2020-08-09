from enum import Enum
from fastapi import FastAPI
from pydantic import BaseModel

class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

app = FastAPI()

@app.get('/user/me')
async def read_user_me():
    return {"user_id : the current user"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q:str = None):
    return {"item_id" : item_id, "q" : q}

@app.put("/items/{items_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
