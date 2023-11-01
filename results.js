
function trackingInfo(){
    
    var username = document.getElementById("emailVerify").value;
    
       
            var infoLay = document.getElementById("InfoLay");
            var mainLay = document.getElementById("MainLay");
            
            
            infoLay.style.display=("block");
            mainLay.style.display=("none");
    
    
    
     var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
                phoneImageLay= document.getElementById("imageLay")
                phoneImage= document.getElementById("phoneImage")
                

    
 if (username=="Masele"){
     window.location.href=("resultsKesego.html");   
    }
if (username=="botlhalemoroka@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a04s.jpg";
        
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350026551714067</font><br/>  Model: Galaxy A04S (SM-A047F) <br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Model Info: MOBILE SM-A047F/DS BLACK MEA<br/>Search Term: 350026551714067<br/>IMEI 1: 350026551714067<br/>Serial Number: R58T921ZCPM<br/>Model Desc: Samsung Galaxy A04s<br/>Model Name: SM-A047F/DS<br/>Model Number: SM-A047FZKDMEA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 23-09-2024<br/>Production location: Korea SEC<br/>Production Date: 23-09-2022<br/>Country: United Arab Emirates<br/>Carrier: Factory Unlocked ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }    
    
    
}
