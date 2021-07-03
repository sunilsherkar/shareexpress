ffmpeg -i music.mp4 -b:a 192K -vn music1.mp3	 mp4 to mp3 conversion
	
	
ffmpeg -i movie.mp4 -ss 00:00:03 -t 00:00:08 -async 1 -strict -2 cut.mp4	cut video
	
	
	
	
ffmpeg -loop 1 -i 4.jpg -i music1.mp3 -shortest -c:a copy output.mp4	add image with mp3
	
	
	
ffmpeg -i output1.mp4 -ignore_loop 0 -i p1.gif -filter_complex "[1]scale=700x700[scaled_gif];[0][scaled_gif]overlay=50:30:shortest=1" -codec:a copy outputk.mp4	
