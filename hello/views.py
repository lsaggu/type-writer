import requests
import logging

from django.shortcuts import render
from django.http import HttpResponse, HttpRequest

from .models import Greeting, Recording

# Vars
logger = logging.getLogger('mylogger')

# Create your views here.
def index(request):
    
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

# route to save a recording
def save(request):
    
    logger.info('saving...')
    body = request.POST
    logger.info(body.getlist('recording[]'))    
    
    recording = Recording()

    return HttpResponse(status=200)


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
