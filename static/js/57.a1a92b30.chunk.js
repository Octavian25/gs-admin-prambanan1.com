(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1281:function(a,e,t){"use strict";t.r(e);var n=t(19),r=t(20),i=t(33),o=t(22),s=t(21),l=t(0),c=t.n(l),u=t(58),d=t(28),b=t(64),m=t(27),p=t.n(m),g=t(9),f=t(55),h=t(11),k=t(213),_=t(36),j=t(123),O=t(13),E=t(311),v=t(312),S=t(78),B=t(211),y=t(765),N=t(210),L=t.n(N),P=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isloadingFaktur:!1,isLoading:!1,isLoadingBatal:!1,date:new Date},r}return Object(r.a)(t,[{key:"getBarcode",value:function(a){var e=this;clearTimeout(this.delay),this.delay=setTimeout(function(){e.setState({isloadingFaktur:!0}),Object(O.d)("batalpenjualan/get/by-kode-barcode/"+a).then(function(a){if(0===a.data.length)Object(_.e)("info","Kode Barcode Yang Anda Cari Tidak Ada"),e.setState({isloadingFaktur:!1});else{console.log(a.data);var t=[{no_faktur_group:"Silahkan Pilih",no_faktur_jual:"Silahkan Pilih"}];a.data.forEach(function(a,n){t.push({no_faktur_group:a._id.no_faktur_group,no_faktur_jual:a._id.no_faktur_jual}),e.props.change("no_faktur","Silahkan Pilih"),e.setState({isloadingFaktur:!1}),e.props.dispatch(Object(f.p)(t))})}}).catch(function(a){e.setState({isloadingFaktur:!1}),Object(_.e)("info","Kode Barcode Yang Anda Cari Tidak Ada")})},1500)}},{key:"getDetailFaktur",value:function(){var a=this;this.setState({isLoading:!0});var e={no_faktur_group:this.state.no_faktur_group_selected};Object(O.j)("batalpenjualan/get/by-faktur",e).then(function(e){0===e.data.length?(Object(_.e)("info","Data Transaksi Tersbut Tidak Ada"),a.setState({isLoading:!1})):(a.props.dispatch(Object(f.o)(e.data)),a.setState({isLoading:!1}))}).catch(function(e){Object(_.e)("info","Data Transaksi Tersbut Tidak Ada"),a.setState({isLoading:!1})})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(g.Qb)()),setTimeout(function(){document.getElementById("kode_barcode").focus()},100)}},{key:"btlPenjualan",value:function(){var a=this;this.setState({isLoadingBatal:!0}),setTimeout(function(){a.props.dispatch(Object(b.d)("HeadBatalPenjualan")),a.setState({isLoadingBatal:!1,no_faktur_group_selected:""}),Object(h.p)("data_barang_batal_jual",[]),a.props.dispatch(Object(f.p)([])),a.props.dispatch(Object(f.o)([]))},500)}},{key:"render",value:function(){var a=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(E.a,{id:"kode_barcode",name:"kode_barcode",component:S.e,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(E.a,{label:"Alasan",name:"alasan",options:this.props.datakondisi.filter(function(a){return void 0!==a.kondisi_barang}).map(function(a){return{value:a.kondisi_barang,name:a.kondisi_barang}}),placeholder:"Silahkan Pilih Alasan",component:S.f})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"text-right"},c.a.createElement("label",null,"\xa0"),c.a.createElement("button",{type:"submit",name:"type_btn",className:"btn btn-primary btn-block",disabled:this.state.isLoading},this.state.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Data"))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(B.a,{keyField:"kode_barcode",exportCsv:!1,data:0===Object(h.l)("data_barang_batal_jual").length?[]:JSON.parse(Object(h.l)("data_barang_batal_jual")),columns:this.props.columns,empty:!0,textEmpty:"Data Barang Kosong"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("label",null,"\xa0"),c.a.createElement("button",{type:"button",onClick:function(){return a.props.simpanBatal()},name:"type_btn",className:"btn btn-primary",disabled:this.props.isLoading},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0Simpan Batal Penjualan"):"Simpan Batal Penjualan"),"\xa0",c.a.createElement("button",{type:"button",name:"type_btn",onClick:function(){return a.btlPenjualan()},className:"btn btn-warning",disabled:this.state.isLoadingBatal},this.state.isLoadingBatal?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Batal"):"Batal"))),this.state.isLoading?c.a.createElement(L.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(l.Component);P=Object(v.a)({form:"HeadBatalPenjualan",enableReinitialize:!0,validate:y.a})(P);var A=Object(u.b)(function(a){return{no_faktur:a.penjualan.setNoFakturPenjualan,setBatalPenjualan:a.penjualan.setBatalPenjualan,datakondisi:a.datamaster.getDataKondisiBarang}},null)(P),F=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("username").focus()},100)}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(E.a,{name:"no_faktur_group",component:S.b,type:"hidden"}),c.a.createElement(E.a,{name:"alasan",component:S.b,type:"hidden"}),c.a.createElement(E.a,{id:"username",name:"username",component:S.e,type:"text",label:"Username",placeholder:"Masukan Username"})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(E.a,{name:"password",component:S.e,type:"password",label:"Password",placeholder:"Masukan Password"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(E.a,{name:"keterangan",component:S.e,label:"Keterangan",placeholder:"Masukan Keterangan"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("label",null," \xa0 "),c.a.createElement("button",{type:"submit",name:"type_btn",className:"btn btn-primary btn-block",disabled:this.props.isLoadingOtorisasi},this.props.isLoadingOtorisasi?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Simpan"):"Simpan"))),this.props.isLoadingOtorisasi?c.a.createElement(L.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(l.Component);F=Object(v.a)({form:"OtorisasiBatalJual",enableReinitialize:!0})(F);var T=Object(u.b)(null)(F),x=function(a){Object(o.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,databarang:[],isLoadingOtorisasi:!1,columns:[{dataField:"no_faktur_jual",text:"No Faktur",footer:"Total Barang "},{dataField:"kode_barcode",text:"Kode Barcode",footer:""},{dataField:"nama_barang",text:"Nama Barang",footer:""},{dataField:"berat",text:"Berat",formatter:function(a){return c.a.createElement("span",null,parseInt(a).toFixed(1))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toFixed(1)}},{dataField:"harga_jual",text:"Harga Jual",formatter:function(a){return c.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"harga_total",text:"Harga Total",formatter:function(a){return c.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"alasan",text:"Alasan"},{dataField:"Aksi",text:"Aksi",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){r.hapusDataBarang(t)},className:"btn btn-danger",type:"button"},c.a.createElement("i",{className:"fa fa-trash"}))))}}]},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"hapusDataBarang",value:function(a){var e=this;p.a.fire({title:"Anda yakin ingin mengapus barang ini ? ",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=Object(h.g)("data_barang_batal_jual");n.splice(a,1),Object(h.p)("data_barang_batal_jual",n),e.setState({status:"berhasil"})}})}},{key:"handleSubmit",value:function(a){var e=this;Object(O.d)("batalpenjualan/get/by-kode-barcode/"+a.kode_barcode).then(function(t){0===t.data.length?(Object(_.e)("info","Kode Barcode Yang Anda Cari Tidak Ada"),e.setState({isloadingFaktur:!1})):t.data.forEach(function(t){var n={alasan:a.alasan,kode_barcode:t.kode_barcode,no_faktur_group:t.no_faktur_group,no_faktur_jual:t.no_faktur_jual,nama_barang:t.nama_barang,berat:t.berat,harga_jual:t.harga_jual,harga_total:t.harga_total,harga_atribut:t.harga_atribut,nama_atribut:t.nama_atribut,ongkos:t.ongkos},r=0===Object(h.l)("data_barang_batal_jual").length?[]:JSON.parse(Object(h.l)("data_barang_batal_jual"));if(0===r.length)return r.push(n),Object(h.m)("data_barang_batal_jual",JSON.stringify(r)),e.setState({status:"berhasil"}),!1;-1===r.findIndex(function(a){return a.kode_barcode===t.kode_barcode})?-1===r.findIndex(function(a){return a.no_faktur_group===t.no_faktur_group})?Object(_.e)("info","No Faktur Tidak Sama"):(r.push(n),Object(h.m)("data_barang_batal_jual",JSON.stringify(r))):Object(_.e)("info","Kode Barcode Sudah Ada Di Tabel");e.setState({status:"berhasil"})})}).catch(function(a){e.setState({isloadingFaktur:!1}),Object(_.e)("info","Kode Barcode Yang Anda Cari Tidak Ada")})}},{key:"simpanTransaksiJual",value:function(a){var e=this;this.setState({isLoadingOtorisasi:!0});var t=Object(h.g)("data_barang_batal_jual"),n=[];t.forEach(function(a){var e={no_faktur_group:a.no_faktur_group,no_faktur_jual:a.no_faktur_jual,alasan:a.alasan};n.push(e)});var r={user_id:a.username,password:a.password,kategori:"BATAL PENJUALAN",description:"SIMPAN BATAL PENJUALAN",keterangan:a.keterangan.toUpperCase()||"-"};Object(O.k)("authorization",r).then(function(a){Object(_.e)("success","Otorisasi Berhasil"),e.setState({isLoadingOtorisasi:!0}),Object(O.j)("batalpenjualan/simpan",n).then(function(a){e.setState({isLoadingOtorisasi:!1}),e.props.dispatch(Object(f.o)([])),e.props.dispatch(Object(f.p)([])),Object(_.e)("success",a.data.message)}).then(function(){e.props.dispatch(Object(b.d)("HeadBatalPenjualan")),e.props.dispatch(Object(b.d)("OtorisasiBatalJual")),Object(h.p)("data_barang_batal_jual",[]),e.setState({isLoadingOtorisasi:!1}),e.props.dispatch(Object(g.lc)())}).catch(function(a){e.setState({isLoadingOtorisasi:!1}),Object(_.e)("info",void 0===a.response?"Error menyimpan data, Silahkan Cek tanggal transaksi dan koneksi anda":a.response.data)})}).catch(function(a){Object(_.e)("info","Username atau Password Salah"),e.setState({isLoadingOtorisasi:!1})})}},{key:"simpanBatal",value:function(){this.props.dispatch(Object(g.nc)())}},{key:"render",value:function(){var a=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(d.b,{to:"#"},"Penjualan")),c.a.createElement("li",{className:"breadcrumb-item active"},"Batal Penjualan")),c.a.createElement("h1",{className:"page-header"},"Batal Penjualan "),c.a.createElement(j.a,null,c.a.createElement(j.c,null,"Batal Penjualan"),c.a.createElement("br",null),c.a.createElement(j.b,null,c.a.createElement(A,{isLoading:this.state.isLoading,onSubmit:function(e){return a.handleSubmit(e)},data:this.state.databarang,columns:this.state.columns,simpanBatal:function(){return a.simpanBatal()}})),c.a.createElement("br",null),c.a.createElement(k.a,{size:"L",title:"Otorisasi Pembatalan",content:c.a.createElement(T,{isLoadingOtorisasi:this.state.isLoadingOtorisasi,onSubmit:function(e){return a.simpanTransaksiJual(e)}})})))}}]),t}(c.a.Component);e.default=Object(u.b)(function(a){return{setBatalPenjualan:a.penjualan.setBatalPenjualan}},null)(x)},765:function(a,e,t){"use strict";e.a=function(a){var e={};return a.alasan||(e.alasan="Alasan Harus Diisi"),e}}}]);
//# sourceMappingURL=57.a1a92b30.chunk.js.map