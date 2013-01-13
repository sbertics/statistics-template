function moveElm(elm, curr, end, inc, delay, edge){
				
				if(inc > 0){
					if(curr < end){
						curr += inc;
					}
				}else{
					if(curr > end){
						curr += inc;
					}
				}
				
				if(edge == "top"){
					document.getElementById(elm).style.top  = curr+'px';
				}else if(edge == "left"){
					document.getElementById(elm).style.left  = curr+'px';
				}else if(edge == "right"){
					document.getElementById(elm).style.right  = curr+'px';
				}
				
				if(inc > 0){
					if(curr < end){
						window.setTimeout('moveElm('+'\''+elm+'\''+','+curr+','+end+','+inc+','+delay+','+'\''+edge+'\''+')',delay);
					}
				}else{
					if(curr > end){
						window.setTimeout('moveElm('+'\''+elm+'\''+','+curr+','+end+','+inc+','+delay+','+'\''+edge+'\''+')',delay);
					}
				}
			}