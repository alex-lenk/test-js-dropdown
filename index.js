module.exports=function(e){function t(){u.classList.toggle(o)}function n(){u.classList.remove(o)}var a="string"==typeof e.elem?document.getElementById(e.elem):e.elem,l="js-Dropdown-title",s="is-selected",o="is-open",i=a.querySelectorAll("option"),r=i.length,c=document.createElement("div");c.className="js-Dropdown",c.id="custom-"+e.elem;var d=document.createElement("button");d.className=l,d.textContent=i[0].textContent;var u=document.createElement("ul");u.className="js-Dropdown-list";for(var m=0;m<r;m++){var p=document.createElement("li");p.innerText=i[m].textContent,p.setAttribute("data-value",i[m].value),p.setAttribute("data-index",m),null!==i[m].getAttribute("selected")&&(p.classList.add(s),d.textContent=i[m].textContent),u.appendChild(p)}return c.appendChild(d),c.appendChild(u),c.addEventListener("click",function(e){e.preventDefault();var o=e.target;if(o.className===l&&t(),"LI"===o.tagName){c.querySelector("."+l).innerText=o.innerText,a.options.selectedIndex=o.getAttribute("data-index");var i=new Event("change");a.dispatchEvent(i);for(var d=0;d<r;d++)u.querySelectorAll("li")[d].classList.remove(s);o.classList.add(s),n()}}),a.parentNode.insertBefore(c,a),a.style.display="none",document.addEventListener("click",function(e){c.contains(e.target)||n()}),{toggle:t,close:n,open:function(){u.classList.add(o)}}};