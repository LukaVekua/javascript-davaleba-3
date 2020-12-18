function sigrdze_N1(sityva){
    var n = sityva.length;
    document.write(n);
}

function letterA_N2(winadadeba){
    var sentence = winadadeba;
    var num_matches = sentence.match(/a/gi).length;
    document.write("<br>"+num_matches+"<br>");
}

function simbolo_40_N5() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (var i = 0; i < 40; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


function pirveli_simbolo_N6(){
    var text = "N";
    var possible = "abcdefghljklmnopqrstuvwxyz";
    

        
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

    
}




function substring_N3(){
  str = "JavaScript, Html and Css"
  s = str.substr(10,15)
  document.write(s,"<br>")
  document.write("Substring symbol - ",s.length,"<hr>")
}




function rand20_N7(length) {
  result           = '';
  characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  charactersLength = characters.length;
  for (i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength))+" ";
  }
  document.write(result,"<hr>")
}

function string1_N9(){
  array = ["JavaScript","Html","Css"]

  document.write(array.includes("JavaScript"), "<hr>")
  console.log(array)
}



function delsymbol_N11(){
  str1 = "AABBCCDDEEFF"
  document.write(str1.replace(/(.)(?=.*\1)/g, ""))
}

function cenzura_N10(){
  var arr = "Faggot,Town,Car,fuck,keys"
  var res = arr.replace(/faggot/gi,"******")
  var rep = res.replace(/fuck/gi,"****")
  
  document.write("<br>"+rep+"<br>")
 
}