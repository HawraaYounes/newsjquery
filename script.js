
const getNews=()=>{
    
    $.getJSON('http://localhost/newsjquery/news.php', function(data) {
        $.each(data,function(key,value){
            let id=value.id;
            let news=value.new;
            let date=value.date;
            console.log(id);
            console.log(date);
            console.log(news);
            //$("tbody").append("<tr>"+td+"</tr>")
        })
      });
    }
$(document).ready(getNews);//when page is ready,execute getNews function
