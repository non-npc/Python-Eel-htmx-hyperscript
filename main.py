import eel

# Initialize the Eel app
eel.init('web')  # 'web' folder contains HTML files

# Expose a Python function to be called from JavaScript
@eel.expose
def get_new_content():
    return '<button onclick="htmxSwap()">You swapped the content!</button>'

@eel.expose
def add_item():
    return '<li>Newly Added Item</li>'

@eel.expose
def remove_item():
    return ''

@eel.expose
def transition_content():
    return '<div id="transition-box" class="box">New Content with Transition!</div>'

@eel.expose
def load_more():
    return '''
        <div>Page 3 content here</div>
        <div>Page 4 content here</div>
    '''

# Start the Eel app
eel.start('index.html', size=(800, 600))
