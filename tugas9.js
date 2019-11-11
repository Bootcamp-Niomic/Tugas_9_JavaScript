// ====== Tugas 9 JavaScript =====

function init(){
	var data = {
		namaPeserta: "Havid",
		nilai: {
			Bootcamp: 90,
			Deskripsi: "Sangat Memuaskan",
			Catatan: "Untuk dipertahankan"
		},
		status: "Lulus dengan hasil Memuaskan"
	}
	for(let x in data){
		console.log(data[x])
	}
	// console.log(data.lahir)
}

init()