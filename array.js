
function isTeacher(userInputName, teachers) {
    for (const teacher of teachers) {
        if (teacher === userInputName) {
            return true
        } 
    }

    return false
}

const teacherArray = [ 'todd', 'Jonathon','Zach', 'Manny','Ahmed'];
console.log(isTeacher('Ahmed', teacherArray))

// if (checkForTeacher === true){
//     return ('This is true')
    
// } else return ('this is false')
// }
// console.log(checkArray())
