document.addEventListener("DOMContentLoaded",function(){const b=document.querySelectorAll(".popup-btn");const a=document.querySelectorAll(".popup");b.forEach(function(d){d.addEventListener("click",function(){const f=this.getAttribute("data-popup");const e=document.getElementById(f);c(e)})});function c(d){if(d.style.display==="none"||d.style.display===""){d.style.display="block"}else{d.style.display="none"}}a.forEach(function(d){d.addEventListener("click",function(e){e.stopPropagation()});d.querySelectorAll("*").forEach(function(e){e.addEventListener("copy",function(f){f.preventDefault()})});document.addEventListener("click",function(e){if(e.target!==d&&!d.contains(e.target)){d.style.display="none"}})})});
