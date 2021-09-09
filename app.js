let min = 25; 
let sec = 00;

let click_sound = new Audio('/file.mp3/Mouse-Click-03-c-FesliyanStudios.com.mp3');
let rain_sound = new Audio('/file.mp3/Rain.mp3');

let playBtn = document.getElementById('play');
let resetBtn = document.getElementById('reset');

document.querySelector('.minutes').innerHTML = min;
document.querySelector('.seconds').innerHTML = sec;



    playBtn.addEventListener('click', start); //function starts

        
    
    let rainBtn = document.querySelector('.rain-btn');
    rainBtn.addEventListener('click', ()=>{
        rainBtn.classList.toggle('play-pause');
        console.log(rainBtn);
        if(rainBtn.classList.contains('play-pause')){
            rain_sound.play();
            
        }else{
            rain_sound.pause();
        }

    })


    



    function start(){ 
    
        // reinitialized 
        min = 24;
        sec = 59;

        click_sound.play();
        
       
    
        //display
        document.querySelector('.minutes').innerHTML = min;
        document.querySelector('.seconds').innerHTML = sec;

     

        let minute_interval = setInterval(timeMi, 60000);
        let second_interval = setInterval(timeSe, 1000); 

    // minute and seconds counter 
    function timeMi(){  
        min = min - 1;
        document.querySelector('.minutes').innerHTML = min;
    }


    function timeSe(){
       sec = sec - 1;
       document.querySelector('.seconds').innerHTML = sec;
       
    
        if(sec <= 0 && min <= 0){
            clearInterval(second_interval);   
        }else if(sec <= 0){
            sec = 60;
        }

        if(min <= 0){
            clearInterval(minute_interval);
        }
    
    }

    
    resetBtn.addEventListener('click', resetFunc)

   

    function resetFunc(){
        min = 25;
        sec = 00;
        document.querySelector('.minutes').innerHTML = min;
        document.querySelector('.seconds').innerHTML = sec;
       
        clearInterval(minute_interval);
        clearInterval(second_interval);

        
            
        
   }

    
    }

   

    
    
    
    


  
    

    

    


     
     

    



 




