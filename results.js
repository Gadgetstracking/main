
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
if (username=="kesegokoorapetse@gmail.com"){
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
       
if (username=="mokhurebryn@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a23.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 350867772623508</font><br/>  Model: Galaxy A23 (SM-A235F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A235F BLACK AFA<br/>Search Term: 350867772623508<br/>IMEI 1: 350867772623508<br/>Serial Number: R58TA1MZ4XX<br/>Model Desc: Samsung Galaxy A23<br/>Model Name: SM-A235F<br/>Model Number: SM-A235FZKUAFA<br/>Warranty Status: Warranty Active<br/>Estimated Warranty End Date: 17-10-2024<br/>Production location: Korea SEC<br/>Production Date: 17-10-2022<br/>Country: South Africa<br/>Carrier: Factory Unlocked");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }    

if (username=="lenyatsotebo@gmail.com"){

            phoneImageLay.style.display=("block");
            phoneImage.src = "https://www.imei.info/media/t/gsm-cache/W/2/u1Tz5l-d/huawei-enjoy-20-se.jpg";
        
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 863084057524845</font><br/>  Model: Enjoy 20 SE (PPA-AL20)<br/>Brand: HUAWEI<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Description Full:<br/>Model Code: Peppa-AL20E<br/>IMEI: 863084057524845<br/>S/N:<font color=#ff0000> HBDNU21123210135</font><br/>Item Code: 51096GUL<br/>Offer Code: OFFE00261486<br/>Width	76.9 mm<br/>Height	165.7 mm<br/>Thickness	9.3 mm<br/>Weight	206.0 g<br/>Display Type	LCD_IPS<br/>Diagonal	6.67 inches<br/>Resolution	1080x2400 px<br/>Screen-to-body ratio	84.3 %<br/>Pixel density	395 ppi<br/>Colors	16M<br/>Other display Features	Capacitive, Multi-touch, 60Hz, 2.5D curved glass screen ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");   
    }    
    
    
}
