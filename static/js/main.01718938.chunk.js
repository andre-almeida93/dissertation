(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(5),m=a.n(l),o=(a(20),a(6)),r=a(7),s=a(9),i=a(8),p=a(10),u=a(2),E=(a(22),a(0)),d=a(3),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){var t=document.getElementById(e.replace("#",""));"complete"===document.readyState&&(!0===t.checked?document.getElementById(e).style.background="#bada55":document.getElementById(e).style.background="#ff0000")},a.open_menu=function(){document.querySelector(".menubtn").classList.toggle("opened"),document.querySelector(".navmenu").classList.toggle("opened")},a.state={compartments:[{compartments:"compartment#1",state:"unlocked"},{compartments:"compartment#2",state:"unlocked"},{compartments:"compartment#3",state:"unlocked"},{compartments:"compartment#4",state:"unlocked"},{compartments:"compartment#5",state:"unlocked"},{compartments:"compartment#6",state:"unlocked"},{compartments:"compartment#7",state:"unlocked"},{compartments:"compartment#8",state:"unlocked"},{compartments:"compartment#9",state:"unlocked"},{compartments:"compartment#10",state:"unlocked"},{compartments:"compartment#11",state:"unlocked"},{compartments:"compartment#12",state:"unlocked"},{compartments:"compartment#13",state:"unlocked"},{compartments:"compartment#14",state:"unlocked"},{compartments:"compartment#15",state:"unlocked"},{compartments:"compartment#16",state:"unlocked"},{compartments:"compartment#17",state:"unlocked"},{compartments:"compartment#18",state:"unlocked"},{compartments:"compartment#19",state:"unlocked"},{compartments:"compartment#20",state:"unlocked"}],lock_state:"LOCK",locked_compartments:[]},a.activateBins=a.activateBins.bind(Object(u.a)(Object(u.a)(a))),a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.open_menu=a.open_menu.bind(Object(u.a)(Object(u.a)(a))),a.lockUnlockAll=a.lockUnlockAll.bind(Object(u.a)(Object(u.a)(a))),a.updateState=a.updateState.bind(Object(u.a)(Object(u.a)(a))),a.handleChange_new=a.handleChange_new.bind(Object(u.a)(Object(u.a)(a))),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleChange_new",value:function(e,t,a){var n=this,c=this.state.compartments;Object.keys(c).forEach(function(n){c[n].compartments===e&&(c[n].state="smoke"),c[n].compartments===t&&(c[n].state="unlock"),c[n].compartments===a&&(c[n].state="unlock")}),setTimeout(function(){n.activateBins()},5e3)}},{key:"updateState",value:function(){var e=this.state.compartments;Object.keys(e).forEach(function(t){"unlock"===e[t].state&&(document.getElementById(e[t].compartments).style.background="yellow"),"lock"===e[t].state&&(document.getElementById(e[t].compartments).style.background="blue"),"smoke"===e[t].state&&(document.getElementById(e[t].compartments).style.background="green")})}},{key:"lockUnlockAll",value:function(){var e=this.state.compartments;"LOCK"===this.state.lock_state?(this.setState({lock_state:"UNLOCK"}),Object.keys(e).forEach(function(t){e[t].state="lock"})):(this.setState({lock_state:"LOCK"}),Object.keys(e).forEach(function(t){e[t].state="unlock"})),this.updateState()}},{key:"activateBins",value:function(){"none"===document.getElementById("MainBox").style.display?(document.getElementById("MainBox").style.display="grid",document.getElementById("MainBoxTopMenu").style.display="grid",document.getElementById("MainBoxBottomMenu").style.display="grid",document.getElementById("BinBox").style.display="none",document.getElementById("BinBoxTopMenu").style.display="none",document.getElementById("BinBoxBottomMenu").style.display="none"):(document.getElementById("MainBox").style.display="none",document.getElementById("MainBoxTopMenu").style.display="none",document.getElementById("MainBoxBottomMenu").style.display="none",document.getElementById("BinBox").style.display="grid",document.getElementById("BinBoxTopMenu").style.display="grid",document.getElementById("BinBoxBottomMenu").style.display="grid",this.updateState())}},{key:"componentDidMount",value:function(){window.document.body.style.zoom=.625,document.getElementById("BinBox").style.display="none",document.getElementById("BinBoxTopMenu").style.display="none",document.getElementById("BinBoxBottomMenu").style.display="none";for(var e=1;e<=20;e++){var t="compartment#"+e;document.getElementById(t).style.background="#808080"}}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"MainBoxTopMenu",className:"parent grid-parent_boxes_top"},c.a.createElement("button",{className:"button_boxes_light"},"CAUT"),c.a.createElement("div",{className:"child"},c.a.createElement("button",{class:"button_boxes_light",onClick:this.open_menu},"SMOKE  ",c.a.createElement("br",null)," MENU ",c.a.createElement("i",{class:"fa fa-arrow-right"})),c.a.createElement("div",{class:"menubtn"},c.a.createElement("nav",{class:"navmenu"},c.a.createElement("h4",{style:{color:"black"}},"Select the compartment(s) with smoke"),c.a.createElement("ul",{class:"thumbs-list"},c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#1","compartment#3")}},"1"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#2","compartment#4")}},"2"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#3","compartment#1","compartment#5")}},"3"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#4","compartment#2","compartment#6")}},"4"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#5","compartment#3","compartment#7")}},"5"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#6","compartment#4","compartment#8")}},"6"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#7","compartment#5","compartment#9")}},"7"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#8","compartment#6","compartment#10")}},"8"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#9","compartment#7","compartment#11")}},"9"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#10","compartment#8","compartment#12")}},"10"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#11","compartment#9","compartment#13")}},"11"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#12","compartment#10","compartment#14")}},"12"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#13","compartment#11","compartment#15")}},"13"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#14","compartment#12","compartment#16")}},"14"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#15","compartment#13","compartment#17")}},"15"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#16","compartment#14","compartment#18")}},"16"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#17","compartment#15","compartment#19")}},"17"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#18","compartment#16","compartment#20")}},"18"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#19","compartment#17")}},"19"),c.a.createElement("li",{onClick:function(t){return e.handleChange_new("compartment#20","compartment#18")}},"20"))))),c.a.createElement("h1",{style:{textAlign:"center"}},"CABIN STATUS"),c.a.createElement("h1",null," "),c.a.createElement("button",{className:"button_boxes_light"},"INFO ")),c.a.createElement("div",{id:"BinBoxTopMenu",className:"parent grid-parent_boxes_top"},c.a.createElement("div",{className:"child"},c.a.createElement("button",{className:"button_boxes_light",style:{backgroundColor:"rgb(265,167,59)"}},"CAUT")),c.a.createElement("h1",null," "),c.a.createElement("h1",{style:{textAlign:"center"}},"CABIN STATUS"),c.a.createElement("h1",null," "),c.a.createElement("button",{className:"button_boxes_light"},"INFO ")),c.a.createElement("div",{id:"MainBox",className:"parent grid-parent"},c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"AUDIO"),c.a.createElement("div",{className:"plane"},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{className:"cabin fuselage"}),c.a.createElement("div",{className:"cockpit_inv"}))),c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"LIGHTS"),c.a.createElement("div",{className:"plane"},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{className:"cabin fuselage"}),c.a.createElement("div",{className:"cockpit_inv"}))),c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"DOOR/SLIDES"),c.a.createElement("div",{className:"plane"},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{className:"cabin fuselage"}),c.a.createElement("div",{className:"cockpit_inv"}))),c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"TEMPERATURE"),c.a.createElement("div",{className:"plane"},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{className:"cabin fuselage"}),c.a.createElement("div",{className:"cockpit_inv"}))),c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"WATER/WASTE"),c.a.createElement("div",{className:"plane"},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{className:"cabin fuselage"}),c.a.createElement("div",{className:"cockpit_inv"}))),c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"OVERHEAD BINS"),c.a.createElement("div",{className:"plane",onClick:this.activateBins},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{class:"cabin fuselage"},c.a.createElement("li",{class:"row row--1"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment1_"}),c.a.createElement("label",{id:"compartment1_:",for:"compartment1_"},"1")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment2_"}),c.a.createElement("label",{for:"compartment2_"},"2")))),c.a.createElement("li",{class:"row row--2"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment3_"}),c.a.createElement("label",{for:"compartment3_"},"3")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment4_"}),c.a.createElement("label",{for:"compartment4_"},"4")))),c.a.createElement("li",{class:"row row--3"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment5_"}),c.a.createElement("label",{for:"compartment5_"},"5")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment6_"}),c.a.createElement("label",{for:"compartment6_"},"6")))),c.a.createElement("li",{class:"row row--4"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment7_"}),c.a.createElement("label",{for:"compartment7_"},"7")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment8_"}),c.a.createElement("label",{for:"compartment8_"},"8")))),c.a.createElement("li",{class:"row row--5"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment9_"}),c.a.createElement("label",{for:"compartment9_"},"9")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment10_"}),c.a.createElement("label",{for:"compartment10_"},"10")))),c.a.createElement("li",{class:"row row--6"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment11_"}),c.a.createElement("label",{for:"compartment11_"},"11")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment12_"}),c.a.createElement("label",{for:"compartment12_"},"12")))),c.a.createElement("li",{class:"row row--7"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment13_"}),c.a.createElement("label",{for:"compartment13_"},"13")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment14_"}),c.a.createElement("label",{for:"compartment14_"},"14")))),c.a.createElement("li",{class:"row row--8"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment15_"}),c.a.createElement("label",{for:"compartment15_"},"15")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment16_"}),c.a.createElement("label",{for:"compartment16_"},"16")))),c.a.createElement("li",{class:"row row--9"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment17_"}),c.a.createElement("label",{for:"compartment17_"},"17")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment18_"}),c.a.createElement("label",{for:"compartment18_"},"18")))),c.a.createElement("li",{class:"row row--10"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment19_"}),c.a.createElement("label",{for:"compartment19_"},"19")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",id:"compartment20_"}),c.a.createElement("label",{for:"compartment20_"},"20"))))),c.a.createElement("div",{className:"cockpit_inv"})))),c.a.createElement("div",{id:"BinBox",className:"parent grid-parent_bin_menu "},c.a.createElement("h1",null," "),c.a.createElement("h1",null,c.a.createElement("div",{className:"twenty"}),c.a.createElement("div",{className:"boxes_lock_unlock_all_container"},"ALL BINS",c.a.createElement("button",{className:"boxes_lock_unlock_all_bottom",onClick:this.lockUnlockAll},this.state.lock_state))),c.a.createElement("h1",null," "),c.a.createElement("h1",null,c.a.createElement("div",{className:"twenty"}),c.a.createElement("div",{className:"boxes_smoke_alert_container"},c.a.createElement("button",{className:"boxes_smoke_alert_red_square"}),c.a.createElement("button",{className:"boxes_smoke_alert_smoke_detected",style:{color:"white"}},"SMOKE DETECTED"),c.a.createElement("button",{className:"boxes_smoke_alert_smoke_reset"},"SMOKE RESET"))),c.a.createElement("h1",null," "),c.a.createElement("div",{className:"child"},c.a.createElement("h1",{style:{fontSize:"24px"}},"OVERHEAD BINS"),c.a.createElement("div",{className:"plane"},c.a.createElement("div",{className:"cockpit"}),c.a.createElement("ol",{class:"cabin fuselage"},c.a.createElement("li",{class:"row row--1"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment1",onChange:function(t){return e.handleChange("compartment#1")}}),c.a.createElement("label",{id:"compartment#1",for:"compartment1"},"1")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment2",onChange:function(t){return e.handleChange("compartment#2")}}),c.a.createElement("label",{id:"compartment#2",for:"compartment2"},"2")))),c.a.createElement("li",{class:"row row--2"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment3",onChange:function(t){return e.handleChange("compartment#3")}}),c.a.createElement("label",{id:"compartment#3",for:"compartment3"},"3")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment4",onChange:function(t){return e.handleChange("compartment#4")}}),c.a.createElement("label",{id:"compartment#4",for:"compartment4"},"4")))),c.a.createElement("li",{class:"row row--3"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment5",onChange:function(t){return e.handleChange("compartment#5")}}),c.a.createElement("label",{id:"compartment#5",for:"compartment5"},"5")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment6",onChange:function(t){return e.handleChange("compartment#6")}}),c.a.createElement("label",{id:"compartment#6",for:"compartment6"},"6")))),c.a.createElement("li",{class:"row row--4"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment7",onChange:function(t){return e.handleChange("compartment#7")}}),c.a.createElement("label",{id:"compartment#7",for:"compartment7"},"7")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment8",onChange:function(t){return e.handleChange("compartment#8")}}),c.a.createElement("label",{id:"compartment#8",for:"compartment8"},"8")))),c.a.createElement("li",{class:"row row--5"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment9",onChange:function(t){return e.handleChange("compartment#9")}}),c.a.createElement("label",{id:"compartment#9",for:"compartment9"},"9")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment10",onChange:function(t){return e.handleChange("compartment#10")}}),c.a.createElement("label",{id:"compartment#10",for:"compartment10"},"10")))),c.a.createElement("li",{class:"row row--6"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment11",onChange:function(t){return e.handleChange("compartment#11")}}),c.a.createElement("label",{id:"compartment#11",for:"compartment11"},"11")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment12",onChange:function(t){return e.handleChange("compartment#12")}}),c.a.createElement("label",{id:"compartment#12",for:"compartment12"},"12")))),c.a.createElement("li",{class:"row row--7"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment13",onChange:function(t){return e.handleChange("compartment#13")}}),c.a.createElement("label",{id:"compartment#13",for:"compartment13"},"13")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment14",onChange:function(t){return e.handleChange("compartment#14")}}),c.a.createElement("label",{id:"compartment#14",for:"compartment14"},"14")))),c.a.createElement("li",{class:"row row--8"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment15",onChange:function(t){return e.handleChange("compartment#15")}}),c.a.createElement("label",{id:"compartment#15",for:"compartment15"},"15")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment16",onChange:function(t){return e.handleChange("compartment#16")}}),c.a.createElement("label",{id:"compartment#16",for:"compartment16"},"16")))),c.a.createElement("li",{class:"row row--9"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment17",onChange:function(t){return e.handleChange("compartment#17")}}),c.a.createElement("label",{id:"compartment#17",for:"compartment17"},"17")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment18",onChange:function(t){return e.handleChange("compartment#18")}}),c.a.createElement("label",{id:"compartment#18",for:"compartment18"},"18")))),c.a.createElement("li",{class:"row row--10"},c.a.createElement("ol",{class:"seats",type:"A"},c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment19",onChange:function(t){return e.handleChange("compartment#19")}}),c.a.createElement("label",{id:"compartment#19",for:"compartment19"},"19")),c.a.createElement("li",{class:"seat"},c.a.createElement("input",{type:"checkbox",value:"checkbox",id:"compartment20",onChange:function(t){return e.handleChange("compartment#20")}}),c.a.createElement("label",{id:"compartment#20",for:"compartment20"},"20"))))),c.a.createElement("div",{className:"cockpit_inv"})))),c.a.createElement("div",{id:"MainBoxBottomMenu",className:"parent grid-parent_boxes_bottom"},c.a.createElement("button",{className:"button_boxes_light"},"Screen"),c.a.createElement("div",{class:"f1"},c.a.createElement("div",{className:"parent grid-parent_boxes_internal"},c.a.createElement(E.b.Provider,{value:{color:"rgb(58,60,62)",size:"3em"}},c.a.createElement("button",{className:"button_boxes_dark"},c.a.createElement(d.a,null)),c.a.createElement("button",{className:"button_boxes_light"},"Audio"),c.a.createElement("button",{className:"button_boxes_light"},"Lights"),c.a.createElement("button",{className:"button_boxes_light"},"Doors"),c.a.createElement("button",{className:"button_boxes_light"},"Temp"),c.a.createElement("button",{className:"button_boxes_light"},"Water"),c.a.createElement("button",{className:"button_boxes_light"},"Smoke"),c.a.createElement("button",{className:"button_boxes_light"},"Seats"),c.a.createElement("button",{className:"button_boxes_light",onClick:this.activateBins},"Bins"),c.a.createElement("button",{className:"button_boxes_dark",style:{fontSize:"1em"}},"x"),c.a.createElement("button",{className:"button_boxes_dark"},c.a.createElement(d.b,null))))),c.a.createElement("button",{className:"button_boxes_light",style:{backgroundColor:"rgb(11,217,14)"}},"Cabin Status")),c.a.createElement("div",{id:"BinBoxBottomMenu",className:"parent grid-parent_boxes_bottom"},c.a.createElement("button",{className:"button_boxes_light"},"Screen"),c.a.createElement("div",{class:"f1"},c.a.createElement("div",{className:"parent grid-parent_boxes_internal"},c.a.createElement(E.b.Provider,{value:{color:"rgb(58,60,62)",size:"3em"}},c.a.createElement("button",{className:"button_boxes_dark"},c.a.createElement(d.a,null)),c.a.createElement("button",{className:"button_boxes_light"},"Audio"),c.a.createElement("button",{className:"button_boxes_light"},"Lights"),c.a.createElement("button",{className:"button_boxes_light"},"Doors"),c.a.createElement("button",{className:"button_boxes_light"},"Temp"),c.a.createElement("button",{className:"button_boxes_light"},"Water"),c.a.createElement("button",{className:"button_boxes_light"},"Smoke"),c.a.createElement("button",{className:"button_boxes_light"},"Seats"),c.a.createElement("button",{className:"button_boxes_light",style:{backgroundColor:"rgb(11,217,14)"},onClick:this.activateBins},"Bins"),c.a.createElement("button",{className:"button_boxes_dark",style:{fontSize:"1em"}},"x"),c.a.createElement("button",{className:"button_boxes_dark"},c.a.createElement(d.b,null))))),c.a.createElement("button",{className:"button_boxes_light",onClick:this.activateBins},"Cabin Status")))}}]),t}(n.Component),h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,25)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,m=t.getTTFB;a(e),n(e),c(e),l(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null))),h()}},[[11,3,2]]]);
//# sourceMappingURL=main.01718938.chunk.js.map