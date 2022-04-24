from flask import Flask, request, render_template
from markupsafe import escape
# from flask import request

app = Flask(__name__)
 
# @app.route('/')
# def hello_world():
#     return "<h1>Hello, World! Hello world </h1>"
 
# @app.route('/<name>')
# # localhost:5000/<name>
# # localhost:5000/hello
# # localhost:5000/lol
# # localhost:5000/kiki
# def hello(name):
#   # hello(hello)
#   # hello(lol)
#   # hello(kiki)
#     return f"Hello, { escape(name) }!"
 
@app.route('/')
def index():
    return render_template('hello.html')
 
@app.route('/hello/') #http://localhost:5000/user/user1200
@app.route('/hello/<name>')
def hello(name):
    return render_template('hello_name.html',name=name)
# @app.route('/world')
# def  hello():
#     return 'Hello, world'
 
 
@app.route('/user/<username>')
# http://localhost:5000/user/user1200
def show_user_profile(username):
    # show the user profile for that user
    return f'User {escape(username)}'
 
@app.route('/book/<string:title>')
def show_book_title(title):
    # show the book detail for that title
    return f'Detail book : {escape(title)} : '
 
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return f'Post {post_id}'
 
@app.route('/post/<string:post_id_str>')
def show_post_str(post_id_str):
    # show the post with the given id in string, the id can be a string
    return f'Post {post_id_str} #Post id str'
 
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return f'Subpath {escape(subpath)}'
 
@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
def do_the_login():
    return 'do the login ...'

def show_the_login_form():
    return 'Displaying login to form'
if __name__ == '__main__':
    app.run(debug=True)