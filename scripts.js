 const element= document.querySelector(".pagination ul");
  let totalPages=20;
   let page =10;
   
   
   element.innerHTML = createPagination(totalPages, page);

   function createPagination(totalPages, page){

    let liTag="";
    let active;
    let beforePage= page-1;
    let afterPage= page+1;
    if(page >1){
      liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }
    if(page > 2){ //if page value is less than 2 then add 1 after the previous button
      liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    }
    if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }
  
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage  = afterPage + 1;
    }
  
    for (var plength = beforePage; plength <= afterPage; plength++) {
      if(plength>totalPages){
        continue;
      }
      if (plength == 0) { //if plength is 0 than add +1 in plength value
        plength = plength + 1;
      }
      if(plength==0)
      {
        plength = plength + 1;
      }
     
    }
    element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; 

   }