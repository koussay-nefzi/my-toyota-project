document.getElementById("ok").addEventListener("click",verif);
function verif ()
{
    let etat=document.getElementsByName("etat");
    console.log("etat")
    let msg=document.getElementById("msg");
    let erreur="";
    let name=document.getElementById("name").value;
    let prenom=document.getElementById("prenom").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let date=document.getElementById("date").value;
    let num=document.getElementById("num").value;

if(!etat[0].checked && !etat[1].checked && !etat[2].checked  )
{
    erreur="you must choose your social state";
}
else if (name=="" || name.length>10)
{
    erreur="your name must be less than 10 letters";
}
else if (prenom=="" || prenom.length>10)
{
    erreur="your last name must be less than 10 letters";
}
else if (email=="" ||
         email.indexOf("@")!=email.lastIndexOf("@") || 
         email.indexOf(" ")!=-1 || 
         email.charAt(email.indexOf("@")-1)=="." ||
         email.charAt(email.indexOf("@")+1)==".")
         {
            erreur="your email must contain a single @ and no spaces";
         }
else if (password=="" || password.length>20)
{
    erreur="your password must be less than 20 caractere";
}
else if (date=="")
{
    erreur="please choose your date of birth";
}
else if(num=="" || isNaN(num) || num.length>8 )
    {
        erreur="your number must have max lenght of (8)";
    }
    msg.innerHTML=erreur
    msg.style.color="red"
    msg.style.fontFamily="impact"
    msg.style.fontSize="30px"
    msg.style.textDecoration="underline"
if(erreur=="")
{
if(etat[0].checked)
 titre=etat[0].value;
else if(etat[1].checked)
titre=etat[1].value;
 else
 titre=etat[2].value;

    
    msg1.innerHTML="You are registered" +" " +name + " "+ prenom ;
    msg1.style.color="green"
    msg1.style.fontFamily="magneto"
    msg1.style.fontSize="30px"
}
    
}