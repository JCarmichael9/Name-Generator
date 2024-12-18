// Generate Christmas-themed prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'Elf'
    } else {
        return 'Frosty'
    }
}

// Generate Christmas-themed first name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Tinsel'
    } else if (firstLetter === 'b') {
        return 'Jingle'
    } else if (firstLetter === 'c') {
        return 'Blitzen'
    } else if (firstLetter === 'd') {
        return 'Rudy'
    } else if (firstLetter === 'e') {
        return 'Icicle'
    } else if (firstLetter === 'f') {
        return 'Frosty'
    } else if (firstLetter === 'g') {
        return 'Gingerbread'
    } else if (firstLetter === 'h') {
        return 'Holly'
    } else if (firstLetter === 'i') {
        return 'Ivy'
    } else if (firstLetter === 'j') {
        return 'Jolly'
    } else if (firstLetter === 'k') {
        return 'Kringle'
    } else if (firstLetter === 'l') {
        return 'Snowflake'
    } else if (firstLetter === 'm') {
        return 'Mistletoe'
    } else if (firstLetter === 'o') {
        return 'Noel'
    } else if (firstLetter === 'p') {
        return 'Pine'
    } else if (firstLetter === 'q') {
        return 'Quince'
    } else if (firstLetter === 'r') {
        return 'Rudolph'
    } else if (firstLetter === 's') {
        return 'Snowball'
    } else if (firstLetter === 't') {
        return 'Tinsel'
    } else if (firstLetter === 'u') {
        return 'Underwood'
    } else if (firstLetter === 'v') {
        return 'Vixen'
    } else if (firstLetter === 'w') {
        return 'Winter'
    } else if (firstLetter === 'x') {
        return 'Xmas'
    } else if (firstLetter === 'y') {
        return 'Yule'
    } else if (firstLetter === 'z') {
        return 'Ziggy'
    }
}

// Generate Christmas-themed middle name
function genMiddleName(roadType, favColor) {
    switch (roadType) {
        case 'dasher':
            return `${favColor}snow`; // ex: redsnow
        case 'dancer':
            return `${favColor}twirl`; // ex: greentwirl
        case 'prancer':
            return `${favColor}jingle`; // ex: bluejingle
        case 'vixen':
            return `${favColor}glow`; // ex: goldglow
        case 'comet':
            return `${favColor}shine`; // ex: whiteshine
        case 'cupid':
            return `${favColor}heart`; // ex: redheart
        case 'donner':
            return `${favColor}blaze`; // ex: orangeblaze
        case 'blitzen':
            return `${favColor}flash`; // ex: purpleflash
        case 'rudolph':
            return `${favColor}nose`; // ex: greennose
        default:
            return ''; // or some other default value if needed
    }
}

// Generate Christmas-themed last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a') {
        return 'Snow'
    } else if (lastLetter === 'b') {
        return 'Blizzard'
    } else if (lastLetter === 'c') {
        return 'Holly'
    } else if (lastLetter === 'd') {
        return 'Jingle'
    } else if (lastLetter === 'e') {
        return 'Frost'
    } else if (lastLetter === 'f') {
        return 'Winter'
    } else if (lastLetter === 'g') {
        return 'Ice'
    } else if (lastLetter === 'h') {
        return 'Elf'
    } else if (lastLetter === 'i') {
        return 'Mistletoe'
    } else if (lastLetter === 'j') {
        return 'Santa'
    } else if (lastLetter === 'k') {
        return 'Kringle'
    } else if (lastLetter === 'l') {
        return 'Noel'
    } else if (lastLetter === 'm') {
        return 'Tinsel'
    } else if (lastLetter === 'n') {
        return 'Snowflake'
    } else if (lastLetter === 'o') {
        return 'Reindeer'
    } else if (lastLetter === 'p') {
        return 'Yule'
    } else if (lastLetter === 'q') {
        return 'Gingerbread'
    } else if (lastLetter === 'r') {
        return 'Candycane'
    } else if (lastLetter === 's') {
        return 'Icicle'
    } else if (lastLetter === 't') {
        return 'Frostbite'
    } else if (lastLetter === 'u') {
        return 'Star'
    } else if (lastLetter === 'v') {
        return 'Vixen'
    } else if (lastLetter === 'w') {
        return 'Snowball'
    } else if (lastLetter === 'x') {
        return 'Tinsel'
    } else if (lastLetter === 'y') {
        return 'Jolly'
    } else if (lastLetter === 'z') {
        return 'Peppermint'
    }
}

// Generate Christmas-themed suffix
function genSuffix(favAnimal) {
    return `, the ${favAnimal} cook.`
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

//christmas lights that i copied from https://www.balbooa.com/help/tutorials/coding/interactions/christmas-lights-animation//

}

let christmas = {
    delay: null,
    delete: function(){
        document.body.querySelectorAll('.christmas-lights').forEach(function(ul){
            ul.remove();
        });
    },
    create: function(){
        let v = window.innerHeight / 60 + 2,
            h = window.innerWidth / 60 + 2,
            data = {
                'top': h,
                'right': v,
                'bottom': h,
                'left': v
            },
            ul = c = null;
        for (let position in data) {
            c = data[position];
            ul = document.createElement('ul');
            ul.className = 'christmas-lights';
            ul.dataset.position = position;
            for (let i = 0; i <= c; i++) {
                ul.append(document.createElement('li'));
            }
            document.body.append(ul);
        }
    }
}
 
document.addEventListener('DOMContentLoaded', function(){
    christmas.create();
});
 
window.addEventListener('resize', function(e) {
    clearTimeout(christmas.delay);
    christmas.delay = setTimeout(function(){
        christmas.delete();
        christmas.create();
    }, 100)
});