function newStory() {
    var subject = [
        "little girl",
        "little boy",
        "reindeer",
        "apple",
        "elf"
    ]
    
    var personalPronoun = [
        "she",
        "he",
        "it",
        "it",
        "he",
    ]
    
    var possessivePronoun = [
        "her",
        "his",
        "its",
        "its",
        "his",
    ]

    var objectivePronoun = [
        "her",
        "him",
        "it",
        "it",
        "him",
    ]
    
    var subjectId = Math.floor(Math.random() * (subject.length));

    if (subject[subjectId].charAt(0) == "a"||"e"||"i"||"o"||"u") {
        var article = " an "
    } else {
        var article = " a "   
    }

    var opening = [
        'Once upon a time, there was' + article,
        'Long, long ago, in a forest far, far away, there was' + article,
        'Once upon a midnight dreary, there was' + article,    
    ]

    
    var randomNumber = Math.floor(Math.random() * (opening.length));
    var story = opening[randomNumber]
    story = story + subject[subjectId] + '. The ' + subject[subjectId]

    var motivation = [
        " was heading to grandma's house",
        " wanted to play with all the other reindeers",
        " wanted to work for Santa"
    ]

    var randomNumber = Math.floor(Math.random() * (motivation.length));
    story = story + motivation[randomNumber]

    
    var twist = [
        "there was a big bad wolf.",
        "the reindeers were mean to " + objectivePronoun[subjectId] + ".",
        personalPronoun[subjectId] + " was very ill.",
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
    story = story + " and " + resolution[randomNumber]

    document.getElementById('story').innerHTML = story
}

