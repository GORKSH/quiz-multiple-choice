var score=0;
var s1=0,s2=0,s3=0,s4=0,s5=0,s6=0,s7=0,s8=0,s9=0,s10=0;


$('.first').click(function(){

    if($(this).is(':checked'))
    {
        
        if($(this).val()=="correct")
        {
        	s1=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s1=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.second').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s2=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s2=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.third').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s3=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s3=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.fourth').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s4=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s4=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.fifth').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s5=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s5=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.sixth').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s6=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s6=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.seventh').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s7=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s7=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.eighth').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s8=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s8=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.nineth').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s9=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s9=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
$('.tenth').click(function(){
    if($(this).is(':checked'))
    {
        if($(this).val()=="correct")
        {
        	s10=4;
        }
        else if($(this).val()=="incorrect")
        {
        	s10=-1;
        }
        console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
    }
});
var qno=1;


$(".nextbtn").click(function(){
   $(".nextbtn").show();
   qno=qno+1;
   
   if(qno<11)
   {
   	for(var x=1;x<=10;x++)
   	{
   		var classname="ques"+x;
   		var classname1="btn"+x;
   		if(qno==x)
   		{
   			
   			$("."+classname).show();
   			$("."+classname1).css("background","skyblue");
   		}
   		else
   		{
           $("."+classname).hide();
           $("."+classname1).css("background","none");
   		}
   	}
   	$(".nextbtn").html("Next Question");
   }
   if(qno==10)
   {
   	$(".nextbtn").hide();
   }


});

$(".switch").click(function(){
	$(".nextbtn").show();
    var quesno=$(this).text();
   qno=parseInt(quesno);

   	for(var x=1;x<=10;x++)
   	{
   		var classname="ques"+x;
   		var classname1="btn"+x;
   		
   		if(qno==x)
   		{
   			
   			$("."+classname).show();
   			$("."+classname1).css("background","skyblue");
   		}
   		else
   		{
           $("."+classname).hide();
           $("."+classname1).css("background","none");
   		}

   	}
   	if(qno==10)
   	{
   		$(".nextbtn").hide();
   	}


});
$(".finish").click(function(){
   $(".quitdiv").show();
   
   $(".nobtn").click(function(){
     $(".quitdiv").hide();
   });
   $(".yesbtn").click(function(){
   	 score=s1+s2+s3+s4+s5+s6+s7+s8+s9+s10;
   	 console.log(s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s6+' '+s7+' '+s8+' '+s9+' '+s10+' '+score);
     $(".quitdiv").html("Your score is "+score);
     $(".quitdiv").css("text-align","center");
     $("input[type=radio]").attr('disabled', true);
     $("input[type=button]").attr('disabled', true);
   });

});

$(".start").click(function(){
	window.location="mcq.html";

});