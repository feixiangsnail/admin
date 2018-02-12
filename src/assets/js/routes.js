var routeList = {
    id: 'mainRouter',
    routes: [
    {
        path:'/',pageUrl: 'pages/memberManage/site_member_manager.html',
    },

    {
            path: '/memberManage',
            pageUrl: 'pages/memberManage/site_member_manager.html',
            id: 'memberManage',
            child: [
                { path: '/memberSchema', pageUrl: 'pages/memberManage/site_member_schema.html' },
                { path: '/memberQuery', pageUrl: 'pages/memberManage/site_member_query.html' },
                { path: '/memberPolicy', pageUrl: 'pages/memberManage/site_member_policy.html' },
                { path: '/memberLevel', pageUrl: 'pages/memberManage/site_member_level.html' },
            ]
        },
        {
            path: '/coupon',
            pageUrl: 'pages/coupon/site_member_promotion.html',
            id: 'coupon',
            child: [
                { path: '/couponManage', pageUrl: 'pages/coupon/site_coupon_manage.html' },
                { path: '/couponDetail', pageUrl: 'pages/coupon/site_coupon_detail.html' },

                { path: '/activityManage', pageUrl: 'pages/coupon/site_marketing_program.html' },
            ]
        },
        {
            path: '/memberReport',
            pageUrl: 'pages/memberReport/site_member_report.html',
            id: 'memberReport',
            child: [
                { path: '/rechargeReport', pageUrl: 'pages/memberReport/site_recharge_report.html' },
                { path: '/resumeReport', pageUrl: 'pages/memberReport/site_resume_report.html' },

                { path: '/remainReport', pageUrl: 'pages/memberReport/site_remain_report.html' },
                { path: '/dealDetailReport', pageUrl: 'pages/memberReport/site_dealDetail_report.html' },
            ]
        },
        {
            path: '/storeBalanceSetting',
            pageUrl: 'pages/storeBalanceSetting/site_storeBalance_setting.html',
            id: 'storeBalanceSetting',
            child: [
                { path: '/relief_balance', pageUrl: 'pages/storeBalanceSetting/site_relief_balance.html' },
                { path: '/day_balance', pageUrl: 'pages/storeBalanceSetting/site_day_balance.html' },

                { path: '/getMoney_balance', pageUrl: 'pages/storeBalanceSetting/site_getMoney_balance.html' },
                { path: '/balance_search', pageUrl: 'pages/storeBalanceSetting/site_balance_search.html' },
            ]
        },
        {
            path: '/storeSysSetting',
            pageUrl: 'pages/storeSysSetting/site_storeSys_setting.html',
            id: 'storeSysSetting',
            child: [
                { path: '/payWay_setting', pageUrl: 'pages/storeSysSetting/site_payWay_setting.html' },
                { path: '/discount_setting', pageUrl: 'pages/storeSysSetting/site_discount_setting.html' },

                { path: '/taihao_setting', pageUrl: 'pages/storeSysSetting/site_taihao_setting.html' },
                { path: '/printer_manager', pageUrl: 'pages/storeSysSetting/site_printer_manager.html' },
                { path: '/configmeal_printer', pageUrl: 'pages/storeSysSetting/site_configmeal_printer.html' },
                { path: '/printer_setting', pageUrl: 'pages/storeSysSetting/site_printer_setting.html' },
            ]
        },

        {
            path: '/storeReconciliateSetting',
            pageUrl: 'pages/storeReconciliateSetting/site_storeReconciliate_setting.html',
            id: 'storeReconciliateSetting',
            child: [
                { path: '/wechat_reconciliate', pageUrl: 'pages/storeReconciliateSetting/site_wechat_reconciliate.html' },
                { path: '/alipay_reconciliate', pageUrl: 'pages/storeReconciliateSetting/site_alipay_reconciliate.html' },

                { path: '/order_reconciliate', pageUrl: 'pages/storeReconciliateSetting/site_order_reconciliate.html' },

            ]
        },

         {
            path: '/wechatSet',
            pageUrl: 'pages/wechatSet/site_wechat_set.html',
            id: 'wechatSet',
            child: [
               { path: '/accountSet', pageUrl: 'pages/wechatSet/site_account_set.html'},
               { path: '/urlConfig', pageUrl: 'pages/wechatSet/site_url_config.html' },
               { path: '/docManage', pageUrl: 'pages/wechatSet/site_doc_manage.html' },
               { path: '/replySet', pageUrl: 'pages/wechatSet/site_reply_set.html' },
               { path: '/customMenu', pageUrl: 'pages/wechatSet/site_custom_menu.html' },
            ]
        },
         {
            path: '/systemSet',
            pageUrl: 'pages/systemSet/site_system_set.html',
            id: 'systemSet',
            child: [
               { path: '/systemSetting', pageUrl: 'pages/systemSet/site_system_setting.html'},
               { path: '/payWaySet', pageUrl: 'pages/systemSet/site_payway_set.html' },
               
            ]
        },

    ]
}