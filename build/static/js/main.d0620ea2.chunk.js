(this.webpackJsonpnoteapp=this.webpackJsonpnoteapp||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var l=n(0),o=n.n(l),c=n(8),a=n.n(c),i=(n(30),n(31),n(11));var s=n(6),d=n(3),m=n(20),u=n(39),r=n(40),j=n(1),v=n(19);var N=function(){var e=v().format("MMMM Do YYYY, h:mm a"),t=o.a.useState([{NoteName:"My Note!",Text:"My Very First Note!",DateTime:"October 22nd 2021 4:00pm"}]),n=Object(d.a)(t,2),c=n[0],a=n[1],N=o.a.useState([{EventTitle:"Doctors Appointment",EventDate:"December 1, 2021",EventDetails:"Check up"}]),x=Object(d.a)(N,2),b=x[0],y=x[1],E=o.a.useState([{SmNote:"Note"}]),O=Object(d.a)(E,2),S=O[0],g=O[1],B=o.a.useState(!0),h=Object(d.a)(B,2),p=h[0],f=h[1],I=o.a.useState(!1),M=Object(d.a)(I,2),T=M[0],C=M[1],D=o.a.useState([{Note:"Note"}]),k=Object(d.a)(D,2),w=k[0],F=k[1],L=Object(l.useState)(!1),Y=Object(d.a)(L,2),P=Y[0],H=Y[1],A=Object(l.useState)(!1),G=Object(d.a)(A,2),U=G[0],z=G[1],R=Object(l.useState)(!1),J=Object(d.a)(R,2),q=J[0],Q=J[1],V=Object(l.useState)(!1),W=Object(d.a)(V,2),K=W[0],X=W[1],Z=Object(l.useState)(!1),$=Object(d.a)(Z,2),_=$[0],ee=$[1],te=Object(l.useState)(!1),ne=Object(d.a)(te,2),le=ne[0],oe=ne[1],ce=Object(l.useState)(!1),ae=Object(d.a)(ce,2),ie=ae[0],se=ae[1],de=Object(l.useState)("PadEventSm"),me=Object(d.a)(de,2),ue=(me[0],me[1],Object(l.useState)("PadSm")),re=Object(d.a)(ue,2),je=re[0],ve=re[1],Ne=Object(l.useState)("MobileMenuElementAppear NoteFlexSm"),xe=Object(d.a)(Ne,2),be=xe[0],ye=xe[1],Ee=Object(l.useState)(!1),Oe=Object(d.a)(Ee,2),Se=Oe[0],ge=Oe[1];function Be(){document.getElementById("Title").value="",document.getElementById("NoteText").value="",f(!0),console.log(p)}function he(){document.getElementById("NoteInfoSectionSm").style.display="none",document.getElementById("NoteFlexSmBox").style.display="none",document.getElementById("EventMenuButton").style.display="none",document.getElementById("EventMenu").style.display="none",z(!0),Q(!0),document.getElementById("NoteMenu").style.width="100%",document.getElementById("MenuButton").style.display="none",document.getElementById("NoteContentControler").style.display="flex"}function pe(){ve("PadSm MobileNoteMenuShrink"),ye(" MobileMenuElementAppear NoteFlexSm MobileMenuGrow"),document.getElementById("NoteInfoSectionSm").style.display="flex",document.getElementById("NoteFlexSmBox").style.display="flex",document.getElementById("EventMenuButton").style.display="flex",document.getElementById("EventMenu").style.display="flex",document.getElementById("NoteMenu").style.width="1%",document.getElementById("MenuButton").style.display="flex",document.getElementById("NoteContentControler").style.display="none",z(!1),Q(!1)}function fe(){!function(){var t=document.getElementById("Title").value,n=e,l=document.getElementById("NoteText").value,o=c.findIndex((function(e){return e.NoteName==="".concat(t)}));if(console.log(o),-1===o)if(""!==t){console.log(t),console.log(n),console.log(l);var i=[].concat(Object(s.a)(c),[{NoteName:t,Text:l,DateTime:e}]);console.log(i),a(i),f(!p)}else window.alert("You Note must have a Title");else window.alert("You already have a Note Called this.Please make sure your Title is unique.")}(),he()}function Ie(){!function(){var e=document.getElementById("Title").value,t=c.findIndex((function(t){return t.NoteName==="".concat(e)}));console.log(t);var n=Object(s.a)(c);n.splice(t,1),console.log(n),a(n),f(!0),Be()}(),he()}function Me(){!function(){var t=Object(s.a)(c),n=document.getElementById("Title").value,l=document.getElementById("NoteText").value,o=e,i=w[0].Note,d=c.findIndex((function(e){return e.NoteName==="".concat(i)}));t.splice(d,1,{NoteName:"".concat(n),Text:"".concat(l),DateTime:"".concat(o)}),a(t)}(),he()}var Te=function(e){ge(!0),pe(),f(!1);var t=e.target.innerHTML;console.log("here is the ClickedBtn return "+t);var n=Object(s.a)(w);n.splice(0,1,{Note:"".concat(t)}),F(n);var l=c.findIndex((function(e){return e.NoteName==="".concat(t)})),o=c[l],a=o.NoteName,i=o.Text;document.getElementById("Title").value=a,document.getElementById("NoteText").value=i,ge(!1)},Ce=function(e){e.preventDefault();var t=e.target.innerHTML,n=b.findIndex((function(e){return e.EventTitle==="".concat(t)})),l=b[n],o=l.EventTitle,c=l.EventDate,a=l.EventDetails;document.getElementById("EventTime").innerText=c,document.getElementById("EventTitle").innerText=o,document.getElementById("EventDetails").innerText=a,C(!0)},De=function(){var e=document.getElementById("SmModalTitleInput").value;if(""!==e){var t=S[0].SmNote,n=[].concat(Object(s.a)(b),[{EventTitle:"".concat(e),EventDate:"".concat(t),EventDetails:"Click one of your Notes to assign it!"}]);y(n),console.log(b),document.getElementById("MainFlexBoxSm").style.display="flex",document.getElementById("EventContentControler").style.display="flex",document.getElementById("EventMenu").style.display="flex",H(!1)}else window.alert("You must Name your Event")};function ke(){var e=document.getElementById("EventTitle").innerHTML,t=b.findIndex((function(t){return t.EventTitle==="".concat(e)})),n=Object(s.a)(b);n.splice(t,1),y(n),document.getElementById("EventTitle").innerHTML="",document.getElementById("EventTime").innerHTML="",document.getElementById("EventDetails").innerHTML="",C(!1)}function we(){return!0===T?Object(j.jsx)("button",{className:"DeleteEventButtonSm",onClick:ke,children:"Delete Event"}):!1===T?Object(j.jsx)("div",{}):void 0}var Fe=function(e){e.preventDefault();var t=e.target.innerHTML,n=document.getElementById("EventTitle").innerHTML;if(console.log(n),!1===T&&window.alert("You must select a Event before assigning it a note!"),!0===T){var l=c.findIndex((function(e){return e.NoteName==="".concat(t)})),o=b.findIndex((function(e){return e.EventTitle==="".concat(n)})),a=c[l].Text,i=Object(s.a)(b),d=b[o],m=(d.EventNote,d.EventTitle),u=d.EventDate;i.splice(o,1,{EventTitle:"".concat(m),EventDate:"".concat(u),EventDetails:"".concat(a)}),y(i),document.getElementById("EventDetails").innerHTML=a}};function Le(){return!1===p?Object(j.jsx)(i.Breakpoint,{small:!0,down:!0,children:Object(j.jsxs)("div",{className:"NoteButtonFlex",children:[Object(j.jsx)("button",{className:"DeleteNoteButtonSm",onClick:Ie,children:"Delete Note"}),Object(j.jsx)("button",{className:"UpdateNoteButtonSm",onClick:Me,children:"Update Note"})]})}):!0===p?Object(j.jsx)(i.Breakpoint,{small:!0,down:!0,children:Object(j.jsx)("div",{id:"CreateButtonFlex",className:"NoteButtonFlexSm",children:Object(j.jsx)("button",{className:le?"CreateNoteButtonSm MobileBounceDown":"CreateNoteButtonSm",onClick:fe,children:"Create Note"})})}):void 0}return Object(j.jsx)(i.Breakpoint,{small:!0,down:!0,children:Object(j.jsxs)("div",{id:"MainFlexBoxSm",className:"MainflexSm",children:[Object(j.jsx)("div",{id:"NoteMenu",className:U?" PadSm MobileMenuGrow":je,children:Object(j.jsxs)("div",{id:"NoteContentControler",className:q?"NoteControlFlex MobileMenuElementAppear":"NoteControlFlex",children:[Object(j.jsx)("div",{className:"CloseNoteMenu",onClick:pe}),Object(j.jsx)("div",{className:"PadTitle",children:"Notes"}),Object(j.jsx)("button",{onClick:function(){Be(),pe()},className:"CreateButtonSm",children:"Create New Note +"}),Object(j.jsx)("div",{className:"ClickMeDiv",children:"Click to See Your Note"}),Object(j.jsx)("div",{id:"SavedNotes",className:"SavedNotesFlexSm",children:c.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"NoteDate",children:e.DateTime}),Object(j.jsx)("button",{id:e.Index,onClick:Te,className:Se?"SelectedNoteItem":"NoteItem",children:e.NoteName},e.Index)]})}))})]})}),Object(j.jsx)("div",{id:"MenuButton",className:"PadButtonSm",children:Object(j.jsx)("div",{className:"MenuNoteButtonSm",onClick:he,children:"Notes"})}),Object(j.jsxs)("div",{id:"NoteFlexSmBox",className:be,children:[Object(j.jsxs)("div",{id:"NoteInfoSectionSm",className:"NoteInfoSm",children:[Object(j.jsxs)("div",{className:"NoteTitleSm",children:[Object(j.jsx)(Le,{}),Object(j.jsx)("input",{id:"Title",placeholder:"Your Title Here",onChange:function(e){!0===p&&(document.getElementById("CreateButtonFlex").style.display="flex",oe(!0))},className:"TitleinfoSm"})]}),Object(j.jsx)("div",{className:"NoteTimeSm",id:"TimeStamp",children:e})]}),Object(j.jsx)("div",{className:"NoteInfoText",children:Object(j.jsx)("textarea",{id:"NoteText",placeholder:"Your Note Here",className:"NoteTextBoxSm"})})]}),Object(j.jsx)("div",{id:"EventMenuButton",className:"PadEventButtonSm",children:Object(j.jsx)("div",{className:"MenuEventButtonSm",onClick:function(){document.getElementById("NoteInfoSectionSm").style.display="none",document.getElementById("NoteFlexSmBox").style.display="none",document.getElementById("EventMenuButton").style.display="none",document.getElementById("NoteMenu").style.display="none",document.getElementById("ShrinkDiv").style.display="flex",document.getElementById("EventMenu").style.width="100%",document.getElementById("MenuButton").style.display="none",document.getElementById("EventContentControler").style.display="flex",X(!0),ee(!0),se(!0)},children:"Events"})}),Object(j.jsx)("div",{id:"ShrinkDiv",className:ie?"MobileGrowDivShow":"MobileGrowDiv"}),Object(j.jsx)("div",{id:"EventMenu",className:K?"PadEventSm MobileMenuGrow ":"PadEventSm",children:Object(j.jsxs)("div",{id:"EventContentControler",className:_?" EventControlFlex MobileMenuElementAppear":"EventControlFlex",children:[Object(j.jsx)("div",{className:"CloseEventNoteMenu",onClick:function(){document.getElementById("NoteInfoSectionSm").style.display="flex",document.getElementById("NoteFlexSmBox").style.display="flex",document.getElementById("EventMenuButton").style.display="flex",document.getElementById("EventContentControler").style.display="none",document.getElementById("MenuButton").style.display="flex",document.getElementById("NoteMenu").style.display="flex",document.getElementById("EventMenu").style.width="1%",document.getElementById("ShrinkDiv").style.display="none",document.getElementById("ShrinkDiv").style.width="0.002%",X(!1),ee(!1)}}),Object(j.jsx)("div",{className:"EventTitleSm",children:"Events"}),Object(j.jsx)("div",{id:"UpcomingEvents",className:"UpcomingEventsFlexSm",children:b.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"NoteDate",children:e.EventDate}),Object(j.jsx)("button",{className:"NoteItem",onClick:Ce,children:e.EventTitle},t)]})}))}),Object(j.jsx)("button",{className:"CreateEventButtonSm",onClick:function(){document.getElementById("MainFlexBoxSm").style.display="none",document.getElementById("EventContentControler").style.display="none",document.getElementById("EventMenu").style.display="none",H(!0)},children:" Create New Event +"}),Object(j.jsx)(we,{}),Object(j.jsx)(u.a,{className:" border-dark .modal-content",size:"lg",show:P,onHide:De,backdrop:"static","aria-labelledby":"example-modal-sizes-title-lg",children:Object(j.jsxs)("div",{className:"SmallModalSm",children:[Object(j.jsx)("div",{className:"SmallModalTitleSm",children:"Event Date"}),Object(j.jsx)(m.a,{id:"dateP",onChange:function(e){var t=e.toString(),n=new Date(t),l=v(n).format("MMMM Do YYYY");console.log("this is the date pulled "+l);var o=Object(s.a)(S);o.splice(0,1,{SmNote:"".concat(l)}),console.log(o),g(o)}}),Object(j.jsx)("div",{className:"SmallModalTitleSm",children:"Event Name"}),Object(j.jsx)("input",{id:"SmModalTitleInput",className:"SmallModalEventTitle"}),Object(j.jsx)(r.a,{className:" CreateEventButtonSmModal border-dark",variant:"secondary",onClick:De,children:"Finished"})]})}),Object(j.jsx)("div",{id:"EventTime",className:"SelectedEventTimeSm"}),Object(j.jsx)("div",{className:"SelectedEventTitleFlexSm",children:Object(j.jsx)("div",{id:"EventTitle",className:"SelectedEventTitleSm"})}),Object(j.jsx)("div",{className:"SelectedEventDetailSm",children:"Details"}),Object(j.jsx)("div",{id:"EventDetails",className:"SelectedEventDetailsSm"}),Object(j.jsx)("div",{className:"NoteAssignFlex",children:Object(j.jsx)("div",{id:"SavedNotes",className:"SavedNotesEventsFlexSm",children:c.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"NoteDate",children:e.DateTime}),Object(j.jsx)("button",{id:e.Index,onClick:Fe,className:"NoteItem",children:e.NoteName},e.Index)]})}))})})]})})]})})};n(19);var x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.Breakpoint,{large:!0,up:!0,children:Object(j.jsxs)("div",{className:"LgFlex",children:[Object(j.jsx)("div",{className:"LgTitle",children:"Welcome to React Thought!!"}),Object(j.jsx)("div",{className:"LgintroText",children:"Thanks for visiting! please scan the QR code. This is a  program I built to show proficiency in React. Its not ground breaking, or amazing its basic note app. That lets you update all your calendars all at once."}),Object(j.jsx)("div",{className:"Lgimage"})]})}),Object(j.jsx)(N,{})]})};var b=function(){return Object(j.jsx)(i.BreakpointProvider,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,l=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),l(e),o(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.d0620ea2.chunk.js.map