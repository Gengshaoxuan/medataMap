require.config({
            paths: {
                echarts: 'js/echarts-2.2.7/build/dist'
            }
        });
        // 使用图表
        require(
            [
                'echarts',
                'echarts/chart/map',
                'echarts/chart/bar',
                'echarts/chart/line',
                'echarts/chart/pie',
            ],
function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart  = ec.init(document.getElementById('main')); 
        var myChart2 = ec.init(document.getElementById('down_bar')); 
        var myChart3 = ec.init(document.getElementById('down_line')); 
        var myChart4 = ec.init(document.getElementById('down_pie')); 

        // 自定义扩展图表类型：mapType = body
        require('echarts/util/mapData/params').params.football = {
            getGeoJson: function (callback) {
                $.ajax({
                    url: "img/svg4.svg",
                    // url: "img/map04-1-01.svg",
                    // url: "img/3333333.svg",
                    // url: "svg/football.svg",
                    dataType: 'xml',
                    // dataType: 'jsonp',
                    // type : "get", 
                    // async:false, 
                    // jsonp: "callback",//服务端用于接收callback调用的function名的参数 
                    success: function(xml) {
                        callback(xml)
                        console.log(xml)
                    }
                });
            }
        }
        //加载延时
        myChart.showLoading({
                text : '  ',
                effect:'dynamicLine',// 'bar'|spin'|whirling' | 'dynamicLine' | 'bubble'
                textStyle : {
                    fontSize : 20,
                    color:'orange'
                }
            });
        //地图
        var option = {
            // backgroundColor:'rgba(255,255,255,0)',  
            backgroundColor:'pink',  
            tooltip : {
                trigger: 'item',//出发类型
                showDelay:800,//显示延迟
                hideDelay:0,
                transitionDuration:0,
                // formatter:"{a}",
                // formatter:'<button>按钮1</button><button>按钮2</button></br><button>按钮3</button><button>按钮4</button>',
                enterable:'true'//鼠标时否可以进入提示框
            },
            dataRange: {
                show:true,
                min : 30,
                max : 290,
                x: '85%',
                y: '5%',
                selectedMode:'multiple',
                backgroundColor:'purple',
                borderWidth:2,
                borderColor:'#00ff00',
                // splitNumber:14,
                // calculable : true,
                // color: ['#308FF1', '#D89740', '#00ff00']
                textStyle:{color:'#fff'},
                splitList: [
                    {start: 280, end: 300, label: '客户关系管理系统'},
                    {start: 260, end: 280, label: '核心国结系统'},
                    {start: 240, end: 260, label: '全流程信贷系统'},
                    {start: 220, end: 240, label: '中小企业贷款管理系统'},
                    {start: 200, end: 220, label: '核心系统'},
                    {start: 180, end: 200, label: '核心报表系统'},
                    {start: 160, end: 180, label: '核心柜面系统'},
                    {start: 140, end: 160, label: 'DS系统'},
                    {start: 120, end: 140, label: 'ODS系统'},
                    {start: 100, end: 120, label: '临时区'},
                    {start: 80, end: 100, label: '基础汇总区'},
                    {start: 60, end: 80, label: '统一报表集市'},
                    {start: 40, end: 60, label: '统一报表'},
                    {start: 20, end: 40, label: '关键业务指标应用系统'},
                    {start: 0, end: 20, label: '系统间关系'}
                ],
                color: ['#288cf4', '#286ef4','#23abc9','#5169d7','#286bca','#28a1a2','#288cf3','#da7f4d','#da6f5b','#da9835','#aa9235','#bd8235','#4e8b28','#2c6728','#828282']
            },
            series : [
                {
                    name: '',
                    type: 'map',
                    mapType: 'football', // 自定义扩展图表类型
                    // roam:'scale',
                    roam:true,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    }, 
                    textFixed : {
                        '客户关系管理系统' : [0, -38],
                        '核心国结系统' : [0, -47],
                        '全流程信贷系统' : [0, -28],
                        '中小企业贷款管理系统' : [0, -43],
                        '核心系统' : [0, -32],
                        '核心报表系统' : [0, -60],
                        '核心柜面系统' : [0, -28],
                        'DS系统' : [0, -41],
                        'ODS系统' : [0, -50],
                        '临时区' : [0, -46],
                        '基础汇总区' : [0, -47],
                        '统一报表集市' : [0, -25],
                        '统一报表' : [0, -77],
                        '关键业务指标应用系统' : [0, -23]
                    },
                    data:[
                        // {name: '草地', hoverable: false, itemStyle:{normal:{label:{show:false}}}}
                    ],
                    scaleLimit:{min:0.8,max:1.5},//缩放限制
                    markPoint : {
                        // symbol:'image://img/star.png',
                        // symbol:'image://img/1.jpg',
                        symbol:'circle',
                        symbolSize : 100,
                        effect : {
                            show: true,
                            // type:'bounce' //跳动
                            type:'scale'
                        },
                        data : [
                            {symbolSize : 11,name: '客户关系管理系统', value: 290, geoCoord:[150, 90]},
                            {symbolSize : 15,name: '核心国结系统', value: 270, geoCoord:[110, 160]},
                            {symbolSize : 6,name: '全流程信贷系统', value: 250, geoCoord:[60, 230]},
                            {symbolSize : 14,name: '中小企业贷款管理系统', value: 230, geoCoord:[10, 300]},
                            {symbolSize : 8,name: '核心系统', value: 210, geoCoord:[60, 370]},
                            {symbolSize : 21,name: '核心报表系统', value: 190, geoCoord:[110, 440]},
                            {symbolSize : 6,name: '核心柜面系统', value: 170, geoCoord:[150, 510]},
                            {symbolSize : 12,name: 'DS系统', value: 150, geoCoord:[225, 265]},
                            {symbolSize : 16,name: 'ODS系统', value: 130, geoCoord:[380, 200]},
                            {symbolSize : 14,name: '临时区', value: 110, geoCoord:[340, 340]},
                            {symbolSize : 15,name: '基础汇总区', value: 90, geoCoord:[420, 360]},
                            {symbolSize : 5,name: '统一报表集市', value: 70, geoCoord:[500, 370]},
                            {symbolSize : 28,name: '统一报表', value: 50, geoCoord:[600, 300]},
                            {symbolSize : 3,name: '关键业务指标应用系统', value: 30, geoCoord:[700, 300]}
                        ]
                    },
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 20,
                            color: '#fff',
                            shadowBlur: 5
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                        label: {
                            show: false
                        },
                        lineStyle: {
                            type: 'solid'//dotted  dashed  solid
                        }
                            }
                        },
                        data : [
                            [{name:'全流程信贷系统', geoCoord:[60,230], smoothness:0.01},{name:'DS区', geoCoord:[225,265]}],
                            [{name:'保证人合同信息表（外汇表）', geoCoord:[60,230], smoothness:0.2},{name:'TB_GRT_GUARANTEE_CON_INFOF', geoCoord:[225,265],value:250}],
                            [{name:'保证人合同信息表', geoCoord:[60,230], smoothness:0.25},{name:'TB_GRT_GUARANTEE_CON_INFO', geoCoord:[225,265],value:250}],
                            [{name:'保证人分类信息表', geoCoord:[60,230], smoothness:0.3},{name:'TB_GRT_GUARANTEE_CLF_INFO', geoCoord:[225,265],value:250}],
                            [{name:'需求新增保证分类功能', geoCoord:[60,230], smoothness:0.35},{name:'TB_GRT_GUARANTEE_CLASSFY', geoCoord:[225,265],value:250}],
                            [{name:'保证人基础信息表', geoCoord:[60,230], smoothness:0.4},{name:'TB_GRT_GUARANTEE_BASE_INFO', geoCoord:[225,265],value:250}],
                            [{name:'保证信息,GUARANTEE_ID作为主键,主要包括客户ID，保证人名称，监管状态，担保限额，分类状态等', geoCoord:[60,230], smoothness:0.45},{name:'TB_GRT_GUARANTEE', geoCoord:[225,265],value:250}],
                            [{name:'专营权特征信息', geoCoord:[60,230], smoothness:0.5},{name:'TB_GRT_FRANCHISE', geoCoord:[225,265],value:250}],
                            [{name:'林业资产特征信息', geoCoord:[60,230], smoothness:0.55},{name:'TB_GRT_FORESTRY_ASSETS', geoCoord:[225,265],value:250}],
                            [{name:'中小企业贷款管理系统', geoCoord:[10,300], smoothness:0.01},{name:'DS区', geoCoord:[225,265]}],
                            [{name:'用款人与担保品关系表', geoCoord:[10,300], smoothness:0.2},{name:'LMT_USER_GUAR_REL', geoCoord:[225,265],value:230}],
                            [{name:'用款人授信协议表', geoCoord:[10,300], smoothness:0.25},{name:'LMT_USER_CONT', geoCoord:[225,265],value:230}],
                            [{name:'项目信息表', geoCoord:[10,300], smoothness:0.3},{name:'LMT_PROJ_INFO', geoCoord:[225,265],value:230}],
                            [{name:'借款人与担保品关系表', geoCoord:[10,300], smoothness:0.35},{name:'LMT_GUAR_REL', geoCoord:[225,265],value:230}],
                            [{name:'批量式直贷下的借款人客户表', geoCoord:[10,300], smoothness:0.4},{name:'LMT_CUS_BASE', geoCoord:[225,265],value:230}],
                            [{name:'授信额度台帐', geoCoord:[10,300], smoothness:0.45},{name:'LMT_CONT_DETAILS', geoCoord:[225,265],value:230}],
                            [{name:'客户关系管理系统', geoCoord:[150,90], smoothness:0.01},{name:'DS区', geoCoord:[225,265]}],
                            [{name:'重点客户表', geoCoord:[150,90], smoothness:0.2},{name:'C_CUST_IMPORTANT', geoCoord:[225,265],value:290}],
                            [{name:'香港分行定制化客户信息表', geoCoord:[150,90], smoothness:0.25},{name:'C_CUST_INFO_HK', geoCoord:[225,265],value:290}],
                            [{name:'香港分行地址集合信息表', geoCoord:[150,90], smoothness:0.3},{name:'C_CUST_ADDR_HK', geoCoord:[225,265],value:290}],
                            [{name:'人员信息表', geoCoord:[150,90], smoothness:0.35},{name:'OM_EMPLOYEE', geoCoord:[225,265],value:290}],
                            [{name:'联系人证件信息', geoCoord:[150,90], smoothness:0.4},{name:'C_CUST_KEYMAN_CARD', geoCoord:[225,265],value:290}],
                            [{name:'客户关注事件表', geoCoord:[150,90], smoothness:0.45},{name:'C_CUST_ATTENT_EVENT_TYPE', geoCoord:[225,265],value:290}],
                            [{name:'客户风险预警信号表', geoCoord:[150,90], smoothness:0.5},{name:'C_CUST_RISK_WARN_SIGNAL_TYPE', geoCoord:[225,265],value:290}],
                            [{name:'机构部门表', geoCoord:[110,440], smoothness:0.01},{name:'OM_ORGANIZATION', geoCoord:[225,265]}],
                            [{name:'V_OM_EMPLOYEE', geoCoord:[110,440], smoothness:0.2},{name:'V_OM_EMPLOYEE', geoCoord:[225,265],value:190}],
                            // [{name:'核心系统', geoCoord:[60,370], smoothness:},{name:'DS区', geoCoord:[225,265],value:400}],
                            [{name:'核心系统', geoCoord:[60,370], smoothness:0.01},{name:'DS区', geoCoord:[225,265]}],
                            [{name:'TP_B_GL041', geoCoord:[60,370], smoothness:0.2},{name:'TP_B_GL041', geoCoord:[225,265],value:210}],
                            [{name:'TP_B_GL0351', geoCoord:[60,370], smoothness:0.25},{name:'TP_B_GL035', geoCoord:[225,265],value:210}],
                            [{name:'核心系统', geoCoord:[60,370], smoothness:0.3},{name:'DS区', geoCoord:[225,265],value:210}],
                            [{name:'核心系统', geoCoord:[60,370], smoothness:0.35},{name:'DS区', geoCoord:[225,265],value:210}],
                            [{name:'核心柜面系统', geoCoord:[150,510], smoothness:0.01},{name:'DS区', geoCoord:[225,265]}],
                            [{name:'VOUCHERTRAILBOX', geoCoord:[150,510], smoothness:0.2},{name:'VOUCHERTRAILBOX', geoCoord:[225,265],value:170}],
                            [{name:'TRAILBOXVOUCHER', geoCoord:[150,510], smoothness:0.3},{name:'TRAILBOXVOUCHER', geoCoord:[225,265],value:170}],
                            [{name:'核心国结系统', geoCoord:[110,160], smoothness:0.1},{name:'DS区', geoCoord:[225,265]}],
                            [{name:'TRADE_ATTR', geoCoord:[110,160], smoothness:0.25},{name:'TRADE_ATTR', geoCoord:[225,265],value:170}],
                            [{name:'STATE_HOLIDAY', geoCoord:[110,160], smoothness:0.3},{name:'STATE_HOLIDAY', geoCoord:[225,265],value:170}],
                            [{name:'STATE_AREA', geoCoord:[110,160], smoothness:0.35},{name:'STATE_AREA', geoCoord:[225,265],value:170}],
                            [{name:'SGMASTER', geoCoord:[110,160], smoothness:0.4},{name:'SGMASTER', geoCoord:[225,265],value:170}],
                            [{name:'SF_LOAN_MASTER', geoCoord:[110,160], smoothness:0.45},{name:'SF_LOAN_MASTER', geoCoord:[225,265],value:170}],
                            [{name:'REMITMAST', geoCoord:[110,160], smoothness:0.5},{name:'REMITMAST', geoCoord:[225,265],value:170}],
                            [{name:'REGION', geoCoord:[110,160], smoothness:0.55},{name:'REGION', geoCoord:[225,265],value:170}],
                            [{name:'DS区', geoCoord:[225, 265], smoothness:0.01},{name:'临时区', geoCoord:[340, 340]}],
                            [{name:'LCCLAUSEINFO', geoCoord:[225, 265], smoothness:0.2},{name:'S15_LCCLAUSEINFO', geoCoord:[340, 340],value:150}],
                            [{name:'SF_LOAN_MASTER', geoCoord:[225, 265], smoothness:0.25},{name:'S15_SF_LOAN_MASTER', geoCoord:[340, 340],value:150}],
                            [{name:'LCMASTER', geoCoord:[225, 265], smoothness:0.3},{name:'S15_LCMASTER', geoCoord:[340, 340],value:150}],
                            [{name:'PAY_ACCEPT_DECLARE_INFO', geoCoord:[225, 265], smoothness:0.35},{name:'S15_PAY_ACCE_DECL_INFO', geoCoord:[340, 340],value:150}],
                            [{name:'FSDETAIL', geoCoord:[225, 265], smoothness:0.4},{name:'S15_FSDETAIL', geoCoord:[340, 340],value:150}],
                            [{name:'LGMASTER', geoCoord:[225, 265], smoothness:0.45},{name:'S15_LGMASTER', geoCoord:[340, 340],value:150}],
                            [{name:'FM_DEPOSIT', geoCoord:[225, 265], smoothness:0.5},{name:'S01_FM_DEPOSIT', geoCoord:[340, 340],value:150}],
                            [{name:'RB_CR_ACCR_HIST', geoCoord:[225, 265], smoothness:0.55},{name:'S01_RB_CR_ACCR_HIST', geoCoord:[340, 340],value:150}],
                            [{name:'DS区', geoCoord:[225, 265], smoothness:0.01},{name:'ODS系统', geoCoord:[380,200]}],
                            [{name:'DP_BRANCH_MAP', geoCoord:[225, 265], smoothness:0.2},{name:'DP_BRANCH_MAP', geoCoord:[380,200],value:150}],
                            [{name:'TB_CRD_BCD_CREDIT_INFO', geoCoord:[225, 265], smoothness:0.25},{name:'TB_CRD_BCD_CREDIT_INFO', geoCoord:[380,200],value:150}],
                            [{name:'DP_BILL_CODE', geoCoord:[225, 265], smoothness:0.3},{name:'DP_BILL_CODE', geoCoord:[380,200],value:150}],
                            [{name:'DP2_TRAN_CATEGORY', geoCoord:[225, 265], smoothness:0.35},{name:'DP2_TRAN_CATEGORY', geoCoord:[380,200],value:150}],
                            [{name:'DP2_SEND_MSG', geoCoord:[225, 265], smoothness:0.4},{name:'DP2_SEND_MSG', geoCoord:[380,200],value:150}],
                            [{name:'临时区', geoCoord:[340, 340], smoothness:0.01},{name:'基础汇总区', geoCoord:[420,360]}],
                            [{name:'S01_RB_CHEQUE_DETAIL', geoCoord:[340, 340], smoothness:0.15},{name:'票据协议', geoCoord:[420,360],value:110}],
                            [{name:'S01_CL_LOAN', geoCoord:[340, 340], smoothness:0.2},{name:'票据协议', geoCoord:[420,360],value:110}],
                            [{name:'S07_ACPT_BILL_INFO', geoCoord:[340, 340], smoothness:0.25},{name:'票据协议', geoCoord:[420,360],value:110}],
                            [{name:'S07_ACPT_BACH', geoCoord:[340, 340], smoothness:0.3},{name:'票据协议', geoCoord:[420,360],value:110}],
                            [{name:'S01_CL_GUARANTEE_TBL', geoCoord:[340, 340], smoothness:0.35},{name:'票据协议', geoCoord:[420,360],value:110}],
                            [{name:'S11_DMSASSET', geoCoord:[340, 340], smoothness:0.4},{name:'债券', geoCoord:[420,360],value:110}],
                            [{name:'S11_DMSEC', geoCoord:[340, 340], smoothness:0.45},{name:'债券', geoCoord:[420,360],value:110}],
                            [{name:'S11_DMSECIDNT', geoCoord:[340, 340], smoothness:0.5},{name:'债券鉴别信息历史', geoCoord:[420,360],value:110}],
                            [{name:'S11_DMSASSET', geoCoord:[340, 340], smoothness:0.55},{name:'债券鉴别信息历史', geoCoord:[420,360],value:110}],
                            [{name:'基础汇总区', geoCoord:[420,360], smoothness:0.01},{name:'统一报表集市', geoCoord:[500,370]}],
                            [{name:'SU_CUST_BASE_ACCT_INFO', geoCoord:[420,360], smoothness:0.2},{name:'客户主账户信息表', geoCoord:[500,370],value:90}],
                            [{name:'AG_AGT_GROUP_DOUBLE_LIST_H', geoCoord:[420,360], smoothness:0.25},{name:'DM_AGT_GROUP_DOUBLE_LIST_H', geoCoord:[500,370],value:90}],
                            [{name:'SU_STUDL_OUTSUM', geoCoord:[420,360], smoothness:0.3},{name:'助贷对外汇总表', geoCoord:[500,370],value:90}],
                            [{name:'FI_ORG_SEGMENT', geoCoord:[420,360], smoothness:0.35},{name:'对私发放账户', geoCoord:[500,370],value:90}],
                            [{name:'SU_INDV_DD_ACCT', geoCoord:[420,360], smoothness:0.4},{name:'对私发放账户', geoCoord:[500,370],value:90}],
                            [{name:'统一报表集市', geoCoord:[500,370], smoothness:0.01},{name:'统一报表', geoCoord:[600,300]}],
                            [{name:'经济资本管理表', geoCoord:[500,370], smoothness:0.2},{name:'经济资本管理表', geoCoord:[600,300],value:70}],
                            [{name:'贴现协议', geoCoord:[500,370], smoothness:0.25},{name:'T_DM_DISCNT_AGT', geoCoord:[600,300],value:70}],
                            [{name:'DM_LOAN_DD_PLAN', geoCoord:[500,370], smoothness:0.3},{name:'T_DM_DD_PLAN', geoCoord:[600,300],value:70}],
                            [{name:'中小用款人与合同对应关系', geoCoord:[500,370], smoothness:0.35},{name:'T_DM_CUS_CONTR_RELA_INFO', geoCoord:[600,300],value:70}],
                            [{name:'DM_CUST_RELA_INFO', geoCoord:[500,370], smoothness:0.4},{name:'T_DM_CUST_NATURAL', geoCoord:[600,300],value:70}],
                            [{name:'客户业务类型表', geoCoord:[500,370], smoothness:0.45},{name:'T_DM_CUST_BIZ', geoCoord:[600,300],value:70}],
                            [{name:'客户主账户信息表', geoCoord:[500,370], smoothness:0.5},{name:'客户主账户信息表(非信贷资金账户表)', geoCoord:[600,300],value:70}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.01},{name:'关键业务指标应用系统', geoCoord:[700,300]}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.2},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.25},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.3},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.35},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.4},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.45},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.5},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.55},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}],
                            [{name:'统一报表', geoCoord:[600,300], smoothness:0.6},{name:'关键业务指标应用系统', geoCoord:[700,300],value:50}]
                            // [{name:'单独节点1', geoCoord:[600,100], smoothness:0.34},{name:'单独节点2', geoCoord:[700,170]}],
                            // [{name:'单独节点2', geoCoord:[700,170], smoothness:0.34},{name:'单独节点1', geoCoord:[600,100]}]
                        ]
                    }
                },
                //单独数据
                {
                    name:'111',
                    type:'map',
                    mapType:'football', 
                    roam:true,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[],
                    markPoint : {
                        // symbol:'image://img/star.png',
                        symbol:'circle',
                        symbolSize : 100,
                        effect : {
                            show: true,
                            // type:'bounce' //跳动
                            type:'scale'
                        },
                        data:[
                            // {symbolSize : 5,name: '单独节点1', value: 10, geoCoord:[600,100]},
                            // {symbolSize : 5,name: '单独节点2', value: 10, geoCoord:[700,170]}
                        ]
                    },
                    markLine:{
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 20,
                            color: '#fff',
                            shadowBlur: 5
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'dashed'//dotted  dashed  solid
                                }
                            }
                        },
                        data : [  
                            [{name:'核心系统', geoCoord:[60, 370], smoothness:0.1},{name:'ESB', geoCoord:[380,70]}],
                            [{name:'全流程信贷系统', geoCoord:[60,230], smoothness:0.1},{name:'ESB', geoCoord:[380,70]}],
                            [{name:'ESB', geoCoord:[380,70], smoothness:0.1},{name:'统一授权系统', geoCoord:[600,90]}],
                            [{name:'ESB', geoCoord:[380,70], smoothness:0.1},{name:'核心系统', geoCoord:[60, 370]}],
                            [{name:'ESB', geoCoord:[380,70], smoothness:0.1},{name:'全流程信贷系统', geoCoord:[60,230]}],
                            [{name:'统一授权系统', geoCoord:[600,90], smoothness:0.1},{name:'ESB', geoCoord:[380,70]}] 
                        ]
                    }
                }
            ]
        };
        //echarts柱形图 开始
        // var option2 = {
        //      tooltip: {
        //                 show: true
        //             },
        //             legend: {
        //                 data:['元数据资产']
        //             },
        //             xAxis : [   
        //                 {
        //                     type : 'category',
        //                     data:[]
        //                     // data : ["数据备份回复记录","数据归档记录","系统用户使用记录","ETL运行记录","ETL程序","技术规则","物理模型","逻辑模型","业务规则","术语","系统信息","业务数据分类","概念模型"]
        //                 }
        //             ],
        //             yAxis : [
        //                 {
        //                     type : 'value'
        //                 }
        //             ],
        //             series : [
        //                 {
        //                     name:"元数据资产",
        //                     type:"bar",
        //                     data:[]
        //                     // "data":[2,2,2,2,5,35,14,18,12,10,2,2,2,2]
        //                 }
        //             ]
        // };
        // echarts柱形图 结束
        //highcharts 3D柱形图 开始
        $(function () {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'down_bar',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        depth: 50,
                        viewDistance: 25
                    }
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                plotOptions: {
                    column: {
                        depth: 25
                    }
                },
                credits: {  
                    enabled:false  
                }, 
                series: [{
                    name:'元数据资产',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
            });
        });
        ////highcharts 3D柱形图 结束
        //echarts线图 开始
        // var option3 = {
        //      tooltip: {
        //                 show: true
        //             },
        //             legend: {
        //                 data:['元数据资产']
        //             },
        //             xAxis : [
        //                 {
        //                     type : 'category',
        //                     data : ["操作元数据","技术元数据","业务元数据"]
        //                 }
        //             ],
        //             yAxis : [
        //                 {
        //                     type : 'value'
        //                 }
        //             ],
        //             series : [
        //                 {
        //                     "name":"元数据资产",
        //                     "type":"line",
        //                     "data":[8,72,20]
        //                 }
        //             ]
        // };
        //echarts线图结束
        //highcharts 3D散点图 开始
        $(function () {
            // Give the points a 3D feel by adding a radial gradient
            Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: {
                        cx: 0.4,
                        cy: 0.3,
                        r: 0.5
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
                    ]
                };
            });
            // Set up the chart
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'down_line',  
                    // margin: 100,
                    type: 'scatter',
                    options3d: {
                        enabled: true,
                        alpha: 10,
                        beta: 30,
                        depth: 250,
                        viewDistance: 5,
                        frame: {
                            bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                            back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                            side: { size: 1, color: 'rgba(0,0,0,0.06)' }
                        }
                    }
                },
                title: {
                    text: '元数据资产'
                },
                subtitle: {
                    text: '单击并拖动鼠标可旋转绘图区'
                },
                plotOptions: {
                    scatter: {
                        width: 10,
                        height: 10,
                        depth: 10
                    }
                },
                credits: {  
                    enabled:false  
                }, 
                yAxis: {
                    min: 0,
                    max: 10,
                    title: null
                },
                xAxis: {
                    min: 0,
                    max: 10,
                    gridLineWidth: 1
                },
                zAxis: {
                    min: 0,
                    max: 10
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: '元数据资产',
                    colorByPoint: true,
                    data: [[1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6], [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3], [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7], [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9], [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5], [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1], [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3], [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8], [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3], [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0], [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8], [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5], [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9], [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2], [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6], [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5], [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]]
                }]
            });
            // Add mouse events for rotation
            $(chart.container).bind('mousedown.hc touchstart.hc', function (e) {
                e = chart.pointer.normalize(e);
                var posX = e.pageX,
                    posY = e.pageY,
                    alpha = chart.options.chart.options3d.alpha,
                    beta = chart.options.chart.options3d.beta,
                    newAlpha,
                    newBeta,
                    sensitivity = 5; // lower is more sensitive
                $(document).bind({
                    'mousemove.hc touchdrag.hc': function (e) {
                        // Run beta
                        newBeta = beta + (posX - e.pageX) / sensitivity;
                        newBeta = Math.min(100, Math.max(-100, newBeta));
                        chart.options.chart.options3d.beta = newBeta;
                        // Run alpha
                        newAlpha = alpha + (e.pageY - posY) / sensitivity;
                        newAlpha = Math.min(100, Math.max(-100, newAlpha));
                        chart.options.chart.options3d.alpha = newAlpha;
                        chart.redraw(false);
                    },
                    'mouseup touchend': function () {
                        $(document).unbind('.hc');
                    }
                });
            });
        });

        ////highcharts 3D散点图 结束
        //echarts饼图 开始
        // var option4 = {
        //     tooltip : {
        //             show:false,
        //             trigger: 'item',
        //             formatter: "{a} <br/>{b} : {c} ({d}%)"
        //         },
        //         legend: {
        //             show:false,
        //             orient : 'vertical',
        //             x : 'left',
        //             data:['操作元数据','技术元数据','业务元数据','数据备份回复记录','数据归档记录','系统用户使用记录','ETL运行记录','ETL程序','技术规则','物理模型','逻辑模型','业务规则','术语','系统信息','业务数据分类','概念模型']
        //         },
        //         toolbox: {
        //             show : false
        //         },
        //         calculable : false,
        //         // animation: true,
        //         series : [
        //             {
        //                 name:'访问来源',
        //                 type:'pie',
        //                 selectedMode: 'single',
        //                 radius : [0, 40],
        //                 x: '30%',
        //                 width: '40%',
        //                 funnelAlign: 'right',
        //                 max: 1548,
        //                 itemStyle : {
        //                     normal : {
        //                         label : {
        //                             position : 'inner'
        //                         },
        //                         labelLine : {
        //                             show : false
        //                         }
        //                     }
        //                 },
        //                 data:[
        //                     {value:8, name:'操作元数据'},
        //                     {value:72, name:'技术元数据'},
        //                     {value:20, name:'业务元数据'}
        //                 ]
        //             },
        //             {
        //                 name:'访问来源',
        //                 type:'pie',
        //                 radius : [50, 90],
        //                 x: '60%',
        //                 width: '35%',
        //                 funnelAlign: 'left',
        //                 max: 1048,
        //                 data:[
        //                     {value:2, name:'数据备份回复记录'},
        //                     {value:2, name:'数据归档记录'},
        //                     {value:2, name:'系统用户使用记录'},
        //                     {value:2, name:'ETL运行记录'},
        //                     {value:5, name:'ETL程序'},
        //                     {value:35, name:'技术规则'},
        //                     {value:14, name:'物理模型'},
        //                     {value:18, name:'逻辑模型'},
        //                     {value:12, name:'业务规则'},
        //                     {value:2, name:'术语'},
        //                     {value:2, name:'系统信息'},
        //                     {value:2, name:'业务数据分类'},
        //                     {value:2, name:'概念模型'}
        //                 ]
        //             }
        //         ]
        // };
        // echarts饼图结束
        //highcharts 双环3D饼图 开始
        $(function () {
         $('#down_pie').highcharts({
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    }
                },
                title: {
                    text: ''
                },
                credits: {  
                    enabled:false  
                }, 
                series: [{
                    name: '元数据资产',
                    size:'85',
                    type:'pie',
                    innerSize:'0',
                    depth: 45,
                    colors:['#d78a42', '#34b99a', '#3786ad'],
                    data: [
                        ['操作元数据', 8],
                        ['技术元数据', 72],
                        ['业务元数据', 20]
                    ]
                },{
                    name: '元数据资产1',
                    size:'300',
                    type:'pie',
                    innerSize:'155',
                    depth: 45, 
                    colors:[
                    '#efab7e', '#ed9857', '#de8237', '#ce7728',
                    '#a3e3cb', '#7adbb8', '#48c6a0', '#16b58c',
                    '#65d9e6', '#48cfe5', '#31bdde', '#18acd4', '#2697bf'
                ],
                    data: [
                        ['数据备份回复记录', 2],
                        ['数据归档记录', 2],
                        ['系统用户使用记录', 2],
                        ['ETL运行记录', 2],
                        ['ETL程序', 5],
                        ['技术规则', 35],
                        ['物理模型', 14],
                        ['逻辑模型', 18],
                        ['业务规则', 12],
                        ['术语', 2],
                        ['系统信息', 2],
                        ['业务数据分类', 2],
                        ['概念模型', 2]
                    ]
                }]
            });
         });
        //highcharts 双环3D饼图 结束

