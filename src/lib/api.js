const SERVER_DOMAIN = "https://react-atm-cbc4e-default-rtdb.firebaseio.com/";

export async function connectToAtm(){
    const response = await fetch(`${SERVER_DOMAIN}/connect.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not connect with switch');
    }

    const responseData = {
        ...data
    }

    return responseData;
}
