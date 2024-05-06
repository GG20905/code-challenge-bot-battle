 export function Deletebot(id){
    fetch(`https://phase-2-code-challenge-2.onrender.com/bots/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=> response.json())
    .then(data => {
        alert(`Bot ${data.id} scrapped!`)
      }) 
}

export function getbot(id){
     fetch(`https://phase-2-code-challenge-2.onrender.com/bots/`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

export function getBotById(id) {
  return fetch(`https://phase-2-code-challenge-2.onrender.com/bots/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to fetch bot');
      }
      return response.json();
  })
  .catch(err => {
      console.log(err);
      throw err; 
  });
}
