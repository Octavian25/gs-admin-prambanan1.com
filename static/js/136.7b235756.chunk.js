(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1329:function(e,t,n){"use strict";n.r(t);var a=n(19),i=n(20),r=n(33),l=n(22),o=n(21),s=n(12),c=n(9),u=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(c.Nb)())}},{key:"render",value:function(){var e=this;return s.n.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},s.n.createElement("div",{className:"row"},s.n.createElement("div",{className:"col-md-3"},s.n.createElement(s.c,{name:"kode_jenis",component:s.q,onChange:function(t){return e.props.filterJenis(t)},options:this.props.datajenis.map(function(e){return{value:e.kode_dept,name:e.kode_dept}}),type:"text",label:"Jenis",placeholder:"Jenis"}))))}}]),n}(s.n.Component);u=Object(s.Q)({form:"SortirPembelian",enableReinitialize:!0})(u);var d=Object(s.u)(function(e){return{datajenis:e.datamaster.getDataJenis}})(u),m=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={isLoading:!1,settings:"",columns:[{dataField:"no_pembelian",text:"no_pembelian"},{dataField:"tanggal",text:"Tanggal"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"kondisi",text:"Kondisi"},{dataField:"jenis",text:"Jenis"},{dataField:"kategori",text:"Kategori"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return s.n.createElement("span",null,parseFloat(e).toFixed(3))}},{dataField:"harga",text:"Harga",headerClasses:"text-right",formatter:function(e){return s.n.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))}}]},i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i}return Object(i.a)(n,[{key:"handleSubmit",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"filterJenis",value:function(e){var t=this;this.setState({isLoading:!0}),setTimeout(function(){Object(s.D)("pembelian/saldo-beli?kode_dept="+e).then(function(e){console.log(e.data),t.setState({isLoading:!1})}).catch(function(e){var n,a;Object(s.t)("info",(null===e||void 0===e?void 0:null===(n=e.response)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.message)||"Gagal Mengambil Data"),t.setState({isLoading:!1})})},1e3)}},{key:"render",value:function(){var e=this;return s.n.createElement("div",null,s.n.createElement("ol",{className:"breadcrumb float-xl-right"},s.n.createElement("li",{className:"breadcrumb-item"},s.n.createElement(s.g,{to:"#"},"Sepuhan")),s.n.createElement("li",{className:"breadcrumb-item active"},"Sortir Pembelian")),s.n.createElement("h1",{className:"page-header"},"Sortir Pembelian "),s.n.createElement(s.k,null,s.n.createElement(s.m,null,"Sortir Pembelian"),s.n.createElement(s.l,null,s.n.createElement(d,{filterJenis:function(t){return e.filterJenis(t)}}),s.n.createElement(s.s,{keyField:"no_pembelian",exportCsv:!1,data:[],columns:this.state.columns,empty:!0,textEmpty:"Data Barang Kosong"}))),this.state.isLoading?s.n.createElement(s.h,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),n}(s.n.Component);m=Object(s.Q)({form:"SortirPembelian",enableReinitialize:!0})(m);t.default=Object(s.u)()(m)}}]);
//# sourceMappingURL=136.7b235756.chunk.js.map