console.log(option)
        ///
//展示点击方法
var ecConfig = require('echarts/config');
function eConsole(param) {debugger;
  var data0 = option4.series[0].data;
  var data1 = option4.series[1].data;
  var data_new = [
        {value:1414, name:'ODS系统'},
        {value:4168, name:'统一报表'},
        {value:1598, name:'全流程信贷系统'},
        {value:1786, name:'临时区'},
        {value:18, name:'关键业务指标应用系统'},
        {value:1866, name:'核心国结系统'},
        {value:1317, name:'客户关系管理系统'},
        {value:700, name:'中小企业贷款管理系统'},
        {value:2831, name:'核心系统'},
        {value:433, name:'核心报表系统'},
        {value:421, name:'核心柜面系统'},
        {value:2093, name:'DS系统'},
        {value:1853, name:'基础汇总区'},
        {value:164, name:'统一报表集市'}
  ];
    data0 = [];
    data1 = [].concat(data_new);
    // myChart4.refresh();
    myChart4.setOption(option4,true); 
}
//绑定点击事件
myChart.on(ecConfig.EVENT.CLICK, eConsole);

        // 为echarts对象加载数据 
        // myChart.setOption(option); 
       
       // myChart2.setOption(option2); 
       // myChart3.setOption(option3); 
       // myChart4.setOption(option4); 

        loadingTicket = setTimeout(function (){
            myChart.hideLoading();
            myChart.setOption(option);
        },1000);

