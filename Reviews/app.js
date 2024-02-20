// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    // {
    //     id: 5,
    //     name: 'Sarah Jones',
    //     job: 'UX Designer',
    //     // img: 'person-1.jpeg',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',
    //   },
  ];

  const pre = document.querySelector(".prev-btn");
  const next= document.querySelector(".next-btn");
  const random = document.querySelector(".random-btn");
  let id=0;

  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const img= document.getElementById("person-img");
  var imagePath="person-1.jpeg"
  
  window.addEventListener('DOMContentLoaded', function () {
    img.src = imagePath;
    author.textContent = "Sarah Jones";
    job.textContent = "UX Designer";
    info.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?";
  });

  pre.addEventListener("click", ()=>{
    if(id===0){
        id=3
    }
    else{
        id-=1;
    }
    author.textContent= reviews[id].name;
    job.textContent= reviews[id].job;
    info.textContent=reviews[id].text;
    img.src=reviews[id].img;
  })

  next.addEventListener("click", ()=>{
    if(id===3){
        id=0
    }
    else{
        id+=1;
    }
    author.textContent= reviews[id].name;
    job.textContent= reviews[id].job;
    info.textContent=reviews[id].text;
    img.src=reviews[id].img;
  })

  random.addEventListener("click", ()=>{
    id= Math.floor(Math.random()*reviews.length);
    author.textContent= reviews[id].name;
    job.textContent= reviews[id].job;
    info.textContent=reviews[id].text;
    img.src=reviews[id].img;
  })