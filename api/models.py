import email
from operator import mod
from pyexpat import model
from django.db import models
from django.contrib.auth.models import User ,AbstractBaseUser ,PermissionManager ,BaseUserManager
# Create your models here.


class Note(models.Model):
  body = models.TextField(null=True, blank=True)
  updated = models.DateTimeField(auto_now=True)
  created = models.DateTimeField(auto_now_add=True)
  # user = models.ForeignKey(
  #   User,
  #   related_name='leads',
  #   on_delete=models.CASCADE,
  #   null=True)

  def __str__(self):
      return self.body[0:50]



# class UserAccountManager(BaseUserManager):
#   def create_user(self, email, name, password = None):
#     if not email:
#       raise ValueError("Users must have an email address")

#       email = self.normalize_email(email)
#       user = self.model(email=email ,name=name)

#       user.set_password(password)

# class UserAccount(AbstractBaseUser, PermissionManager):
#   email = models.EmailField(max_length=255 , unique=True)
#   name = models.CharField(max_length=255)
#   is_actiavte = models.BooleanField(default=True)
#   is_staff = models.BooleanField(default=True)

#   object = UserAccountManager()

#   USERNAME_FIELD = 'email'
#   REQUIRED_FIELDS = ['name']


#   def get_full_name(self):
#     return self.name

#   def get_short_name(self):
#     return self.name

#   def _str_(self):
#     return self.name
