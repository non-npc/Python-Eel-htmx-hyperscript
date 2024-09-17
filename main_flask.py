from flask import Flask, render_template

app = Flask(__name__, static_folder='web', template_folder='web')

@app.route('/')
def index():
    return render_template('index_flask.html')

# Route for swapping content
@app.route('/new-content')
def new_content():
    return '<button hx-get="/new-content" hx-swap="outerHTML">You swapped the content!</button>'

# Route for adding a new item
@app.route('/add-item')
def add_item():
    return '<li>Newly Added Item</li>'

# Route for removing an item
@app.route('/remove-item')
def remove_item():
    return ''

# Route for triggering transitions
@app.route('/transition-content')
def transition_content():
    return '<div id="transition-box" class="box">New Content with Transition!</div>'

# Route for loading a fragment
@app.route('/fragment')
def fragment():
    return '<div id="fragment-container">This is the new content loaded from the server!</div>'

# Route for infinite scrolling
@app.route('/load-more')
def load_more():
    return '''
        <div>Page 3 content here</div>
        <div>Page 4 content here</div>
        <button hx-get="/load-more" hx-swap="beforeend" hx-trigger="revealed">Load More</button>
    '''

if __name__ == '__main__':
    app.run(debug=True)
