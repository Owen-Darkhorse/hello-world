from flask import Flask, render_template, send_file, request

app = Flask(__name__)

social_links = {"Facebook":"https://www.facebook.com/owen.wang.12764",
                "Instagram":"https://www.instagram.com/jingxinwang25/",
                "LinkedIn":"https://www.linkedin.com/in/jingxin-wang-9144161a7/"}

@app.route('/',methods=["GET", "POST"])
def index():
    if request.method == "POST":
        #with open('137 Final Exam F18.pdf', 'rb') as f:   
        return send_file("137 Final Exam F18.pdf", attachment_filename = "Owen's Resume.pdf",\
                as_attachment = True)
    else:
        return render_template("home page.html", links = social_links)
	
if __name__ == '__main__':
	app.run(debug=True, host='127.0.0.1')
