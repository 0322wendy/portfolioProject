// Animated Text
function updateText(text){

    let delay = 300;
    
        let h1 = document.getElementById("animated");
    
          h1.innerHTML = text
            .split("")
            .map(letter => {
              console.log(letter);
              return `<span>` + letter + `</span>`;
            })
            .join("");
    
          Array.from(h1.children).forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("wavy");
            }, index * 40 + delay);
          });
    
    }
    
    updateText("scroll down");
