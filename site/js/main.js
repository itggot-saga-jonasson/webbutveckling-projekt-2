subjectId = 1

function newStory() {
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

var opening = [
    'Once upon a time, there was a ',
    'Long, long ago, in a forest far, far away, there was a ',
    'Once upon a midnight dreary, there was a '    
]

var subject = [
    "little girl",
    "little boy",
    "reindeer",
    "apple"
]

var motivation = [
    " was heading to grandma's house",
    " wanted to play with all the other reindeers"
]

var twist = [
    `the ${subject[subjectId]} was ill.`,
    "there was a big bad wolf."
]