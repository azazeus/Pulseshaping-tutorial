function wl_to_f(wave_l, int_wavl){
	var c=3e6;
	var spec_int_f=[];
	for (var i=0;i<int_wavel.length;i++){
		spec_int_f[i]=int_wavel[i]*Math.sqrt((wavel[i]*wavel[i])/c);
	}
	return spec_int_f;
}