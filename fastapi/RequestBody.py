from fastapi import FastAPI
from pydantic import BaseModel

class Member(BaseModel):
    name : str
    id : str
    password : str
    phonenumber : int

app = FastAPI()

@app.post("/id/{nickname}/")
async def create_id(nickname: str, member: Member, resident_num : int):
    member_dict = member
    birth = str(resident_num)
    birth = birth[0:5]
    member_dict.update({"nickname": nickname,
                        "birth": birth})
    return member_dict