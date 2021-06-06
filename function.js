			function hpshow(x){
				x.style.display = 'block';
				hpwz.style.display='none';				
			}
			function hphidden(x){
				x.style.display = 'none';
				hpwz.style.display = 'block';
			}

			function scshow(x){
				x.style.display = 'block';
				sdiv.style.left='38%';
				sdiv.style.right='38%';
				sdiv.style.background='rgba(255,255,255,0)';
			}
			function schidden(x){
				x.style.display = 'none';
				sdiv.style.left='48%';
				sdiv.style.right='48%';
				sdiv.style.background='rgba(255,255,255,1)';
			}
			window.onload=function(){
				pageicons.style.display = 'none';
				hpwz.style.display = 'block';
				schidden(sin);
				stobing();
				console.log("感谢使用阿兰卡导航页！")
				console.log("作者QQ:30087370")
				console.log("2021 6 5 15:45")
			}
			