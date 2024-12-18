//generate prefix//
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The Great'
    } else {
        return 'Master'
    }
}
//generate first name// 
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Bobby'
    } else if (firstLetter === 'b') {
        return 'Paul'
    } else if (firstLetter === 'c') {
        return 'Hank'
    } else if (firstLetter === 'd') {
        return 'Johnothan'
    } else if (firstLetter === 'e') {
        return 'Alexander'
    } else if (firstLetter === 'f') {
        return 'Jaquavious'
    } else if (firstLetter === 'g') {
        return 'Frank'
    } else if (firstLetter === 'h') {
        return 'Garry'
    } else if (firstLetter === 'i') {
        return 'Larry'
    } else if (firstLetter === 'j') {
        return 'Phinneas'
    } else if (firstLetter === 'k') {
        return 'Ferb'
    } else if (firstLetter === 'l') {
        return 'Squidward'
    } else if (firstLetter === 'm') {
        return 'Spongebob'
    } else if (firstLetter === 'o') {
        return 'Patrick'
    } else if (firstLetter === 'p') {
        return 'Wyatt'
    } else if (firstLetter === 'q') {
        return 'Hank'
    } else if (firstLetter === 'r') {
        return 'James'
    } else if (firstLetter === 's') {
        return 'Joseph'
    } else if (firstLetter === 't') {
        return 'Umar'
    } else if (firstLetter === 'u') {
        return 'Seth'
    } else if (firstLetter === 'v') {
        return 'Zachary'
    } else if (firstLetter === 'w') {
        return 'Soren'
    } else if (firstLetter === 'x') {
        return 'William'
    } else if (firstLetter === 'y') {
        return 'Squilliam'
    } else if (firstLetter === 'z') {
        return 'Quinnen'
    }
}

//generate middle name//
function genMiddleName(roadType, favColor) {
    switch (roadType) {
        case 'road':
            return `${favColor}ridge`; // ex: blueridge
        case 'street':
            return `${favColor}son`; // ex: blueson
        case 'drive':
            return `${favColor}man`; // ex: blueman
        case 'avenue':
            return `${favColor}berry`; // ex: blueberry
        case 'other':
            return `${favColor}buddy`; // ex: bluebuddy
        default:
            return ''; // or some other default value if needed
    }

}

//gen last name//
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a') {
        return 'Storm'
    } else if (lastLetter === 'b') {
        return 'Shadow'
    } else if (lastLetter === 'c') {
        return 'Lightning'
    } else if (lastLetter === 'd') {
        return 'Rose'
    } else if (lastLetter === 'e') {
        return 'Thorn'
    } else if (lastLetter === 'f') {
        return 'Snow'
    } else if (lastLetter === 'g') {
        return 'Frost'
    } else if (lastLetter === 'h') {
        return 'Hurricane'
    } else if (lastLetter === 'i') {
        return 'Tornado'
    } else if (lastLetter === 'j') {
        return 'Flash'
    } else if (lastLetter === 'k') {
        return 'Moon'
    } else if (lastLetter === 'l') {
        return 'Sun'
    } else if (lastLetter === 'm') {
        return 'Pluto'
    } else if (lastLetter === 'n') {
        return 'Cloud'
    } else if (lastLetter === 'o') {
        return 'Isometric'
    } else if (lastLetter === 'p') {
        return 'Sky'
    } else if (lastLetter === 'q') {
        return 'Awais'
    } else if (lastLetter === 'r') {
        return 'SkootleBob'
    } else if (lastLetter === 's') {
        return 'Skuttlebutt'
    } else if (lastLetter === 't') {
        return 'DoodleBob'
    } else if (lastLetter === 'u') {
        return 'Jerry'
    } else if (lastLetter === 'v') {
        return 'McBadGuy'
    } else if (lastLetter === 'w') {
        return '(Son of Batman)'
    } else if (lastLetter === 'x') {
        return 'Robbery'
    } else if (lastLetter === 'y') {
        return 'Arson'
    } else if (lastLetter === 'z') {
        return 'Mangione'
    }
}

//generTE SUFFIX//
function genSuffix(favAnimal) {
    return `, of the ${favAnimal} clan.`
}

//master name build function//
function genFullName() {
    //get users inputs from the html elements//
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favColor = document.getElementById('favColor').value.trim()
    const favAnimal = document.getElementById('favAnimal').value.trim()
    //run name generating functions and store them as new variables//
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favAnimal)
    //capitalize name varaibles when needed//
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFirstName = capitalize(newFirstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedLastName = capitalize(newLastName)
    //combine all the name variables into a full sentence//
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName}${suffix}`
    //display new name//
    document.getElementById('result').textContent = fullName
}
//capitalize function//
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}