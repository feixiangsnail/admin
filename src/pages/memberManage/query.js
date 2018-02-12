$(function () {
    new Vue({
        el: '#memberQueryBox',
        data: {
            memberurl: '/api/site_buyer_select.vm',
            currentIndex: 0,
            remainCurrency: 50,
            detailEditable: false,
            currentId: '',
            currencyLists: [],
            ticketLists: [],
            scoreLists:[],
            showItems: [],
            buyerInfo:{},
            searchItem: {
                barcode: "",
                accountStatus: "",
                mobile: "",
                userName: "",
                buyerType: "",
                createBeginDate: "",
                createEndDate: "",
                siteBuyerType: "",
                updateBeginDate: "",
                updateEndDate: "",
                userid: "",
                thisPage: '',
                pageCount: 3
            },
            searchCurrencyItem: {
                shopid: '',
                barcode: '',
                mobile: '',
                pay_direction: '',
                buyer_payment_type: '',
                begin_time: '',
                end_time: '',
                thisPage: '',
                pageCount: 2
            },
            searchTicketItem: {
                ticket_name: '',
                ticket_code: '',
                mobile: '',
                ticket_type: '',
                ticket_status: '',
                thisPage: '',
                pageCount: 2
            },
            searchScoreItem:{

                userid:'',
                points_type:'',
                points_from:'',
                thisPage: '',
                pageCount: 2

            },
            memberItem: {
                userid: '',
                user_name: '',
                sex: '',
                mobile: '',
                cardno: '',
                photo: '',
                birthday: ''
            },
        },
        methods: {
            openDetailDialog: function (index) {
                this.detailEditable = true;
                $('#masking').show();
                this.currentId = this.showItems[index].userid;
                this.searchCurrencyItem.userid=this.currentId;
                this.searchTicketItem.userid=this.currentId;
                this.searchScoreItem.userid=this.currentId;
                this.getBaseInfo();
            },
            closeDetailDialog: function () {
                this.detailEditable = false;
                $('#masking').hide();
            },
            getBaseInfo() {
                var that= this;
                $.ajax({
                    type: "POST",
                    data: {userid:this.currentId},
                    url: "/api/member/site_buyer_info.vm",
                    dataType: "json",
                    success: function (d) {
                        console.log(d, 'getBaseInfo')
                        if (d.code == 'success') {
                            that.buyerInfo=d.data[0]||{}
                        } else {
                            gAlert(d.msg)
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        gAlert('操作失败，状态码:' + XMLHttpRequest.status)
                    }
                });
            },
            saveBaseInfo: function () {
                this.memberItem.birthday = $("#setBirthday").val();
                this.memberItem.userid = this.currentId;
                $.ajax({
                    type: "POST",
                    data: this.memberItem,
                    url: "/api/member/site_buyer_update.vm",
                    dataType: "json",
                    success: function (d) {
                        if (d.code == 'success') {
                            gAlert('保存成功')
                        } else {
                            gAlert(d.msg)
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        gAlert('操作失败，状态码:' + XMLHttpRequest.status)
                    }
                });
            },
            searchMember: function () {
                this.$refs.child1.getAjaxData();
            },
            showMemberData: function (d) {
                this.showItems = d.data;
            },
            searchCurrency: function () {
                this.searchCurrencyItem.begin_time = $("#currencyBT").val();
                this.searchCurrencyItem.end_time = $("#currencyET").val();
                this.searchCurrencyItem.thisPage = 1;
               
                this.$refs.currencyDom.getAjaxData();
            },
            showCurrencyList: function (d) {
               
                if(d) this.currencyLists = d.data || [];
            },
            searchDiscard: function () {
                this.searchTicketItem.begin_time = $("#ticektBT").val();
                this.searchTicketItem.end_time = $("#ticektET").val();               
                this.$refs.ticketDom.getAjaxData();
            },
            exportDiscard: function () {
                console.log('exportDiscard')
            },
            showTicketList: function (d) {
                if (d) this.ticketLists = d.data || [];
            },
            searchScore(){
                this.searchScoreItem.begin_time = $("#scoreBT").val();
                this.searchScoreItem.end_time = $("#scoreET").val();
               
                this.$refs.scoreDom.getAjaxData();
            },
            showScoreList(d){
                console.log(d,'showscoreList')
                if (d) this.scoreLists = d.data || [];
            },


            chooseImg: function (index) {
                var that = this;
                var obj = this.$refs.imginput;
                // var id = $(obj).attr("data-id");
                //创建读取文件的对象  
                //为文件读取成功设置事件  
                for (var i = 0; i < obj.files.length; i++) {
                    var file = obj.files[i];
                    var reader = new FileReader();
                    reader.name = file.name;
                    reader.onload = function (e) {
                        //创建文件读取相关的变量  
                        $.ajax({
                            url: "/uploadImg.vm",
                            type: 'post',
                            data: { fileData: e.target.result, fileName: e.target.name },
                            dataType: 'JSON',
                            timeout: 200000,
                            error: function () {
                                alert("图片上传失败");
                            },
                            success: function (result) {
                                that.memberItem.photo = result.code;
                            }
                        });
                    };
                    //正式读取文件  
                    reader.readAsDataURL(file);
                }
            }
        }
    })
})
