			function hpshow(x){
				x.style.display = 'block';
				hpwz.style.display='none';				
			}
			function hphidden(x){
				x.style.display = 'none';
				hpwz.style.display = 'block';
			}

			function scshow(){
				sdiv.style.left='20%';
				sdiv.style.right='20%';
				sdiv.style.background='rgba(255,255,255,0.75)';
			}
			function schidden(){
				sdiv.style.left='38%';
				sdiv.style.right='38%';
				sdiv.style.background='rgba(255,255,255,0)';
			}
			window.onload=function(){
				pageicons.style.display = 'none';
				hpwz.style.display = 'block';
				schidden();
				console.log("感谢使用阿兰卡导航页！")
				console.log("作者QQ:30087370")
				console.log("2021 6 14 18:53")
			}
			