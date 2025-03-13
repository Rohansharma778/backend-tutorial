const asyncHandler =(requestedHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestedHandler(req,res,next)).
        catch((err)=>next(err))
    }
}


export {asyncHandler}


// const asyncHandler=()=>{}
// const asyncHandler=(func)=>(()=>{})
// const asyncHandler=(fn)=>async(req,res,next)

// const asyncHandler=(fn)=>async(req,res,next)=>{

// try {
//     await fn(req,res,next)
// } catch (error) {
//     resizeBy.status(error.code || 500).json({
//         succes:false,
//         message:error.message
//     })
// }
// }