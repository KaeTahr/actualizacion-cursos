function getPath(){
    var str=window.location.href;
    var str_array=str.split('/');
    var construct=false;
    var res="";
    str_array.forEach(element => {
        if(construct ){
            res+="../";
            return;
        }
        element=element.toLowerCase();
        if(element=="html" || element=="src"){
            construct=true;
        }
    });
    return res;
}

$(document).ready(function(){
    //file with relative path to index outside html folder
    $.get(getPath()+"assets/js/recycled/NavBar.html", function(html_string){
        $("#sideNav").html(html_string); 
        $("#sideNav a").each(function() {
            
            var _href = this.getAttribute("href"); 
            if( typeof(_href) != 'undefined' && _href!="" && (_href.search(".html")!=-1 || _href.search(".pdf")!=-1)){
                $(this).prop("href", getPath()+_href);
            }
        });
        $("div#sideNav > div > div.side-nav-logo > a > div.logo").each(function(){
            $(this).css("background-image","url("+getPath()+"assets/images/logo/logo.png)");
        });
    });
    $.get(getPath()+"assets/js/recycled/footer.html", function(html_string){
        $("footer.content-footer").html(html_string); 
        $("footer.content-footer a").each(function() {
            
            var _href = this.getAttribute("href"); 
            if( typeof(_href) != 'undefined' && _href!="" && _href.search(".html")!=-1){
                $(this).prop("href", getPath()+_href);
            }
        });
    });
    $.get(getPath()+"assets/js/recycled/headerstart.html", function(html_string){
        $("div.header.navbar").html(html_string); 
        $("div.header.navbar a").each(function() {
            
            var _href = this.getAttribute("href"); 
            if( typeof(_href) != 'undefined' && _href!="" && _href.search(".html")!=-1){
                $(this).prop("href", getPath()+_href);
            }
        });
        $("div.header.navbar img").each(function() {
            var _href = this.getAttribute("src"); 
            if( typeof(_href) != 'undefined' && _href!="" && _href.search("assets/images/")!=-1){
                $(this).prop("src", getPath()+_href);
            }
        });
    });


});
