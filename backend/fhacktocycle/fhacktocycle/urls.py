from django.conf.urls import patterns, include, url
from fhacktocycle.item.views import SearchView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^api/(\d+.\d+|\d+)/(\d+\.\d+|\d+)/{,1}$', SearchView.as_view(), name='search'),

    # url(r'^fhacktocycle/', include('fhacktocycle.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
