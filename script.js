//Inisiasi vue js
const {createApp} = Vue 

createApp({
    data() {
        return {
            judul: 'Text Color Changer',
            isiPesan: 'Selamat pagi tutor! Ini adalah tugas 2 saya',
            warna:''
        }
    },
    methods: {
        resetBttn(){
            const konten = document.getElementById('konten');
            const hilang = document.getElementsByTagName('input');

            alert('Warna telah dikembalikan ke semula');
            for(let i = 0; i < hilang.length; i++){
                hilang[i].checked = false;
            }
            konten.classList.add('reset');
        }
    },
}).mount('#container')
