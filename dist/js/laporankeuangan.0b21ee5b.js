(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["laporankeuangan"],{"827d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.pertokoan},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{on:{click:function(a){return t.goto_detail(e.item.id)}}},[t._v(t._s(e.item.nama))]),a("td",[t._v(t._s(e.item.tanggal))]),a("td",[t._v(t._s(e.item.bruto))]),a("td",[t._v(t._s(e.item.nett))])]}}])})],1)},o=[],r=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"laporankeuangan",data:function(){return{headers:[{text:"Nama Toko",value:"nama"},{text:"Tanggal",value:"tanggal"},{text:"Bruto",value:"bruto"},{text:"Netto",value:"nett"}],pertokoan:[{id:1,nama:"TOKO A",tanggal:"29 September 2019",bruto:2e4,nett:18e3},{id:2,nama:"TOKO B",tanggal:"29 September 2019",bruto:2e4,nett:18e3},{id:3,nama:"TOKO C",tanggal:"29 September 2019",bruto:2e4,nett:18e3},{id:4,nama:"TOKO D",tanggal:"29 September 2019",bruto:2e4,nett:18e3},{id:5,nama:"TOKO E",tanggal:"29 September 2019",bruto:2e4,nett:18e3}]}},methods:{goto_detail:function(t){this.$router.push({name:"detaillaporan",params:{id:t}})}}}),i=r,l=a("2877"),u=a("6544"),d=a.n(u),s=a("a523"),m=a("8fea"),g=Object(l["a"])(i,n,o,!1,null,null,null);e["default"]=g.exports;d()(g,{VContainer:s["a"],VDataTable:m["a"]})}}]);
//# sourceMappingURL=laporankeuangan.0b21ee5b.js.map