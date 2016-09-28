// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Lineare Gliechungen 9 Realschule Quiz!!",
        "main":    "<p>Welcome to quiz.</p>",
        "results": "<h5>Learn More</h5><p>How do you like this quiz? I made it in 3 days :D</p>",
        "level1":  "wow. such skills",
        "level2":  "4 points? Try again :D",
        "level3":  "Uh... Get a better score, pls",
        "level4":  "Try again, please",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Wie viele Lösungen hat das Gleichungssystem? <br>-10m - 2n = -5|-100m - 20n = -50<br/>",
            "a": [
                {"option": "keine",      "correct": false},
                {"option": "ein Lösungspaar",     "correct": false},
                {"option": "unendlich viele",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span> Let's keep going!</p>",
            "incorrect": "<p><span>Uhh no.</span>You need to learn this better... </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Bestimme die Lösung!<br>|: 5=5x+2y ||:13=3x+2y<br/>",
            "a": [
                {"option": "L = {(-7/13)}",               "correct": false},
                {"option": "L = {(-4/12,5)}",   "correct": true},
                {"option": "L = {(-76/189)}",               "correct": false},
                {"option": "L = {(4/-12,5)}", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Can you make it all?</p>",
            "incorrect": "<p><span>Hmmm.</span> Sry mate but U made mistake.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Dieses Lineare Gleichungssystem hat unendlich viele Lösungen. Welche? <br>4x - y = -116x  |4y = -4<br/>",
            "a": [
                {"option": "y = 2",           "correct": false},
                {"option": "y = 4x + 1",                  "correct": true},
                {"option": "-y = 1 - 4x",  "correct": false}
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span>Answer is not right, sry. </p>" // no comma here
        },
        { // Question 4
            "q": "Wie viele Lösungen hat das Gleichungssystem?<br> -7a + 8b = -14|28a - 32b = 56<br/>",
            "a": [
                {"option": "keine",    "correct": false},
                {"option": "genau ein Lösungspaar",     "correct": true},
                {"option": "unendlich viele",      "correct": false}
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose.</p>" // no comma here
        },
        { // Question 5
            "q": "Wie viele Lösungen hat das Gleichungssystem? <br>-8a + 9b = 17|a - 9b = -73<br/>",
            "a": [
                {"option": "keine",    "correct": false},
                {"option": "genau ein Lösungspaar",     "correct": true},
                {"option": "unendlich viele",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> How can't <em>you</em> know that?!?</p>" // no comma here
        } // no comma here
    ]
};
