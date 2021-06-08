class Shares {
    constructor () {
        this.shares = ["romi3", "alpa4","odpv3", "lpsb3"];
        this.ulrIbov11 = "https://api.bovespa.com.br/"; 
        this.priceTodayNow = xrh.open( "GET","ulrIbov11/%[shares]/%date.now/%preco.textContent");
        this.priceYesterdayTargetBuy = xrh.open( "GET","ulrIbov11/%[shares]/%date.yesterday/%preco.min.textContent");
        this.priceBeforyesterdayTagetBuy = xrh.open("GET"," ulrIbov11/%[shares]/%date.beforeyesterday/%preco.min.textContent"); 
        this.diLess =  xrh.open("GET"," ulrIbov11/%[shares]/%/%date.now/%indicator.ADX$di-.textContent");   
        this.diMore =  xrh.open("GET"," ulrIbov11/%[shares]/%/%date.now/%indicator.ADX$di+.textContent"); 
        this.priceYesterdayTargetSell = xrh.open( "GET", "ulrIbov11/%[shares]/%date.yesterday/%preco.max.textContent");
        this.priceBeforyesterdayTagetSell = xrh.open("GET", "ulrIbov11/%[shares]/%date.beforeyesterday/%preco.max.textContent");  
        this.targetBuy = ""
        this.targetSell = ""
        this.conditionIndicator = ""
        this.GearBuy = ""
        this.GearSell = ""
        
    }        

   
    get	 ValueSharesTargetBuy () {
            this.xhr = new XMLHttpRequest();
       	    xhr.open("GET", "ulrIbov11/%ativo/%data/%preco);
             for (var i = 0; i < shares.length; i++) {
                if (priceBeforeyesterdayTargetBuy + (priceBeforeyesterdayTargetBuy/2) ==  this.priceTodayNow);   
             return   this.targetBuy = true 
                    }else{
             return    this.targetBuy = false      
                
       }
    }    

 
    get  ADXindicator  ()  {
            this.xhr = new XMLHttpRequest();
            xhr.open("GET", "ulrIbov11/%ativo/%data/%indicator);
            if (this.diMore > diLess) {
            return   this.conditionIndicator = true
                } else {
            return this.conditionIndicator = false;
           }       
        }     
       
    get	 ValueSharesTargetSell ()  {
            this.xhr = new XMLHttpRequest();
            for (var i = 0; i < shares.length; i++) {
                if (this.priceYesterdayTargetSell + (this.priceBeforyesterdayTagetSell/2) ==  this.priceTodayNow))
                   return  this.targetSell == true 
                     }else{
                   return this.targetSell == false 
                  
                       

    }
}


    get	 GearBuy  (ValueSharesTargetBuy) {
            if  (this.priceTodayNow >= this.targetBuy and targetBuy == true and this.conditionIndicator == true ) {
                alert("compra") 
                return this.GearBuy = true
                } else {
                return this.GearBuy  = false;
                 
        }
    }  


    get	GearSell (ValueSharesTargetSell) {
            if   (this.priceTodayNow >= this.targetSell and targetSell == true) {
                alert("vende")
                return this.GearSell = true
                } else {
                return this.GearSell  = false;

                }
            }
        

    set trade  (GearBuy, GearSell) {
        this.xhr = new XMLHttpRequest();
        if (GearBuy == true)
        xhr.open("POST", "ulrIbov11/%[shares]/%data/%preco/%comprar" , true);
        xhr.send(JSON.ConnectBolsa({
            user: taylordamaceno
            password: gnapkgp
            valor: "R$ 1000"
            metodo: comprar
        if (GearSell == true)
        xhr.open ("POST", "ulrIbov11/%[shares]/%data/%preco/%vender" , true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.ConnectBolsa({
            user: taylordamaceno
            password: gnapkgp
            valor: "R$ 1000"
            metodo: vender
    }
}
        } else {
            console.log("seguimos observando");
    }       alert (seguimos no trade)
 
}




  
