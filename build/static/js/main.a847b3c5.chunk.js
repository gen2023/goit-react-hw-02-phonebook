(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),i=n(2),o=n(3),u=n(6),m=n(5),s=n(9),d=n.n(s),h=n(10),f=n(4),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.saveContact(Object(h.a)({},e.state)),e.resetForm()},e}return Object(o.a)(n,[{key:"resetForm",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",placeholder:"Enter name",value:t,name:"name",onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"number",r.a.createElement("input",{type:"text",placeholder:"Enter number",value:n,name:"number",onChange:this.handleChange}))),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component);b.defaultProps={};var v=function(e){var t=e.name,n=e.number,a=e.onRemove;return r.a.createElement("li",null,t,": ",n,r.a.createElement("button",{type:"button",onClick:a},"Delete"))};var p=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement(v,{key:t,name:a,number:c,onRemove:function(){return n(t)}})})))},E=function(e){var t=e.filter,n=e.handleFilter;return r.a.createElement("div",null,r.a.createElement("label",null,"Find contacts by name",r.a.createElement("input",{type:"text",placeholder:"Enter name",value:t,name:"filter",onChange:n})))},C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"111",number:"227-91-26"},{id:"id-6",name:"1111",number:"227-91-26"},{id:"id-7",name:"1112",number:"227-91-26"},{id:"id-8",name:"1113",number:"227-91-26"},{id:"id-9",name:"1114",number:"227-91-26"},{id:"id-10",name:"1115",number:"227-91-26"}],filter:""},e.saveContact=function(t){var n=t.name,a=t.number,r={name:n,number:a,id:d.a.generate()},c=e.state.contacts,l=c.find((function(e){return n===e.name})),i=c.find((function(e){return""===a})),o=c.find((function(e){return""===n}));return l?alert("".concat(n," is already in contacts")):i||o?alert("field is empty"):void e.setState((function(e){return{contacts:e.contacts.concat(r)}}))},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(o.a)(n,[{key:"filterReturn",value:function(){var e=this;return this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=(e.filter,this.filterReturn());return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(b,{saveContact:this.saveContact}),r.a.createElement("h2",null,"Contact"),t.length>=2&&r.a.createElement(E,{filter:this.state.filter,handleFilter:this.handleFilter}),n.length>0?r.a.createElement(p,{contacts:n,onRemoveContact:this.removeContact}):0!==t.length&&r.a.createElement(p,{contacts:t,onRemoveContact:this.removeContact}))}}]),n}(a.Component);l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a847b3c5.chunk.js.map