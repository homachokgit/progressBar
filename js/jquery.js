$(document).ready(function() { //jquery inic
    let progressNum = 0;
    let numInHtml = document.querySelector('#progressMean');
    let l = 0;
    function inic(){ //limit of progress
        progressNum = l;
        numInHtml.innerHTML = progressNum + '%';
        $('#progressBarMean').width(progressNum + '%');
    }
    function print(){ //print to html
            numInHtml.innerHTML = progressNum + '%';
            $('#progressBarMean').width(progressNum + '%');
    }
    $('#positive1').click(function(){
        if(progressNum + 1 < 100){
            progressNum = progressNum+1;
            print()
        }
        else{
            l = 100;
            inic()
        }     
    });
    $('#positive3').click(function(){
        if(progressNum + 3 < 100){
            progressNum = progressNum+3;
            print()
        }
        else{
            l = 100;
            inic()
        }
    });
    $('#positive7').click(function(){
        if(progressNum + 7 < 100){
            progressNum = progressNum+7;
            print()
        }
        else{
            l = 100;
            inic()
        }        
    });
    $('#negative1').click(function(){
        if(progressNum - 1 > 0){
            progressNum = progressNum-1;
            print()
        }
        else{
            l = 0;
            inic()
        }
    });
    $('#negative3').click(function(){
        if(progressNum - 3 > 0){
            progressNum = progressNum-3;
            print()
        }
        else{
            l = 0;
            inic()
        }
    });
    $('#negative7').click(function(){
        if(progressNum - 7 > 0){
            progressNum = progressNum-7;
            print()
        }
        else{
            l = 0;
            inic()
        }
    });
});
