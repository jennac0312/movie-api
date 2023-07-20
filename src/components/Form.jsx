import React, { useState } from 'react'


const Form = ( { getMovie } ) => {

    // state to hold data from form
    const [formData, setFormData] = useState( { searchTerm: "" } ) // formData is an object with searchTerm property set to empty string

    // tracks change in input value
    const handleChange = (event) => {
            //use the event object to detect key and value to update

        // setFormData( {spreading object to not lose previous properties, [becomes property of formData]: becomes value of property} )
        setFormData( { ...formData, [event.target.name] : event.target.value } )
            // .name comes from attribute on input thats recieving text
    }

    // stores value(in input) when submit button hit
    const handleSubmit = (event) => {
        event.preventDefault() //dont automatically reload
        getMovie(formData.searchTerm) //passing form datat search key/value pair to getMovies

        // after submitting open dev tools -> network -> Fetch/XHR -> name tab and payload tab
    }

  return (
    // form handles the submit it can group the inputs together... i think
    <form onSubmit={(event) => handleSubmit(event)}>

        {/* event.target.name comes form this name attribute  
            formData is holding searchTerm property with the "string" holding the actual input thanks to handleChange's setFormData()*/}
        <input type="text" name='searchTerm' onChange={(event) => handleChange(event)} value={formData.searchTerm}/>
        <input type="submit" value="submit" />

    </form>
  )
}

export default Form
