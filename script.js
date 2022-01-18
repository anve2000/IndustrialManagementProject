let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnSort = $('#btnSort')
let inpNewTask = $('#inpNewTask')
let btnCleanUp = $('#btnCleanUp')
let btnReset = $('#btnReset')
let btnClear=$('#btnClear')

function addItem()
{
    let listItem= $('<li>',{'class': 'list-group-item',text: inpNewTask.val()})
    listItem.click(()=> { 
        listItem.toggleClass('done')})
    ulTasks.append(listItem)
    inpNewTask.val('');
    toggleInputBtn()
}

inpNewTask.keypress((e)=>{
    if(e.which==13) addItem()
})

function clearDone()
{
    $('#ulTasks .done').remove()
    toggleInputBtn()
}

function sortTasks()
{
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleResetBtn(enabled){
    if(enabled) btnReset.prop('disabled',false)
    else btnReset.prop('disabled',true)
}

function toggleInputBtn(valIsEmpty)
{
    // if(!valIsEmpty)
    // {
    //     btnReset.prop('disabled',false)
    //     btnAdd.prop('disabled',false)
    // }
    // else{
        btnReset.prop('disabled',inpNewTask.val()=='')
        btnAdd.prop('disabled',inpNewTask.val()=='')
        btnSort.prop('disabled', ulTasks.children().length<1)
        btnCleanUp.prop('disabled', ulTasks.children().length<1)
    // }
}

inpNewTask.on('input', toggleInputBtn)


function showTime(){
    var date = new Date();
    // console.log("hey",date);
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = `${h}:${m}:${s} ${session}`;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


btnAdd.click(addItem)

btnCleanUp.click(clearDone)

btnSort.click(sortTasks)

btnReset.click(()=> {
    inpNewTask.val('')
    toggleInputBtn(false)
})


