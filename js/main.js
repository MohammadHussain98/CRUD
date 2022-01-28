const courseName = document.getElementById('courseName')
const courseCategory = document.getElementById('courseCategory')
const coursePrice = document.getElementById('coursePrice')
const courseDescription = document.getElementById('courseDescription')


const courses = [] // array is global

const createCorses = ()=>{


    const course = {
        Cname:courseName.value,
        Ccategory:courseCategory.value,
        Cprice:coursePrice.value,
        CDescription:courseDescription.value ,

    }
    
    courses.push(course)
    
    console.log(courses)

    clearCourse()
}

const clearCourse  = ()=>{
    
    Cname=courseName.value = ""
    Ccategory=courseCategory.value =""
    Cprice=coursePrice.value =""
    CDescription=courseDescription.value ="" 


}