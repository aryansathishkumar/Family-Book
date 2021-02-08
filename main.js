var img_array = [
    "dad.jpg","mother.jpg","bro.jpg","me.jpg","g_mom.jpg","g_dad.jpg"
]

  


  

var name_array = [
"Sathish Kumar","Deepa Lakhsmi","Sachin","Aryan","Arul AArasi","Purshothaman" ]   


var i=0; var j=0; function change(){
    document.getElementById("img_1").src =img_array[i]; i++;
    document.getElementById("div_1").innerHTML =name_array[j]; j++;
    if(i == 5){
        i = 0;
    }
    if(j == 5){
        j = 0;
    }
}
