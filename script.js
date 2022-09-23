const getNews=()=>{
    
    $.getJSON('http://localhost/newsjquery/news.php', function(data) {
        console.log(data);
      });
    }
$(document).ready(getNews);//when page is ready,execute getNews function
