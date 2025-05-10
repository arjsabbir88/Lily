import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const EditProfile = () => {
    const {user,setUser,setError,updateUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleProfileInfo=(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        console.log(name,photoURL);

        updateUser({displayName: name, photoURL: photoURL}).then(()=>{

        setUser({...user, displayName: name, photoURL: photoURL});

        toast.success("Profile Updated Successfully");
        navigate("/profile")
      }).catch((error) => {

      const errorMessage = error.message;
      setError(errorMessage);
      toast.error("Some thing was wrong!!! Try again");
      return
      })
}
  return (
    <form onSubmit={handleProfileInfo} className='flex justify-center item-center p-5'>
        <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-sm border p-8 '>
            <label className='label'>Name</label><br/>
            <input type="text" name='name' placeholder="Name" className="input input-success" required/>
            <label className="label">photoURL</label>
            <input type="text" name="photoURL" placeholder="photoURL" className="input input-success" required/>
            <button type="submit" className="btn btn-soft btn-hover bg-green-600 mt-4">Submit</button>
        </fieldset>
    </form>
  )
}
