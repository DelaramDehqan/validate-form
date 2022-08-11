import { useForm } from "react-hook-form";
import "./App.css";
import React, {useState} from "react";



function App() {
  const [firstData, setFirstData] = useState(null)
  const [secondData, setSecondData] = useState(null)

  const [print, setPrint] = useState(false)

  function getFirstData(event)
  {
    setFirstData(event.target.value)
    console.warn(event.target.value)
  }
  function getSecondData(event)
  {
    setFirstData(event.target.value)
    console.warn(event.target.value)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
    
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <>
    <div className="App">
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h3 className="font-face-gm">وب اپلیکیشن مدیریت مخاطبین</h3>
      <input
        {...register("firstName", {
          required: "وارد کردن نام الزامیست",
          minLength: {
            value: 3,
            message: "نام حداقل سه حرفی باشد",
          },
          maxLength: {
            value: 20,
            message: "نام حداکثر بیست حرفی باشد",
          },
        })}
        placeholder="...نام "
        className="font-face-gm"
        onChange={getFirstData}
      />
      <p>{errors.firstName?.message}</p>
      <input
        {...register("lastName", {
          required: "وارد کردن نام خانوادگی الزامیست",
          minLength: {
            value: 3,
            message: "نام خانوادگی حداقل باید سه حرفی باشد",
          },
          maxLength: {
            value: 20,
            message: "نام خانواگی حداکثر بیست حرفی باید باشد",
          },
        })}
        placeholder="...نام خانوادگی "
        className="font-face-gm"
        onChange={getSecondData}
      />
      <p>{errors.lastName?.message}</p>
      <input
        {...register("mobile", {
          required: "وارد کردن شماره الزامیست",
          maxLength: {
            value: 11,
            message: "شماره حداکثر یازده عدد باید باشد",
          },
        })}
        placeholder="...شماره تماس"
        className="font-face-gm"
        
      />
      <p>{errors.mobile?.message}</p>
      
      <select
      className="font-face-gm"
        {...register("relation", {
          required: "مشخص کردن نسبت الزامیست...",
        })}
      >
        
        <option value="rel">نسبت</option>
        <option value="nearFamily">اعضای خانواده</option>
        <option value="friend">دوست</option>
        <option value="cowork">همکار</option>
        <option value="family">فامیل</option>
      </select>
      <p>{errors.relation?.message}</p>
      <input
        {...register("email", {
          required: "ایمیل الزامیست",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "ایمیل درست وارد کنید",
          },
        })}
        placeholder="...ایمیل"
        className="font-face-gm"
      />
      <p>{errors.email?.message}</p>
      <button className="font-face-gm" onClick={()=>setPrint(true)}>اضافه کردن</button>
    </form>
  </div>
  <div className="card">
        {
          print?
          <>
            <h6>{firstData}</h6>
            <h6>{secondData}</h6>
          </>
          :null
        }
  </div>
  </>
  );
    
}

export default App;


