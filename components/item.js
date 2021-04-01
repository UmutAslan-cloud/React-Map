import persons from "./data"


export default function render(){
    let result=persons.map(list=>{
        `<ul>
        <li>${list.first_name}${list.last_name}</li>
        <li>${list.email}</li>
        <li>${list.gender}</li>
        <li>${list.address}</li>
        <li>${list.salary}</li>
      <ul>
      <li>${list.friends.gender}</li>
      <li>${list.friends.lastName}</li>
      <li>${list.friends.first_name}</li>
      <li>${list.friends.phone}</li>
      <li>${list.friends.address}</li>
      <li>${list.friends.city}</li>
      <li>${list.friends.birthday}</li>
      <li>${list.friends.language}</li>
      <li>${list.friends.profession}</li>
      </ul>
        </ul>`.join(",")
    })
    return result
}