// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Lineare Gliechungen System 9 klasse Butzbach Stadtschule Quiz!!",
        "main":    "<p>WELCOME</p>",
        "results": "<h5>Learn More</h5><p>Wie gefällt es Ihnen?</p>",
        "level1":  "Sehr gut",
        "level2":  "Gut",
        "level3":  "Nicht so gut",
        "level4":  "Schlecht",
        "level5":  "..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Wie viele Lösungen hat das Gleichungssystem? <br>-10m - 2n = -5|-100m - 20n = -50<br/>",
            "a": [
                {"option": "keine",      "correct": false},
                {"option": "ein Lösungspaar",     "correct": false},
                {"option": "unendlich viele",      "correct": true}
            ],
            "correct": "<p><span>Richtig!</span>Lasst uns weitergehen!</p>",
            "incorrect": "<p><span>Uhh nein.</span>Sie müssen diese besser zu lernen ... </p>" // no comma here
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
            "correct": "<p><span>Gut!</span>Können Sie das machen alles?</p>",
            "incorrect": "<p><span>Hmmm.</span> Sry mate but U made mistake.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Dieses Lineare Gleichungssystem hat unendlich viele Lösungen. Welche? <br>4x - y = -116x  |4y = -4<br/>",
            "a": [
                {"option": "y = 2",           "correct": false},
                {"option": "y = 4x + 1",                  "correct": true},
                {"option": "-y = 1 - 4x",  "correct": false}
            ],
            "correct": "<p><span>Brilliant!</span> Du bist sehr intelegent!</p>",
            "incorrect": "<p><span>Nein.</span>... </p>" // no comma here
        },
        { // Question 4
            "q": "Wie viele Lösungen hat das Gleichungssystem?<br> -7a + 8b = -14|28a - 32b = 56<br/>",
            "a": [
                {"option": "keine",    "correct": false},
                {"option": "genau ein Lösungspaar",     "correct": true},
                {"option": "unendlich viele",      "correct": false}
            ],
            "correct": "<p><span>Holy bananas!</span>Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sry...</p>" // no comma here
        },
        { // Question 5
            "q": "Wie viele Lösungen hat das Gleichungssystem? <br>-8a + 9b = 17|a - 9b = -73<br/>",
            "a": [
                {"option": "keine",    "correct": false},
                {"option": "genau ein Lösungspaar",     "correct": true},
                {"option": "unendlich viele",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span>Sie müssen sehr aufmerksam sein!</p>",
            "incorrect": "<p><span>ERRRR!</span> Wie kannst <em>DU</em> das nicht wissen?!?</p>" // no comma here
        } // no comma here
    ]
};
