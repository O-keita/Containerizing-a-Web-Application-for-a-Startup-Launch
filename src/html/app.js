document.addEventListener("DOMContentLoaded", function(){

    function addTask(){

        let inputValue = document.querySelector('input[name="task"]');

        let tasktext = inputValue.value.trim()

        console.log(tasktext)

        if (tasktext != ""){

            let newTask = document.createElement('li')

            newTask.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i> <a href="#">' + tasktext + '</a><i class="fa fa-times-circle" aria-hidden="true" class="remove"></i>';
            
            document.querySelector('.tasks ul').appendChild(newTask)

            inputValue.value=""


            newTask.querySelector('.fa-times-circle').addEventListener("click", function(){
                newTask.remove();
            })

            newTask.querySelector('.fa-check-square').addEventListener('click', function(){
                if (newTask.style.textDecoration === 'line-through'){
                    newTask.style.textDecoration ='none'
                }
                else {
                    newTask.style.textDecoration ='line-through'
                    
                }
            })
    


        }

 
        
    }

    document.addEventListener("keypress", function(e){
        if (e.key === 'Enter'){
            addTask()
        }
    })

    document.querySelector('.add-task').addEventListener('click', addTask);

    
   
})