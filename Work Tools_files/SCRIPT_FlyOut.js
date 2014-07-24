/* 
  ------------------------------------
  PVII Menu CSS Express Drop-Down Menu
  by Project Seven Development
  www.projectseven.com
  ------------------------------------
*/
function CallMenu() {
	P7_ExpMenu("menuwrapperH");
	P7_ExpMenu("menuwrapperS");
}

function P7_ExpMenu(bv){ //v1.1.0.2 by PVII-www.projectseven.com
    if(navigator.appVersion.indexOf("MSIE")==-1){return;}

    var i,k,g,lg,r=/\s*p7hvr/,c,cs='p7hvr';
 
    g=document.getElementById(bv);
    if(g){
        lg=g.getElementsByTagName("LI");
        if(lg){
            for(k=0;k<lg.length;k++){
                lg[k].onmouseover=function(){
                    c=this.className;cl=(c)?c+' '+cs:cs;
                    this.className=cl;};
                lg[k].onmouseout=function(){
                    c=this.className;
                    this.className=(c)?c.replace(r,''):'';};
            }
        }
    }
}

