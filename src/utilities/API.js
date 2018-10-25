export const fetchData = async (url) => {
	const response = await fetch(url)
  const cleanResponse = await response.json()
  return cleanResponse
}

export const loginUser = async (user) => {
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const userData = await response.json();
  return userData.data;
}

export const createUser = async (user) => {
  try {
    return fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  }
  catch(error) {
    console.log(error.message)
  }
}

export const addFavorite = async (movie, userId) => {
  try {
    return fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie, userId),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  catch(error) {
    console.log(error.message)
  }
}

export const removeFavorite = async (movieId, userId) => {
  try {
    return fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movieId, userId),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  catch (error) {
    console.log(error.message)
  }
}