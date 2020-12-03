var images=[
    "https://i.pinimg.com/originals/87/b8/3b/87b83ba77a10a1d3313ed7872918524d.jpg"
    "https://cdn4.iconfinder.com/data/icons/family-cartoon/512/g10485-512.png"
    "https://i.pinimg.com/originals/60/66/7d/60667df3ec45a26a861e212c91edb082.jpg"
    "https://i.pinimg.com/originals/60/66/7d/60667df3ec45a26a861e212c91edb082.jpg"
    "https://www.pngfind.com/pngs/m/174-1747073_uncle-bob-cartoon-hd-png-download.pnghttps://www.pngfind.com/pngs/m/174-1747073_uncle-bob-cartoon-hd-png-download.png"
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGv9QrxGPEdB9Lmql-1WQcFdSKeAbB2o344w&usqp=CAU"
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_WcV6SmlzFbr2p62ppP_n9LUXucBw7UXFw&usqp=CAU"

     ];
   var i = 0; function nextslide() { 
     document.getElementById("album").src = images[i]; i++;
     if(i == 7)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
  i++; 
   }