var names = [];
var values = [];

//动态请求ecahrts柱形图数据
   // $.ajax({
   //       // type : "post",
   //       // async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
   //       url : "data/bar.json",    //请求发送到TestServlet处
   //       // data : {},
   //       // dataType : "json",        //返回数据形式为json
   //       success : function(data) {
   //           //请求成功时执行该函数内容，result即为服务器返回的json对象
   //          console.log(data)
   //          if(data){
   //              for(var i=0;i<data.bar.length;i++){
   //                  names.push(data.bar[i].name)
   //              }
   //              for(var i=0;i<data.bar.length;i++){
   //                  values.push(data.bar[i].value)
   //              }
   //              console.log(names)
   //              console.log(values)
   //              //方案一
   //              myChart2.hideLoading();
   //              myChart2.setOption({      //加载数据图表
   //                  xAxis : [{type : 'category',data:names}],
   //                  legend: {
   //                      data:['元数据资产']
   //                  },
   //                  yAxis : [{type : 'value'}],
   //                  series : [
   //                      {
   //                          name:"元数据资产",
   //                          type:"bar",
   //                          data:values
   //                      }
   //                  ]
   //                  });
   //          }
                
   //      },
   //       error : function(errorMsg) {
   //           //请求失败时执行该函数
   //           alert("图表请求数据失败!");
   //       }
   //  })


    }
);
