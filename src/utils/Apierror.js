class ApiError extends Error{
    constructor(statusCode,
    message = "Somethong went wrong",
    errors=[],
    statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.succes =false;
        this.errors = this.errors
        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.
            constructor)
        }

    }
}

export {ApiError}