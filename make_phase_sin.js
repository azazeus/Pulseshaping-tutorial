function make_phase_sin(freq_o_interp,cent_loc,norm,amp){
	// define phase array
	var ph_arr_nl=[];
	var freq_nl=[];
	
	for (var i=650;i<1050;i++){
		freq_nl[i-650]=c/i;
		ph_arr_nl[i-650]=0.5*amp*Math.sin(2*Math.PI*(i-cent_loc)/norm)
	}
	return numeric.spline(freq_nl.reverse(),ph_arr_nl.reverse(),0,0).at(freq_to_interp);
}