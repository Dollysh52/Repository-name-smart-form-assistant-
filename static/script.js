let currentLanguage="en";

const responses = {

en:{
greet:"Hello! I can help you fill government forms. Ask me about documents, PAN card, Aadhaar, scholarship forms or how to fill forms.",

pan:"For PAN card application you need Aadhaar card, identity proof, passport size photo and mobile number.",

aadhaar:"For Aadhaar update you need your Aadhaar number and supporting identity document.",

scholarship:"For scholarship forms you usually need income certificate, Aadhaar card, bank account details and academic documents.",

documents:"Most government forms require Aadhaar card, identity proof, address proof and a passport size photo.",

fill:"Enter all details exactly as written in your Aadhaar card and official documents.",

mistake:"If you make a mistake while filling the form, check the field carefully and correct the information before submission.",

fee:"Some forms may require a small application fee which can be paid online.",

deadline:"Always submit government forms before the deadline mentioned in the notification.",

unknown:"Sorry, I couldn't understand that. Please ask about form filling, documents or government services."
},

hi:{
greet:"नमस्ते! मैं सरकारी फॉर्म भरने में आपकी मदद कर सकता हूँ। आप दस्तावेज़, PAN कार्ड, आधार, या स्कॉलरशिप के बारे में पूछ सकते हैं।",

pan:"PAN कार्ड के लिए आपको आधार कार्ड, पहचान प्रमाण, पासपोर्ट साइज फोटो और मोबाइल नंबर चाहिए।",

aadhaar:"आधार अपडेट के लिए आपको अपना आधार नंबर और पहचान दस्तावेज़ चाहिए।",

scholarship:"स्कॉलरशिप फॉर्म के लिए आय प्रमाण पत्र, आधार कार्ड, बैंक विवरण और शैक्षणिक दस्तावेज़ चाहिए।",

documents:"अधिकतर सरकारी फॉर्म के लिए आधार कार्ड, पहचान प्रमाण, पता प्रमाण और फोटो चाहिए।",

fill:"फॉर्म में जानकारी बिल्कुल वैसे ही भरें जैसे आपके आधार कार्ड में लिखी है।",

mistake:"यदि फॉर्म भरते समय गलती हो जाए तो सबमिट करने से पहले उसे सही कर लें।",

fee:"कुछ फॉर्म के लिए छोटा आवेदन शुल्क ऑनलाइन देना पड़ सकता है।",

deadline:"सरकारी फॉर्म हमेशा अंतिम तिथि से पहले जमा करें।",

unknown:"माफ़ कीजिए, मैं समझ नहीं पाया। कृपया फॉर्म या दस्तावेज़ के बारे में पूछें।"
},

hr:{
greet:"राम राम! मैं सरकारी फॉर्म भरन में तेरी मदद करूं सूं। तू कागज, PAN कार्ड, आधार या स्कॉलरशिप बारे पूछ सकता है।",

pan:"PAN कार्ड खातिर तन्ने आधार कार्ड, पहचान पत्र, फोटो अर मोबाइल नंबर चाहिए।",

aadhaar:"आधार अपडेट खातिर तन्ने आधार नंबर अर पहचान कागज चाहिए।",

scholarship:"स्कॉलरशिप फॉर्म खातिर तन्ने आय प्रमाण पत्र, आधार अर बैंक डिटेल चाहिए।",

documents:"ज्यादातर सरकारी फॉर्म खातिर आधार कार्ड, पहचान पत्र अर फोटो चाहिए।",

fill:"फॉर्म में जानकारी आधार कार्ड के हिसाब तै भरनी चाहिए।",

mistake:"अगर फॉर्म भरते टाइम गलती हो जाए तो सबमिट करने से पहले ठीक कर ले।",

fee:"कुछ फॉर्म में छोटा सा फीस ऑनलाइन देना पड़ सकता है।",

deadline:"सरकारी फॉर्म आखरी तारीख से पहले जमा कर देना चाहिए।",

unknown:"माफ करिये, मैं समझ ना पाया। फॉर्म या कागजां बारे पूछो।"
}

};

function changeLanguage(lang){
currentLanguage=lang;
}



function sendMessage(){

let input=document.getElementById("userInput").value.toLowerCase();

if(input==="") return;

let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+=`
<div class="chat-row">
<div class="message user">${input}</div>
</div>
`;

document.getElementById("userInput").value="";

chatbox.innerHTML+=`
<div class="chat-row typing" id="typing">Bot is typing...</div>
`;

chatbox.scrollTop=chatbox.scrollHeight;

setTimeout(()=>{

document.getElementById("typing").remove();

let reply="";

if(input.includes("pan"))
reply=responses[currentLanguage].pan;

else if(input.includes("aadhaar") || input.includes("aadhar"))
reply=responses[currentLanguage].aadhaar;

else if(input.includes("scholarship"))
reply=responses[currentLanguage].scholarship;

else if(input.includes("document"))
reply=responses[currentLanguage].documents;

else if(input.includes("fill"))
reply=responses[currentLanguage].fill;

else if(input.includes("mistake") || input.includes("error"))
reply=responses[currentLanguage].mistake;

else if(input.includes("fee") || input.includes("payment"))
reply=responses[currentLanguage].fee;

else if(input.includes("deadline") || input.includes("last date"))
reply=responses[currentLanguage].deadline;

else if(input.includes("hello") || input.includes("hi"))
reply=responses[currentLanguage].greet;

else
reply=responses[currentLanguage].unknown;

chatbox.innerHTML+=`
<div class="chat-row">
<div class="avatar">🤖</div>
<div class="message bot">${reply}</div>
</div>
`;

speak(reply);

chatbox.scrollTop=chatbox.scrollHeight;

},1000);

}


function startVoice(){

const recognition=new webkitSpeechRecognition();

recognition.lang="en-IN";

recognition.onresult=function(event){

let speech=event.results[0][0].transcript;

document.getElementById("userInput").value=speech;

};

recognition.start();

}



function speak(text){

const speech=new SpeechSynthesisUtterance(text);

speech.lang="en-IN";

speechSynthesis.speak(speech);

}