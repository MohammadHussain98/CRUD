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
}

const clearCourse  = ()=>{
    
    Cname=courseName.value = ""
    Ccategory=courseCategory.value =""
    Cprice=coursePrice.value =""
    CDescription=courseDescription.value ="" 


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
        

        </tr>

`
    }

data.innerHTML=Result

}