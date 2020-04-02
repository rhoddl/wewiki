const searchform = document.querySelector('.searchForm');
const searchbox = document.querySelector('.searchBox');

searchform.innerHTML

//X= [];

function toWiki(){
    const inputValue = searchbox.value;
    wikiUrl = `https://namu.wiki/Search?q=${inputValue}`;
    location.href = wikiUrl;
}

function noWord(){
    const inputValue = searchbox.value;
    if(inputValue === ''){
        alert( "검색어를 입력하세요.");
    } else{
        toWiki();
    }
}

searchform.addEventListener('submit', noWord);
searchform.addEventListener('submit', handleDefault = (event) =>{
    event.preventDefault();
});



function init(){
}


init();
