(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1251:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),o=a(33),l=a(22),i=a(21),c=a(12),s=a(0),u=a.n(s),m=a(58),d=a(311),p=a(312),h=a(78),b=a(11),g=a(211),f=a(680),E=a(210),x=a.n(E),k=a(9),y=a(678),O=(a(679),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new y.default("l","mm",[297,210]),a=[],n=30;t.setFontSize(15),t.text("Laporan Terima Barang Suplier",14,15),t.setFontSize(20),t.text(Object(b.j)().nama_toko,200,15),t.setFontSize(8);var r=Object(b.j)().alamat_toko.length;r>20&&t.text(Object(b.j)().alamat_toko.slice(0,48),200,20),r>50&&t.text(Object(b.j)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"Laporan Terima Barang Suplier"}),t.text("PERIODE : ".concat(0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir),14,25);e.forEach(function(e,t){var n=[e.no_terima,e.kode_group,e.jenis,{content:e.berat.toFixed(2),styles:{halign:"right"}}];a.push(n)});var o=[{content:"Total ",colSpan:3,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(e.reduce(function(e,t){return e+t.berat},0).toFixed(2)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];a.push(o);var l=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(b.l)("userdata")).user_id," / ").concat(Object(b.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(l),t.autoTable({head:[[{content:"NO TERIMA"},{content:"KATEGORI"},{content:"JENIS"},{content:"BERAT",styles:{halign:"right"}}]],body:a,foot:[],startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:20},headStyles:{fillColor:"#E8E5E5",textColor:"#000"}}),n=t.autoTableEndPosY()+10;var i=t.internal.getNumberOfPages(),c=t.internal.pageSize.width,s=t.internal.pageSize.height;t.setFontSize(10);for(var u=1;u<i+1;u++){var m=c/2,d=s-10;t.setPage(u),t.text("".concat(u," of ").concat(i),m,d,{align:"center"})}var p=t.output("datauristring"),h=window.open();h.document.open(),h.document.write("<html><head><title>Laporan Terima Barang Suplier</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+p+"></embed></body></html>")}),v=a(677),w=a.n(v),_=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(w.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Terima Barang Suplier",sheet:"Laporan Terima Barang Suplier",buttonText:"Export Exel"}),u.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"4"}," Periode ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"4"}," ",0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"4"}," TOKO : ",Object(b.j)().nama_toko," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"4"}," ALAMAT : ",Object(b.j)().alamat_toko," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"4"})),u.a.createElement("tr",null,u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO TERIMA"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE KATEGORI"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"JENIS"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"))),u.a.createElement("tbody",null,this.props.data.map(function(e,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",null," ",e.no_terima),u.a.createElement("td",null," ",e.kode_group),u.a.createElement("td",null," ",e.jenis),u.a.createElement("td",{style:{textAlign:"right"}}," ",e.berat.toFixed(2)))})),u.a.createElement("tfoot",null,u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ","Total"," "),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},this.props.data.reduce(function(e,t){return e+t.berat},0).toFixed(2))))))}}]),a}(s.Component),j=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={date:new Date},r.handleSubmit=r.handleSubmit.bind(Object(o.a)(r)),r.setStartDate=r.setStartDate.bind(Object(o.a)(r)),r.setLastDate=r.setLastDate.bind(Object(o.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"exportPdf",value:function(){O(this.props.databarang)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(k.Nb)()),this.props.change("kode_dept","ALL")}},{key:"render",value:function(){var e=this,t=[{value:"ALL",name:"SEMUA"}];this.props.DataJenis.forEach(function(e){var a={value:e.kode_dept,name:e.kode_dept};t.push(a)});var a=[{dataField:"no_terima",text:"No Terima"},{dataField:"kode_group",text:"Kategori"},{dataField:"jenis",text:"Jenis"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return u.a.createElement("div",{className:"text-right"},e.toFixed(2))}}];return u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(d.a,{name:"tgl_awal",component:h.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(d.a,{name:"tgl_akhir",component:h.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(d.a,{name:"kode_dept",component:h.f,type:"text",options:t,label:"Kode Dept",placeholder:"Masukan Kode Dept"})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"\xa0"),u.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),u.a.createElement("div",{className:"col-12"},u.a.createElement(g.a,{keyField:"_id",data:this.props.export?this.props.databarang:[],columns:a,empty:!0,textEmpty:"Data Laporan Terima Barang Kosong"})),u.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(_,{data:this.props.databarang}))))),this.props.isLoading?u.a.createElement(x.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);j=Object(p.a)({form:"HeadLaporanTerimaBarang",enableReinitialize:!0,validate:f.a})(j);var S=Object(m.b)(function(e){return{DataJenis:e.datamaster.getDataJenis,initialValues:{tgl_awal:Object(b.h)(),tgl_akhir:Object(b.h)()}}})(j),T=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={isLoading:!1,export:!1,databarang:[]},r.handleSubmit=r.handleSubmit.bind(Object(o.a)(r)),r}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(c.z)(Object(c.L)(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(c.z)(Object(c.L)(new Date(e.tgl_akhir)).format("YYYY-MM-DD")),kode_dept:e.kode_dept};Object(c.D)("penerimaan-suplier/reports?tgl_to=".concat(a.tgl_akhir,"&tgl_from=").concat(a.tgl_akhir,"&kode_dept=").concat(a.kode_dept)).then(function(e){if(t.setState({isLoading:!1}),0===e.data.length)return Object(c.t)("info","Laporan Terima Barang Kosong"),t.setState({isLoading:!1}),!1;Object(c.K)("tgl_laporan",JSON.stringify(a)),t.setState({databarang:[]}),t.setState({export:!0,databarang:e.data})}).catch(function(e){Object(c.t)("info","Laporan Terima Barang Kosong"),t.setState({export:!1,isLoading:!1})})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.n.createElement("div",null,c.n.createElement("ol",{className:"breadcrumb float-xl-right"},c.n.createElement("li",{className:"breadcrumb-item"},c.n.createElement(c.g,{to:"#"},"Laporan Barang")),c.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Terima Barang")),c.n.createElement("h1",{className:"page-header"},"Laporan Terima Barang "),c.n.createElement(c.k,null,c.n.createElement(c.m,null,"Laporan Terima Barang"),c.n.createElement(c.l,null,c.n.createElement(S,{export:this.state.export,databarang:this.state.databarang,isLoading:this.state.isLoading,onSubmit:function(t){return e.handleSubmit(t)}}))))}}]),a}(c.n.Component);T=Object(c.Q)({form:"LaporanTerimaBarangSupplier",enableReinitialize:!0})(T);t.default=Object(c.u)()(T)},677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=i(r),l=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}var c={table:l.default.string.isRequired,filename:l.default.string.isRequired,sheet:l.default.string.isRequired,id:l.default.string,className:l.default.string,buttonText:l.default.string},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleDownload=a.handleDownload.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var e=document.getElementById(this.props.table).outerHTML,a=String(this.props.sheet),n=String(this.props.filename)+".xls",r={worksheet:a||"Worksheet",table:e};if(window.navigator.msSaveOrOpenBlob){var o=new Blob(['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>'+e+"</body></html>"]);return document.getElementById("react-html-table-to-excel").click()(function(){window.navigator.msSaveOrOpenBlob(o,n)}),!0}var l=window.document.createElement("a");return l.href="data:application/vnd.ms-excel;base64,"+t.base64(t.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',r)),l.download=n,document.body.appendChild(l),l.click(),document.body.removeChild(l),!0}},{key:"render",value:function(){return o.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(e){return window.btoa(unescape(encodeURIComponent(e)))}},{key:"format",value:function(e,t){return e.replace(/{(\w+)}/g,function(e,a){return t[a]})}}]),t}();s.propTypes=c,s.defaultProps={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},t.default=s},680:function(e,t,a){"use strict";t.a=function(e,t){var a={};return e.tgl_awal||(a.tgl_awal="Tanggal Awal Tidak Boleh Kosong"),e.tgl_akhir||(a.tgl_akhir="Tanggal Akhir Tidak Boleh Kosong"),a}}}]);
//# sourceMappingURL=32.7aeec92d.chunk.js.map