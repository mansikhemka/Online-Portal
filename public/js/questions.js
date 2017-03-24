/**
 * Created by mansikhemka on 2/13/17.
 */
$(function(){
    showview();

})

function showview(){
    $.get('/quesfetch',function(result){
        console.log(result);
    })
}