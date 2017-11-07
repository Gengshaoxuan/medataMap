/**
 * Highcharts-zh_CN plugins v0.0.2 (2015-04-19)
 *
 * (c) 2015 HCharts.cn http://www.hcharts.cn
 *
 * Author : John Doe, Blue monkey
 *
 * License: Creative Commons Attribution (CC)
 */

(function(H) {

    ABSOLUTE = H.ABSOLUTE;
    RELATIVE = H.RELATIVE;
    hasSVG = H.hasSVG;
    isTouchDevice = H.isTouchDevice;
    var defaultOptionsZhCn = {

        lang: {
            contextButtonTitle: 'ͼ�����˵�',
            decimalPoint: '.',
            downloadJPEG: "����JPEGͼƬ",
            downloadPDF: "����PDF�ļ�",
            downloadPNG: "����PNG�ļ�",
            downloadSVG: "����SVG�ļ�",
            drillUpText: "���� {series.name}",
            loading: '������...',
            months: ['һ��', '����', '����', '����', '����', '����', '����', '����', '����', 'ʮ��', 'ʮһ��', 'ʮ����'],
            noData: "û������",
            numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
            printChart: "��ӡͼ��",
            resetZoom: '�������ű���',
            resetZoomTitle: '����Ϊԭʼ��С',
            shortMonths: ['һ', '��', '��', '��', '��', '��', '��', '��', '��', 'ʮ', 'ʮһ', 'ʮ��'],
            thousandsSep: ',',
	    shortWeekdays: ['����', '��һ', '�ܶ�', '����', '����', '����', '����'],
            weekdays: ['������','����һ', '���ڶ�', '������', '������', '������', '������']
        },

        global: {
            useUTC: false,
            //timezoneOffset: 8 * 60, // +8
            canvasToolsURL: 'http://cdn.hcharts.cn/highcharts/modules/canvas-tools.js',
            VMLRadialGradientURL: 'http://cdn.hcharts.cn/highcharts/gfx/vml-radial-gradient.png'
        },

        title: {
            text: 'ͼ�����'
        },

        tooltip: {
            dateTimeLabelFormats: {
                millisecond: '%A, %b %e, %H:%M:%S.%L',
                second: '%A, %b %e, %H:%M:%S',
                minute: '%A, %b %e, %H:%M',
                hour: '%b %e, %H:%M',
                day: '%Y-%m-%d',
                week: 'Week from %A, %b %e, %Y',
                month: '%m-%Y',
                year: '%Y'
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '{series.name}: <b>{point.y}</b><br/>',

        },

        xAxis: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%e. %b',
                month: '%m-%Y',
                year: '%Y'
            }
        }
    };

    H.setOptions(defaultOptionsZhCn);
}(Highcharts));