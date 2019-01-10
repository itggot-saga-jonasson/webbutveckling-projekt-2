function newStory() {
    var subjectId = Math.floor(Math.random() * (subject.length));
    
    if (subject[subjectId].charAt(0) == "a"||"e"||"i"||"o"||"u") {
        var article = " an "
    } else {
        var article = " a "   
    }


    var randomNumber = Math.floor(Math.random() * (opening.length));
    var story = opening[randomNumber]
    var subjectId = Math.floor(Math.random() * (subject.length));
    story = story + subject[subjectId] + '. The ' + subject[subjectId]
    var randomNumber = Math.floor(Math.random() * (motivation.length));
    story = story + motivation[randomNumber]
    var randomNumber = Math.floor(Math.random() * (twist.length));
    story = story + " but " + twist[randomNumber]

    document.getElementById('story').innerHTML = story

}

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


var opening = [
    'Once upon a time, there was' + article,
    'Long, long ago, in a forest far, far away, there was' + article,
    'Once upon a midnight dreary, there was' + article,    
]

var motivation = [
    " was heading to grandma's house",
    " wanted to play with all the other reindeers",
    " wanted to work for santa"
]

var twist = [
    "there was a big bad wolf.",
    "the reindeers were mean to " + personalPronoun[subjectId],
    "the " + subject[subjectId] + " was ill.",
]