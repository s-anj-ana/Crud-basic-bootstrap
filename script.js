let btn = document.getElementById("add_btn");
        btn.addEventListener('click',addChapter);
        let parentlist = document.getElementById("ul_id");
        let previousValue = "";
        function addChapter(e)
        {
            
            let currentbtn = e.currentTarget;
            let currentInput = currentbtn.previousElementSibling;
            let currentChapterName = currentInput.value;
            if(currentChapterName == "")
            {
              alert("add text");
            }
            else{
            let newLi = document.createElement('li');
            //newLi.classList.add('list-group-item');
            newLi.className = "list-group-item d-flex center justify-content-between "
            newLi.innerHTML = `<h3 class="flex-grow-1 ">${currentChapterName}</h3> <button id="ed" class="btn btn-danger mx-3" onclick="editChapter(this)">Edit</button> <button id="rem" class="btn btn-secondary" onclick="removeChapter(this)">Remove</button>`
            
           
            parentlist.appendChild(newLi);
            
            currentInput.value = "";
            }
            


        }
        function removeChapter(currElement)
        {
            
           currElement.parentElement.remove();
           let parentlist = document.getElementById("ul_id");
           if(parentlist.children.length <=0){
            let EmptyMsg = document.createElement('h3');
            EmptyMsg.textContent = "PLEASE ADD A CHAPTER";
            parentlist.append(EmptyMsg);
            EmptyMsg.className = "d-flex justify-content-center";
           }

        }
        function editChapter(currElement)
        {
          
          
          if(currElement.textContent == "Done")
          {
            if(currElement.previousElementSibling.value == "")
            {
              alert("add text");
              currElement.textContent = "Edit";
              currElement.previousElementSibling.type = "text";


              currElement.previousElementSibling.value = previousValue;

            }
            else{
           
            currElement.textContent = "Edit";
            let currHeading = document.createElement('h3');
            currHeading.className = "flex-grow-1";
            currHeading.textContent = currElement.previousElementSibling.value;
            currElement.previousElementSibling.parentElement.replaceChild(currHeading,currElement.previousElementSibling)
            
          }
        }
          else{
           
            previousValue = currElement.previousElementSibling.textContent;
            currElement.textContent = "Done";
            let newInput = document.createElement('input')
            newInput.type = "text";
            newInput.className = "form-control";
            newInput.value = currElement.previousElementSibling.textContent;
            currElement.previousElementSibling.parentElement.replaceChild(newInput,currElement.previousElementSibling);
          
        }
          
          
        }
