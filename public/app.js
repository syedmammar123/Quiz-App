// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase ,push,ref,set,onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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

var userr=prompt("Press 1 if you are admin or 2 if you are player")
if(userr==1){
var getQuestion=document.getElementById('getQuestion')
var getAnswer=document.getElementById('getAnswer')
var opA=document.getElementById('opA')
var opB=document.getElementById('opB')
var opD=document.getElementById('opD')
var opC=document.getElementById('opC')
var obj;
window.sendData=function(){
if(getQuestion.value=="" || getAnswer.value=="" || opA.value=="" || opB.value=="" || opC.value=="" || opD.value==""){
    alert("Fill all fields!")
}
else{
    var id;
    obj={
    question:getQuestion.value,
    answer:getAnswer.value,
    opA:opA.value,
    opB:opB.value,
    opC:opC.value,
    opD:opD.value,
}
const refKey = ref(database ,"QuestionBank/")
id=push(refKey).key
const taskRef = ref(database,`QuestionBank/${id}`);
set(taskRef,obj);

getQuestion.value="";
getAnswer.value="" ;
opA.value="" ;
opB.value="";
opC.value="";
 opD.value="";
}
}
var arr=[]
window.getData=function(){
    const taskRef=ref(database,"QuestionBank/")
    onChildAdded(taskRef,function(data){
        arr.push(data.val())
});
}
getData()
}
else if(userr==2){
    location.href='quiz.html';
}
else{
    alert("Invalid input")
    location.reload();
}