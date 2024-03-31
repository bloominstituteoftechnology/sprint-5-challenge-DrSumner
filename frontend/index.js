//const { default: axios } = require("axios")

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

 let mentorlist = []

 axios
 .get('http://localhost:3003/api/mentors')
 .then((res) => {
   console.log(res.data)
   mentorlist = res.data
 });
 
axios
.get('http://localhost:3003/api/learners')
.then((res) => {
  console.log(res)
  res.data.forEach(el => {
    const div = document.createElement('div')
    div.classList = 'card'
    document.querySelector('.cards').appendChild(div)

    const name = document.createElement('h3')
    name.textContent = el.fullName
   
    div.appendChild(name)

    const email = document.createElement('div')
    email.textContent = el.email
    div.appendChild(email)

    const mentorHolder = document.createElement('h4')
    mentorHolder.textContent = 'Mentors'
    mentorHolder.classList = 'closed'
    mentorHolder.addEventListener('click', evt => {
      if(mentorHolder.className === 'closed'){
        mentorHolder.className = 'open'
      }

      else if(mentorHolder.className === 'open'){
        mentorHolder.className = 'closed'
      }
    })
    div.appendChild(mentorHolder)

    const mentors = document.createElement('ul')
    div.appendChild(mentors)
    el.mentors.forEach( mentor => {
      const mentorname = document.createElement('li')
      
      mentors.appendChild(mentorname)

      for(let i in mentorlist){
        if (mentor === mentorlist[i].id){
          mentorname.textContent = `${mentorlist[i].firstName} ${mentorlist[i].lastName}`
        }
      }
    })
    

    div.addEventListener('click', evt =>{
      console.log(evt.target)
      

      if(div.classList[1] === 'selected') {
        if(evt.target !== div.querySelector('h4'))
         { div.classList.remove('selected')
          name.textContent = el.fullName}
          infoCard.textContent = 'No learner is selected'
        }

      else if(div.classList[1] !== 'selected'){
        if(document.querySelector('.selected') !== null){
        document.querySelector('.selected').classList.remove('selected')
      }
        div.classList.add('selected')
      name.textContent = `${el.fullName}, ID ${el.id}`
      infoCard.textContent = `The selected learner is ${el.fullName}`
    } 
    
    
    })

    infoCard.textContent = 'No learner is selected'
  });
  
});
const infoCard = document.querySelector('.info')
    console.log(infoCard)


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
