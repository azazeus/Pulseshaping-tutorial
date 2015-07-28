function f_to_wl(freq, spec){
	var c=3e6;
	var spec_int_wl=[];
	var wav_new=[];
	for (var i=0;i<spec.length;i++){
		spec_int_wl[i]=spec[i]*Math.sqrt(c/(freq[i]*freq[i]));
	}
	return spec_int_wl;
}