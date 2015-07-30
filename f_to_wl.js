// function inv_jacobian converts intensity information 
// from frequency space into wavelength space 
// this is necessary to obey energy conservation
function inv_jacobian(freq, spec_in){
	var c=3e6;
	var spec_int_wl=[];
	var wav_new=[];
	for (var i=0;i<spec_in.length;i++){
		spec_int_wl[i]=spec_in[i]*c/(freq[i]*freq[i]);
	}
	return spec_int_wl;
}