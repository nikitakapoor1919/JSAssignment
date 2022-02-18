const state = {}

function handlefirstNameChange(e){
    state.firstName=e.target.value
}

function handlelastNameChange(e){
    state.lastName=e.target.value
}

function handleUndoClick(){
    document.getElementById('error').innerHTML=' '
    document.getElementById('show').innerHTML=' '
    state.firstName=''
    state.lastName=''
    document.getElementById('first').value=''
    document.getElementById('last').value=''
}

function handleSaveClick(){
    document.getElementById('error').innerHTML=' '
    document.getElementById('show').innerHTML=' '
    if(state.firstName && state.lastName){
        document.getElementById('show').innerHTML='Welcome '+state.firstName+' '+state.lastName
    }
    else if(state.firstName){
        document.getElementById('error').innerHTML='Please Fill Last Name'
    }
    else if(state.lastName){
        document.getElementById('error').innerHTML='Please Enter First Name'
    }
    else{
        document.getElementById('error').innerHTML='Please Enter Details'
    }
}

document.getElementById("first").onchange = handlefirstNameChange
document.getElementById("last").onchange = handlelastNameChange
document.getElementById("save").onclick = handleSaveClick
document.getElementById("undo").onclick = handleUndoClick