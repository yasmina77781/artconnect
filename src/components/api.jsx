async function fetchData(endpoint) {
  const res = await fetch(`http://localhost:3001/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Erreur lors du fetch de ${endpoint}`);
  }
  return res.json();
}

export default fetchData;