// Declare your genre arrays here
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let Click = document.querySelector(".Click");
let result = document.querySelector(".result");
let  submit = document.querySelector(".submit");
// Make sure to declare your HTML elements as variables! 



// Submit Button 

let comedy = ["https://upload.wikimedia.org/wikipedia/en/b/ba/Crazy_Rich_Asians_poster.png", "https://upload.wikimedia.org/wikipedia/en/0/00/KungFuHustleHKposter.jpg", "https://www.themoviedb.org/t/p/w500/1EnBjTJ5utgT1OXYBZ8YwByRCzP.jpg"]

let action = ["https://imageio.forbes.com/specials-images/imageserve/5df7eb064e291700078331e0/0x0.jpg?format=jpg&crop=1380,776,x0,y0,safe&width=1200", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Uncharted_Official_Poster.jpg/220px-Uncharted_Official_Poster.jpg", "https://ntvb.tmsimg.com/assets/p21252841_v_h8_aa.jpg?w=1280&h=720"]

let drama = ["https://m.media-amazon.com/images/M/MV5BNzJmMjg3MDMtNTg0Yy00NjA4LWI2MGMtYmRlZjliNTc3ZjIyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"]

let  submitButton = document.querySelector("button");
submitButton.onclick = function() {
let movies = input1.value;
  console.log(movies)
  if (movies === "drama"){
    result.innerHTML=""
    for(let movie of drama){
      result.insertAdjacentHTML("afterbegin", "<img src=" + movie + ">");
    }
  }  else if(movies === "action") {
    result.innerHTML=""
    for(let movie of action){
      result.insertAdjacentHTML("afterbegin", "<img src=" + movie + ">");
    }
  } else if(movies === "comedy") {
    result.innerHTML=""
    for(let movie of comedy){
      result.insertAdjacentHTML("afterbegin", "<img src=" + movie + ">");
    }
  }
};

let suggestButton = document.querySelector(".Click");
suggestButton.onclick = function(){
  let suggest = input2.value;
  
  comedy.push(suggest);
  console.log(comedy);

  action.push(suggest);
  console.log(comedy);

  drama.push(suggest);
  console.log(comedy);
  };