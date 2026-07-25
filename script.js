let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB";
    window.speechSynthesis.speak(text_speak);
    text_speak.voice = window.speechSynthesis.getVoices().find(v => v.name === "Google UK English Female");
}
function wishMe(){
    let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning sir");
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon sir");
    }
    else{
        speak("Good Evening sir");
    }
}
window.addEventListener("load",()=>{
    wishMe();
})
let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new SpeechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="flex";
})
function takeCommand(message){
     btn.style.display="flex";
     voice.style.display="none";
    if(message.includes("hello")||message.includes("hey")){
        speak("Hello sir, I am your virtual assistant. How can I help you?");   
}
else if (message.includes("who are you")){
    speak("I am virtual assistant, created by shalini");
}else if(message.includes("open youtube")){
    speak("Opening youtube");
    window.open("https://www.youtube.com/", "_blank");
}
else if(message.includes("open google")){
    speak("Opening google");
    window.open("https://www.google.com", "_blank");
}
else if(message.includes("open facebook")){
    speak("Opening facebook");
    window.open("https://www.facebook.com", "_blank");
}
else if(message.includes("open instagram")){
    speak("Opening instagram");
    window.open("https://www.instagram.com", "_blank");
}
else if(message.includes("open snapchat")){
    speak("Opening snapchat");
    window.open("https://www.snapchat.com", "_blank");
}
else if(message.includes("open calculator")){
    speak("Opening calculator");
    window.open("calculator://");
}
else if(message.includes("open whatsaap")){
    speak("Opening WhatsApp");
    window.open("whatsapp://");
}
else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric", hour12:true});
    speak(`The time is ${time}`);
}
else if(message.includes("date")){
    let date=new Date().toLocaleString(undefined, {month:"short", day:"numeric"});
    speak(`Today is ${date}`);
}
else{
   let finalText="this is what I found on Internet regarding"+ message.replace("shaili","");
    speak(finalText);
    window.open(`https://www.google.com/search?q=${message.replace("shaili","")}`);
}

}