<?php
$page_len = ($page_len%2)?$page_len:$pagelen+1;//页码个数   
      $pageoffset = ($page_len-1)/2;//页码个数左右偏移量    
      $key='<div class="pagin">';   
      $key.="<div class=\"message\">&nbsp;共{$pages}页</div>&nbsp;<ul class=\"paginList\">"; //第几页,共几页   
      if($page!=1){   
      $key.="<a href=\"".$_SERVER['PHP_SELF']."?page=1\"><li class=\"paginItem\">&nbsp;首页</li></a>&nbsp; "; //第一页   
      $key.="<a href=\"".$_SERVER['PHP_SELF']."?page=".($page-1)."\"><li class=\"paginItem\">&nbsp;上一页</li></a>&nbsp;"; //上一页   
      }else {   
      $key.="<li class=\"paginItem\">&nbsp;首页</li>&nbsp; ";//第一页   
      $key.="<li class=\"paginItem\">&nbsp;上一页</li>&nbsp;"; //上一页   
     }   
     if($pages>$page_len){   
//如果当前页小于等于左偏移   
     if($page<=$pageoffset){   
     $init=1;   
     $max_p = $page_len;   
     }else{//如果当前页大于左偏移   
     //如果当前页码右偏移超出最大分页数   
     if($page+$pageoffset>=$pages+1){   
     $init = $pages-$page_len+1;   
     }else{   
     //左右偏移都存在时的计算   
     $init = $page-$pageoffset;   
     $max_p = $page+$pageoffset;   
     }   
    }   
   }   
     for($i=$init;$i<=$max_p;$i++){   
     if($i==$page){   
     $key.='<li class="paginItem">&nbsp;'.$i.'</li>&nbsp;';   
     } else {   
     $key.=" <a href=\"".$_SERVER['PHP_SELF']."?page=".$i."\"><li class=\"paginItem\">&nbsp;".$i."</li></a>&nbsp;";   
    }   
   }   
    if($page!=$pages&&$pages!=0){   
    $key.=" <a href=\"".$_SERVER['PHP_SELF']."?page=".($page+1)."\"><li class=\"paginItem\">&nbsp;下一页</li></a> &nbsp;";//下一页   
    $key.="<a href=\"".$_SERVER['PHP_SELF']."?page={$pages}\"><li class=\"paginItem\">&nbsp;尾页</li></a>&nbsp;"; //最后一页   
    }else {   
    $key.="<li class=\"paginItem\">&nbsp;下一页</li>&nbsp;";//下一页   
    $key.="<li class=\"paginItem\">&nbsp;尾页</li>&nbsp;"; //最后一页   
   }   
   $key.='</ul></div>';  
?>