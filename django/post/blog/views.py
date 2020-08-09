from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, JsonResponse

# Create your views here.

class RegisterView(View):
    
    def get(self, request):
        return JsonResponse(self.get_data(), json_dumps_params={'ensure_ascii':True})

    def get_data(self):
        return {
            'message' : '안녕 파이썬 장고',
            'item' : ['파이썬','Django','AWS','Azure'],
        }