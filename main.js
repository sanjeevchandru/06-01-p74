document.write("38.to check a student's total marks in various examinations"+"<br>");
function test38(t,f){
    if(t>=90 && f=="true" && (t>89 && t<=100)){
        return true;
    }
    return false;
}
document.write("The mark :78 ,Ans:"+test38("78", " ")+"<br>");
document.write("The mark :89 ,Ans:"+test38("89", "true")+"<br>");
document.write("The mark :99 ,Ans:"+test38("99", "true")+"<br><br>");