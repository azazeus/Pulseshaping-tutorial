function calc_shg(f_real,f_imag){
	// construct the complex E field for Fourier transform
	z=(new numeric.T(f_real,f_imag)).fft()
	shz=z.mul(z);
	sh_f=shz.ifft();
	
	return sh_f.mul(sh_f.conj());
		
}