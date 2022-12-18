export  function CheckMail (text : String) : boolean 
{
   const format = /[@]/;
   if (text.match(format))
   {
    return true ;
   }
   else  return false  ;
}