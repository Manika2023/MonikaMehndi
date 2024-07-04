
from django.urls import path,include
from django.conf.urls.static import static
from mehandiApp import views
from django.conf import settings

urlpatterns = [
    path('',views.home,name="home"),
    path('about/',views.about,name="about"),
    path('services/',views.services,name="services"),
    path('gallery/',views.gallery,name="gallery"),
    path('contact/',views.contact,name="contact"),
    path('success/',views.success,name="success")
    
]+static(settings.STATIC_URL,
          document_root=settings.STATIC_ROOT)