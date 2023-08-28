const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();
const grid = [16, 15];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

container.appendChild(fragment)

let tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});



tl.to(".container div",
      {
        scale: 0.5,
        duration: 0.5,
        stagger: {
           amount: 1,
           grid,
           from: "center",
         }
      })
      .to(".container div", 
       {
          scaleY: 0.1,
          scaleX: 1,
          duration: 0.5
       })
      .to(".container div", 
       {
          rotation: gsap.utils.distribute({
                      base: 0.5,
                      amount: -90,
                      grid,
                      from: "center"
          }),
          stagger: {
            amount: 1,
            grid,
            from: "center",
           }
       })
       .to(".container div",
        {
            rotate: 180,
            stagger: {
              amount: 1,
              grid,
              from: "center",
            }
        })
        .to(".container div",
         {  
            scaleY: 1
         })