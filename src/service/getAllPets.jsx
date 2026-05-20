export const getAllPets=async(searchVal,species,fee)=>{
    let url=""
    if(searchVal){
        url=`all-pets?search=${searchVal}`
    }
    else if(species){
        url=`all-pets?species=${species}`
    }
    else if(fee){
        url=`all-pets?fee=${fee}`
    }
    else{
        url='all-pets'
    }
    const res=await fetch(`http://localhost:8000/${url}`);
    const pets=await res.json()
    return pets;
}