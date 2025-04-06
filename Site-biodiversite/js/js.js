
var soluce=1;
var clic=1;	  // variable pour compter le nombre de clics.

function quest1(){
		if (document.getElementById('id13').checked)
			{return document.getElementById("id13").value;}
		else
			{return 0;}
}

function quest2(){
	var liste=document.getElementsByClassName("Quest2");
	var compteur=0;
	for (var i=0;i<5;i++){
		if (liste[i].checked){
			if (liste[i].value=="1")
				{compteur+=1}
		}
	}
	return compteur;
}

function quest3(){
	if (document.getElementById('id34').checked)
		{return document.getElementById("id34").value;}
	else
		{return 0;}
}

function quest4(){
	if (document.getElementById('id41').checked)
			{return document.getElementById("id41").value;}
	else
		{return 0;}
}

function quest5(){
	if (document.getElementById('id54').checked)
			{return document.getElementById("id54").value;}	
	else
		{return 0;}
}

function quest6(){
	var liste =document.getElementsByClassName("Quest6");
	var compteur=0;
	for (var i = 0 ; i < 5 ; i++){
		if (liste[i].checked){
			if (liste[i].value=="1")
				{compteur+=1}
		}
	}
	return compteur;
}

function quest7(){
	var liste=document.getElementsByClassName("Quest7");
	var compteur=0;
	for (var i = 0 ; i < 5; i++){
		if (liste[i].checked){
			if (liste[i].value=="1")
				{compteur+=1}
		}
	}
	return compteur;
}

function quest8(){
	if (document.getElementById('id81').checked)
			{return document.getElementById("id81").value;}			
	else
		{return 0;}
}

function quest9(){
	var liste =document.getElementsByClassName("Quest9");
	var compteur=0;
	for (var i = 0 ; i < 4; i++){
		if (liste[i].checked){
			if (liste[i].value=="1")
				{compteur+=1}
		}
	}
	return compteur;
}




function reponse(point){
	document.getElementById("pouf").remove();
	var magie = document.getElementById("magie");
	magie.innerHTML=magie.innerHTML+'<fieldset><legend><h2>Score</h2></legend><h1 style="text-align:center;">'+point+'/14</h1></fieldset>'
	
	var liste =document.getElementsByClassName("Quest");
	var laliste=document.getElementsByClassName("s");

	for (var i = 0; i < liste.length;i++){
		liste[i].disabled=true;
		if ((liste[i].checked==true) && (liste[i].value==0))
			{laliste[i].innerHTML='<s>'+laliste[i].innerHTML+'</s>';}
		else if (liste[i].value==1)
			{laliste[i].innerHTML='<b>'+laliste[i].innerHTML+'</b>';}
	}

	if (parseInt(quest1())!=1)
		{document.getElementById("Q1").innerHTML=document.getElementById("Q1").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q1").innerHTML=document.getElementById("Q1").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}
	

	if (parseInt(quest2())!=3)
		{document.getElementById("Q2").innerHTML=document.getElementById("Q2").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q2").innerHTML=document.getElementById("Q2").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}


	if (parseInt(quest3())!=1)
		{document.getElementById("Q3").innerHTML=document.getElementById("Q3").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q3").innerHTML=document.getElementById("Q3").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}
	

	if (parseInt(quest4())!=1)
		{document.getElementById("Q4").innerHTML=document.getElementById("Q4").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q4").innerHTML=document.getElementById("Q4").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}


	if (parseInt(quest5())!=1)
		{document.getElementById("Q5").innerHTML=document.getElementById("Q5").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q5").innerHTML=document.getElementById("Q5").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}


	if (parseInt(quest6())!=2)
		{document.getElementById("Q6").innerHTML=document.getElementById("Q6").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q6").innerHTML=document.getElementById("Q6").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}


	if (parseInt(quest7())!=2)
		{document.getElementById("Q7").innerHTML=document.getElementById("Q7").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q7").innerHTML=document.getElementById("Q7").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}
	

	if (parseInt(quest8())!=1)
		{document.getElementById("Q8").innerHTML=document.getElementById("Q8").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q8").innerHTML=document.getElementById("Q8").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}
	

	if (parseInt(quest9())!=2)
		{document.getElementById("Q9").innerHTML=document.getElementById("Q9").innerHTML+'  <img src="./js/red.png" alt="faux" width=2% height=2%>';}
	else
		{document.getElementById("Q9").innerHTML=document.getElementById("Q9").innerHTML+'  <img src="./js/green.png" alt="bon" width=5% height=5%>';}
}




function traitement(){
		
	point=0;
	point=parseInt(quest1())+quest2()+parseInt(quest3())+parseInt(quest4())+parseInt(quest5())+parseInt(quest6())+parseInt(quest7())+parseInt(quest8())+parseInt(quest9());
	
	if (point==14){
		alert("Vous avez tout bon, bravo!");
		selection=document.getElementById("valerreurs");
		selection.innerHTML=selection.innerHTML+'<div>Vous avez réussi!</div>';
		reponse(point);
	}
	else{
		alert("Vous avez des erreurs"); 
		selection=document.getElementById("valerreurs"); // variable pour éviter d'écrire plusieurs fois document.getElementById("modif")
		selection.innerHTML=selection.innerHTML+'<div>Vous avez un score de '+point+' sur 14 à votre tentative n°'+clic+'.</div>'; // ajout de contenu
		clic+=1;

		if (soluce==1){
			selectionbouton=document.getElementById("futurbouton");
			selectionbouton.innerHTML=selectionbouton.innerHTML+'<input type="button" value="Cliquez ici pour voir les réponses" onClick="reponse(point)"></input>';
			soluce=0;
		}
	}
}