const skillsList = []
const workExperienceList = []
const educationList = []
const coursesList = []

const pdfGenerator = (data) => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.text("Olá, este é um PDF gerado com JavaScript!", 10, 10);
    pdf.save("meu-documento.pdf");
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const description = document.getElementById("description").value
    const image = document.getElementById("image").files[0]
    const website = document.getElementById("website").value
    const linkedin = document.getElementById("linkedin").value
    const github = document.getElementById("github").value

    const data = {
        name,
        email,
        phone,
        description,
        image,
        website,
        linkedin,
        github,
        skills: skillsList,
        workExperience: workExperienceList,
        education: educationList,
        courses: coursesList
    }

    console.log(data)

})


document.getElementById("add-skills").addEventListener("click", () => {
    const skill = document.getElementById("skills").value

    document.getElementById("skills-list").innerHTML = ``

    if (skill === "") {
        alert("Please fill the field")
    } else {
        skillsList.push(skill)

        skillsList.forEach((s) => {
            document.getElementById("skills-list").innerHTML += `
                <li>${s}</li>
            `
        })
    }


})

document.getElementById("add-work-experience").addEventListener("click", () => {
    const workExperienceTitle = document.getElementById("work-experience-title").value
    const workExperienceCompany = document.getElementById("work-experience-company").value
    const workExperienceDescription = document.getElementById("work-experience-description").value
    const workExperienceStartDate = document.getElementById("work-experience-start-date").value
    const workExperienceEndDate = document.getElementById("work-experience-end-date").value
    const workExperiencePresent = document.getElementById("work-experience-present").checked

    const workExperience = {
        title: workExperienceTitle,
        company: workExperienceCompany,
        description: workExperienceDescription,
        startDate: workExperienceStartDate,
        endDate: workExperienceEndDate,
        present: workExperiencePresent
    }

    document.getElementById("work-experience-list").innerHTML = ``

    if (workExperienceTitle === "") {
        alert("Please fill the fields")
    } else {
        workExperienceList.push(workExperience)

        workExperienceList.forEach((we) => {
            document.getElementById("work-experience-list").innerHTML += `
                <li>
                    <p>${we.title}</p>
                    <p>${we.company}</p>
                    <p>${we.description}</p>
                    <p>${we.startDate} - ${we.present ? "Present" : we.endDate}</p>
                </li>
            `
        })
    }
})


document.getElementById("add-education").addEventListener("click", () => {

    const educationTitle = document.getElementById("education-title").value
    const educationInstitution = document.getElementById("education-institution").value
    const educationDescription = document.getElementById("education-description").value
    const educationStartDate = document.getElementById("education-start-date").value
    const educationEndDate = document.getElementById("education-end-date").value
    const educationPresent = document.getElementById("education-present").checked

    const education = {
        title: educationTitle,
        institution: educationInstitution,
        description: educationDescription,
        startDate: educationStartDate,
        endDate: educationEndDate,
        present: educationPresent
    }

    document.getElementById("education-list").innerHTML = ``

    if (educationTitle === "") {
        alert("Please fill the fields")
    } else {
        educationList.push(education)

        educationList.forEach((e) => {
            document.getElementById("education-list").innerHTML += `
                <li>
                    <p>${e.title}</p>
                    <p>${e.institution}</p>
                    <p>${e.description}</p>
                    <p>${e.startDate} - ${e.present ? "Still Studying" : e.endDate}</p>
                </li>
            `
        })
    }


})


document.getElementById("add-courses").addEventListener("click", () => {

    const coursesTitle = document.getElementById("courses-title").value
    const coursesDescription = document.getElementById("courses-description").value
    const coursesStartDate = document.getElementById("courses-start-date").value
    const coursesEndDate = document.getElementById("courses-end-date").value
    const coursesPresent = document.getElementById("courses-present").checked

    const courses = {
        title: coursesTitle,
        description: coursesDescription,
        startDate: coursesStartDate,
        endDate: coursesEndDate,
        present: coursesPresent
    }

    document.getElementById("courses-list").innerHTML = ``

    if (coursesTitle === "") {
        alert("Please fill the fields")
    } else {
        coursesList.push(courses)

        coursesList.forEach((c) => {
            document.getElementById("courses-list").innerHTML += `
                <li>
                    <p>${c.title}</p>
                    <p>${c.description}</p>
                    <p>${c.startDate} - ${c.present ? "No expiration date" : c.endDate}</p>
                </li>
            `
        })
    }

})