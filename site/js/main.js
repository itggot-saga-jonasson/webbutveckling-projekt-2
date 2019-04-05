function newStory() {
    var subject = [
        "little girl",
        "little boy",
        "reindeer",
        "apple",
        "elf",
        "turkey",
        "gnome",
        "fox",
        "orphan"
    ]

    var pluralSubject = [
        "little girls",
        "little boys",
        "reindeers",
        "apples",
        "elves",
        "turkeys",
        "gnomes",
        "foxes",
        "orphans"
    ]
    
    var personalPronoun = [
        "she",
        "he",
        "it",
        "it",
        "he",
        "it",
        "he",
        "it",
        "they"
    ]
    
    var possessivePronoun = [
        "her",
        "his",
        "its",
        "its",
        "his",
        "its",
        "his",
        "its",
        "their"
    ]

    var objectivePronoun = [
        "her",
        "him",
        "it",
        "it",
        "him",
        "it",
        "him",
        "it",
        "them"
    ]
    
    var subjectId = Math.floor(Math.random() * (subject.length));

    let vowels = "aeiou"
    if (vowels.includes(subject[subjectId].charAt(0))) {
        var article = " an "
    } else {
        var article = " a "
    }

    var opening = [
        'Once upon a time,',
        'Long, long ago, in a forest far, far away,',
        'Once upon a midnight dreary,',
        "'Twas the night before Christmas, and inside a small house",
        "Once,",
        "Once, in a small kingdom far, far away,"
    ]

    
    var randomNumber = Math.floor(Math.random() * (opening.length));
    var story = opening[randomNumber] + " there was" + article,
    story = story + subject[subjectId] + '. The ' + subject[subjectId]

    var motivation = [
        " was heading to grandma's house",
        " wanted to play with all the other " + pluralSubject[subjectId],
        " wanted to work for Santa",
        " wanted a red bike for Christmas",
        " was heading to Mordor",
        " wanted to eat pizza",
        " wanted snow for Christmas",
        " wished to find" + possessivePronoun[subjectId] + "parents"
    ]

    var randomNumber = Math.floor(Math.random() * (motivation.length));
    story = story + motivation[randomNumber]

    
    var twist = [
        "there was a big bad wolf.",
        "the reindeers were mean to " + objectivePronoun[subjectId] + ".",
        personalPronoun[subjectId] + " was very ill.",
        "hunting season was in full swing and " + pluralSubject[subjectId] + " were wanted for people's Christmas dinners.",
        personalPronoun[subjectId] + " was on Santa's naughty list.",
        "a zombie plague ravaged the land.",
        personalPronoun[subjectId] + " was being taken to Isengard instead.",
        "a snowstorm kept " + objectivePronoun[subjectId] + " locked inside " + possessivePronoun[subjectId] + " house.",
        "global warming had melted the icecaps.",
        possessivePronoun[subjectId] + " friends had been taken to Isengard."
    ]

    var randomNumber = Math.floor(Math.random() * (twist.length));
    story = story + " but " + twist[randomNumber]

    var action = [
        " traded " + possessivePronoun[subjectId] + " basket of goodies to the devil for safe passage",
        " decided to punch Santa Claus in the face for presents",
        " developed a glowing nose and led Santa's sleigh on Christmas Eve",
        " saw three ghosts on Christmas Eve",
        " worked very hard to become good again",
        " went to college to study magic",
        " was saved by the power of friendship",
        " failed at saving " + possessivePronoun[subjectId] + " friends",
        " stopped burning fossil fuels"
    ]

    var randomNumber = Math.floor(Math.random() * (action.length));
    story = story + " In the end, the " + subject[subjectId] + action[randomNumber]

    var resolution = [
        "lived happily ever after.",
        "died alone and forgotten.",
        "went to wonderland.",
        "became the ruler of hell.",
        "took over the North Pole and became the new Santa Claus.",
        "stole Christmas.",
        "fell into a volcano and died a horrible death.",
        "defeated the Dark Lord.",
        personalPronoun[subjectId] + " got kidnapped.",
        "the earth was saved."
    ]

    var randomNumber = Math.floor(Math.random() * (resolution.length));
    story = story + " and then " + resolution[randomNumber]

    document.getElementById('story').innerHTML = story
}

