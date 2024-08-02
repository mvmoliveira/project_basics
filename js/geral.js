var loaderTask=[];
function showLoadComponent(mod){
    $(mod).append("<img src='images/icons/loader_infinity.gif' class='load_infinity' alt='Loader' title='Loader' style='clear:both;display:block;width:50px;margin:auto;' />");
}
function limpaForms(mod){
    $(mod).find('input[type=text]').each(function(){
        $(this).val('');
    });
    $(mod).find('input[type=password]').each(function(){
        $(this).val('');
    });
    $(mod).find('input[type=hidden]').each(function(){
        $(this).val('');
    });
    $(mod).find('input[type=number]').each(function(){
        $(this).val('');
    });
    $(mod).find('input[type=file]').each(function(){
        $(this).val('');
    });
    $(mod).find('textarea').each(function(){
        $(this).val('');
    });
    $(mod).find('input[type=checkbox]').each(function(){
        $(this).attr('checked',false);
    });
    $(mod).find('input[type=radio]').each(function(){
        $(this).attr('checked',false);
    });
   /* $(mod).find('select:not([data-clean])').each(function(){
        $(this).empty();
    });*/
    $(mod).find('select').find('option').each(function(){
        $(this).attr('selected',false);
    });
    $(mod).find('input[type=radio],input[type=checkbox]').each(function(){
        $(this).attr('checked',false);
    });
}
function hideLoadComponent(mod){
    setTimeout(function(){
        $(mod).find(".load_infinity").remove();
    },500);
    
}
//
function checkFormErrors(mod){
    erros=[];
    $(mod).find('.help-block').each(function(){
        if($(this).hasClass("has-error")){
            erros.push($(this).attr('data-ref'));
        }
    });
    
    if(erros.length>0){
        
        showAlert("Falha ao enviar", "Alguns campos do formulário estão preenchidos incorretamente ou inválidos. Corrija para reenviar. ["+erros.join(',')+"]", 1,'<button type="button" class="btn btn-danger radius_md" data-dismiss="modal">Fechar</button>');
        return false;
    
    }else{
        return true;
    }
}
/*
$(function(){
    $("#money").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    });
$(function(){
    $(".money").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    });*/
    
    function init() {
        console.log("init");
        var imgDefer = document.getElementsByTagName('img');
        for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } } }
        function getWebp() { // Nome da fun��o recebendo a vari�vel item
            console.log("towebp");
            var item = $('html').hasClass('webp') ? 'webp' : 'img'; // Atribui o valor a vari�vel item
            $('img').each( function(){ // Busca todas as imagens do site
                $( this ).attr('data-src', $( this ).data( item ) ); // Trocar� o Source da imagem
            });
            init();
        }



        function showLoader(nome){
            //$('#animload').fadeIn(200);
            var index;
            loaderTask.some(function (entry, i) {
                if (entry.ntask == nome) {
                    index = i;
                    return true;
                }
            });
      
            if(typeof index === 'undefined'){
                loaderTask.push({ntask:nome,finalizado:false});
            }else{
                loaderTask[index].finalizado = false;
            }
            
            checkTasks();
        }
        function checkTasks(){
            var showSpinner = true;
            jQuery.each(loaderTask,function(i,e){
                if(!e.finalizado){
                    showSpinner = true;
                    return false;
                }else{
                    showSpinner = false;
                }
            });
        
            if(showSpinner){
                showLoaderEl();
            }else{
                hideLoaderEl();
            }
        
        }
        function hideLoader(nome){
            //loaderTask.push({ntask:nome,finalizado:true});
            //checkTasks();
            //$('#animload').fadeOut(200);
            var index;
            loaderTask.some(function (entry, i) {
                if (entry.ntask == nome) {
                    index = i;
                    return true;
                }
            });
      
            if(typeof index === 'undefined'){
                loaderTask.push({ntask:nome,finalizado:true});
            }else{
                loaderTask[index].finalizado = true;
            }
            
            checkTasks();
        }
        function showLoaderEl(){
            $('#animload').fadeIn(200);
        }
        function hideLoaderEl(){
            $('#animload').fadeOut(200);
        }
    
