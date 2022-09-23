
const getNews=()=>{
    
    $.getJSON('http://localhost/newsjquery/news.php', function(data) {//fetch news api with getJSON
        $.each(data,function(key,value){//looping over each object in api
            let id="<th>"+value.id+"</th>";//create th tag for displaying row id from api
            let date="<td>"+value.date+"</td>";//create td tag for displaying new date from api
            let news="<td colspan='2'>"+value.new+"</td>";//create td tag for displaying new text from api
            let tr="<tr>"+id+date+news+"</tr>";//create tr tag containg the 3 previous td tags
            $("tbody").append(tr);//append created tr to table body
        })
      });
    }
$(document).ready(getNews);//when page is ready,execute getNews function
