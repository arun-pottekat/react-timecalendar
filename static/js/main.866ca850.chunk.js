(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(5),i=a(7),r=a(6),o=a(8),c=a(3),l=a(1),d=a.n(l),u=a(66),h=a.n(u),m=a(2),p=a.n(m),k={currentMonth:new Date,prevMonth:null,nextMonth:null};function b(e){return d.a.createElement("div",{className:"header row flex-middle"},d.a.createElement("div",{className:"col col-start"},d.a.createElement("div",{className:"icon",onClick:e.prevMonth},"chevron_left")),d.a.createElement("div",{className:"col col-center"},d.a.createElement("span",null,e.currentMonth)),d.a.createElement("div",{className:"col col-end",onClick:e.nextMonth},d.a.createElement("div",{className:"icon"},"chevron_right")))}b.defaultProps=k;var f=b,v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=window.innerWidth>767?"dddd":"ddd",t=[],a=p.a.startOfWeek(this.props.currentMonth),n=0;n<7;n++)t.push(d.a.createElement("div",{className:"col col-center",key:n},p.a.format(p.a.addDays(a,n),e)));return d.a.createElement("div",{className:"days row"},t)}}]),t}(d.a.Component);v.defaultProps={currentMonth:null};function M(e){return d.a.createElement("div",{className:"col cell"+e.classSet,onClick:e.onDateClick},d.a.createElement("span",{className:"number"},e.date),d.a.createElement("span",{className:"bg"},e.date))}M.defaultProps={classSet:"",date:1,onDateClick:null};var C=M,O=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props,a=t.currentMonth,n=t.selectedDate,s=p.a.startOfMonth(a),i=p.a.startOfWeek(s),r=p.a.endOfWeek(p.a.endOfMonth(s)),o=[],c=[],l=i;l<=r;){for(var u=function(t){var s="";s+=" "+p.a.format(l,"ddd"),s+=p.a.isToday(l)?" today":"",s+=p.a.isSameMonth(l,a)?"":" disabled",s+=p.a.isSameDay(l,n)?" selected":"",s+=e.props.clickable?"":" disabled",s+=p.a.isWithinRange(l,e.props.startTime,e.props.endTime)?" selected":"";var i=l;c.push(d.a.createElement(C,{classSet:s,key:l,date:p.a.format(l,"D"),onDateClick:function(){return e.props.onDateClick(i)}})),l=p.a.addDays(l,1)},h=0;h<7;h++)u();o.push(d.a.createElement("div",{className:"row",key:l},c)),c=[]}return d.a.createElement("div",{className:"body"},o)}}]),t}(l.PureComponent);O.defaultProps={currentMonth:null,selectedDate:null,onDateClick:null,clickable:!0,bookings:["07-03-19","02-04-19"]};function T(e){return d.a.createElement("div",{className:"col cell"+e.classSet,onClick:e.onTimeClick},d.a.createElement("p",null,e.time))}T.defaultProps={classSet:"",time:-18,onTimeClick:null};var j=T,D={selectedDate:new Date,timeSlot:30,onTimeClick:null,bookings:["05-10-19","02-04-19"]},y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={selectorClass:"inactive"},a.selectorClick=a.selectorClick.bind(Object(c.a)(Object(c.a)(a))),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"selectorClick",value:function(){this.setState({selectorClass:"inactive"===this.state.selectorClass?"active":"inactive"})}},{key:"render",value:function(){var e=this,t=this.props.openHours,a=this.props.timeSlot,n=p.a.startOfDay(this.props.selectedDate),s=parseInt(p.a.format(this.props.selectedDate,"d")),i=n,r=p.a.endOfDay(n);1===t.length?(i=p.a.addHours(n,t[0][0]),r=p.a.addHours(n,t[0][1])):2===t.length?0===s||6===s?(i=p.a.addHours(n,t[1][0]),r=p.a.addHours(n,t[1][1])):(i=p.a.addHours(n,t[0][0]),r=p.a.addHours(n,t[0][1])):7===t.length&&(i=p.a.addHours(n,t[s][0]),r=p.a.addHours(n,t[s][1]));for(var o=[],c=i,l=[],u=p.a.differenceInMinutes(r,i)/a%4;c<p.a.addMinutes(r,a*u);){for(var h=function(t){var a="";a+=p.a.isBefore(c,r)?"":" disabled",a+=p.a.isWithinRange(c,e.props.startTime,e.props.endTime)?" selectedTime":"";var n=c;l.push(d.a.createElement(j,{key:n,time:p.a.format(n,"HH-mm"),classSet:a,onTimeClick:function(){return e.props.onTimeClick(n)}})),c=p.a.addMinutes(c,30)},m=0;m<4;m++)h();o.push(d.a.createElement("div",{className:"row",key:c},l)),l=[]}return d.a.createElement("div",{className:"timeSelector"},d.a.createElement("p",{onClick:this.selectorClick},"Make a booking"),d.a.createElement("div",{className:"optionSpacer body"},d.a.createElement("div",{className:"optionHolder "+this.state.selectorClass},o)))}}]),t}(l.PureComponent);y.defaultProps=D;a(175);var E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={currentMonth:new Date,selectedDate:new Date},a.onDateClick=a.onDateClick.bind(Object(c.a)(Object(c.a)(a))),a.nextMonth=a.nextMonth.bind(Object(c.a)(Object(c.a)(a))),a.prevMonth=a.prevMonth.bind(Object(c.a)(Object(c.a)(a))),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"onDateClick",value:function(e){this.setState({selectedDate:e}),this.props.onDateFunction&&this.props.onDateFunction(e)}},{key:"nextMonth",value:function(){this.setState({currentMonth:p.a.addMonths(this.state.currentMonth,1)})}},{key:"prevMonth",value:function(){this.props.disableHistory&&p.a.isPast(this.state.currentMonth)||this.setState({currentMonth:p.a.subMonths(this.state.currentMonth,1)})}},{key:"render",value:function(){return d.a.createElement("div",{className:"calendar"},d.a.createElement(f,{currentMonth:p.a.format(this.state.currentMonth,"MMMM YYYY"),nextMonth:this.nextMonth,prevMonth:this.prevMonth}),d.a.createElement(v,{currentMonth:this.state.currentMonth}),d.a.createElement(O,{currentMonth:this.state.currentMonth,selectedDate:this.state.selectedDate,onDateClick:this.onDateClick,clickable:this.props.clickable,bookings:this.props.bookings,startTime:this.props.startTime,endTime:this.props.endTime}),this.props.timeSlot&&this.props.clickable&&this.props.onTimeClick&&this.props.openHours?d.a.createElement(y,{selectedDate:this.state.selectedDate,timeSlot:this.props.timeSlot,openHours:this.props.openHours,onTimeClick:this.props.onTimeClick,bookings:this.props.bookings,startTime:this.props.startTime,endTime:this.props.endTime}):"")}}]),t}(l.PureComponent);E.defaultProps={bookings:["07-03-19', '02-04-19"],disableHistory:!0,clickable:!0,timeSlot:30,onDateFunction:null,onTimeClick:null};var S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={startTime:"",endTime:""},a.handleTimeClick=a.handleTimeClick.bind(Object(c.a)(Object(c.a)(a))),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"handleTimeClick",value:function(e){""===this.state.startTime?this.setState({startTime:e}):!p.a.isSameDay(this.state.startTime,e)||e<this.state.startTime?this.setState({startTime:"",endTime:""}):this.setState({endTime:e})}},{key:"render",value:function(){var e=window.innerWidth>1023?{width:"40%"}:{width:"100%"};return d.a.createElement("div",{style:e},d.a.createElement(E,{disableHistory:!0,clickable:!0,timeSlot:30,startTime:this.state.startTime,endTime:this.state.endTime,openHours:[[9.5,15],[9,23.5],[8,16],[8.5,18],[10,10],[0,0],[9,17]],onTimeClick:this.handleTimeClick}))}}]),t}(d.a.Component);t.default=S;h.a.render(d.a.createElement(S,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(176)}},[[67,1,2]]]);
//# sourceMappingURL=main.866ca850.chunk.js.map