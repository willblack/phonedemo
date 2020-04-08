let phoneDemo=(function phoneDemo
(){
    let data=null;
    let queryData=function queryData(){
        let xhr = new XMLHttpRequest;
        xhr.open('GET','./json/product.json',false);
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4&&xhr.status===200){
                data=JSON.parse(xhr.responseText);
            };
        };
        xhr.send(null);
    }
    return{
        init(){
            queryData();
        }
    }
})();
phoneDemo.init();