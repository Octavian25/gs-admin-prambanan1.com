(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1297:function(t,e,a){"use strict";a.r(e);var n=a(19),i=a(20),s=a(33),o=a(22),l=a(21),c=a(9),r=a(12),d=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={isLoading:!1},i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(){}},{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.props.isEdit?document.getElementById("nama_polish").focus():document.getElementById("kode_polish").focus()},100)}},{key:"render",value:function(){var t=this;return r.n.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()}},r.n.createElement(r.c,{id:"id",tabIndex:"1",name:"id",component:r.e,type:"hidden"}),r.n.createElement(r.c,{id:"kode_polish",tabIndex:"1",name:"kode_polish",component:r.p,type:"text",label:"Kode Polish",readOnly:this.props.isEdit,placeholder:"Masukan Kode Polish"}),r.n.createElement(r.c,{id:"nama_polish",tabIndex:"2",name:"nama_polish",component:r.p,type:"text",label:"Nama Polish",placeholder:"Masukan Nama Polish",onBlur:function(){return t.setState({aktif:!0})}}),r.n.createElement("div",{className:"row"},r.n.createElement("div",{className:"col-12 text-right"},r.n.createElement("button",{className:"btn btn-white",onClick:function(){return t.props.dispatch(Object(r.G)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",r.n.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?r.n.createElement(r.n.Fragment,null,r.n.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?r.n.createElement(r.h,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(r.n.Component);d=Object(r.Q)({form:"HeadBatuPolish",enableReinitialize:!0})(d);var h=Object(r.u)(function(t){return{initialValues:{id:t.datamaster.ShowDataModal.id,kode_polish:t.datamaster.ShowDataModal.kode_polish,nama_polish:t.datamaster.ShowDataModal.nama_polish}}})(d),m=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={isLoading:!1,columns:[{dataField:"kode_polish",text:"Kode Polish"},{dataField:"nama_polish",text:"Nama Polish"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(t,e){var a={id:e._id,kode_polish:e.kode_polish,nama_polish:e.nama_polish};return r.n.createElement("div",{className:"row text-center"},r.n.createElement("div",{className:"col-12"},r.n.createElement("button",{onClick:function(){return i.editData(a)},className:"btn btn-primary mr-3"},r.n.createElement("i",{className:"fa fa-edit"})),r.n.createElement("button",{onClick:function(){return i.hapusData(e)},className:"btn btn-danger"},r.n.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(i.a)(a,[{key:"handleSubmit",value:function(t){var e=this;this.setState({isLoading:!0}),this.state.isEdit?Object(r.P)("batu-polish/"+t.id,t).then(function(t){e.setState({isLoading:!1}),Object(r.t)("success","Data Berhasil Disimpan"),e.props.dispatch(Object(c.Ub)()),e.props.dispatch(Object(r.R)()),e.props.dispatch(Object(r.G)())}).catch(function(t){e.setState({isLoading:!1}),Object(r.t)("info","Data Gagal Disimpan")}):Object(r.O)("batu-polish",t).then(function(t){e.setState({isLoading:!1}),Object(r.t)("success","Data Berhasil Disimpan"),e.props.dispatch(Object(c.Ub)()),e.props.dispatch(Object(r.R)()),e.props.dispatch(Object(r.G)())}).catch(function(t){e.setState({isLoading:!1}),Object(r.t)("info","Data Gagal Disimpan")})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(c.Ub)())}},{key:"editData",value:function(t){this.props.dispatch(Object(r.T)()),this.props.dispatch(Object(c.lb)(t)),this.setState({isEdit:!0})}},{key:"showModal",value:function(){this.props.dispatch(Object(r.T)()),this.props.dispatch(Object(c.lb)(!0)),this.setState({isEdit:!1})}},{key:"hapusData",value:function(t){var e=this;r.r.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Polish "+t.kode_polish+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(a){a.isConfirmed&&Object(r.x)("batu-polish/"+t._id).then(function(t){Object(r.t)("success",t.data.message||"Data Berhasil Disimpan"),e.props.dispatch(Object(c.Ub)())}).catch(function(t){var e,a;Object(r.t)("info",(null===(e=t.response)||void 0===e?void 0:null===(a=e.data)||void 0===a?void 0:a.message)||"Data Gagal Disimpan")})})}},{key:"render",value:function(){var t=this;return r.n.createElement("div",null,r.n.createElement("ol",{className:"breadcrumb float-xl-right"},r.n.createElement("li",{className:"breadcrumb-item"},r.n.createElement(r.g,{to:"#"},"Data Master")),r.n.createElement("li",{className:"breadcrumb-item"},r.n.createElement(r.g,{to:"#"},"Data Berlian")),r.n.createElement("li",{className:"breadcrumb-item active"},"Batu Polish")),r.n.createElement("h1",{className:"page-header"},"Batu Polish "),r.n.createElement(r.k,null,r.n.createElement(r.m,null,"Batu Polish"),r.n.createElement(r.l,null,r.n.createElement(r.s,{keyField:"kode_polish",tambahData:!0,handleClick:function(){return t.showModal()},exportCsv:!0,data:this.props.data,columns:this.state.columns,empty:this.props.data,textEmpty:"Batu Polish Kosong"}))),r.n.createElement(r.i,{size:"P",title:this.state.isEdit?"Edit Data Polish":"Tambah Data Polish",content:r.n.createElement(h,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(e){return t.handleSubmit(e)}})}))}}]),a}(r.n.Component);m=Object(r.Q)({form:"BatuPolish",enableReinitialize:!0})(m);e.default=Object(r.u)(function(t){return{data:t.datamaster.getDataPolish}})(m)}}]);
//# sourceMappingURL=100.297156b9.chunk.js.map