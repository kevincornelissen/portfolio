//Declareren v/d variabelen
var xmlHttp = new Array();
var xmlBestand = new Array();
var tag = new Array();
var tekst, label;

//Declareren v/d functies
function taalwissel(taal) {
	
//uno: kopie object
xmlHttp = new window.XMLHttpRequest;
		
//due: openen v/h bestand voorbereiden
xmlHttp.open("GET", "languageswitch.xml", false);
		
//tre: versturen v/d vraag
xmlHttp.send();
			
//quattro: antwoord opvangen
xmlBestand = xmlHttp.responseXML;
			
//cinque:  gegevens uitlezen
tag = xmlBestand.getElementsByTagName(taal);
			
//heading weergeven
for (teller=0; teller < tag.length; teller++)
	{
	//tekst
		tekst = tag[teller].getElementsByTagName("p1")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("p")[0].innerHTML= tekst;
		tekst = tag[teller].getElementsByTagName("p2")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("p")[1].innerHTML= tekst;
		tekst = tag[teller].getElementsByTagName("p3")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("p")[2].innerHTML= tekst;
		tekst = tag[teller].getElementsByTagName("p4")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("p")[3].innerHTML= tekst;
		tekst = tag[teller].getElementsByTagName("p5")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("p")[4].innerHTML= tekst;
		tekst = tag[teller].getElementsByTagName("p6")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("p")[5].innerHTML= tekst;
	//label
		label = tag[teller].getElementsByTagName("label1")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("label")[0].innerHTML= label;
		label = tag[teller].getElementsByTagName("label2")[0].childNodes[0].nodeValue;	
		document.getElementsByTagName("label")[1].innerHTML= label;
	}	
}
