var allQuestions = [
 
  {
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "London"],
    correctAnswer: 2
  },
  {
    question: "Who won the 2014 FIFA World Cup?",
    choices: ["Brazil", "England", "Germany", "Spain"],
    correctAnswer: 3
  },
  {
    question: "What book series is authored by J.K Rowling?",
    choices: ["Game of Thrones", "Hunger Games", "Twilight", "Harry Potter"],
    correctAnswer: 4
  },
  {
    question: "The Eiffel Tower is located in which following country?",
    choices: ["Italy", "France", "Iceland", "Mexico"],
    correctAnswer: 2
  }
];
var count=0;
var score=0;
if(count==0){
  displayNext();
}


function displayNext(){
  if(count==4){
    document.getElementsByClassName("container")[0].innerHTML="";
    document.getElementById("title").innerHTML="Score:"+score;
  }
  else{
    document.getElementById("submit").style.backgroundColor="green";
  document.getElementById("correct").style.display="none";
  document.getElementById("incorrect").style.display="none";
  document.getElementById("submit").setAttribute("onclick","Next()");
  
  addQues();
  addAns();
  removeDisabled();
  
  }
}
function addQues(){
  var currQuestion=document.getElementById("question").innerHTML= allQuestions[count].question;
}
function addAns(){
  var checkbox=document.getElementsByTagName("input");
  var label=document.getElementsByTagName("label");
  
  for(var i=0;i<4;i++)
    {
      label[i].innerHTML= allQuestions[count].choices[i];
      checkbox[i].setAttribute("value",i+1);
      
    }
}
function Next(){
  
 var options=document.getElementsByTagName("input");
  for(var i=0;i<4;i++){
    options[i].setAttribute("disabled","true");
    if(options[i].checked){
      if(options[i].value==allQuestions[count].correctAnswer){
        document.getElementById("correct").style.display="block";
        score++;
      }
      else{
        document.getElementById("incorrect").style.display="block";
        
        
      }
    }
  
    
    
  }
   var btn = document.getElementsByTagName("button")[0];
    btn.innerHTML="Next";
     btn.style.backgroundColor="#FFDD40";
  
    btn.setAttribute("onclick","displayNext()");//Disables all the check boxes and checks if the answer is correct

  count++;
}
function removeDisabled(){
  var options=document.getElementsByTagName("input");
  for(var i=0;i<4;i++){
    options[i].removeAttribute("checked");
    options[i].removeAttribute("disabled");
  }
}