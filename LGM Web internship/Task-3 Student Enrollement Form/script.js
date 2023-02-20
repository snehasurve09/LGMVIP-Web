var register=document.getElementById("register");
var submit = document.querySelector(".submit");
var element = register.elements;
var studinfo = document.querySelector(".studinfo");
var photo;

register.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    register.reset();
});

var loadFile = function(event){
    photo=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var email= document.createElement("div");
    var website = document.createElement("div");
    var skill= document.createElement("div");
    var gender = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML=" NAME: "+element[0].value;
    email.innerHTML=" EMAIL: "+element[1].value;
    website.innerHTML=" WEBSITE: "+element[2].value;
    gender.innerHTML=" GENDER: "+element[3].value;
    if(element[4].checked){gender.innerHTML="GENDER:Male"}
    if(element[5].checked){gender.innerHTML="GENDER:Female"}
    if(element[6].checked){skill.innerHTML="SKILL:HTML"}
    if(element[7].checked){skill.innerHTML="SKILL:CSS"}
    if(element[8].checked){skill.innerHTML="SKILL:JAVA"}
    img.src="images/user-img.jpg";
    img.alt="student image";
    if(element[10].value !=""){
        img.src=photo;
    }

    div1.appendChild(name);
    div1.appendChild(email);
    div1.appendChild(website);
    div1.appendChild(gender);
    div1.appendChild(skill)
    div.appendChild(div1);
    div.appendChild(img);
    studinfo.appendChild(div);

    img.classList.add("img");
    div.classList.add("box");
    div1.classList.add("div1");
    studinfo.classList.add("studinfo");
}