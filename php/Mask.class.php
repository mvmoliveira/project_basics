<?php

class Mask{
    public static function dataUsToBr($data){
        $dataBr="";
        if(strlen($data)==10){
            $data=explode("-",$data);
            $dataBr = $data[2]."/".$data[1]."/".$data[0];

            return $dataBr;
        }else{
            return "";
        }
    }
    public static function dtTimeUstoBr($data){

        if(strlen($data)>9){
            return date("d/m/Y h:i", strtotime($data));
        }else{
            return "";
        }
    }

    public static function maskPhone($data){
        $pbr="";
        if(strlen($data)==10){
            $pbr="(".substr($data,0,2).") ".substr($data,2,4)."-".substr($data,6,4);
        }else if(strlen($data)==11){
            $pbr="(".substr($data,0,2).") ".substr($data,2,1)." ".substr($data,3,4)."-".substr($data,7,4);
        }

        return $pbr;
    }
    public static function dataBrToUs($data){
        $dataBr="";
        if(strlen($data)==10){
            $data=explode("/",$data);
            $dataBr = $data[2]."-".$data[1]."-".$data[0];

            return $dataBr;
        }else{
            return "";
        }
    }
    public static function dtTimeBrToUs($data){
        $dataBr="";
        if(strlen($data)>9){
            $data=explode("/",$data);
            $dataBr = $data[2]."-".$data[1]."-".$data[0];

            return date("Y-m-d h:i", strtotime($dataBr));
        }else{
            return "";
        }
    }
    public static function numForm($n){
        
        return number_format($n,0,"",".");
    }
    public static function moneyBrToUs($money){
        $retMoney=trim(str_replace('R$','',str_replace(',','.',str_replace('.','',$money))));
        return $retMoney;
    }
    public static function moneyForm($money){
        
        return number_format($money,2,",",".");
    }
    public static function moneyForm_rs($money){
        
        return "R$ ".number_format($money,2,",",".");
    }
    public static function limpaDadosApenasNumeros($d){
        return preg_replace('/[^0-9]/', '', $d);
    }
    public static function cnpjFormatted($val){
        if(strlen($val)==14){
            $val = substr($val,0,2).".".substr($val,2,3).".".substr($val,5,3)."/".substr($val,8,4)."-".substr($val,12,2);
            return $val;
        }else if(strlen($val)==11){
            $val = substr($val,0,3).".".substr($val,3,3).".".substr($val,6,3)."-".substr($val,9,2);
            return $val;
        }else{
            return "";
        }
    }
}

?>