function loadMask(){

    //FUNCAO QUE CARREGA TODAS AS MASCARAS


    newMaskCnpj();
    //MASCARA CEP
    maskCep();
    //DATA PICKER
    datePick();
    maskTime();
    //MASCARA TEL
    telefonesMask();

}

/*****************MASCARA CNPJ FUNCOES************** */
function maskCnpj(el){
    try {
        $(el).unmask();
    } catch (e) {}
    
    var tamanho = $(el).val().length;
    
    $(el).val(maskCnpjStr($(el).val().replace(/[^\w\s]/gi, '')));
    
    
    // ajustando foco
    var elem = el;
    setTimeout(function(){
        // mudo a posição do seletor
    	elem.selectionStart = elem.selectionEnd = 10000;
    }, 0);
    // reaplico o valor para mudar o foco
    var currentValue = $(el).val();
    $(el).val('');
    $(el).val(currentValue);
}
function maskCnpjStr(el){
    
    var $in = $("<input>", {id: "foo", "name": "inptest","type":"hidden","value":el});
    
    try {
        $in.unmask();
    } catch (e) {}
    
    var tamanho = $in.val().length;
	
    if(tamanho <= 11){
        $in.mask("999.999.999-99");
    } else if(tamanho > 11){
        $in.mask("99.999.999/9999-99");
    }
    
    // ajustando foco
    var elem = $in;
    setTimeout(function(){
        // mudo a posição do seletor
    	elem.selectionStart = elem.selectionEnd = 10000;
    }, 0);
    // reaplico o valor para mudar o foco
    var currentValue = $($in).val();
    $($in).val('');
    $($in).val(currentValue);
    
    return $($in).val();
}
function newMaskCnpj(){
    
    var el = $('.cpfcnpj');
    
    try {
        $(el).unmask();
    } catch (e) {}

   
        var SPMaskBehavior1 = function (val) { 
            return val.replace(/\D/g, '').length <= 11 ? '000.000.000-00999' : '00.000.000/0000-00';;
          },
          spOptions1 = {
            onKeyPress: function(val, e, field, options) {
             
                    field.mask(SPMaskBehavior1.apply({}, arguments), options);
                
              }
          };
        
          $(el).mask(SPMaskBehavior1, spOptions1);  
    
 
      
}
/*****************MASCARA CNPJ FUNCOES************** */

/*****************MASCARA DATA************** */
function datePick(){
    $('.dataPick').mask('99/99/9999');
    $('.dataPick').datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });

}



/*****************MASCARA CEP FUNCOES************** */
function maskCep(){
    var el = $('.cep');

    try {
        $(el).unmask();
    } catch (e) {}

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 8 ? '00000-000' : '00000-000';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };
    
      $(el).mask(SPMaskBehavior, spOptions);      
    
}
function maskTime(){
    //mask code
    $(".timepicker").mask("99:99");  
    
}
/*****************MASCARA CEP FUNCOES************** */

function telefonesMask(){
    var el = $('.tel');

    try {
        $(el).unmask();
    } catch (e) {}

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
      };
    
      $(el).mask(SPMaskBehavior, spOptions);
    
}


  /* Máscaras ER */
function mascara(o,f,j){
    v_obj=o
    v_fun=f
    setTimeout(execmascara(o,j),1);
    
}
function execmascara(o,j){
    v_obj.value=v_fun(v_obj.value)
    isPhone(o,j);
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}

function RemoveAccents2(s) 
{
    return s.normalize('NFKD').replace(/[^\w-]/g, '');
}
// $('#data').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
// $('#data2').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
// $('.data2').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
// $('.data').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
//$('.data2').keydown(function(){alert('teste');});
