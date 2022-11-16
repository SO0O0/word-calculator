import json

from flask import Flask, render_template, request, jsonify
from gensim.models import Word2Vec

app = Flask(__name__)

# Load the model
model_path = '../model/word2vec.gensim.model'
model = Word2Vec.load(model_path)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/date', methods=['POST'])
def date():
    sentense = request.form['sentense']
    sentense_list = sentense.split(' ')
    sentense_list.remove('')
    result = calculate(sentense_list)
    print(result)
    return jsonify(ResultSet=json.dumps(result))

def calculate(word_list):
    positive = []
    negative = []
    for i in range(len(word_list) - 3):
        if i == 0:
            positive.append(word_list[i])
        if word_list[i+1] == '-':
            negative.append(word_list[i+2])
        elif word_list[i+1] == '+':
            positive.append(word_list[i+2])
    return model.most_similar(positive=positive, negative=negative)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
