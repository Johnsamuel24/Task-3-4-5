


const resume ={

Details:{
    

"Name          ":   "V M Prasanth",
"Age           ":    24,
"Date of Birth ":   "24/05/1999",
"location      ":{
"Address       ":   "Padur",
"City          ":   "Kellambakkam",
"Postal code   ":   603103,
"State         ":   "Tamil Nadu",
"Country       ":   "India"
},
"Ph no         ":    8056234532,
"Hobby         ":   "Chess Internt Browsing",
"Experience    ":   "Fresher",
"E-mail        ":   "vmprasanth1999@gmail.com"
    

},
Education_Qualification:[
    {
    

"PG            ":"M Sc Iformation Technology (Hindustan College of Arts and Science)",
"UG            ":"B Sc Computer Science (Hindustan College of Arts and Science)",
"HSC           ":"Dr Sivanthi Adittanar Matrci Higher Secondary School",
"SSLC          ":"Dr Sivanthi Adittanar Matrci Higher Secondary School"

    }

],
Percentage:[
    {

    "PG            ":80,
    "UG            ":82.34,
    "HSC           ":65,
    "SSLC          ":89
    
    

}
],

Skills:
[{
    


"Languages Known               ":"Tamil,English",
"Programming Languages Known   ":"C,C++,Java,Javascript,Html",
"Software Used                 ":"VS Code,Visual studio,Ecllipse",
"Other skills                  ":"UCMAS"
    


}
],
Declaration:[{
    

    "Message   ":"I Here By declare the above given information is true to the best of my knowledge and belief. THANK YOU ",
    "Sign      ":"V M Prasanth"
    

}
]
}



const j =JSON.stringify(resume);
console.log(j);
document.write(j);

