!function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}({10:function(t,e,r){t.exports=r(11)},11:function(t,e){$(document).ready(function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$("#tableKriteria").DataTable({processing:!0,serverSide:!0,destroy:!0,autoWidth:!1,ordering:!1,ajax:"kriteria/data",language:{emptyTable:"Tidak Ada Data Kriteria"},columns:[{data:"id_kriteria",render:function(t,e,r){return"<center>"+t+"</center>"},width:"7%"},{data:"nama_kriteria",render:function(t,e,r){return t},width:"10%"},{data:"type_kriteria",render:function(t,e,r){return"<center>"+t+"</center>"},width:"10%"},{data:"nilai_kriteria",render:function(t,e,r){return"<center>"+t+"</center>"}},{data:"nilai_bobot",render:function(t,e,r){return"<center>"+t+"</center>"}},{data:"id_kriteria",render:function(t,e,r){return'<button class="editKriteria btn btn-primary" data-id='+t+'><i class="fa fa-cogs"></i>&nbsp;&nbsp;Edit</button>'},width:"7%"}]})}),$(document).on("click",".editKriteria",function(){var t=$(this).attr("data-id");$.post("kriteria/getKriteria",{id_kriteria:t},function(t){$("#editIdKriteria").val(t.id_kriteria),$("#editNamaKriteria").val(t.nama_kriteria),$("#editTypeKriteria").val(t.type_kriteria),$("#editNilaiKriteria").val(t.nilai_kriteria)},"json").done(function(){$("#editKriteria").fadeIn()})}),$(document).on("click","#updateKriteria",function(){var t=$("#formEditKriteria").serialize();$.ajax({url:"kriteria/update",data:t,type:"post",dataType:"json",cache:!1,success:function(t){$.toast({heading:"Information",text:t.message,position:"bottom-right",stack:!1,showHideTransition:"slide",icon:t.status}),$("#formEditKriteria").trigger("reset"),$("#editKriteria").fadeOut(),$("#tableKriteria").DataTable().ajax.reload()},error:function(t,e,r){var i=t.responseJSON,a=0,n=[];$.each(i,function(t,e){n[a]=e[0],a++}),$.toast({heading:"Kesalahan!",text:n,icon:"error",position:"bottom-right"})}})}),$(document).on("click","#cancelKriteria",function(){$("#editKriteria").fadeOut()})}});