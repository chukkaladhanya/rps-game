

let obj=JSON.parse(localStorage.getItem('obj'));
	if(!obj)
	{
		obj={
			win:0,
			lose:0,
			tie:0,
			computer:'',
			you:''
		};
	}

function PickComputerVal(useroption)
	{
		
		let Val=Math.random();
		let option='';
		if(Val>=0 && Val<1/3)
		{
			validation(useroption,'rock');	
		}
		else if(Val>=1/3 && Val<2/3)
		{
			validation(useroption,'paper');	
		}
		else if(Val>=2/3 && Val<1)
		{
			validation(useroption,'scissor');	
		}			
	}
			
			
	function validation(useroption,computeroption)
	{
		obj.total+=1;
		let result='';
		obj.computer='';
		obj.you='';
		obj.computer=obj.computer+computeroption;
		obj.you=obj.you+useroption;
		if(useroption==='rock' && computeroption==='rock')
		{
			obj.tie+=1;
			result=result+'Tie';
		}
		else if(useroption==='rock' && computeroption==='paper')
		{
			obj.lose+=1;
			result=result+'You lose';
		}
		else if(useroption==='rock' && computeroption==='scissor')
		{
			obj.win+=1;
			result=result+'You win';
		}
		else if(useroption==='paper' && computeroption==='rock')
		{
			obj.win+=1;
			result=result+'You win';
		}
		else if(useroption==='paper' && computeroption==='paper')
		{
			obj.tie+=1;
			result=result+'Tie';
		}
		else if(useroption==='paper' && computeroption==='scissor')
		{
			obj.lose+=1;
			result=result+'You lose';
		}
		else if(useroption==='scissor' && computeroption==='rock')
		{
			obj.lose+=1;
			result=result+'You lose';
		}
		else if(useroption==='scissor' && computeroption==='paper')
		{
			
			obj.win+=1;
			result=result+'You win';
		}
		else if(useroption==='scissor' && computeroption==='scissor')
		{
			obj.tie+=1;
			result=result+'Tie';
		}
		localStorage.setItem('obj',JSON.stringify(obj));
		
		replaceimage1=document.querySelector('.icon1');
		replaceimage2=document.querySelector('.icon2');
		replaceimage1.src= `C:/Users/admin/Downloads/${obj.you}.png`;
		replaceimage2.src= `C:/Users/admin/Downloads/${obj.computer}.png`;
		rp=document.querySelector('.resultpredict');
		rp.innerHTML=result;
		rs=document.querySelector('.resultscore');
		display=JSON.parse(localStorage.getItem('obj'));
		rs.innerHTML="Wins : "+display.win+" Loses : "+display.lose+" total tries : "+display.total;
		
	}
	
	function resetscores()
	{
		obj.win=0;
		obj.lose=0;
		obj.total=0;
		obj.you='';
		obj.computer='';
		
		localStorage.setItem('obj',JSON.stringify(obj));
		rp=document.querySelector('.resultpredict');
		rp.innerHTML="Reset";
		replaceimage1=document.querySelector('.icon1');
		replaceimage2=document.querySelector('.icon2');
		replaceimage1.src= `C:/Users/admin/Downloads/rock.png`;
		replaceimage2.src= `C:/Users/admin/Downloads/rock.png`;
		rs=document.querySelector('.resultscore');
		display=JSON.parse(localStorage.getItem('obj'));
		rs.innerHTML="Wins : "+display.win+" Loses : "+display.lose+" total tries : "+display.total;
				
	}


let startautoplay=false;
const autoplay=function ()
{
	let Val=Math.random();
		let useroption='';
		if(Val>=0 && Val<1/3)
		{
			useroption=useroption+'rock';	
		}
		else if(Val>=1/3 && Val<2/3)
		{
			useroption=useroption+'paper';	
		}
		else if(Val>=2/3 && Val<1)
		{
			useroption=useroption+'scissor';	
		}	

	PickComputerVal(useroption);	
}
	
let intervalid=0;	
function repeatplay()
{
	if(!startautoplay)
	{
		console.log(startautoplay);
		startautoplay=true;
		intervalid=setInterval(autoplay,1000);
		
	}
	else
	{
		clearInterval(intervalid);
		startautoplay=false;
	}
}