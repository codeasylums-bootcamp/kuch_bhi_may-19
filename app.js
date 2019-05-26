const input=document.getElementById('input');
const snapdeal_list=document.getElementById('Snapdeal-results');
const flipkart_list=document.getElementById('Flipkart-results');
const paytm_list=document.getElementById('PayTM-results');


document.addEventListener('keyup',function(event){
	if(event.keyCode==13)
	{
		snapdeal_list.innerHTML="<li><h3 style="text-align: center;">Snapdeal</h3></li>";
		flipkart_list.innerHTML="<li><h3 style="text-align: center;">Flipkart</h3></li>";
		paytm_list.innerHTML="<li><h3 style="text-align: center;">PayTm</h3></li>";
    var category=document.getElementById('inputGroupSelect03').value;
		var text=input.value;
		let xhr=new XMLHttpRequest;
		xhr.addEventListener('load',()=>{
			var response=JSON.parse(this.responseText);
			function sortJSON(data, key, way) {
               return data.sort(function(a, b) {
                  var x = a[key]; var y = b[key];
                  if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
                  if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
                });
            }
            var response2=sortJSON(response,'price','123');
            var imgSnap=response2.Snapdeal.category.text.img;
            var imgFlip=response2.Flipkart.category.text.img;
            var imgPT=response2.PayTm.category.text.img;
            var priceSnap=response2.Snapdeal.category.text.price;
            var priceFlip=response2.Flipkart.category.text.price;
            var pricePT=response2.PayTm.category.text.price;
            const addSnap=`
                       <li class="item">
                           <img class="image" src="${imgSnap}" alt="noimage" />
                           <span class="title">${text}</span>
                           <span class="price">${priceSnap}</span>
                       </li>    
                      `;
            const addFlip=`
                       <li class="item">
                           <img class="image" src="${imgFlip}" alt="noimage" />
                           <span class="title">${text}</span>
                           <span class="price">${priceFlip}</span>
                       </li>    
                      `;
            const addPT=`
                       <li class="item">
                           <img class="image" src="${imgPT}" alt="noimage" />
                           <span class="title">${text}</span>
                           <span class="price">${pricePT}</span>
                       </li>    
                      `;
            snapdeal_list.inserAdjacentHTML("beforeend",addSnap);
            flipkart_list.inserAdjacentHTML("beforeend",addFlip);
            paytm_list.inserAdjacentHTML("beforeend",addPT);
		});
		xhr.open('GET','');
        xhr.send();
	}
});
