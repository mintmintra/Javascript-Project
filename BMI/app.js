const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    
    if(weight === "" || isNaN(weight)){
        return result.innerHTML = "กรุณาป้อนน้ำหนักของคุณ"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "กรุณาป้อนส่วนสูง"
    }else{
        
    }
})