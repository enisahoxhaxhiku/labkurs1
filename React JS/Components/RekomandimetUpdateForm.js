import React, {useState} from 'react'
import Constants from '../utilities/Constants'

export default function RekomandimetUpdateForm(props) {
    const initialFormData = Object.freeze({
        RekomandimetAddress: props.rekomandimet.RekomandimetAddress,
        RestaurantetID: props.rekomandimet.RestaurantetID
    });

  const [formData, setFormData] = useState(initialFormData);

  

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    const rekomandimetToUpdate = {
        RekomandimetID: props.rekomandimet.RekomandimetID,
        RekomandimetAddress: formData.RekomandimetAddress,
        RestaurantetID: formData.RestaurantetID
    };

    const url = Constants.API_URL_UPDATE_REKOMANDIMET;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(rekomandimetToUpdate)
      })
      .then(response => response.json())
      .then(responseRekomandimetFromServer =>{
        console.log(responseRekomandimetFromServer);
      })
      .catch((error) => {
          console.log(error);
        alert(error);
      });
      props.onRekomandimetUpdated(rekomandimetToUpdate);
};

  return (
    <div>
        <form className='w-50 mx-auto'>
            <h2 className='mt-2'>Updating Rekomandimet</h2>
            <div className='mt-2'>
                <label className='h5 form-label'>Adresa e Rekomandimit</label>
                <input value={formData.RekomandimetAddress} name='RekomandimetAddress' type="String" className="form-control" placeholder='Adresa e Rekomandimit...' onChange={handleChange} />
            </div>

            <div className='mt-2'>
                <label className='h5 form-label'>Restaurantet ID</label>
                <input value={formData.RestaurantetID} name='RestaurantetID' type="number" className="form-control" placeholder='Restaurantet ID...' onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-2">Submit</button>
            <button onClick={() => props.onRekomandimetUpdated(null)} className="btn btn-secondary btn-lf 2-100 mt-3">Cancel</button>
        </form>
    </div>
  )
}