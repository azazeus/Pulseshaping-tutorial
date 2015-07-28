function f_interp(wavel){
	var freq_clip=[];
	for (var i=0;i<wavel.length;i++){
		freq_clip[i]=3e6/wavel[i];
	}
	freq_low=Math.ceil(Math.min.apply(null, freq_clip));
	console.log(freq_low);
	freq_high=Math.floor(Math.max.apply(null, freq_clip));
	var freq_to_interp=[];
	for (var i=0;i<(freq_high-freq_low);i++){
		freq_to_interp[i]=freq_low+i;
	}
	
	return [freq_to_interp,freq_clip];
}