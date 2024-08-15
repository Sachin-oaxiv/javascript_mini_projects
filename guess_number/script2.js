const guessed = document.getElementById("num")
        const result = document.getElementById("result")

        function guess()
        {
          const mynum = Number(guessed.value)
          const ran = Math.floor(Math.random()*10 +1)
          console.log(ran)
          
          if(mynum==ran)
          {
            result.textContent= "You are right"
          }
          else
          {
            result.textContent="You are wrong"
          }
        }