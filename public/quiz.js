// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase ,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC54VGyJ358_nxsm_34bSgFqhwRsRafbyQ",
  authDomain: "braintrainquizapp.firebaseapp.com",
  projectId: "braintrainquizapp",
  storageBucket: "braintrainquizapp.appspot.com",
  messagingSenderId: "984388283715",
  appId: "1:984388283715:web:e495082ead4a522b51d3f6",
  measurementId: "G-VNRRML9D58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

var currentIndex=0
var marks=0
var getQuestion=document.getElementById('getQuestion')
var getAnswer=document.getElementById('getAnswer')
var opA=document.getElementById('opA')
var opB=document.getElementById('opB')
var opD=document.getElementById('opD')
var opC=document.getElementById('opC')
var questionCount=document.getElementById('questionCount')
var result=document.getElementById('result')
var obj;
var arr=[]

window.getData=function(){
    const taskRef=ref(database,"QuestionBank/")
    onChildAdded(taskRef,function(data){
        // console.log(data.val());
        arr.push(data.val())  
       
});
}
getData()



function initRender(){
    getQuestion.innerHTML=arr[currentIndex].question
    opA.innerHTML=arr[currentIndex].opA
    opB.innerHTML=arr[currentIndex].opB
    opC.innerHTML=arr[currentIndex].opC
    opD.innerHTML=arr[currentIndex].opD
    questionCount.innerHTML=`<b>This is Question No. ${currentIndex+1}/${arr.length}</b>`
}
setTimeout(function(){initRender()},2500)

function nextQuestion(){
    if(currentIndex+1 == arr.length){
        result.style.display='block';
        displayMarks.innerHTML=marks;
        var per=((marks/arr.length)*100).toFixed(2)
        displayPercentage.innerHTML=per+"%"
    }
    else{
        currentIndex++;
        initRender()
    }
}

window.check=function(a)
{
    console.log(a.innerHTML)
    var b=arr[currentIndex].answer
    if(`${a.textContent}`==b){
        marks++
    }
    nextQuestion()
    console.log(marks)
}


