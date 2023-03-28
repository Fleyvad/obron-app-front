export const getAllProjects = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/projects`,
    // `http://localhost:4000/api/v1/projects`,

    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};
