let preveiwContainer = document.querySelector('.student-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.student-container .alumn').forEach(alumn =>{
    alumn.onclick = ()=>{
        preveiwContainer.style.display = 'flex';
        let name = alumn.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});