from urllib import response
from django.db import reset_queries
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegistrationSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

@api_view(['POST',])
def logout_view(request):
  if request.method == 'POST':
    # if request.is_authenticated():
    # permission_classes = [IsAuthenticated]

    print("Before....",request.user)

    request.user.auth_token.delete()

    print("After....")
    return Response(status=status.HTTP_200_OK)

    

@api_view(['POST',])
def registeration_view(request):
  print("Before....",request.user)
  if request.method == 'POST':
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)



