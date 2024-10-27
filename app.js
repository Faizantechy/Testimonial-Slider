


const testimonialContainer=document.querySelector('.testimonial-container')
const textContainer=document.querySelector('.text-container')

const text=document.querySelector('.text')
const name=document.querySelector('.name')
const container=document.querySelector('.Container')




let data=[{name:'John Oberoi',text:'Working with this team has been an absolute pleasure. Their dedication and expertise are truly unmatched.',img:'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'},

    {name:' -Michael Williams',text:"Working with this team has been an absolute pleasure. Their dedication and expertise are truly unmatched.",img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'},

    {name:'-Emily Davis',text:"Their professionalism and dedication to our project were outstanding.The end result was better than I could have imagined.",img:'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'},

    {name:' -Daniel Brown',text:"I've never worked with a more dedicated and talented team.Their creativity and problem-solving skills are unparalleled.",img:'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFBvcnRyYWl0fGVufDB8fDB8fHww'},

    {name:' -Jessica Taylor',text:"They delivered on time and went above and beyond our expectations.Their commitment to quality and excellence is remarkable.",img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fFBvcnRyYWl0fGVufDB8fDB8fHww'},

    {name:' -Amanda Anderson',text:"From start to finish, the entire process was smooth and efficient.Their professionalism made everything stress-free for us.",img:'https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFBvcnRyYWl0fGVufDB8fDB8fHww'},

]


let info='';


data.forEach(function(val, index) {
    setTimeout(() => {
        info = `
            <div class="img-container">
                <img src="${val.img}" alt="" class="img">
            </div>
            <div class="testimonial-container">
                <div class="text-container">
                    <p class="text">${val.text}</p>
                    <span class="name">${val.name}</span>
                </div>
            </div>
        `;
        container.innerHTML = info;
    }, index * 2000); // increment delay by 2 seconds for each testimonial
});














