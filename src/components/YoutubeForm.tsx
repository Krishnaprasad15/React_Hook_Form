import { useForm } from "react-hook-form"
import {DevTool} from "@hookform/devtools"

const YoutubeForm = () => {
  const form= useForm()
  const {register,control} = form
  return (
    <div>
        <form>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" {...register("username")}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")}/>

          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")}/>

          <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default YoutubeForm
