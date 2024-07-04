from django.shortcuts import render,HttpResponse,redirect
from .models import Contact
from django.db import IntegrityError

# Create your views here.

def home(request):
     return render(request,'mehandiApp/home.html')

def about(request):
      return render(request,'mehandiApp/about.html')

def services(request):
      return render(request,'mehandiApp/services.html')


def gallery(request):
      return render(request,'mehandiApp/gallery.html')

def contact(request):
      if  request.method=="POST":
         name=request.POST.get('name')
         print(name)
         phone_no=request.POST.get('phone_no')
         print(phone_no)
         email=request.POST.get('email')
         print(email)
         desc=request.POST.get('desc')
         print(desc)
         # Validate the inputs here as needed

         if not name or not phone_no or not email or not desc:
            return render(request, 'mehandiApp/contact.html', {'error': 'All fields are required.'})

         try:
            contact = Contact(name=name, phone_no=phone_no, email=email, desc=desc)
            contact.save()
         except IntegrityError as e:
            return render(request, 'mehandiApp/contact.html', {'error': str(e)})
         return redirect('success')  # Redirect to a success page
      return render(request,'mehandiApp/contact.html')


def success(request):
      return render(request,'mehandiApp/success.html')