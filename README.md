# passwordgenerator-w3

 var questions = []; 
        questions.push( {  
            question: "Pumpkins are orange",
            answer: true
        });
        questions.push( { 
            question: "MiniCoopers are made by BMW",
            answer: true
        });
        
        var score = 0;

    //   loop to go through questions 
        for (var i = 0; i < questions.length; i++) { 
            var userAnswer = confirm(questions[i].question); 
           
            if(questions[i].answer == userAnswer) {
                alert("That's Correct!"); 
                score = score + 1; 
            }
            else {
                alert ("That's not correct"); 
                 }
                
        }

       alert("Total Points "  + score);     
    </script>
    