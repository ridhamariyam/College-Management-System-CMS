from django.shortcuts import render


def view_dashboard(request):
    return render(request, 'Dashboard/index.html')