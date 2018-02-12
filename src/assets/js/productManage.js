$(function () {


    navChange()


    function navChange() {
        // 新增
        $("#addProduct").click(function () {
            $('.masking').show();
            $('.addWrap').show();


        })

        $('.modifyBtn').click(function () {
            $('.masking').show();
            $('.modifyWrap').show();
        })
        $('.comboSetBtn').click(function () {
            $('.masking').show();
            $('.comboSetWrap').show();
        })
        $('.comboConfBtn').click(function () {
            
            $('.comboConfigWrap').show();
        })


        $('.productSetBtn').click(function () {
            $('.masking').show();
            $('.productSetWrap').show();
        })
        $('.setBtn').click(function () {
            alert('设置')
        })
        $('.syncBtn').click(function () {
            alert('同步')
        })

        $('.cosComboClose').click(function () {
            $(this).parent().parent().hide();
           


        })

        $('.closeBtns').click(function () {
            $(this).parent().parent().hide();
            $('.masking').hide();


        })

        




    }






})