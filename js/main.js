const courseName = document.getElementById('courseName')
const courseCategory = document.getElementById('courseCategory')
const coursePrice = document.getElementById('coursePrice')
const courseDescription = document.getElementById('courseDescription')
const data = document.getElementById('data')


const courses = [] // array is global

const createCorses = ()=>{


    const course = {
        Cname:courseName.value,
        Ccategory:courseCategory.value,
        Cprice:coursePrice.value,
        CDescription:courseDescription.value ,

    }
    
    courses.push(course)
    

    clearCourse()
    displayCourse()
    // clear()
}

const clearCourse  = ()=>{
    
 courseName.value = ""
    courseCategory.value =""
    coursePrice.value =""
   courseDescription.value ="" 


}




const displayCourse = ()=>{

let Result = ` `

    for(let i=0;i<courses.length;i++){

Result+=`

<tr>

            <th>${i}</th>
            <th>${courses[i].Cname}</th>
            <th>${courses[i].Ccategory}</th>
            <th>${courses[i].Cprice}</th>
            <th>${courses[i].CDescription}</th>
            <th><button class="edit"><i class="fas fa-edit"></i></button></th>
            <th><button class="delete" onclick="deleteCourse()" ><i class="fas fa-trash"></i></button> </th>

        </tr>

`
    }

data.innerHTML=Result

}



const deleteCourse = (id)=>{
    // console.log('done')
    
courses.splice(id,1)

    displayCourse()

}