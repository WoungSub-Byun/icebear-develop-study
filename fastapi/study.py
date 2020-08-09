from fastapi import FastAPI

app = FastAPI()

#Base get
@app.get("/")
async def root():
    return {'message':"Hello world"}

#Path Parameters
@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id" : item_id}

#path parameter with types
@app.get("/items/{item_id}")
async def read_param(item_id: int):
    return {"item_id": item_id}

#Request Body
from pydantic import BaseModel

class Item(BaseModel):
    name : str
    description : str = None
    price : float
    tax : float = None

# @app.put("/items/{item_id}")
# async def create_item(item_id: int, item: Item, ):
#     return {"item_id": item_id, **item.dict()}    #**:set parameter type to Dictionary

#Path parameters and numeric validations
from fastapi import Path, Query

@app.get('/items/{itme_id}')
async def read_items(
    q: str,
    item_id: int = Path(..., title="The ID of the item to get", ge=1),  
):
    results = {"item_id": item_id}
    if q:
        results.update({"q":q})
    return results
 #gt: greater than
 #ge: greater than or equal
 #le: less than or equal
 #lt: less than


#Body-Mutiple Parameters

# class Item(BaseModel):
#     name : str
#     description : str = None
#     price : float
#     tax : float = None

from fastapi import Body

class User(BaseModel):
    username: str
    full_name: str = None

# @app.put("/items/{item_id}")
# async def update_item(
#     *, item_id: int, item: Item, user: User, importance: int = Body(...)
# ):
#     results = {"item_id": item_id, "item":item, "user":user,"importance":importance}
#     return results

@app.put("/items/{item_id}")
async def update_item(*, item_id: int, item: Item = Body(..., embed=True)): #embed=True -> 키값을 가지게 하고 body값을 보내고 싶을 때
    results = {"success":123,"item_id":item_id, "item": item}
    return results

#Body-Fields  => class에 field를 사용하면 속성을 추가할 수 있다.

from pydantic import Field

class TestModel(BaseModel):
    name: str
    description: str = Field(None, title="The description of the testmodel", max_length=40)
    price: float = Field(..., gt=0, description="the price must be greater than zero")


#Body-nested Models

#1. Model을 만들떄 List,Set을 subtype으로 만들 수 있다.

from typing import List

class SubtypeTestModel(BaseModel):
    name: str
    image: List[str] = []   # ==> List of strings     # *Set 자료형 (==집합 자료형): 중복을 허용하지 않는다, 순서가 없다(Unordered) 

#2. Model의 subtype을 다른 Model을 지정할 수 있다.

class Image(BaseModel):
    url: str
    name: str

class NestedModel(BaseModel):
    name: str
    tags: List[str] = []
    image: Image = None

@app.put("/items/{item_id}/")
async def update_items(*, delimeter: str, item_id: int, item: NestedModel):
    results = {"Success":"success","item_id":item_id,"delimeter":delimeter, "item": item}
    return results

@app.put("/items/{image_title}/")
async def update_itemss(*, image_title: str, images: List[Image]):
    return images    