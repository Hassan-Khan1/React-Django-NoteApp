from os import name
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
# from .serializers import RegistrationSerializer
from accounts.views import *

urlpatterns = [
	path('login/', obtain_auth_token, name= 'login'),
	path('register/', registeration_view, name= 'register'),
  path('logout/', logout_view, name= 'logout'),


]