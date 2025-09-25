import toast from "react-hot-toast"

const toastMap={
    success:(msg:string)=>toast.success(msg),
    error:(msg:string)=>toast.error(msg),
    loading:(msg:string)=>toast.loading(msg)
}
export {toastMap} 