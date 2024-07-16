import eel
import random
from datetime import datetime

eel.init('web')

@eel.expose
def get_server_time():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

@eel.expose
def get_random_number():
    return str(random.randint(1, 100))

@eel.expose
def reverse_text(text):
    return text[::-1]

@eel.expose
def get_lazy_load_content():
    return "This content was lazy-loaded!"

@eel.expose
def color_throb():
    return f'<div>Throbbed at {get_server_time()}</div>'

@eel.expose
def color_throb_initial():
    return '<div>Click the button to see the throb effect</div>'

@eel.expose
def fade_out():
    return f'<div>Faded out at {get_server_time()}</div>'

@eel.expose
def fade_out_initial():
    return '<div>Click the button to see the fade out effect</div>'

@eel.expose
def fade_in():
    return f'<div>Faded in at {get_server_time()}</div>'

@eel.expose
def swap_content():
    return f'<div>Swapped at {get_server_time()}</div>'

@eel.expose
def swap_content_initial():
    return '<div>Click the button to see the swap effect</div>'

eel.start('index.html', size=(800, 600))