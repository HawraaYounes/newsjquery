const getNews=()=>{
    $.getJSON('http://localhost/newsjquery/news.php', function(data) {
        console.log(data);
      });
    }
window.addEventListener ("load",getNews)//when page is loaded, getNews functionwill be executed