const chipformationService=require("../dao/chipformationDao");
const getchipformation = async () => {
    const data = await chipformationService.getchipformation();
    return data;
}
const deletechipformation = async (moves) => {
    let data =await chipformationService.deletechipformation(moves);
    return data
}
const createhipformation = async (movies) => {
    let data =await chipformationService.createhipformation(movies);
    return data
}
const updatehipformation = async (movie1) => {
    let data =await chipformationService.updatehipformation(movie1);
    return data
}
const getOnePiece=async (dataOne)=>{
    let data=await chipformationService.getOnePiece(dataOne);
    return data
}

module.exports={getchipformation,deletechipformation,createhipformation,updatehipformation,getOnePiece}