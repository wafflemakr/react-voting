(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){e.exports=n(351)},209:function(e,t){},211:function(e,t){},245:function(e,t){},246:function(e,t){},351:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(78),s=n.n(r),o=(n(154),n(82)),i=n.n(o),l=n(144),u=n(20),d=n(21),p=n(23),m=n(22),v=n(24),h=n(354),f=n(353),b=n(79),y=n(35),g=n(48),E=n.n(g),x="0xb76b7e60B9B3BaC1D9C82B64E63e0F947182F4A4",w=[{constant:!0,inputs:[],name:"totalCandidates",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function",signature:"0x3866965c"},{constant:!0,inputs:[{name:"",type:"uint8"}],name:"candidates",outputs:[{name:"id",type:"uint8"},{name:"name",type:"string"},{name:"voteCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x6d6277f4"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x715018a6"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8da5cb5b"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8f32d59b"},{constant:!0,inputs:[{name:"",type:"address"}],name:"voters",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xa3ec138d"},{constant:!0,inputs:[{name:"",type:"address"}],name:"approved",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xd8b964e6"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xf2fde38b"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_candidateId",type:"uint8"},{indexed:!1,name:"_voter",type:"address"}],name:"Voted",type:"event",signature:"0xe26d09013db5853436d0e069f2b5af3caf6c53a61021da4166867166f7c90f9a"},{anonymous:!1,inputs:[{indexed:!0,name:"_id",type:"uint256"},{indexed:!1,name:"_voter",type:"address"}],name:"RequestApproval",type:"event",signature:"0xd777e646ae2393d6ea64a856295cf8f73625cd338c0536225d005892f8500995"},{anonymous:!1,inputs:[{indexed:!1,name:"_voter",type:"address"}],name:"VoterApproved",type:"event",signature:"0x85e209912e11195144f49695f608785c8a31876f9d5d831813c396126a21b484"},{anonymous:!1,inputs:[{indexed:!0,name:"_candidateId",type:"uint8"},{indexed:!1,name:"_name",type:"string"}],name:"CandidateAdded",type:"event",signature:"0xca917e5bbbc18d5359674a32cef84c888a6855d48b99d9e65e1a688707dff5c7"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event",signature:"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{constant:!1,inputs:[{name:"_name",type:"string"}],name:"addCandidate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x462e91ec"},{constant:!1,inputs:[{name:"_voterID",type:"uint256"}],name:"registerVoter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xa13f2f8d"},{constant:!1,inputs:[{name:"_approvedAddr",type:"address"}],name:"approveVoter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x119d4ddb"},{constant:!1,inputs:[{name:"_candidateId",type:"uint8"}],name:"vote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xb3f98adc"}],O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},n.handleSubmit=function(e){e.preventDefault(),n.props.onRegister(n.state.value)},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"m-5"},c.a.createElement("p",{hidden:!this.props.connected},"Enter your ID to register it as well as your ethereum Address for voting approval"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"Enter your ID",onChange:function(t){return e.setState({value:t.target.value})},value:this.state.value}),c.a.createElement("input",{type:"submit",value:"Send"}))))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={selected:""},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Select a Candidate"),c.a.createElement("select",{value:this.state.selected,onChange:function(t){e.props.selectCandidate(t.target.value),e.setState({selected:t.target.value})},className:"form-control"},c.a.createElement("option",{value:"",key:""}),this.props.candidates.map(function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.name)})))}}]),t}(a.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return console.log("rendering results"),c.a.createElement("div",null,c.a.createElement("div",{className:"container p-3",hidden:this.props.voting},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",{className:"text-center"},"Voting Results"),c.a.createElement("br",null),c.a.createElement("div",{id:"content"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"ID"),c.a.createElement("th",{scope:"col"},"Name"),c.a.createElement("th",{className:"text-center",scope:"col"},"Total Votes"))),c.a.createElement("tbody",null,this.props.candidates.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.name),c.a.createElement("td",{className:"text-center"},e.voteCount))}))),c.a.createElement("hr",null),c.a.createElement(k,{candidates:this.props.candidates,selectCandidate:function(t){return e.props.onSelection(t)}}),c.a.createElement("button",{onClick:this.props.onVote,className:"btn btn-primary",hidden:!this.props.connected},"Vote"),c.a.createElement("div",{id:"txState"}),c.a.createElement("hr",null),c.a.createElement("p",{className:"text-center m-2",id:"voter",hidden:!this.props.connected},"Voting from: ",this.props.account))),c.a.createElement("br",null)),c.a.createElement("div",{className:"text-center m-3"},c.a.createElement("h5",null,"Powered by Blockchain Technology."),c.a.createElement("center",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.etherscan.io/address/".concat(this.props.contractAddress)},"See contract on Etherscan")))),c.a.createElement("div",{className:"text-center m-5",hidden:!this.props.voting},c.a.createElement("br",null),c.a.createElement("h2",null,"Processing your vote to ".concat(this.props.candidateName)),c.a.createElement("h3",null,"Please wait...")))}}]),t}(a.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.events.length>0?c.a.createElement("div",{className:"p-5"},c.a.createElement("div",{className:"container mx-auto"},c.a.createElement("h2",{className:"text-center"},"Latest Events"),c.a.createElement("table",{className:"table table-striped table-light text-center"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Name"),c.a.createElement("th",{scope:"col"},"Tx Hash"))),c.a.createElement("tbody",null,this.props.events.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,t),c.a.createElement("td",null,e.event),c.a.createElement("td",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.etherscan.io/tx/".concat(e.transactionHash)},e.transactionHash)))}))))):c.a.createElement("h2",{className:"m-2"},"Loading events... Please wait.")}}]),t}(a.Component),j=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).latest=function(){return e.state.connected?c.a.createElement(C,{events:e.state.events}):null},e.register=function(){return e.state.connected?c.a.createElement(O,{onRegister:function(t){return e.handleRegister(t)},connected:e.state.connected}):null},e.results=function(){return e.state.connected?c.a.createElement(N,{account:e.state.account,totalCandidates:e.state.totalCandidates,candidates:e.state.candidates,votingApp:e.state.votingApp,voting:e.state.voting,connected:e.state.connected,onVote:function(){return e.vote()},onSelection:function(t){return e.handleSelection(t)},candidateName:e.candidateName(),contractAddress:x}):null},e.handleRegister=function(t){e.state.votingApp.methods.registerVoter(t).send({from:e.state.account}).once("receipt",function(e){return null})},e.vote=function(){e.state.votingApp.methods.approved(e.state.account).call().then(function(t){t?e.state.selected?e.state.votingApp.methods.voters(e.state.account).call().then(function(t){if(t)window.alert("Error: You cannot vote twice!!");else{e.setState({voting:!0});var n=parseInt(e.state.selected);e.state.votingApp.methods.vote(n).send({from:e.state.account}).once("receipt",function(t){setTimeout(function(){e.setState({voting:!1,candidates:[]}),e.loadWeb3()},1e3)}).on("error",function(t){return e.setState({voting:!1})})}}):window.alert("Please Select a Candidate first"):window.alert("Please get your Address approved first")})},e.handleSelection=function(t){e.setState({selected:t})},e.candidateName=function(){if(e.state.candidates){var t=e.state.candidates.filter(function(t){return t.id===e.state.selected});return t[0]?t[0].name:""}},e.state={registerId:"",account:"",totalCandidates:0,candidates:[],connected:!1,selected:"",votingApp:{},voting:!1,events:[],loaded:!0},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"loadWeb3",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n,a,c,r,s,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new E.a(E.a.givenProvider||"http://localhost:8545"),e.next=3,t.eth.net.getNetworkType();case 3:return n=e.sent,console.log("Network:",n),e.next=7,t.eth.getAccounts();case 7:return a=e.sent,console.log("Account:",a[0]),console.log("Contract Address: ",x),c=new t.eth.Contract(w,x),e.next=13,c.methods.totalCandidates().call();case 13:r=e.sent,s=[],o=1;case 16:if(!(o<=r)){e.next=24;break}return e.next=19,c.methods.candidates(o).call();case 19:l=e.sent,s.push(l);case 21:o++,e.next=16;break;case 24:this.setState({connected:!0,candidates:s,totalCandidates:r,account:a[0],votingApp:c}),this.state.votingApp&&this.loadEvents();case 26:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadEvents",value:function(){var e=this;this.state.votingApp.getPastEvents("allEvents",{fromBlock:4053116,toBlock:"latest"}).then(function(t){e.setState({events:t})})}},{key:"componentWillMount",value:function(){this.loadWeb3()}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){new E.a(E.a.givenProvider||"http://localhost:8545").eth.getAccounts().then(function(t){t.length>0?t[0]!==e.state.account&&e.setState({account:t[0]}):e.setState({connected:!1,account:""})})},1e3)}},{key:"render",value:function(){return console.log("rendering app component","/react-voting"),c.a.createElement(b.a,null,c.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},c.a.createElement(h.a.Brand,{href:"".concat("/react-voting","/")},"Voting App"),c.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(f.a,{className:"mr-auto"},c.a.createElement(f.a.Link,{href:"".concat("/react-voting","/")},"Voting Results"),c.a.createElement(f.a.Link,{href:"".concat("/react-voting","/register")},"Register"),c.a.createElement(f.a.Link,{href:"".concat("/react-voting","/latest")},"Latest Events")))),c.a.createElement(y.a,{exact:!0,path:"".concat("/react-voting","/register"),component:this.register}),c.a.createElement(y.a,{exact:!0,path:"/latest",component:this.latest}),c.a.createElement(y.a,{exact:!0,path:"".concat("/react-voting","/"),component:this.results}))}}]),t}(a.Component);s.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.e855dded.chunk.js.map