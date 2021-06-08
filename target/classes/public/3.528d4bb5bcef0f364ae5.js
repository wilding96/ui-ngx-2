(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{r6Bh:function(e,t,l){"use strict";(function(e){l.d(t,"c",(function(){return u})),l.d(t,"b",(function(){return s})),l.d(t,"a",(function(){return c}));var o=l("mrSG"),a=l("yWc6"),i=l("//Q6"),n=l("Zss7"),r=n,u={schema:{type:"object",title:"Settings",properties:{minValue:{title:"Minimum value",type:"number",default:0},maxValue:{title:"Maximum value",type:"number",default:100},unitTitle:{title:"Unit title",type:"string",default:null},showUnitTitle:{title:"Show unit title",type:"boolean",default:!0},majorTicksCount:{title:"Major ticks count",type:"number",default:null},minorTicks:{title:"Minor ticks count",type:"number",default:2},valueBox:{title:"Show value box",type:"boolean",default:!0},valueInt:{title:"Digits count for integer part of value",type:"number",default:3},defaultColor:{title:"Default color",type:"string",default:null},colorPlate:{title:"Plate color",type:"string",default:"#fff"},colorMajorTicks:{title:"Major ticks color",type:"string",default:"#444"},colorMinorTicks:{title:"Minor ticks color",type:"string",default:"#666"},colorNeedle:{title:"Needle color",type:"string",default:null},colorNeedleEnd:{title:"Needle color - end gradient",type:"string",default:null},colorNeedleShadowUp:{title:"Upper half of the needle shadow color",type:"string",default:"rgba(2,255,255,0.2)"},colorNeedleShadowDown:{title:"Drop shadow needle color.",type:"string",default:"rgba(188,143,143,0.45)"},colorValueBoxRect:{title:"Value box rectangle stroke color",type:"string",default:"#888"},colorValueBoxRectEnd:{title:"Value box rectangle stroke color - end gradient",type:"string",default:"#666"},colorValueBoxBackground:{title:"Value box background color",type:"string",default:"#babab2"},colorValueBoxShadow:{title:"Value box shadow color",type:"string",default:"rgba(0,0,0,1)"},highlights:{title:"Highlights",type:"array",items:{title:"Highlight",type:"object",properties:{from:{title:"From",type:"number"},to:{title:"To",type:"number"},color:{title:"Color",type:"string"}}}},highlightsWidth:{title:"Highlights width",type:"number",default:15},showBorder:{title:"Show border",type:"boolean",default:!0},numbersFont:{title:"Tick numbers font",type:"object",properties:{family:{title:"Font family",type:"string",default:"Roboto"},size:{title:"Size",type:"number",default:18},style:{title:"Style",type:"string",default:"normal"},weight:{title:"Weight",type:"string",default:"500"},color:{title:"color",type:"string",default:null}}},titleFont:{title:"Title text font",type:"object",properties:{family:{title:"Font family",type:"string",default:"Roboto"},size:{title:"Size",type:"number",default:24},style:{title:"Style",type:"string",default:"normal"},weight:{title:"Weight",type:"string",default:"500"},color:{title:"color",type:"string",default:"#888"}}},unitsFont:{title:"Units text font",type:"object",properties:{family:{title:"Font family",type:"string",default:"Roboto"},size:{title:"Size",type:"number",default:22},style:{title:"Style",type:"string",default:"normal"},weight:{title:"Weight",type:"string",default:"500"},color:{title:"color",type:"string",default:"#888"}}},valueFont:{title:"Value text font",type:"object",properties:{family:{title:"Font family",type:"string",default:"Roboto"},size:{title:"Size",type:"number",default:40},style:{title:"Style",type:"string",default:"normal"},weight:{title:"Weight",type:"string",default:"500"},color:{title:"color",type:"string",default:"#444"},shadowColor:{title:"Shadow color",type:"string",default:"rgba(0,0,0,0.3)"}}},animation:{title:"Enable animation",type:"boolean",default:!0},animationDuration:{title:"Animation duration",type:"number",default:500},animationRule:{title:"Animation rule",type:"string",default:"cycle"}},required:[]},form:["minValue","maxValue","unitTitle","showUnitTitle","majorTicksCount","minorTicks","valueBox","valueInt",{key:"defaultColor",type:"color"},{key:"colorPlate",type:"color"},{key:"colorMajorTicks",type:"color"},{key:"colorMinorTicks",type:"color"},{key:"colorNeedle",type:"color"},{key:"colorNeedleEnd",type:"color"},{key:"colorNeedleShadowUp",type:"color"},{key:"colorNeedleShadowDown",type:"color"},{key:"colorValueBoxRect",type:"color"},{key:"colorValueBoxRectEnd",type:"color"},{key:"colorValueBoxBackground",type:"color"},{key:"colorValueBoxShadow",type:"color"},{key:"highlights",items:["highlights[].from","highlights[].to",{key:"highlights[].color",type:"color"}]},"highlightsWidth","showBorder",{key:"numbersFont",items:["numbersFont.family","numbersFont.size",{key:"numbersFont.style",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"italic",label:"Italic"},{value:"oblique",label:"Oblique"}]},{key:"numbersFont.weight",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"bold",label:"Bold"},{value:"bolder",label:"Bolder"},{value:"lighter",label:"Lighter"},{value:"100",label:"100"},{value:"200",label:"200"},{value:"300",label:"300"},{value:"400",label:"400"},{value:"500",label:"500"},{value:"600",label:"600"},{value:"700",label:"700"},{value:"800",label:"800"},{value:"900",label:"900"}]},{key:"numbersFont.color",type:"color"}]},{key:"titleFont",items:["titleFont.family","titleFont.size",{key:"titleFont.style",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"italic",label:"Italic"},{value:"oblique",label:"Oblique"}]},{key:"titleFont.weight",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"bold",label:"Bold"},{value:"bolder",label:"Bolder"},{value:"lighter",label:"Lighter"},{value:"100",label:"100"},{value:"200",label:"200"},{value:"300",label:"300"},{value:"400",label:"400"},{value:"500",label:"500"},{value:"600",label:"600"},{value:"700",label:"700"},{value:"800",label:"800"},{value:"900",label:"900"}]},{key:"titleFont.color",type:"color"}]},{key:"unitsFont",items:["unitsFont.family","unitsFont.size",{key:"unitsFont.style",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"italic",label:"Italic"},{value:"oblique",label:"Oblique"}]},{key:"unitsFont.weight",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"bold",label:"Bold"},{value:"bolder",label:"Bolder"},{value:"lighter",label:"Lighter"},{value:"100",label:"100"},{value:"200",label:"200"},{value:"300",label:"300"},{value:"400",label:"400"},{value:"500",label:"500"},{value:"600",label:"600"},{value:"700",label:"700"},{value:"800",label:"800"},{value:"900",label:"900"}]},{key:"unitsFont.color",type:"color"}]},{key:"valueFont",items:["valueFont.family","valueFont.size",{key:"valueFont.style",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"italic",label:"Italic"},{value:"oblique",label:"Oblique"}]},{key:"valueFont.weight",type:"rc-select",multiple:!1,items:[{value:"normal",label:"Normal"},{value:"bold",label:"Bold"},{value:"bolder",label:"Bolder"},{value:"lighter",label:"Lighter"},{value:"100",label:"100"},{value:"200",label:"200"},{value:"300",label:"300"},{value:"400",label:"400"},{value:"500",label:"500"},{value:"600",label:"600"},{value:"700",label:"700"},{value:"800",label:"800"},{value:"900",label:"900"}]},{key:"valueFont.color",type:"color"},{key:"valueFont.shadowColor",type:"color"}]},"animation","animationDuration",{key:"animationRule",type:"rc-select",multiple:!1,items:[{value:"linear",label:"Linear"},{value:"quad",label:"Quad"},{value:"quint",label:"Quint"},{value:"cycle",label:"Cycle"},{value:"bounce",label:"Bounce"},{value:"elastic",label:"Elastic"},{value:"dequad",label:"Dequad"},{value:"dequint",label:"Dequint"},{value:"decycle",label:"Decycle"},{value:"debounce",label:"Debounce"},{value:"delastic",label:"Delastic"}]}]},s=function(){function t(t,l){this.ctx=t;var o=e("#"+l,t.$container)[0],a=t.settings,i=this.createGaugeOptions(o,a);this.gauge=this.createGauge(i).draw()}return t.prototype.update=function(){if(this.ctx.data.length>0){var e=this.ctx.data[0];if(e.data.length>0){var t=e.data[e.data.length-1][1];t!==this.gauge.value&&(this.gauge.value=t)}}},t.prototype.mobileModeChanged=function(){var e=!1!==this.ctx.settings.animation&&!this.ctx.isMobile;this.gauge.update({animation:e})},t.prototype.resize=function(){this.gauge.update({width:this.ctx.width,height:this.ctx.height})},t}(),c=function(e){function t(t,l){return e.call(this,t,l)||this}return Object(o.d)(t,e),t.prototype.createGaugeOptions=function(e,t){var l=t.minValue||0,o=t.maxValue||100,n=this.ctx.data[0].dataKey,u=t.defaultColor||n.color,s=o-l,c=s/(t.majorTicksCount||10),d=t.valueInt||3,y=function(e,t){var l;e.data&&e.data[0]&&(l=e.data[0].dataKey);return l&&Object(i.n)(l.decimals)?l.decimals:Object(i.n)(t.valueDec)&&null!==t.valueDec?t.valueDec:e.decimals}(this.ctx,t);c=parseFloat(parseFloat(c+"").toFixed(y));for(var h=[],m=[],g=l;g<=o;){h.push(g);var p=g+c;if(p=parseFloat(parseFloat(p+"").toFixed(y)),g<o){var v=r(u),f=(g-l)/s;v.setAlpha(f);var F={from:g,to:p,color:v.toRgbString()};m.push(F)}g=p}var k=r(u).darken(20).toRgbString(),w={renderTo:e,minValue:l,maxValue:o,majorTicks:h,minorTicks:t.minorTicks||2,units:b(this.ctx,t),title:!1!==t.showUnitTitle?t.unitTitle&&t.unitTitle.length>0?t.unitTitle:n.label:"",borders:!1!==t.showBorder,borderShadowWidth:!1!==t.showBorder?3:0,valueInt:d,valueDec:y,majorTicksInt:1,majorTicksDec:0,valueBox:!1!==t.valueBox,valueBoxStroke:5,valueBoxWidth:0,valueText:"",valueTextShadow:!0,valueBoxBorderRadius:2.5,highlights:t.highlights&&t.highlights.length>0?t.highlights:m,highlightsWidth:Object(i.n)(t.highlightsWidth)&&null!==t.highlightsWidth?t.highlightsWidth:15,fontNumbers:Object(a.a)(t.numbersFont),fontTitle:Object(a.a)(t.titleFont),fontUnits:Object(a.a)(t.unitsFont),fontValue:Object(a.a)(t.valueFont),fontNumbersSize:t.numbersFont&&t.numbersFont.size?t.numbersFont.size:18,fontTitleSize:t.titleFont&&t.titleFont.size?t.titleFont.size:24,fontUnitsSize:t.unitsFont&&t.unitsFont.size?t.unitsFont.size:22,fontValueSize:t.valueFont&&t.valueFont.size?t.valueFont.size:40,fontNumbersStyle:t.numbersFont&&t.numbersFont.style?t.numbersFont.style:"normal",fontTitleStyle:t.titleFont&&t.titleFont.style?t.titleFont.style:"normal",fontUnitsStyle:t.unitsFont&&t.unitsFont.style?t.unitsFont.style:"normal",fontValueStyle:t.valueFont&&t.valueFont.style?t.valueFont.style:"normal",fontNumbersWeight:t.numbersFont&&t.numbersFont.weight?t.numbersFont.weight:"500",fontTitleWeight:t.titleFont&&t.titleFont.weight?t.titleFont.weight:"500",fontUnitsWeight:t.unitsFont&&t.unitsFont.weight?t.unitsFont.weight:"500",fontValueWeight:t.valueFont&&t.valueFont.weight?t.valueFont.weight:"500",colorNumbers:t.numbersFont&&t.numbersFont.color?t.numbersFont.color:k,colorTitle:t.titleFont&&t.titleFont.color?t.titleFont.color:"#888",colorUnits:t.unitsFont&&t.unitsFont.color?t.unitsFont.color:"#888",colorValueText:t.valueFont&&t.valueFont.color?t.valueFont.color:"#444",colorValueTextShadow:t.valueFont&&t.valueFont.shadowColor?t.valueFont.shadowColor:"rgba(0,0,0,0.3)",colorPlate:t.colorPlate||"#fff",colorMajorTicks:t.colorMajorTicks||"#444",colorMinorTicks:t.colorMinorTicks||"#666",colorNeedle:t.colorNeedle||u,colorNeedleEnd:t.colorNeedleEnd||u,colorValueBoxRect:t.colorValueBoxRect||"#888",colorValueBoxRectEnd:t.colorValueBoxRectEnd||"#666",colorValueBoxBackground:t.colorValueBoxBackground||"#babab2",colorValueBoxShadow:t.colorValueBoxShadow||"rgba(0,0,0,1)",colorNeedleShadowUp:t.colorNeedleShadowUp||"rgba(2,255,255,0.2)",colorNeedleShadowDown:t.colorNeedleShadowDown||"rgba(188,143,143,0.45)",animation:!1!==t.animation&&!this.ctx.isMobile,animationDuration:Object(i.n)(t.animationDuration)&&null!==t.animationDuration?t.animationDuration:500,animationRule:t.animationRule||"cycle",animatedValue:!0};return this.prepareGaugeOptions(t,w),w},t}(s);function b(e,t){var l;return e.data&&e.data[0]&&(l=e.data[0].dataKey),l&&l.units&&l.units.length?l.units:Object(i.n)(t.units)&&t.units.length>0?t.units:e.units}}).call(this,l("xexB"))},yWc6:function(e,t,l){"use strict";l.d(t,"a",(function(){return a})),l.d(t,"b",(function(){return i}));var o=l("mrSG");function a(e){var t=e&&e.family?e.family:"Roboto";return"RobotoDraft"===t&&(t="Roboto"),t}function i(e,t){var l=Object(o.a)(Object(o.a)({},t),e||{});return l.family=a(l),l}}}]);