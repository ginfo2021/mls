"use strict";(self.webpackChunkprimepark=self.webpackChunkprimepark||[]).push([[362],{7577:function(e,t,a){a.r(t);var o=a(7294),c=a(5414),n=a(3639),r=(a(3935),a(8747)),l={color:"#232129",fontFamily:"-apple-system, Roboto, sans-serif, serif"},d={padding:"150px 0px 0px"},m={width:"80px",fontSize:"18px",backgroundColor:"#0000000d",border:"2px solid #dcdcdc"},s="",p="",i="";"undefined"!=typeof window&&(s=localStorage.getItem("project_id"),p=localStorage.getItem("project"),i=localStorage.getItem("number"));t.default=function(){return o.createElement("main",{style:l},o.createElement(c.q,null,o.createElement("title",null,p)),o.createElement(n.Z,{fluid:!0,className:"p-0"},o.createElement("div",{class:"header"},o.createElement("img",{src:"https://palava-city.in/wp-content/themes/mpd_theme_6_multi_v_6/img/whatsapp-logo.png"}),"Open WhatsApp"),o.createElement("section",{style:d},o.createElement("div",{class:"container"},o.createElement("form",{id:"whatsappForm"},o.createElement("div",{class:"text-center"},o.createElement("h2",{class:"mb-5"},"Chat on WhatsApp with +91 ",i),o.createElement("div",{class:"mb-0"},o.createElement("div",{class:"input-group"},o.createElement("select",{style:m,name:"country_code"},o.createElement("option",{"data-countrycode":"IN",value:"+91","data-contry_code":"91"},"+91"),o.createElement("option",{"data-countrycode":"AF",value:"+93","data-contry_code":"93"},"+93"),o.createElement("option",{"data-countrycode":"AL",value:"+355","data-contry_code":"355"},"+355"),o.createElement("option",{"data-countrycode":"DZ",value:"+213","data-contry_code":"213"},"+213"),o.createElement("option",{"data-countrycode":"AS",value:"+1-684","data-contry_code":"1-684"},"+1-684"),o.createElement("option",{"data-countrycode":"AD",value:"+376","data-contry_code":"376"},"+376"),o.createElement("option",{"data-countrycode":"AO",value:"+244","data-contry_code":"244"},"+244"),o.createElement("option",{"data-countrycode":"AI",value:"+1-264","data-contry_code":"1-264"},"+1-264"),o.createElement("option",{"data-countrycode":"AQ",value:"+672","data-contry_code":"672"},"+672")),o.createElement("input",{type:"number",class:"form-control",placeholder:"Mobile No.*",name:"mobile_no"})),o.createElement("div",{class:"input-group"},o.createElement("p",{class:"form_error"}))),o.createElement("p",{class:"form-text"},"Hello, I am Looking for ",p,", Please send me more details about this project."),o.createElement("hr",null),o.createElement("div",{class:"form-group"}," ",o.createElement("button",{type:"button",class:"button",id:"WhatsAppSubmit",onClick:function(){return e=r("#"+"whatsappForm"+" input[name=mobile_no]").val(),t="Hello, I am Looking for "+p+", Please send me more details about this project.",a={mobile:e,project:p,project_id:s,source:"BLANKW"},void r.ajax({type:"post",url:"https://mls-crm.manishalifespaces.com/api/add_lead",data:a,success:function(e,a,o){window.location.href="https://api.whatsapp.com/send?phone="+i+"&text="+t},error:function(e,t){console.log(e)}});var e,t,a}},"Continue to chat"))))))))}}}]);
//# sourceMappingURL=component---src-pages-whatsapp-js-eb6b3eb6e6edc4ff074f.js.map