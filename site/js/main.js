function newStory() {
    var subject = [
        "little girl",
        "little boy",
        "reindeer",
        "apple",
        "elf",
        "turkey",
    ]
    
    var personalPronoun = [
        "she",
        "he",
        "it",
        "it",
        "he",
        "it",
    ]
    
    var possessivePronoun = [
        "her",
        "his",
        "its",
        "its",
        "his",
        "its",
    ]

    var objectivePronoun = [
        "her",
        "him",
        "it",
        "it",
        "him",
        "it",
    ]
    
    var article = [ " an ", " a "]
    var subjectId = Math.floor(Math.random() * (subject.length));

    if (subject[subjectId].charAt(0) == "a"||"e"||"i"||"o"||"u") {
        console.log("hey it's an");
        articleNum = 0
    } else {
        articleNum = 1 
        console.log("hey it's a");
    }

    var opening = [
        'Once upon a time,',
        'Long, long ago, in a forest far, far away,',
        'Once upon a midnight dreary,',
        "'Twas the night before Christmas, and inside a small house"
    ]

    
    var randomNumber = Math.floor(Math.random() * (opening.length));
    var story = opening[randomNumber] + " there was" + article[articleNum],
    story = story + subject[subjectId] + '. The ' + subject[subjectId]

    var motivation = [
        " was heading to grandma's house",
        " wanted to play with all the other reindeers",
        " wanted to work for Santa",
        " wanted a red bike for Christmas"
    ]

    var randomNumber = Math.floor(Math.random() * (motivation.length));
    story = story + motivation[randomNumber]

    
    var twist = [
        "there was a big bad wolf.",
        "the reindeers were mean to " + objectivePronoun[subjectId] + ".",
        personalPronoun[subjectId] + " was very ill.",
        "hunting season was in full swing and " + subject[subjectId] + "s were wanted for people's Christmas dinners.",

    ]

    var randomNumber = Math.floor(Math.random() * (twist.length));
    story = story + " but " + twist[randomNumber]

    var action = [
        " traded " + possessivePronoun[subjectId] + " basket of goodies to the devil for safe passage",
        " decided to punch Santa Claus in the face for presents",
        " developed a glowing nose and led Santa's sleigh",
        " saw three ghosts on Christmas Eve"
    ]

    var randomNumber = Math.floor(Math.random() * (action.length));
    story = story + " The " + subject[subjectId] + action[randomNumber]

    var resolution = [
        "lived happily ever after.",
        "died alone and forgotten.",
        "went to wonderland.",
        "became the ruler of hell.",
        "took over the North Pole and became the new Santa Claus.",
        "stole Christmas."
    ]

    var randomNumber = Math.floor(Math.random() * (resolution.length));
    story = story + " and then " + resolution[randomNumber]

    document.getElementById('story').innerHTML = story
}

