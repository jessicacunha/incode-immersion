function groupFamilies(people) {
    var byFamily = {}
    for (const person of people) {
        if (byFamily[person.surname] === undefined) {
            byFamily[person.surname] = []
        }
        byFamily[person.surname].push(person.name)
    }
    console.log(byFamily)
}

groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}])
groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}])