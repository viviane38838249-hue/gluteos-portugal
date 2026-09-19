function withQuery(path){return path+(location.search||'');}
function goToPage(path){location.href=withQuery(path);}
function goToQuiz(step){if(String(step)==='loading'){goToPage('loading.html');return;}const n=Number(step);goToPage(n===1?'index.html':`quiz-${n}.html`);}
function chooseAndGo(el,next){el.classList.add('selected');setTimeout(()=>goToQuiz(next),120);}
function saveAgeAndGo(age){try{sessionStorage.setItem('quiz_age',age);}catch(e){} goToPage('important.html');}
document.addEventListener('DOMContentLoaded',()=>{const age=document.getElementById('analysisAgeText');if(age){try{age.textContent=sessionStorage.getItem('quiz_age')||'';}catch(e){}}});
