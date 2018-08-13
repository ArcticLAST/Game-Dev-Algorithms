var alignmentGoodEvil = "0";
var alignmentLawfulChaotic = "0";

function alignmentFind(){
	var goodEvil;
	var lawfulChaotic;
	var alignmentName;
	
	//Good and evil finder.
	if(alignmentGoodEvil > 5){
		goodEvil = "good";
	}
	else if(alignmentGoodEvil < -5){
		goodEvil = "evil";
	}
	else{
		goodEvil = "neutral";
	}
	
	//Lawful and chaotic finder.
	if(alignmentLawfulChaotic > 5){
		lawfulChaotic = "lawful";
	}
	else if(alignmentLawfulChaotic < -5){
		lawfulChaotic = "chaotic";
	}
	else{
		lawfulChaotic = "neutral";
	}
	
  //Alignment name finder.
	alignmentName = lawfulChaotic + " " + goodEvil;
	if (alignmentName == "neutral neutral"){
		alignmentName = "true neutral"
	}
	
	return alignmentName;
}
