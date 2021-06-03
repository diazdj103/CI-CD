from flask import Flask , render_template

#  __name__ is a convenient way to get the import name of the place the app is defined.
# Flask uses the import name to know where to look up resources, templates, static files, instance folder, etc
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

if __name__ == '__main__':

    app.run(host='localhost',port='5000')