function geraDocumento(params)
{
        var url="view/doc.php";
        var name="NewFile";

         var form = document.createElement("form");
         form.setAttribute("method", "post");
         form.setAttribute("action", url);
         form.setAttribute("target", name);

         for (var i in params) {
             if (params.hasOwnProperty(i)) {
                 var input = document.createElement('input');
                 input.type = 'hidden';
                 input.name = i;
                 input.value = params[i];
                 form.appendChild(input);
             }
         }
         
         document.body.appendChild(form);
         
         //note I am using a post.htm page since I did not want to make double request to the page 
        //it might have some Page_Load call which might screw things up.
         //window.open("doc.php", name, windowoption);
         
         form.submit();
         
         document.body.removeChild(form);
 }
    function showAlert(title, body, type,btns){
        ((type==null || type<1)?type=0:'');
        $('#customModal').find(".modal-title").empty();
        $('#customModal').find(".modal-body").empty();
        $('#customModal').find(".modal-footer").empty();
        /**
         * 1-Success;
         * 2-Error;
         * 3-Warns
         */
        var src='';
        switch(type){
            case 1:src='images/icons/icon_success.png';break;
            case 2:src='images/icons/icon_error.png';break;
            case 3:src='images/icons/icon_warning.png';break;
            default:src='images/icons/icon_error.png';break;
        }
        $('#customModal').find(".iconModalCustom").css("background-image","url("+src+")");
        
        $('#customModal').find(".modal-title").append(title);
        $('#customModal').find(".modal-body").append(body);


        $('#customModal').find('.modal-footer').append(btns); 
        $('#customModal').modal({backdrop: 'static', keyboard: false}); 
    }
function canUseWebP() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
}
    function showAlertContact(){
     
        $('#customModal').find(".modal-title").empty();
        //$('#customModal').find(".modal-body").empty();
        $('#customModal').find(".modal-footer").empty();
        /**
         * 1-Success;
         * 2-Error;
         * 3-Warns
         *
        var src='';
        switch(type){
            case 1:src='images/icons/success.png';break;
            case 2:src='images/icons/error.png';break;
            case 3:src='images/icons/warning.png';break;
            default:src='images/icons/error.png';break;
        }*/

        $('#modalContact').modal({backdrop: 'static', keyboard: false}); 
       // $('#modalContact').find('.modal-footer').append(btns); 
    }
    function showAlertperm(title, body, type,func='',val=''){
     
        $('.alsl[id=modalTitle]').text('');
        $('.alsl[id=modalBody]').empty('');
        /**
         * 1-Success;
         * 2-Error;
         * 3-Warns
         */
        var src='';
        switch(type){
            case 1:src='images/icons/success.png';break;
            case 2:src='images/icons/error.png';break;
            case 3:src='images/icons/warning.png';break;
            default:src='images/icons/error.png';break;
        }
        $('.alsl[id=modalTitle]').text(title);
        $('.alsl[id=modalBody]').append('<b>'+body+'</b>');
        $('.alsl[id=modalType]').children('img').attr('src',src);


        $('#modalAlertperm').modal({backdrop: 'static', keyboard: false}); 
        $('#modalAlertperm').find('button[data-name=alsl]').click(function(){
            switch(func){
                case 'redirect':redir(val);break;
                default:src='';break;
            }
        }); 
    }

    function redir(loc){
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]+'/'+loc;
        window.location=baseUrl;
    }
    function converteDataBrToUs(data){
        data = data.split('/');
    
        return (data[2]+'-'+data[1]+'-'+data[0]);
    }
    function converteDataUsToBr(data){
        data = data.split('-');
    
        return (data[2]+'/'+data[1]+'/'+data[0]);
    }
    function converteDataTimeUsToBr(data){
    
        ret='';
        var data0 ='';
        //alert(typeof data);
        if(typeof data == 'string'){
            if(data.length > 7){
                data0=data.split(' ');
                data = data0[0].split('-');
                ret = (data[2]+'/'+data[1]+'/'+data[0]);
            }
        }
        
        
    
        return ret;
    }
    function converteDataTimeUsToBrTime(data){
    
        ret='';
        var hora='';
        var data0 ='';
        //alert(typeof data);
        if(typeof data == 'string'){
            if(data.length > 15){
                data0=data.split(' ');
                data = data0[0].split('-');
                hora = data0[1].split(':');
                ret = (data[2]+'/'+data[1]+'/'+data[0]+' '+hora[0]+':'+hora[1]);
            }
        }
        
        
    
        return ret;
    }
function datenow(){
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = yyyy+'-'+mm+'-'+dd;
return today;
}
function getDaysAgo(datetime){
    var dt = new Date();
    var date1 = new Date(datetime);
    var date2 = new Date(dt);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
}

function tituloUrl(title){

    return title.replace(/\s+/g,' ').replace(/[_\s]/g, '-').normalize('NFKD').replace(/[^\w-]/g, '').replace(/[^a-z0-9\s-]/gi, '').toLowerCase();

}
function RemoveAccents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
}
function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
