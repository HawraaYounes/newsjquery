
const getNews=()=>{
    
    $.getJSON('http://localhost/newsjquery/news.php', function(data) {
        $.each(data,function(key,value){
            let id="<th>"+value.id+"</th>";
            let date="<td>"+value.date+"</td>";
            let news="<td colspan='2'>"+value.new+"</td>";
            let tr="<tr>"+id+date+news+"</tr>";
            $("tbody").append(tr);
        })
      });
    }
$(document).ready(getNews);//when page is ready,execute getNews function
