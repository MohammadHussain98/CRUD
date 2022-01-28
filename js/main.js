const courseName = document.getElementById('courseName')
const courseCategory = document.getElementById('courseCategory')
const coursePrice = document.getElementById('coursePrice')
const courseDescription = document.getElementById('courseDescription')


const arr = []
const createCorses = function(){
    // console.log('done');

    const courses = {
        Cname:courseName.value,
        Ccategory:courseCategory.value,
        Cprice:coursePrice.value,
        CDescription:courseDescription.value ,

    }
    // console.log(courses)

arr.push(courses)

}

