/**
 * Created by mansikhemka on 3/20/17.
 */

var name,pass,email;
$(function(){
  $('.head1').hover(()=>{
        $('.login').show();
        $('.welcome').hide();
        $('.signup').hide();
        $('.aboutus').hide();
    });

    $('.head2').hover(()=>{
        $('.signup').show();
        $('.welcome').hide();
        $('.aboutus').hide();
        $('.login').hide();
    });

    $('.head3').hover(()=>{
        $('.aboutus').show();
        $('.welcome').hide();
        $('.signup').hide();
        $('.login').hide();
    });

    $('.login').on('click','#b1',(ev)=>{
        name = $('.lna').val();
        pass = $('.lpa').val();
        console.log(name);
        console.log(pass);

    $.post('/isuserthere',{name:name, pass:pass},(data)=>{
        localStorage.setItem('name', JSON.stringify(name));
            console.log(data);
        })
    });

    $('.signup').on('click','#b2',(ev)=>{
        name = $('.sna').val();
        pass = $('.spa').val();
        email = $('.sem').val();

        $.post('/setuser',{name:name, pass:pass, email:email},(result)=>{
            console.log("ALL SET TO GO!");
        })
    })




})