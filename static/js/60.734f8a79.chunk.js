(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1253:function(e,a,t){"use strict";t.r(a);var n=t(103),r=t.n(n),c=t(160),s=t(19),l=t(20),i=t(22),o=t(21),m=t(0),u=t.n(m),p=t(58),h=t(28),d=t(123),b=t(12),f=t(9),g=t(311),v=t(312),E=t(214),k=t(78),j=t(13),O=t(718),N=t(210),y=t.n(N),x=t(11),C=t(42),M=Object(E.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"kr-KO"}),K=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).getValue=function(){var e=Object(c.a)(r.a.mark(function e(a){var t,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.target.files[0],e.next=4,Object(x.o)(t);case 4:c=e.sent,n.setState({foto:c,ModalWebCam:!1}),n.props.dispatch(Object(C.t)(!0)),n.props.change("foto",c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,null,[[0,10]])}));return function(a){return e.apply(this,arguments)}}(),n.state={parametertransaksi:[],ModalWebCam:!1,foto:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(j.d)("paratransaksi/get/all").then(function(a){e.setState({parametertransaksi:a.data})}).catch(function(e){console.log(e)})}},{key:"loadcamera",value:function(){var e=this;return u.a.createElement(b.a,{onTakePhoto:function(a){e.handleTakePhoto(a)}})}},{key:"handleTakePhoto",value:function(){var e=Object(c.a)(r.a.mark(function e(a){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(x.c)(a),e.next=4,Object(x.o)(t);case 4:n=e.sent,this.setState({foto:n,ModalWebCam:!1}),this.props.change("foto",n),this.props.dispatch(Object(C.t)(!0)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,this,[[0,10]])}));return function(a){return e.apply(this,arguments)}}()},{key:"showModalWebcam",value:function(){this.props.dispatch(Object(C.t)(!1)),this.props.dispatch(Object(b.T)()),this.setState({ModalWebCam:!0})}},{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(C.t)(!1))}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},u.a.createElement(g.a,{readOnly:!0,name:"foto",type:"hidden",component:k.b}),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12 text-center"},!0===this.state.ModalWebCam&&!1===this.props.setCamera?u.a.createElement("div",{className:"container"},this.loadcamera()):u.a.createElement(u.a.Fragment,null,u.a.createElement("img",{src:!1===this.props.setCamera?b.H:this.state.foto,alt:"img",height:"245px",width:"355px"})))),u.a.createElement("br",null),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-2"}," "),u.a.createElement("div",{className:"col-5"},u.a.createElement("div",{className:"input-group"},u.a.createElement("div",{className:"custom-file"},u.a.createElement("input",{tabIndex:"1",type:"file",name:"photo",autoComplete:"off",className:"custom-file-input",id:"exampleInputFile",onChange:function(a){return e.getValue(a)}}),u.a.createElement("label",{className:"custom-file-label",htmlFor:"exampleInputFile"},"Pilih gambar")))),u.a.createElement("div",{className:"col-3"},u.a.createElement("button",{tabIndex:"2",className:"btn btn-block btn-primary",type:"button",onClick:function(){return e.showModalWebcam()}}," ","WebCam"," ")),u.a.createElement("hr",null)),u.a.createElement("hr",null),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(g.a,{name:"kategori",component:k.f,options:this.state.parametertransaksi.map(function(e){return{value:e.kode_transaksi,name:e.kode_transaksi}}),label:"Kategori",placeholder:"Masukan Kategori"})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(g.a,Object.assign({name:"jumlah",component:k.e,type:"telp",label:"Jumlah",placeholder:"Masukan Jumlah"},M))),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(g.a,{name:"keterangan",component:k.e,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan"})),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):u.a.createElement(u.a.Fragment,null,"Simpan ",u.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))),this.props.isLoading?u.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(m.Component);K=Object(v.a)({form:"HeadAmbilUangKas",enableReinitialize:!0,validate:O.a})(K);var S=Object(p.b)(function(e){return{setCamera:e.databarang.setCamera}})(K),w=Object(E.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"kr-KO"}),T=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).getValue=function(){var e=Object(c.a)(r.a.mark(function e(a){var t,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.target.files[0],e.next=4,Object(x.o)(t);case 4:c=e.sent,n.setState({foto:c,ModalWebCam:!1}),n.props.dispatch(Object(C.t)(!0)),n.props.change("foto",c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,null,[[0,10]])}));return function(a){return e.apply(this,arguments)}}(),n.state={parametertransaksi:[],ModalWebCam:!1,foto:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(j.d)("paratransaksi/get/all").then(function(a){e.setState({parametertransaksi:a.data})}).catch(function(e){console.log(e)})}},{key:"loadcamera",value:function(){var e=this;return u.a.createElement(b.a,{onTakePhoto:function(a){e.handleTakePhoto(a)}})}},{key:"handleTakePhoto",value:function(){var e=Object(c.a)(r.a.mark(function e(a){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(x.c)(a),e.next=4,Object(x.o)(t);case 4:n=e.sent,this.setState({foto:n,ModalWebCam:!1}),this.props.change("foto",n),this.props.dispatch(Object(C.t)(!0)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}},e,this,[[0,10]])}));return function(a){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(C.t)(!1))}},{key:"showModalWebcam",value:function(){this.props.dispatch(Object(C.t)(!1)),this.props.dispatch(Object(b.T)()),this.setState({ModalWebCam:!0})}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},u.a.createElement(g.a,{readOnly:!0,name:"foto",type:"hidden",component:k.b}),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12 text-center"},!0===this.state.ModalWebCam&&!1===this.props.setCamera?u.a.createElement("div",{className:"container"},this.loadcamera()):u.a.createElement(u.a.Fragment,null,u.a.createElement("img",{src:!1===this.props.setCamera?b.H:this.state.foto,alt:"img",height:"245px",width:"355px"})))),u.a.createElement("br",null),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-2"}," "),u.a.createElement("div",{className:"col-5"},u.a.createElement("div",{className:"input-group"},u.a.createElement("div",{className:"custom-file"},u.a.createElement("input",{tabIndex:"1",type:"file",name:"photo",autoComplete:"off",className:"custom-file-input",id:"exampleInputFile",onChange:function(a){return e.getValue(a)}}),u.a.createElement("label",{className:"custom-file-label",htmlFor:"exampleInputFile"},"Pilih gambar")))),u.a.createElement("div",{className:"col-3"},u.a.createElement("button",{tabIndex:"2",className:"btn btn-block btn-primary",type:"button",onClick:function(){return e.showModalWebcam()}}," ","WebCam"," ")),u.a.createElement("hr",null)),u.a.createElement("hr",null),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(g.a,{name:"kategori",component:k.f,options:this.state.parametertransaksi.map(function(e){return{value:e.kode_transaksi,name:e.kode_transaksi}}),label:"Kategori",placeholder:"Masukan Kategori"})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(g.a,Object.assign({name:"jumlah",component:k.e,type:"telp",label:"Jumlah",placeholder:"Masukan Jumlah"},w))),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(g.a,{name:"keterangan",component:k.e,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan"})),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):u.a.createElement(u.a.Fragment,null,"Simpan ",u.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))),this.props.isLoading?u.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(m.Component);T=Object(v.a)({form:"HeadTambahKas",enableReinitialize:!0,validate:O.a})(T);var P=Object(p.b)(function(e){return{setCamera:e.databarang.setCamera}})(T),L=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isLoading:!1},n}return Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(C.t)(!1))}},{key:"render",value:function(){return b.n.createElement("div",null,b.n.createElement("img",{src:!1===this.props.setCamera?b.H:this.props.setCamera,alt:"img",height:"245px",width:"468px"}))}}]),t}(b.n.Component);L=Object(b.Q)({form:"ModalGambar",enableReinitialize:!0})(L);var A=Object(b.u)(function(e){return{setCamera:e.databarang.setCamera}})(L),W=t(163),B=t.n(W),F=t(104),I=t.n(F),U=function(e){var a=e.data,t=e.page,n=e.sizePerPage,r=e.onTableChange,c=e.totalSize,s=e.columns;return u.a.createElement("div",null,u.a.createElement(I.a,{remote:!0,keyField:"_id",data:a,columns:s,pagination:B()({page:t,sizePerPage:n,totalSize:c}),onTableChange:r}))},z=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleTableChange=function(e,a){var t=a.page,r=a.sizePerPage,c=(t-1)*r;n.setState({isLoading:!0}),n.props.dispatch(Object(f.Pb)(c,r)),n.setState(function(){return{page:t,sizePerPage:r,isLoading:!1}})},n.state={isLoading:!1,page:1,data:[],sizePerPage:10,count:0,columns:[{dataField:"kategori",text:"kategori",footer:"",footerAttrs:{colSpan:"2"}},{dataField:"keterangan",text:"Keterangan"},{dataField:"jumlah_in",text:"Jumlah",headerClasses:"text-right",formatter:function(e){return u.a.createElement("div",{className:"text-right"}," ",e.toLocaleString("kr-KO")," ")},footer:function(e){return u.a.createElement("div",{className:"text-right"}," ",e.reduce(function(e,a){return e+parseInt(a)},0).toLocaleString("kr-KO")," ")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){return u.a.createElement("div",{className:"row text-center"},u.a.createElement("div",{className:"col-12"},u.a.createElement("button",{onClick:function(){return n.lihatgambar(a)},className:"btn btn-primary"},u.a.createElement("i",{className:"fa fa-eye"}))))}}]},n}return Object(l.a)(t,[{key:"lihatgambar",value:function(){var e=Object(c.a)(r.a.mark(function e(a){var t=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,Object(j.i)("BUKTI_UANG_KAS/"+a.no_reff).then(function(e){t.setState({isLoading:!1}),t.props.dispatch(Object(C.t)(e)),t.showModal("GAMBAR")}).catch(function(e){t.setState({isLoading:!1}),Object(b.t)("info",404===e.code?"Gambar Tidak Ada":"Gagal Mengambil Gambar SIlahkan Ulangi Kembali")});case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.Pb)(1,10))}},{key:"showModal",value:function(e){this.setState({form:e}),this.props.dispatch(Object(f.nc)())}},{key:"simpanTambahBarang",value:function(e,a){var t=this;this.setState({isLoading:!0});var n={kategori:e.kategori,jumlah_rp:e.jumlah,deskripsi:e.keterangan},r=void 0!==e.foto?Object(x.c)(e.foto):void 0,c=a?"cash/in":"cash/out";Object(b.M)(c,n).then(function(e){t.props.dispatch(Object(C.t)(!1)),t.setState({isLoading:!1}),t.props.dispatch(Object(f.lc)()),void 0!==r&&Object(j.o)(r,"BUKTI_UANG_KAS/".concat(e.data.no_reff)).then(function(e){}).catch(function(e){Object(b.t)("info","upload Foto Gagal, Silahkan Edit Didata Barang")})}).then(function(){Object(b.t)("success","Data Berhasil Disimpan"),t.props.dispatch(Object(f.Pb)(1,10))}).then(function(){t.props.dispatch(Object(b.R)("HeadTambahKas"))}).catch(function(e){return t.ErrorHandling(e)})}},{key:"ErrorHandling",value:function(e){var a,t;Object(b.t)("info",(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message)||"Gagal Menyimpan Data"),this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.sizePerPage,n=a.page;return u.a.createElement("div",null,u.a.createElement("ol",{className:"breadcrumb float-xl-right"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(h.b,{to:"#"},"Transaksi Kas")),u.a.createElement("li",{className:"breadcrumb-item active"},"Lihat Uang Kas")),u.a.createElement("h1",{className:"page-header"},"Lihat Uang Kas "),u.a.createElement(d.a,null,u.a.createElement(d.c,null,"Lihat Uang Kas"),u.a.createElement(d.b,null,u.a.createElement("div",{className:"col-lg-12 mb-2"},u.a.createElement("div",{className:"row justify-content-end"},u.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.showModal("AMBIL")}},"Ambil Uang Kas",u.a.createElement("i",{className:"fa fa-minus ml-3"})),u.a.createElement("button",{className:"btn btn-primary ml-2",onClick:function(){return e.showModal("TAMBAH")}},"Tambah Uang Kas",u.a.createElement("i",{className:"fa fa-plus ml-3"})))),u.a.createElement(U,{data:this.props.datakas||[],columns:this.state.columns,page:n,sizePerPage:t,totalSize:this.props.count,onTableChange:this.handleTableChange}))),u.a.createElement(b.i,{size:"P",title:"TAMBAH"===this.state.form?"Tambah Uang Kas":"AMBIL"===this.state.form?"Ambil Uang Kas":"BUKTI TRANSAKSI",content:"TAMBAH"===this.state.form?u.a.createElement(P,{isLoading:this.state.isLoading,onSubmit:function(a){return e.simpanTambahBarang(a,!0)}}):"AMBIL"===this.state.form?u.a.createElement(S,{isLoading:this.state.isLoading,onSubmit:function(a){return e.simpanTambahBarang(a,!1)}}):u.a.createElement(A,null)}),this.state.isLoading?u.a.createElement(b.h,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(m.Component);a.default=Object(p.b)(function(e){return{datakas:e.datamaster.getDataKas.datauang,count:e.datamaster.getDataKas.count||0}})(z)},718:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kategori||(a.kategori="Kategori Tidak Boleh Kosong"),e.jumlah||(a.jumlah="Jumlah Tidak Boleh Kosong"),e.keterangan||(a.keterangan="Keterangan Tidak Boleh Kosong"),a}}}]);
//# sourceMappingURL=60.734f8a79.chunk.js.map