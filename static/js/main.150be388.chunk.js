(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(351)},209:function(e,t){},211:function(e,t){},245:function(e,t){},246:function(e,t){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(79),c=a.n(s),o=(a(154),a(82)),i=a.n(o),l=a(144),u=a(20),d=a(21),p=a(23),m=a(22),v=a(24),h=a(354),f=a(353),b=a(58),y=a(35),E=a(48),g=a.n(E),x="0xb76b7e60B9B3BaC1D9C82B64E63e0F947182F4A4",w=[{constant:!0,inputs:[],name:"totalCandidates",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function",signature:"0x3866965c"},{constant:!0,inputs:[{name:"",type:"uint8"}],name:"candidates",outputs:[{name:"id",type:"uint8"},{name:"name",type:"string"},{name:"voteCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x6d6277f4"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x715018a6"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8da5cb5b"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8f32d59b"},{constant:!0,inputs:[{name:"",type:"address"}],name:"voters",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xa3ec138d"},{constant:!0,inputs:[{name:"",type:"address"}],name:"approved",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xd8b964e6"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xf2fde38b"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_candidateId",type:"uint8"},{indexed:!1,name:"_voter",type:"address"}],name:"Voted",type:"event",signature:"0xe26d09013db5853436d0e069f2b5af3caf6c53a61021da4166867166f7c90f9a"},{anonymous:!1,inputs:[{indexed:!0,name:"_id",type:"uint256"},{indexed:!1,name:"_voter",type:"address"}],name:"RequestApproval",type:"event",signature:"0xd777e646ae2393d6ea64a856295cf8f73625cd338c0536225d005892f8500995"},{anonymous:!1,inputs:[{indexed:!1,name:"_voter",type:"address"}],name:"VoterApproved",type:"event",signature:"0x85e209912e11195144f49695f608785c8a31876f9d5d831813c396126a21b484"},{anonymous:!1,inputs:[{indexed:!0,name:"_candidateId",type:"uint8"},{indexed:!1,name:"_name",type:"string"}],name:"CandidateAdded",type:"event",signature:"0xca917e5bbbc18d5359674a32cef84c888a6855d48b99d9e65e1a688707dff5c7"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event",signature:"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{constant:!1,inputs:[{name:"_name",type:"string"}],name:"addCandidate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x462e91ec"},{constant:!1,inputs:[{name:"_voterID",type:"uint256"}],name:"registerVoter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xa13f2f8d"},{constant:!1,inputs:[{name:"_approvedAddr",type:"address"}],name:"approveVoter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x119d4ddb"},{constant:!1,inputs:[{name:"_candidateId",type:"uint8"}],name:"vote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xb3f98adc"}],O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleSubmit=function(e){e.preventDefault(),a.props.onRegister(a.state.value)},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"m-5"},r.a.createElement("p",{hidden:!this.props.connected},"Enter your ID to register it as well as your ethereum Address for voting approval"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Enter your ID",onChange:function(t){return e.setState({value:t.target.value})},value:this.state.value}),r.a.createElement("input",{type:"submit",value:"Send"}))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={selected:""},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Select a Candidate"),r.a.createElement("select",{value:this.state.selected,onChange:function(t){e.props.selectCandidate(t.target.value),e.setState({selected:t.target.value})},className:"form-control"},r.a.createElement("option",{value:"",key:""}),this.props.candidates.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))}}]),t}(n.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container p-3",hidden:this.props.voting},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"text-center"},"Voting Results"),r.a.createElement("br",null),r.a.createElement("div",{id:"content"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{className:"text-center",scope:"col"},"Total Votes"))),r.a.createElement("tbody",null,this.props.candidates.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",{className:"text-center"},e.voteCount))}))),r.a.createElement("hr",null),r.a.createElement(k,{candidates:this.props.candidates,selectCandidate:function(t){return e.props.onSelection(t)}}),r.a.createElement("button",{onClick:this.props.onVote,className:"btn btn-primary",hidden:!this.props.connected},"Vote"),r.a.createElement("div",{id:"txState"}),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-center m-2",id:"voter",hidden:!this.props.connected},"Voting from: ",this.props.account))),r.a.createElement("br",null)),r.a.createElement("div",{className:"text-center m-3"},r.a.createElement("h5",null,"Powered by Blockchain Technology."),r.a.createElement("center",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.etherscan.io/address/".concat(this.props.contractAddress)},"See contract on Etherscan")))),r.a.createElement("div",{className:"text-center m-5",hidden:!this.props.voting},r.a.createElement("br",null),r.a.createElement("h2",null,"Processing your vote to ".concat(this.props.candidateName)),r.a.createElement("h3",null,"Please wait...")))}}]),t}(n.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.events.length>0?r.a.createElement("div",{className:"p-5"},r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("h2",{className:"text-center"},"Latest Events"),r.a.createElement("table",{className:"table table-striped table-light text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Tx Hash"))),r.a.createElement("tbody",null,this.props.events.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,e.event),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.etherscan.io/tx/".concat(e.transactionHash)},e.transactionHash)))}))))):r.a.createElement("h2",{className:"m-2"},"Loading events... Please wait.")}}]),t}(n.Component),j=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).latest=function(){return e.state.connected?r.a.createElement(C,{events:e.state.events}):null},e.register=function(){return e.state.connected?r.a.createElement(O,{onRegister:function(t){return e.handleRegister(t)},connected:e.state.connected}):null},e.results=function(){return e.state.connected?r.a.createElement(N,{account:e.state.account,totalCandidates:e.state.totalCandidates,candidates:e.state.candidates,votingApp:e.state.votingApp,voting:e.state.voting,connected:e.state.connected,onVote:function(){return e.vote()},onSelection:function(t){return e.handleSelection(t)},candidateName:e.candidateName(),contractAddress:x}):null},e.handleRegister=function(t){e.state.votingApp.methods.registerVoter(t).send({from:e.state.account}).once("receipt",function(e){return null})},e.vote=function(){e.state.votingApp.methods.approved(e.state.account).call().then(function(t){t?e.state.selected?e.state.votingApp.methods.voters(e.state.account).call().then(function(t){if(t)window.alert("Error: You cannot vote twice!!");else{e.setState({voting:!0});var a=parseInt(e.state.selected);e.state.votingApp.methods.vote(a).send({from:e.state.account}).once("receipt",function(t){setTimeout(function(){e.setState({voting:!1,candidates:[]}),e.loadWeb3()},1e3)}).on("error",function(t){return e.setState({voting:!1})})}}):window.alert("Please Select a Candidate first"):window.alert("Please get your Address approved first")})},e.handleSelection=function(t){e.setState({selected:t})},e.candidateName=function(){if(e.state.candidates){var t=e.state.candidates.filter(function(t){return t.id===e.state.selected});return t[0]?t[0].name:""}},e.state={registerId:"",account:"",totalCandidates:0,candidates:[],connected:!1,selected:"",votingApp:{},voting:!1,events:[],loaded:!0},e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"loadWeb3",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a,n,r,s,c,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new g.a(g.a.givenProvider||"http://localhost:8545"),e.next=3,t.eth.net.getNetworkType();case 3:return a=e.sent,console.log("Network:",a),e.next=7,t.eth.getAccounts();case 7:return n=e.sent,console.log("Account:",n[0]),console.log("Contract Address: ",x),r=new t.eth.Contract(w,x),e.next=13,r.methods.totalCandidates().call();case 13:s=e.sent,c=[],o=1;case 16:if(!(o<=s)){e.next=24;break}return e.next=19,r.methods.candidates(o).call();case 19:l=e.sent,c.push(l);case 21:o++,e.next=16;break;case 24:this.setState({connected:!0,candidates:c,totalCandidates:s,account:n[0],votingApp:r}),this.state.votingApp&&this.loadEvents();case 26:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadEvents",value:function(){var e=this;this.state.votingApp.getPastEvents("allEvents",{fromBlock:4053116,toBlock:"latest"}).then(function(t){e.setState({events:t})})}},{key:"componentWillMount",value:function(){this.loadWeb3()}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){new g.a(g.a.givenProvider||"http://localhost:8545").eth.getAccounts().then(function(t){t.length>0?t[0]!==e.state.account&&e.setState({account:t[0]}):e.setState({connected:!1,account:""})})},1e3)}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(h.a.Brand,{href:"#home"},"Voting App"),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{href:"/"},"Voting Results"),r.a.createElement(f.a.Link,{href:"/register"},"Register"),r.a.createElement(f.a.Link,{href:"/latest"},"Latest Events")))),r.a.createElement(y.a,{exact:!0,path:"/register",component:this.register}),r.a.createElement(y.a,{exact:!0,path:"/latest",component:this.latest}),r.a.createElement(y.a,{exact:!0,path:"/",component:this.results}))}}]),t}(n.Component);c.a.render(r.a.createElement(b.a,{basename:"/react-voting"},r.a.createElement(j,null)),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.150be388.chunk.js.map